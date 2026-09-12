"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { site as petData } from "@/data/index";
import type { DodoServiceAreasData as ServiceAreasData } from "@/data/index";
import {
    FadeIn,
    MotionCard,
} from "@/app/components/ui/animations";
import {
    ChevronLeft,
    ChevronRight,
    MapPin,
} from "lucide-react";
import { FaMapMarkerAlt, FaPaw } from "react-icons/fa";
import Statistics from "@/app/components/ui/statistics";


const serviceData: ServiceAreasData = petData.serviceAreas as ServiceAreasData;

export default function Services() {
    const [activeDot, setActiveDot] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    if (!serviceData) return null;

    const handlePrev = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
        }
    };

    const handleNext = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
        }
    };

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        if (maxScroll <= 0) return;
        const scrollRatio = scrollLeft / maxScroll;
        if (scrollRatio < 0.33) setActiveDot(0);
        else if (scrollRatio < 0.66) setActiveDot(1);
        else setActiveDot(2);
    };

    const handleDotClick = (index: number) => {
        setActiveDot(index);
        if (scrollRef.current) {
            const { scrollWidth, clientWidth } = scrollRef.current;
            const maxScroll = scrollWidth - clientWidth;
            const targetScroll = (maxScroll / 2) * index;
            scrollRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full">

                <div className="flex flex-col items-center text-center mb-6">
                  
                    <FadeIn direction="up" delay={0.05}>
                        <div className="inline-flex items-center gap-1.5 text-[#F37021] font-bold text-sm sm:text-sm tracking-widest uppercase mb-2">
                            <FaPaw className="w-5 h-5 text-[#F37021]" />
                            <span>{serviceData.badge}</span>
                        </div>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#2C1810] tracking-tight leading-tight mb-3.5 max-w-3xl">
                            {serviceData.titlePrefix} {serviceData.titleMiddle}{" "}
                            <span className="text-[#F37021] font-extrabold">
                                {serviceData.titleSuffix}
                            </span>
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.15}>
                        <p className="text-sm sm:text-base text-[#615147] max-w-md mx-auto mb-3 font-normal leading-relaxed">
                            {serviceData.description}
                        </p>
                    </FadeIn>
                    <FaPaw
                        className="w-5 h-5 text-[#F37021] mt-1"
                        aria-hidden="true"
                    />
                </div>
                <div className="relative flex items-center gap-3 sm:gap-4">


                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        onClick={handlePrev}
                        aria-label="Previous locations"
                        className="hidden sm:flex shrink-0 w-10 h-10 rounded-full border-2 border-[#F37021]/30 hover:border-[#F37021] text-[#F37021] bg-white items-center justify-center shadow-xs transition-colors duration-200 cursor-pointer z-10"
                    >
                        <ChevronLeft className="w-5 h-5 text-[#F37021]" />
                    </motion.button>
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto gap-4 sm:gap-5 w-full pb-3 pt-1 scroll-smooth snap-x snap-mandatory [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {serviceData.locations?.map((loc) => (
                            <MotionCard
                                key={loc.id}
                                hoverY={-6}
                                hoverScale={1.01}
                                className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(20%-1rem)] shrink-0 snap-start bg-white rounded-[28px] sm:rounded-[32px] overflow-hidden border border-amber-900/5 flex flex-col items-center text-center group cursor-pointer"
                            >
                                <Link href={loc.link || `/servicelocation/${loc.name.toLowerCase()}`} className="w-full h-full flex flex-col items-center pb-6">
                         
                                    <div className="relative w-full h-[180px] sm:h-[200px] overflow-hidden rounded-t-[28px] sm:rounded-t-[32px]">
                                        <Image
                                            src={loc.image}
                                            alt={loc.name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center -mt-5 mb-2 shrink-0">
                                        <FaMapMarkerAlt className="w-5 h-5 text-[#F37021] fill-[#F37021]" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-extrabold text-[#2C1810] mb-1 group-hover:text-[#F37021] transition-colors">
                                        {loc.name}
                                    </h3>
                                    <p className="text-sm sm:text-sm text-[#7A6A60] px-3 font-medium leading-snug">
                                        {loc.description}
                                    </p>
                                </Link>
                            </MotionCard>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        onClick={handleNext}
                        aria-label="Next locations"
                        className="hidden sm:flex shrink-0 w-10 h-10 rounded-full border-2 border-[#F37021]/30 hover:border-[#F37021] text-[#F37021] bg-white items-center justify-center shadow-xs transition-colors duration-200 cursor-pointer z-10"
                    >
                        <ChevronRight className="w-5 h-5 text-[#F37021]" />
                    </motion.button>

                </div>
                <div className="flex items-center justify-center gap-2 mt-6">
                    {[0, 1, 2].map((dotIndex) => (
                        <motion.button
                            key={dotIndex}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            onClick={() => handleDotClick(dotIndex)}
                            aria-label={`Go to slide ${dotIndex + 1}`}
                            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 cursor-pointer ${activeDot === dotIndex
                                ? "bg-[#F37021] scale-110"
                                : "bg-neutral-300 hover:bg-neutral-400"
                                }`}
                        />
                    ))}
                </div>
                
                <Statistics stats={serviceData.stats} />

            </div>
        </section>
    );
}
