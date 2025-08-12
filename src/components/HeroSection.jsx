import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ParticleMatrix = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null, radius: 100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Initialize particles
    particles.current = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      baseX: Math.random() * canvas.width,
      baseY: Math.random() * canvas.height,
      density: Math.random() * 30 + 1,
      color: `hsl(${Math.random() * 60 + 190}, 80%, 60%)` // Blue/cyan spectrum
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x;
          const dy = particles.current[i].y - particles.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(100, 200, 255, ${1 - distance/100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles.current[i].x, particles.current[i].y);
            ctx.lineTo(particles.current[j].x, particles.current[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Mouse interaction
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.current.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.current.radius - distance) / mouse.current.radius;
          const directionX = forceDirectionX * force * p.density;
          const directionY = forceDirectionY * force * p.density;
          
          p.x -= directionX;
          p.y -= directionY;
        } else {
          if (p.x !== p.baseX) {
            const dx = p.baseX - p.x;
            p.x += dx / 20;
          }
          if (p.y !== p.baseY) {
            const dy = p.baseY - p.y;
            p.y += dy / 20;
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default function FuturisticHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-950">
      {/* Particle Matrix Background */}
      <ParticleMatrix />
      
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(8,145,178,0.1))]" />
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-sm bg-white/5 p-12 rounded-2xl border border-white/10"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Digital Alchemy
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Transforming ideas into technological marvels through cutting-edge innovation
          </motion.p>
          
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              Begin Transformation
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating binary code animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -50, x: Math.random() * 100 }}
            animate={{ 
              y: `calc(100vh + 50px)`,
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }
            }}
            className="absolute text-xs text-cyan-400/30 font-mono"
            style={{ left: `${Math.random() * 100}%` }}
          >
            {Math.random().toString(2).substring(2, 15)}
          </motion.div>
        ))}
      </div>
    </div>
  );
}