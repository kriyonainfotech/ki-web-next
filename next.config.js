/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'], // 👈 allow external image host
    },
};

module.exports = nextConfig;
