"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import petDataJson from "@/data/pet.json";
import type { PetData, WhyChooseUsData } from "@/types/pet";
import {
    FadeIn,
    ScaleIn,
    StaggerContainer,
    StaggerItem,
    MotionCard,
} from "@/app/components/ui/animations";
import { ArrowRight } from "lucide-react";
import {
    FaKitMedical,
    FaShower,
    FaScissors,
    FaStethoscope,
    FaShieldHeart,
    FaHeartPulse,
    FaDog,
    FaPaw,
} from "react-icons/fa6";

const reactIconMap: Record<string, React.ElementType> = {
    FaKitMedical,
    FaShower,
    FaScissors,
    FaStethoscope,
    FaShieldHeart,
    FaHeartPulse,
    FaDog,
    FaPaw,
};

const petData: PetData = petDataJson as unknown as PetData;
const whyData: WhyChooseUsData = petData.whyChooseUs as WhyChooseUsData;

// Decorative Wavy Line with Paw SVG (~ 🐾)
const DecorativeWavyPaw = () => (
    <div className="flex items-center gap-2 mb-4">
        <svg
            width="50"
            height="14"
            viewBox="0 0 50 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#F37021] shrink-0"
            aria-hidden="true"
        >
            <path
                d="M2 7C6 3 10 3 14 7C18 11 22 11 26 7C30 3 34 3 38 7C42 11 46 11 48 7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
        </svg>
        <FaPaw className="w-5 h-5 text-[#F37021]" />
    </div>
);

