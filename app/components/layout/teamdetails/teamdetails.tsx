"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { TeamDetailItem } from "@/types/pet";
import { FadeIn } from "@/app/components/ui/animations";
import {
    FaPaw,
    FaPhone,
    FaEnvelope,
    FaLocationDot as FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaScissors,
    FaCalendarDays as FaCalendarAlt,
    FaFaceSmile as FaSmile,
} from "react-icons/fa6";

const reactIconMap: Record<string, React.ElementType> = {
    FaPaw,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaScissors,
    FaCalendarAlt,
    FaSmile,
};

interface TeamDetailsProps {
    data: TeamDetailItem;
}

export default function TeamDetails({ data }: TeamDetailsProps) {
    if (!data) return null;

    return (
        <section className="relative w-full max-w-[1320px] mt-8 sm:mt-10 md:mt-12 lg:mt-14 mx-auto px-4 sm:px-6 lg:px-8 font-sans">
            
            {/* TOP ROW: Member Photo (4 cols) + Bio Info (4 cols) + Get in Touch Sidebar (4 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
                
                {/* 1. Left Member Photo */}
                <div className="lg:col-span-4 relative w-full h-[340px] sm:h-[400px] lg:h-full min-h-[360px] rounded-[28px] overflow-hidden border-4 border-white shadow-lg shrink-0">
                    <Image
                        src={data.image}
                        alt={data.name}
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </div>

                {/* 2. Middle Column: Bio & Details */}
                <div className="lg:col-span-5 flex flex-col justify-between py-2">
                    <div>
                        {/* Badge */}
                        {data.badge && (
                            <FadeIn direction="up" delay={0.02}>
                                <div className="flex items-center gap-2 text-[#F37021] font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">
                                    <FaPaw className="w-4 h-4" />
                                    <span>{data.badge}</span>
                                </div>
                            </FadeIn>
                        )}

                        {/* Full Name */}
                        <FadeIn direction="up" delay={0.05}>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3E1408] tracking-tight leading-tight mb-2">
                                <span className="text-[#F37021]">{data.firstName}</span>{" "}
                                <span className="text-[#3E1408]">{data.lastName}</span>
                            </h1>
                        </FadeIn>

                        {/* Role & Experience */}
                        <FadeIn direction="up" delay={0.08}>
                            <h3 className="text-lg sm:text-xl font-bold text-[#3E1408] mb-1">
                                {data.role}
                            </h3>
                            {data.experience && (
                                <p className="text-xs sm:text-sm font-semibold text-[#7A6B62] mb-3">
                                    {data.experience}
                                </p>
                            )}
                            <div className="w-10 h-[2.5px] bg-[#F37021] rounded-full mb-4" />
                        </FadeIn>

                        {/* Short Bio */}
                        <FadeIn direction="up" delay={0.1}>
                            <p className="text-xs sm:text-sm md:text-base text-[#6C5C52] leading-relaxed mb-6">
                                {data.shortBio}
                            </p>
                        </FadeIn>
                    </div>

                    {/* Social Media Icons */}
                    {data.socialLinks && data.socialLinks.length > 0 && (
                        <FadeIn direction="up" delay={0.12}>
                            <div className="flex items-center gap-3 pt-2">
                                {data.socialLinks.map((s, idx) => {
                                    const IconComp = reactIconMap[s.icon] || FaPaw;
                                    return (
                                        <a
                                            key={idx}
                                            href={s.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={s.platform}
                                            className="w-10 h-10 rounded-full bg-[#FFEFE5] text-[#F37021] hover:bg-[#F37021] hover:text-white flex items-center justify-center transition-colors shadow-xs"
                                        >
                                            <IconComp className="w-4.5 h-4.5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </FadeIn>
                    )}
                </div>

                {/* 3. Right Sidebar: Get in Touch Card */}
                {data.getInTouch && (
                    <div className="lg:col-span-3 w-full flex flex-col">
                        <FadeIn direction="up" delay={0.15} className="h-full">
                            <div className="bg-[#FFFBF8] rounded-[28px] border border-[#FDE8DC] p-6 sm:p-7 shadow-sm flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#3E1408] mb-1">
                                        {data.getInTouch.title}
                                    </h3>
                                    <div className="w-8 h-[2.5px] bg-[#F37021] rounded-full mb-3" />
                                    <p className="text-xs text-[#7A6B62] mb-5 leading-relaxed">
                                        {data.getInTouch.subtitle}
                                    </p>

                                    {/* Contact Items */}
                                    <div className="flex flex-col gap-4 mb-6">
                                        {data.getInTouch.phone && (
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-[#F37021] text-white flex items-center justify-center shrink-0 shadow-xs">
                                                    <FaPhone className="w-4 h-4" />
                                                </div>
                                                <span className="text-xs sm:text-sm font-bold text-[#3E1408]">
                                                    {data.getInTouch.phone}
                                                </span>
                                            </div>
                                        )}

                                        {data.getInTouch.email && (
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-[#F37021] text-white flex items-center justify-center shrink-0 shadow-xs">
                                                    <FaEnvelope className="w-4 h-4" />
                                                </div>
                                                <span className="text-xs sm:text-sm font-bold text-[#3E1408] truncate">
                                                    {data.getInTouch.email}
                                                </span>
                                            </div>
                                        )}

                                        {data.getInTouch.location && (
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-[#F37021] text-white flex items-center justify-center shrink-0 shadow-xs">
                                                    <FaMapMarkerAlt className="w-4 h-4" />
                                                </div>
                                                <span className="text-xs sm:text-sm font-bold text-[#3E1408]">
                                                    {data.getInTouch.location}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Booking Button */}
                                <Link
                                    href={data.getInTouch.btnLink || "/appointment"}
                                    className="w-full py-3.5 bg-[#F37021] hover:bg-[#d95e14] text-white font-bold text-sm rounded-2xl transition shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-auto"
                                >
                                    <span>{data.getInTouch.btnText}</span>
                                    <FaPaw className="w-4 h-4 text-white" />
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                )}

            </div>

            {/* BOTTOM SECTION: About Paragraphs (6 cols) + Stats Grid (6 cols) */}
            <div className="mt-8 sm:mt-10 bg-[#FFFBF8] rounded-[28px] border border-[#FDE8DC] p-6 sm:p-8 lg:p-10 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* About Member Paragraphs (6 cols) */}
                    {data.aboutSection && (
                        <div className="lg:col-span-6 flex flex-col justify-center">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-[#3E1408] mb-1">
                                {data.aboutSection.title}
                            </h3>
                            <div className="w-10 h-[2.5px] bg-[#F37021] rounded-full mb-4" />

                            <div className="flex flex-col gap-4">
                                {data.aboutSection.paragraphs?.map((para, idx) => (
                                    <p key={idx} className="text-xs sm:text-sm text-[#6C5C52] leading-relaxed">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Stats 2x2 Grid (6 cols) */}
                    {data.stats && data.stats.length > 0 && (
                        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {data.stats.map((st) => {
                                const IconComp = reactIconMap[st.icon] || FaPaw;

                                return (
                                    <div
                                        key={st.id}
                                        className="bg-[#FFF9F5] border border-[#FDE8DC]/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-2xs"
                                    >
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFEFE5] text-[#F37021] flex items-center justify-center shrink-0 shadow-xs">
                                            <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                                        </div>
                                        <div>
                                            <span className="text-xs text-[#7A6B62] font-semibold block mb-0.5">
                                                {st.title}
                                            </span>
                                            <span className="text-2xl sm:text-3xl font-extrabold text-[#F37021] leading-none">
                                                {st.value}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                </div>
            </div>

        </section>
    );
}
