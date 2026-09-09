"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import petDataJson from "@/data/pet.json";
import type { AboutData, PetData } from "@/types/pet";
import { FadeIn, ScaleIn } from "@/app/components/ui/animations";
import { ArrowRight } from "lucide-react";
import { FaPaw } from "react-icons/fa";

const petData: PetData = petDataJson as unknown as PetData;
const aboutData: AboutData = petData.about;

export default function About() {
    if (!aboutData) return null;

    return (
        <section className="relative w-full bg-[#F37021] py-16 sm:py-20 lg:py-24 overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column - Overlapping Circles Visual */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[480px] sm:max-w-[540px] min-h-[360px] sm:min-h-[460px] lg:min-h-[500px] flex items-center justify-end">

                            {/* Top Left Badge Circle (25+ Years Experience) */}
                            <ScaleIn delay={0.1} className="absolute top-0 left-0 sm:top-2 sm:left-2 lg:left-0 z-20">
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full bg-white flex flex-col items-center justify-center text-center p-3 sm:p-4 shadow-xl border-4 border-white cursor-pointer"
                                >
                                    <span className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#F37021] leading-none mb-1 tracking-tight">
                                        {aboutData.experienceYears}
                                    </span>
                                    <span className="text-[11px] sm:text-xs lg:text-sm font-bold text-[#F37021] leading-tight px-1 max-w-[130px]">
                                        {aboutData.experienceTitle}
                                    </span>
                                </motion.div>
                            </ScaleIn>

                            {/* Bottom Left Image Circle */}
                            <ScaleIn delay={0.2} className="absolute bottom-0 left-0 sm:bottom-2 sm:left-4 lg:left-2 z-20">
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="w-32 h-32 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden border-[5px] sm:border-[6px] border-white shadow-xl cursor-pointer relative"
                                >
                                    <Image
                                        src={aboutData.secondaryImage || "/about2.jpg"}
                                        alt="Pet grooming detail"
                                        fill
                                        sizes="(max-width: 640px) 128px, (max-width: 1024px) 176px, 192px"
                                        className="object-cover object-center"
                                    />
                                </motion.div>
                            </ScaleIn>

                            {/* Main Large Image Circle */}
                            <ScaleIn delay={0} className="relative z-10 ml-auto mr-2 sm:mr-6 lg:mr-0">
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="relative w-[260px] h-[260px] sm:w-[370px] sm:h-[370px] lg:w-[430px] lg:h-[430px] rounded-full overflow-hidden border-[6px] sm:border-[8px] border-white shadow-2xl cursor-pointer"
                                >
                                    <Image
                                        src={aboutData.mainImage || "/about1.jpg"}
                                        alt="Expert groomer with pet"
                                        fill
                                        priority
                                        sizes="(max-width: 640px) 260px, (max-width: 1024px) 370px, 430px"
                                        className="object-cover object-center"
                                    />
                                </motion.div>
                            </ScaleIn>

                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="lg:col-span-6 flex flex-col justify-center text-white">

                        {/* Top Tag / Badge */}
                        <FadeIn direction="up" delay={0.05}>
                            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                                <FaPaw className="w-4.5 h-4.5 text-white shrink-0" />
                                <span className="text-white font-bold text-sm sm:text-base tracking-wider uppercase">
                                    {aboutData.badge}
                                </span>
                            </div>
                        </FadeIn>

                        {/* Main Title */}
                        <FadeIn direction="up" delay={0.1}>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight max-w-xl">
                                {aboutData.title}
                            </h2>
                        </FadeIn>

                        {/* Paragraphs */}
                        <div className="flex flex-col gap-4 sm:gap-5 mb-8 max-w-xl">
                            {aboutData.paragraphs?.map((para, index) => (
                                <FadeIn key={index} direction="up" delay={0.15 + index * 0.05}>
                                    <p className="text-white/95 text-base sm:text-lg leading-relaxed font-normal">
                                        {para}
                                    </p>
                                </FadeIn>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <FadeIn direction="up" delay={0.25}>
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="w-fit"
                            >
                                <Link
                                    href={aboutData.btnLink}
                                    className="group inline-flex items-center gap-2.5 bg-white hover:bg-neutral-100 text-[#F37021] font-bold text-sm sm:text-base tracking-wider px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-colors duration-200 uppercase w-fit"
                                >
                                    <span>{aboutData.btnText}</span>
                                    <ArrowRight className="w-5 h-5 text-[#F37021] transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        </FadeIn>

                    </div>

                </div>
            </div>
        </section>
    );
}
