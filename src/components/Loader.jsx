export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex space-x-2">
        <span className="h-3 w-3 bg-indigo-600 rounded-full animate-bounce"></span>
        <span className="h-3 w-3 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.2s]"></span>
        <span className="h-3 w-3 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.4s]"></span>
      </div>
    </div>
  );
}
