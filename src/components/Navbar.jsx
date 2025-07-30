'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaAngleDoubleDown } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleTabClick = (tab) => setActiveTab(tab);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const servicePages = [
        { label: 'Web Development', path: '/services/web-development' },
        { label: 'Mobile Apps', path: '/services/app-development' },
        { label: 'UI/UX Design', path: '/services/ui-ux-design' },
        { label: 'Search Engine Optimisation (SEO)', path: '/services/seo' },
        { label: 'Video Editing', path: '/services/video-editing' },
        { label: 'Digital Marketing', path: '/services/digital-marketing' },
    ];

    useEffect(() => {
        setActiveTab(pathname);

        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const activeTabStyle =
        'bg-gradient-to-r from-[#FFF4E8] from-51% to-[#FFE4FF] to-100%';

    return (
        <div className="mb-40">
            <header
                className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md shadow-md' : 'bg-transparent'
                    }`}
            >
                <div className="px-5 lg:px-24 2xl:px-40 py-5">
                    <div className="flex items-center">
                        <div className="py-3 px-5 border border-black-border bg-gradient-to-r from-[#FFF4E8] from-51% to-[#FFE4FF] to-100%">
                            <Link href="/">
                                <Image
                                    src="/logo/Group 1597877883.svg"
                                    className="w-auto h-10"
                                    alt="Kriyona Infotech Logo" width={200} height={100}
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:inline-flex w-full">
                            <nav className="w-full">
                                <ul className="grid grid-cols-7 w-full">
                                    <li
                                        className={`border border-black-border py-5 text-center ${pathname === '/about' ? activeTabStyle : ''}`}
                                        onClick={() => handleTabClick('/about')}
                                    >
                                        <Link href="/about">About</Link>
                                    </li>

                                    {/* Services with Dropdown */}
                                    <li
                                        className={`relative border border-black-border py-5 text-center cursor-pointer ${pathname.startsWith('/services') ? activeTabStyle : ''
                                            }`}
                                    >
                                        <div className="flex items-center justify-center">
                                            <Link href="/services">Services</Link>
                                            <FaAngleDoubleDown
                                                className="w-4 h-3 bg-gray-200 ms-1 mt-1"
                                                onClick={() => setServicesOpen(!servicesOpen)}
                                            />
                                        </div>

                                        {servicesOpen && (
                                            <ul className="absolute top-full left-0 bg-gray-50 border border-black-border w-52 shadow-md text-left z-50">
                                                {servicePages.map((service) => (
                                                    <li key={service.label} className="px-4 py-2 hover:bg-gray-100">
                                                        <Link href={service.path}>{service.label}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>

                                    {/* Other Tabs */}
                                    {[
                                        { label: 'OurProcess', path: '/ourprocess' },
                                        { label: 'Portfolio', path: '/portfolio' },
                                        { label: 'Pricing', path: '/pricing' },
                                        { label: 'Blog', path: '/blog' },
                                        { label: 'ContactUs', path: '/contactus' },
                                    ].map((tab) => (
                                        <li
                                            key={tab.label}
                                            className={`border border-black-border py-5 text-center ${pathname === tab.path ? activeTabStyle : ''
                                                }`}
                                            onClick={() => handleTabClick(tab.path)}
                                        >
                                            <Link href={tab.path}>{tab.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden ms-auto">
                            <button
                                className="border border-black-border rounded p-2 w-fit"
                                onClick={toggleMenu}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-2xl"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Dropdown */}
                    {menuOpen && (
                        <div className="md:hidden mt-5 bg-gray-50">
                            <nav>
                                <ul className="flex flex-col space-y-2 max-h-96 overflow-y-auto">
                                    {[...servicePages, ...[
                                        { label: 'About', path: '/about' },
                                        { label: 'OurProcess', path: '/ourprocess' },
                                        { label: 'Portfolio', path: '/portfolio' },
                                        { label: 'ContactUs', path: '/contactus' }
                                    ]].map((tab) => (
                                        <li
                                            key={tab.label}
                                            className={`border border-black-border py-2 px-4 text-center ${pathname === tab.path ? activeTabStyle : ''
                                                }`}
                                            onClick={() => {
                                                handleTabClick(tab.path);
                                                toggleMenu();
                                            }}
                                        >
                                            <Link href={tab.path}>{tab.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}