export default function WhyChooseUs() {
    if (!whyData) return null;

    return (
        <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

                {/* Top Section Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">

                    {/* Left Text Column */}
                    <div className="lg:col-span-5 flex flex-col justify-center relative">

                        {/* Faint Paw Watermarks in Background */}
                        <FaPaw
                            className="absolute -top-6 -left-6 sm:-left-10 w-16 h-16 sm:w-20 sm:h-20 text-[#2C1810]/5 -rotate-12 pointer-events-none"
                        />
                        <FaPaw
                            className="absolute bottom-4 right-8 sm:right-16 w-20 h-20 sm:w-24 sm:h-24 text-[#2C1810]/5 rotate-12 pointer-events-none"
                        />

                        {/* Top Tag / Pill Badge */}
                        <FadeIn direction="up" delay={0.05}>
                            <div className="bg-white border border-[#F37021]/30 text-[#F37021] text-xs sm:text-sm font-bold tracking-wide rounded-full px-3.5 py-1 inline-flex items-center gap-1.5 w-fit mb-3.5 shadow-2xs">
                                <FaPaw className="w-5 h-5 text-[#F37021]" />
                                <span>{whyData.badge}</span>
                            </div>
                        </FadeIn>

                        {/* Main Heading */}
                        <FadeIn direction="up" delay={0.1}>
                            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1B120C] tracking-tight leading-[1.08] mb-2">
                                {whyData.titlePrefix}{" "}
                                <span className="text-[#F37021] font-extrabold">{whyData.titleHighlight}</span>
                            </h2>
                        </FadeIn>

                        {/* Wavy Paw Divider */}
                        <DecorativeWavyPaw />

                        {/* Description */}
                        <FadeIn direction="up" delay={0.15}>
                            <p className="text-sm sm:text-base text-[#615147] leading-relaxed max-w-md mb-6 font-normal">
                                {whyData.description}
                            </p>
                        </FadeIn>

                        {/* CTA Button */}
                        <FadeIn direction="up" delay={0.2}>
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="w-fit"
                            >
                                <Link
                                    href={whyData.btnLink}
                                    className="bg-[#F37021] hover:bg-[#d95c0e] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-colors duration-200 group w-fit cursor-pointer"
                                >
                                    <span>{whyData.btnText}</span>
                                    <ArrowRight className="w-4.5 h-4.5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        </FadeIn>

                    </div>

                    {/* Right Image Column */}
                    <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
                        <ScaleIn delay={0.1} className="w-full max-w-[660px]">
                            <div className="relative w-full max-w-[660px] h-[300px] sm:h-[380px] lg:h-[430px] rounded-tl-[90px] sm:rounded-tl-[135px] rounded-bl-[90px] sm:rounded-bl-[135px] rounded-tr-[32px] rounded-br-[32px] overflow-hidden border-2 sm:border-3 border-[#FCE4D6] shadow-xl">
                                <Image
                                    src={whyData.mainImage || "/whychoose.jpg"}
                                    alt="Why Choose Dodo Cares"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    className="object-cover object-center"
                                />
                            </div>
                        </ScaleIn>
                    </div>

                </div>

                {/* 6 Feature Cards Grid (StaggerContainer + StaggerItem + MotionCard) */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-6 mb-10">
                    {whyData.features?.map((feature) => {
                        const ReactIcon = reactIconMap[feature.icon] || FaPaw;

                        return (
                            <StaggerItem key={feature.id} direction="up">
                                <MotionCard hoverY={-6} hoverScale={1.01} className="h-full">
                                    <Link
                                        href={feature.link}
                                        className="bg-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 border border-amber-900/10 flex items-center gap-3 sm:gap-4 group cursor-pointer relative h-full"
                                    >
                                        {/* Left Icon Badge */}
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F37021] text-white flex items-center justify-center shrink-0 shadow-2xs border-[5px] sm:border-[6px] border-[#FFEBDD] group-hover:scale-105 transition-transform">
                                            <ReactIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
                                        </div>

                                        {/* Light Orange Dashed Divider Line */}
                                        <div className="h-12 sm:h-18 w-[2px] border-r border-dashed border-[#F37021]/30 mx-0.5 sm:mx-1 shrink-0" />

                                        {/* Middle Text Area */}
                                        <div className="flex flex-col flex-1 text-left min-w-0 pr-6">
                                            <h3 className="text-base sm:text-lg font-extrabold text-[#1E1B26] mb-1 group-hover:text-[#F37021] transition-colors leading-tight">
                                                {feature.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm md:text-[14px] text-[#615147] font-normal leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>

                                        {/* Right Arrow Circle */}
                                        <div className="absolute bottom-4 right-4 w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border border-[#F37021] text-[#F37021] flex items-center justify-center group-hover:bg-[#F37021] group-hover:text-white transition-all shrink-0">
                                            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                                        </div>
                                    </Link>
                                </MotionCard>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>

                {/* Bottom Callout Promise Banner */}
                {whyData.bottomBanner && (
                    <FadeIn direction="up" delay={0.1}>
                        <div className="bg-gradient-to-r from-[#FFF6F0] via-[#FFF3EB] to-[#FFF6F0] sm:rounded-xl p-5 sm:px-8 lg:px-10 sm:py-5 border border-[#F37021]/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs relative overflow-hidden mt-6">

                            {/* Left Info */}
                            <div className="flex items-center gap-4 sm:gap-5 text-left">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F37021] text-white flex items-center justify-center shrink-0 shadow-2xs border-4 border-white">
                                    <FaDog className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-base sm:text-lg md:text-[20px] font-extrabold text-[#1E1B26] mb-0.5">
                                        {whyData.bottomBanner.title}
                                    </h4>
                                    <p className="text-sm sm:text-sm md:text-lg text-[#615147] font-medium">
                                        {whyData.bottomBanner.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Right CTA Button */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                                <Link
                                    href={whyData.bottomBanner.btnLink}
                                    className="bg-[#F37021] hover:bg-[#d95c0e] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-colors shrink-0 group cursor-pointer"
                                >
                                    <span>{whyData.bottomBanner.btnText}</span>
                                    <ArrowRight className="w-4.5 h-4.5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </motion.div>

                        </div>
                    </FadeIn>
                )}

            </div>
        </section>
    );
}
