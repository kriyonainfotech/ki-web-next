// components/Loader.jsx
export default function Loader() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white/80 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500" />
    </div>
  );
}
