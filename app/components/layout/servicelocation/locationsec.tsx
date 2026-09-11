"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { site as petData } from "@/data/index";
import type { DodoServiceAreasData as ServiceAreasData } from "@/data/index";
import { FadeIn, MotionCard } from "@/app/components/ui/animations";
import { MapPin } from "lucide-react";
import { FaMapMarkerAlt, FaPaw } from "react-icons/fa";
import Statistics from "@/app/components/ui/statistics";


const serviceData: ServiceAreasData = petData.serviceAreas as ServiceAreasData;

export default function LocationSec() {
  if (!serviceData) return null;

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14  overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6">
          {/* Top Badge */}
          <FadeIn direction="up" delay={0.05}>
            <div className="inline-flex items-center gap-2 text-[#F37021] font-extrabold text-sm sm:text-sm tracking-widest uppercase mb-3">
              <FaPaw className="w-4 h-4 text-[#F37021]" />
              <span>{serviceData.badge}</span>
            </div>
          </FadeIn>

          {/* Title */}
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#2C1810] tracking-tight leading-tight mb-3.5 max-w-3xl">
              {serviceData.titlePrefix}{" "}
              <span>{serviceData.titleMiddle}</span>{" "}
              <span className="text-[#F37021]">
                {serviceData.titleSuffix}
              </span>
            </h2>
          </FadeIn>

          {/* Description */}
          <FadeIn direction="up" delay={0.15}>
            <p className="text-sm sm:text-base text-[#615147] max-w-lg mx-auto font-normal leading-relaxed">
              {serviceData.description}
            </p>
          </FadeIn>
        </div>

        {/* 6 Locations Grid (3x2 layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceData.locations?.map((loc, idx) => (
            <FadeIn key={loc.id || idx} direction="up" delay={0.1 + idx * 0.05}>
              <MotionCard
                hoverY={-6}
                hoverScale={1.01}
                className="bg-white rounded-[28px] sm:rounded-[32px] overflow-hidden border border-neutral-100/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group cursor-pointer h-full"
              >
                <Link href={loc.link || `/servicelocation/${loc.name.toLowerCase()}`} className="w-full h-full flex flex-col items-center">
                  {/* Image Container */}
                  <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden rounded-t-[28px] sm:rounded-t-[32px]">
                    <Image
                      src={loc.image}
                      alt={loc.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlapping Map Pin Badge */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center -mt-5 mb-2.5 shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5 text-[#F37021] fill-[#F37021]" strokeWidth={1.5} />
                  </div>

                  {/* Location Title & Subtitle */}
                  <div className="px-5 pb-6 flex flex-col items-center">
                    <h3 className="text-xl font-extrabold text-[#2C1810] mb-1 group-hover:text-[#F37021] transition-colors">
                      {loc.name}
                    </h3>
                    <p className="text-sm sm:text-sm text-[#7A6A60] font-medium leading-relaxed max-w-[240px]">
                      {loc.description}
                    </p>
                  </div>
                </Link>
              </MotionCard>
            </FadeIn>
          ))}
        </div>

        {/* Reusable Statistics Bar */}
        <Statistics stats={serviceData.stats} className="mt-8 sm:mt-12" />

      </div>
    </section>
  );
}
