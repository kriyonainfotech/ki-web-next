'use client';

import React from 'react'
import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-28 text-center p-6">
                <h1 className="text-6xl font-bold text-purple-800 mb-4">404</h1>
                <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
                <Link
                    href="/"
                    className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900 transition"
                >
                    Go Home
                </Link>
            </div>
        </div>
    )
}

