// app/components/Loader.jsx
'use client';
export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-sm flex items-center justify-center">
            <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin">Loading</div>
        </div>
    );
}
