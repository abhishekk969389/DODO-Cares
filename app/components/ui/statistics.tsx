"use client";

import React from "react";
import { motion } from "framer-motion";
import { site as petData } from "@/data/index";
import type { StatisticItem, StatisticsProps } from "@/types/pet";
import { FadeIn } from "@/app/components/ui/animations";
import {
  MapPin,
  Home,
  Heart,
  Headphones,
  Users,
  Award,
  Smile,
  CheckCircle,
  Star,
  ShieldCheck,
} from "lucide-react";
import { FaPaw } from "react-icons/fa";

const statIconMap: Record<string, React.ElementType> = {
  MapPin,
  Home,
  Heart,
  Headphones,
  Users,
  Award,
  Smile,
  CheckCircle,
  Star,
  ShieldCheck,
  paw: FaPaw,
  FaPaw,
};



export default function Statistics({ stats: propsStats, className = "" }: StatisticsProps) {
  const statsList: StatisticItem[] = propsStats || petData.serviceAreas?.stats || [];

  if (!statsList || statsList.length === 0) return null;

  return (
    <FadeIn direction="up" delay={0.1}>
      <div className={`bg-white mx-auto max-w-[1320px] rounded-xl shadow-md shadow-neutral-200/60 border border-gray-100 px-6 sm:px-8 md:px-12 lg:px-12 py-5 sm:py-6 mt-8 w-full ${className}`}>
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-center justify-between gap-6 sm:gap-y-6 sm:gap-x-8 lg:gap-0">
          {statsList.map((stat, idx) => {
            const IconComponent = statIconMap[stat.icon] || MapPin;

            return (
              <React.Fragment key={stat.id || idx}>
                {idx > 0 && (
                  <div className="hidden lg:block h-10 w-[1px] bg-neutral-200/80 shrink-0 mx-2" />
                )}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex items-center gap-4 sm:gap-5 justify-start lg:justify-center w-full flex-1 px-1 sm:px-2 md:px-6 lg:px-4 cursor-pointer"
                >
                  {/* Orange Circle Icon Badge */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#F37021] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <IconComponent className="w-6.5 h-6.5 text-white" strokeWidth={1.8} />
                  </div>

                  {/* Stat Value & Label */}
                  <div className="flex flex-col text-left">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#2C1810] leading-none mb-1 tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-sm sm:text-sm font-bold text-[#382219] leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </FadeIn>
  );
}
