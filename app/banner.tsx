"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import petDataJson from "@/data/pet.json";
import type { BannerData, PetData } from "@/types/pet";
import { FadeIn } from "@/app/components/ui/animations";
import {
    Heart,
    ShieldCheck,
    UserCheck,
    User,
    Home,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { FaPaw } from "react-icons/fa";

// Lucide Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
    Heart,
    ShieldCheck,
    UserCheck,
    User,
    Home,
    PawPrint: FaPaw,
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

export default function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    if (!bannerData) return null;

    const slides =
        bannerData.bgImages && bannerData.bgImages.length > 0
            ? bannerData.bgImages
            : [bannerData.bgImage || "/homebanner.jpg"];

    const totalSlides = slides.length;

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative w-full min-h-[660px] sm:min-h-[720px] lg:min-h-[760px] pt-36 sm:pt-40 lg:pt-44 pb-36 sm:pb-44 lg:pb-56 bg-[#FDF8F3] overflow-hidden flex flex-col justify-center">

            {/* FULL BACKGROUND IMAGE SLIDER */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {slides.map((imgSrc, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        <Image
                            src={imgSrc}
                            alt={`Pet Banner Slide ${index + 1}`}
                            fill
                            priority={index === 0}
                            sizes="100vw"
                            className="object-cover object-right sm:object-[88%_bottom] lg:object-right-bottom"
                        />
                    </div>
                ))}

                <div className="absolute inset-0 bg-gradient-to-r from-[#FDF8F3] from-18% via-[#FDF8F3]/55 via-38% to-transparent to-56% hidden lg:block z-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F3] via-[#FDF8F3]/80 to-[#FDF8F3]/25 lg:hidden z-20" />
            </div>

            {/* ALIGNED WRAPPER CONTAINER */}
            <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full">

                {/* Left Slider Arrow Button */}
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                    className="absolute left-4 mx-6 sm:left-6 lg:left-8 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#2C1810] hover:bg-[#3D2217] text-white flex items-center justify-center shadow-lg transition-colors duration-200 cursor-pointer"
                >
                    <ChevronLeft className="w-5.5 h-5.5 text-white" />
                </motion.button>

                {/* Right Slider Arrow Button */}
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    onClick={handleNext}
                    aria-label="Next Slide"
                    className="absolute right-4 mx-6 sm:right-6 lg:right-8 translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#2C1810] hover:bg-[#3D2217] text-white flex items-center justify-center shadow-lg transition-colors duration-200 cursor-pointer"
                >
                    <ChevronRight className="w-5.5 h-5.5 text-white" />
                </motion.button>

                {/* Inner Content Grid */}
                <div className="grid mx-12 grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 sm:px-6 lg:px-8">

                    {/* Left Text Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center">

                        {/* Top Tagline / Badge */}
                        <FadeIn direction="up" delay={0.05}>
                            <div className="inline-flex items-center gap-1.5 mb-3 sm:mb-4 mt-8">
                                <span className="text-[#F37021] font-semibold text-lg sm:text-xl tracking-tight">
                                    {bannerData.badge}
                                </span>
                                <DecorativeScribbleHeart />
                            </div>
                        </FadeIn>

                        {/* Main Title */}
                        <FadeIn direction="up" delay={0.1}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2C1810] tracking-tight leading-[1.12] mb-5 sm:mb-6 max-w-2xl">
                                {bannerData.titlePrefix}{" "}
                                <span className="text-[#F37021] font-semibold">
                                    {bannerData.titleHighlight}
                                </span>{" "}
                                {bannerData.titleSuffix}
                            </h1>
                        </FadeIn>

                        {/* Description */}
                        <FadeIn direction="up" delay={0.15}>
                            <p className="text-base sm:text-lg text-[#615147] leading-relaxed max-w-lg mb-8 font-normal">
                                {bannerData.description}
                            </p>
                        </FadeIn>

                        {/* 4 Feature Badges Row */}
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-0 mb-9 sm:mb-11 max-w-4xl">
                            {bannerData.features?.map((feature, idx) => {
                                const IconComponent = iconMap[feature.icon] || FaPaw;

                                let line1 = feature.title;
                                let line2 = "";
                                if (feature.title === "Loving Care") {
                                    line1 = "Loving";
                                    line2 = "Care";
                                } else if (feature.title === "Safe & Reliable") {
                                    line1 = "Safe &";
                                    line2 = "Reliable";
                                } else if (feature.title === "Expert Team") {
                                    line1 = "Expert";
                                    line2 = "Team";
                                } else if (feature.title === "Home Like Comfort") {
                                    line1 = "Home Like";
                                    line2 = "Comfort";
                                } else {
                                    const parts = feature.title.split(" ");
                                    line1 = parts.slice(0, Math.ceil(parts.length / 2)).join(" ");
                                    line2 = parts.slice(Math.ceil(parts.length / 2)).join(" ");
                                }

                                return (
                                    <React.Fragment key={feature.id}>
                                        {idx > 0 && (
                                            <div className="hidden sm:block h-8 sm:h-9 w-[1px] bg-[#E2D5CC] mx-3 sm:mx-4 lg:mx-5 shrink-0" />
                                        )}
                                        <FadeIn direction="up" delay={0.2 + idx * 0.05}>
                                            <motion.div
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                                className="flex items-center gap-2.5 sm:gap-3 cursor-pointer"
                                            >
                                                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#F37021] bg-white flex items-center justify-center shrink-0 shadow-2xs">
                                                    <IconComponent className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#F37021]" strokeWidth={2.2} />
                                                </div>
                                                <div className="flex flex-col text-xs sm:text-sm lg:text-[15px] font-bold text-[#2C1810] leading-tight">
                                                    <span>{line1}</span>
                                                    {line2 && <span>{line2}</span>}
                                                </div>
                                            </motion.div>
                                        </FadeIn>
                                    </React.Fragment>
                                );
                            })}
                        </div>

                        {/* Action Buttons Row */}
                        <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                                <Link
                                    href={bannerData.primaryBtnLink}
                                    className="group inline-flex items-center justify-center bg-[#2A1810] hover:bg-[#3D2217] text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
                                >
                                    <span>{bannerData.primaryBtnText}</span>
                                    <ArrowRight className="w-5 h-5 ml-3 text-white transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                                <Link
                                    href={bannerData.secondaryBtnLink}
                                    className="group inline-flex items-center gap-2.5 text-[#2A1810] hover:text-[#3D2217] font-semibold text-base sm:text-lg transition-colors py-2"
                                >
                                    <span className="border-b-2 border-[#F37021] pb-0.5">
                                        {bannerData.secondaryBtnText}
                                    </span>
                                    <ArrowRight className="w-5 h-5 text-[#F37021] transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        </div>

                    </div>

                    {/* Right Column Spacer for Background Image */}
                    <div className="lg:col-span-5 min-h-[280px] sm:min-h-[340px] lg:min-h-0 pointer-events-none" />

                </div>
            </div>

            {/* Curved Bottom Band */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
                <svg
                    className="relative block w-full h-[90px] sm:h-[130px] md:h-[170px] lg:h-[200px]"
                    viewBox="0 0 1440 200"
                    fill="none"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 200 L0 76 C 400 159, 980 166, 1440 4 L 1440 200 Z"
                        fill="#FFFFFF"
                    />
                    <path
                        d="M0 200 L0 92 C 400 175, 980 182, 1440 20 L 1440 200 Z"
                        fill="#F37021"
                    />
                </svg>

                <FaPaw
                    className="absolute right-[5%] bottom-4 sm:bottom-5 lg:bottom-6 w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 text-white/20 rotate-[18deg]"
                    aria-hidden="true"
                />
            </div>

            {/* Slider Pagination Dots */}
            <div className="absolute bottom-14 sm:bottom-20 lg:bottom-24 left-0 right-0 z-30 flex items-center justify-center gap-2.5">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === currentSlide}
                        className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 cursor-pointer shadow-2xs ${index === currentSlide
                            ? "bg-[#F37021] scale-110"
                            : "bg-white ring-1 ring-black/5 hover:bg-white/90"
                            }`}
                    />
                ))}
            </div>

        </section>
    );
}