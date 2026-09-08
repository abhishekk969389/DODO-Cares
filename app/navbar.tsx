"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import petDataJson from "@/data/pet.json";
import type { PetData, NavLink } from "@/types/pet";

const petData: PetData = petDataJson as PetData;

export default function Navbar() {
    const { navbar } = petData;
    const [activeTab, setActiveTab] = useState<string>(
        navbar.navLinks.find((link) => link.active)?.id || "home"
    );
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-[1320px] mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <nav className="relative bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-[24px] shadow-md border border-neutral-100/80 px-6 py-2 flex items-center justify-between transition-all duration-300">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center group shrink-0">
                    <Image
                        src={navbar.logo.src}
                        alt={navbar.logo.alt}
                        width={300}
                        height={100}
                        priority
                        className="h-18 sm:h-22 md:h-26 lg:h-30 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-8 xl:gap-12">
                    {navbar.navLinks.map((link: NavLink) => {
                        const isActive = activeTab === link.id;
                        return (
                            <Link
                                key={link.id}
                                href={link.href}
                                onClick={() => setActiveTab(link.id)}
                                className={`relative py-1.5 text-lg xl:text-xl font-semibold transition-colors duration-200 ${isActive
                                    ? "text-[#F37021]"
                                    : "text-[#2C1810] hover:text-[#F37021]"
                                    }`}
                            >
                                {link.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#F37021] rounded-full transition-all duration-300" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop Right Section (Divider + Contact Us CTA) */}
                <div className="hidden lg:flex items-center gap-7">
                    {/* Vertical Separator */}
                    <div className="h-9 w-[1.5px] bg-neutral-200" />

                    {/* CTA Button */}
                    <Link
                        href={navbar.ctaButton.href}
                        className="group inline-flex items-center justify-center bg-[#2C1810] hover:bg-[#3D2217] active:scale-[0.98] text-white px-6 py-2 sm:px-7 sm:py-2.5 rounded-full text-base xl:text-lg font-semibold transition-all duration-200 shadow-sm"
                    >
                        <span>{navbar.ctaButton.label}</span>
                        <ArrowRight className="w-4.5 h-4.5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="flex lg:hidden items-center">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-xl text-[#2C1810] hover:bg-neutral-100 transition-colors focus:outline-none"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-3 p-5 bg-white rounded-3xl shadow-xl border border-neutral-100 flex flex-col gap-4 z-50 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="flex flex-col gap-3">
                            {navbar.navLinks.map((link: NavLink) => {
                                const isActive = activeTab === link.id;
                                return (
                                    <Link
                                        key={link.id}
                                        href={link.href}
                                        onClick={() => {
                                            setActiveTab(link.id);
                                            setMobileMenuOpen(false);
                                        }}
                                        className={`px-4 py-2.5 rounded-2xl text-base font-semibold transition-colors ${isActive
                                            ? "bg-orange-50 text-[#F37021]"
                                            : "text-[#2C1810] hover:bg-neutral-50 hover:text-[#F37021]"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>

                        <hr className="border-neutral-100 my-1" />

                        <Link
                            href={navbar.ctaButton.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="group inline-flex items-center justify-center bg-[#2C1810] hover:bg-[#3D2217] text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-200 w-full"
                        >
                            <span>{navbar.ctaButton.label}</span>
                            <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
