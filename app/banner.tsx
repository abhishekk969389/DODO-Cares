"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import petDataJson from "@/data/pet.json";
import type { BannerData, PetData } from "@/types/pet";
import {
    Heart,
    ShieldCheck,
    UserCheck,
    Home,
    ArrowRight,
    PawPrint,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

// Lucide Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
    Heart,
    ShieldCheck,
    UserCheck,
    Home,
    PawPrint,
};

const petData: PetData = petDataJson as unknown as PetData;
const bannerData: BannerData = petData.banner;

// Decorative wavy line with heart SVG (~ ♡)
const DecorativeScribbleHeart = () => (
    <svg
        width="54"
        height="16"
        viewBox="0 0 54 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block ml-2.5 text-[#F37021] shrink-0"
        aria-hidden="true"
    >
        <path
            d="M2 9C5.5 5 8.5 5 12 9C15.5 13 18.5 13 22 9C25.5 5 28.5 5 32 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M40 10.8C38.2 8.5 38.2 5.8 40.2 4.2C42.2 2.6 44.8 4.1 45.8 5.6C46.8 4.1 49.4 2.6 51.4 4.2C53.4 5.8 53.4 8.5 51.6 10.8L45.8 15L40 10.8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const TOTAL_SLIDES = 3;

export default function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    if (!bannerData) return null;

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? TOTAL_SLIDES - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === TOTAL_SLIDES - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative w-full min-h-[660px] sm:min-h-[720px] lg:min-h-[760px] pt-36 sm:pt-40 lg:pt-44 pb-36 sm:pb-44 lg:pb-56 bg-[#FDF8F3] overflow-hidden flex flex-col justify-center">

            {/* FULL BACKGROUND IMAGE (homebanner.jpg) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <Image
                    src={bannerData.bgImage || "/bg.png"}
                    alt="Pet Banner"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-right sm:object-[88%_bottom] lg:object-right-bottom"
                />


                <div className="absolute inset-0 bg-gradient-to-r from-[#FDF8F3] from-18% via-[#FDF8F3]/55 via-38% to-transparent to-56% hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F3] via-[#FDF8F3]/80 to-[#FDF8F3]/25 lg:hidden" />
            </div>

            {/* ALIGNED WRAPPER CONTAINER - Matches Header max-w-[1320px] boundary */}
            <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full">

                {/* Left Slider Arrow Button (<) - Aligned with Left Red Line (left edge of Navbar card) */}
                <button
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                    className="absolute left-4 mx-6 sm:left-6 lg:left-8 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#2C1810] hover:bg-[#3D2217] active:scale-95 text-white flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                    <ChevronLeft className="w-5.5 h-5.5 text-white" />
                </button>

                {/* Right Slider Arrow Button (>) - Aligned with Right Red Line (right edge of Navbar card) */}
                <button
                    onClick={handleNext}
                    aria-label="Next Slide"
                    className="absolute right-4 mx-6 sm:right-6 lg:right-8 translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#2C1810] hover:bg-[#3D2217] active:scale-95 text-white flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                    <ChevronRight className="w-5.5 h-5.5 text-white" />
                </button>

                {/* Inner Content Grid - Aligned with Logo inside Navbar card */}
                <div className="grid mx-12 grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 sm:px-6 lg:px-8">

                    {/* Left Text Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center">

                        {/* Top Tagline / Badge */}
                        <div className="inline-flex items-center gap-1.5 mb-3 sm:mb-4 mt-8">
                            <span className="text-[#F37021] font-semibold text-lg sm:text-xl tracking-tight">
                                {bannerData.badge}
                            </span>
                            <DecorativeScribbleHeart />
                        </div>

                        {/* Main Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2C1810] tracking-tight leading-[1.12] mb-5 sm:mb-6 max-w-2xl">
                            {bannerData.titlePrefix}{" "}
                            <span className="text-[#F37021] font-semibold">
                                {bannerData.titleHighlight}
                            </span>{" "}
                            {bannerData.titleSuffix}
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-[#615147] leading-relaxed max-w-lg mb-8 font-normal">
                            {bannerData.description}
                        </p>

                        {/* 4 Feature Badges Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-9 sm:mb-11 max-w-2xl">
                            {bannerData.features?.map((feature) => {
                                const IconComponent = iconMap[feature.icon] || PawPrint;
                                const titleParts = feature.title.split(" ");
                                const line1 = titleParts.slice(0, Math.ceil(titleParts.length / 2)).join(" ");
                                const line2 = titleParts.slice(Math.ceil(titleParts.length / 2)).join(" ");

                                return (
                                    <div
                                        key={feature.id}
                                        className="flex items-center gap-2.5 bg-white/70 backdrop-blur-xs px-3 py-2 rounded-full border border-amber-900/5 shadow-2xs"
                                    >
                                        <div className="w-10 h-10 rounded-full border-[1.5px] border-[#F37021] text-[#F37021] bg-white flex items-center justify-center shrink-0 shadow-2xs">
                                            <IconComponent className="w-4.5 h-4.5 text-[#F37021]" />
                                        </div>
                                        <div className="flex flex-col text-xs font-bold text-[#2C1810] leading-snug">
                                            <span>{line1}</span>
                                            {line2 && <span>{line2}</span>}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Action Buttons Row */}
                        <div className="flex flex-wrap items-center gap-5 sm:gap-7">
                            <Link
                                href={bannerData.primaryBtnLink}
                                className="group inline-flex items-center justify-center bg-[#2C1810] hover:bg-[#3D2217] active:scale-[0.98] text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                <span>{bannerData.primaryBtnText}</span>
                                <ArrowRight className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href={bannerData.secondaryBtnLink}
                                className="group inline-flex items-center text-[#F37021] hover:text-[#d95c0e] font-semibold text-base sm:text-lg transition-colors py-2"
                            >
                                <span className="underline underline-offset-4 decoration-[#F37021]/40 group-hover:decoration-[#F37021]">
                                    {bannerData.secondaryBtnText}
                                </span>
                                <ArrowRight className="w-5 h-5 ml-2 text-[#F37021] transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>

                    </div>

                    {/* Right Column Spacer for Background Image */}
                    <div className="lg:col-span-5 min-h-[280px] sm:min-h-[340px] lg:min-h-0 pointer-events-none" />

                </div>
            </div>

            {/* Curved Bottom Band - White curve stroke over the orange band */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
                <svg
                    className="relative block w-full h-[90px] sm:h-[130px] md:h-[170px] lg:h-[200px]"
                    viewBox="0 0 1440 200"
                    fill="none"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* White curve line */}
                    <path
                        d="M0 200 L0 76 C 400 159, 980 166, 1440 4 L 1440 200 Z"
                        fill="#FFFFFF"
                    />
                    {/* Orange band below the white curve */}
                    <path
                        d="M0 200 L0 92 C 400 175, 980 182, 1440 20 L 1440 200 Z"
                        fill="#F37021"
                    />
                </svg>

                {/* Large Paw Watermark on the orange band */}
                <PawPrint
                    className="absolute right-[5%] bottom-4 sm:bottom-5 lg:bottom-6 w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 text-white/20 rotate-[18deg]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                />
            </div>

            {/* Slider Pagination Dots */}
            <div className="absolute bottom-14 sm:bottom-20 lg:bottom-24 left-0 right-0 z-30 flex items-center justify-center gap-2.5">
                {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === currentSlide}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-2xs ${index === currentSlide
                            ? "bg-[#F37021] scale-110"
                            : "bg-white ring-1 ring-black/5 hover:bg-white/90"
                            }`}
                    />
                ))}
            </div>

        </section>
    );
}