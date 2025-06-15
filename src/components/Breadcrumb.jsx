'use client';
import React from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";

export default function Breadcrumb({ paths }) {
    return (
        <>
            <div className="">
                <motion.nav
                    className="text-gray-600 text-sm sm:text-base flex items-center gap-1 sm:gap-2 px-6 pt-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    aria-label="Breadcrumb"
                >
                    {paths.map((path, index) => {
                        const isLast = index === paths.length - 1;
                        return (
                            <span key={index} className="flex items-center">
                                {!isLast ? (
                                    <Link
                                        href={path.to}
                                        className="hover:text-cyan-800 font-medium transition-colors"
                                    >
                                        {path.name}
                                    </Link>
                                ) : (
                                    <span className="font-semibold text-cyan-900">
                                        {path.name}
                                    </span>
                                )}
                                {!isLast && (
                                    <HiChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                                )}
                            </span>
                        );
                    })}
                </motion.nav>
            </div>
        </>
    );
};
