"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { site as petData } from "@/data/index";
import type { DodoVideoGalleryData as VideoGalleryData } from "@/data/index";
import { FadeIn, MotionCard } from "@/app/components/ui/animations";
import { FaPaw, FaPlay, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { Clock } from "lucide-react";


const videoData: VideoGalleryData = petData.videoGallery as VideoGalleryData;

export default function VideoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!videoData) return null;

  const { titlePrefix, titleHighlight, description, videos } = videoData;

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + videos.length) % videos.length));
  }, [videos.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % videos.length));
  }, [videos.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handlePrev, handleNext]);

  const activeVideo = selectedIndex !== null ? videos[selectedIndex] : null;

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <FadeIn direction="up" delay={0.05}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1810] tracking-tight leading-tight mb-3">
              {titlePrefix}{" "}
              <span className="text-[#F37021] font-extrabold">
                {titleHighlight}
              </span>
            </h2>
          </FadeIn>

          {/* Paw Line Divider */}
          <div className="flex items-center justify-center gap-2.5 mb-3.5">
            <div className="h-[1.5px] w-12 bg-[#F37021] rounded-full" />
            <FaPaw className="w-5 h-5 text-[#F37021]" />
            <div className="h-[1.5px] w-12 bg-[#F37021] rounded-full" />
          </div>

          <FadeIn direction="up" delay={0.1}>
            <p className="text-sm sm:text-base text-[#615147] font-normal max-w-lg mx-auto">
              {description}
            </p>
          </FadeIn>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-2 -mb-2">
          {videos?.map((vid, idx) => (
            <FadeIn key={vid.id || idx} direction="up" delay={0.1 + idx * 0.05}>
              <MotionCard
                hoverY={-6}
                hoverScale={1.02}
                className="bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden border border-neutral-200 shadow-sm transition-all duration-300 group cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedIndex(idx)}
              >
                {/* Thumbnail Image Frame */}
                <div className="relative w-full h-[210px] sm:h-[230px] overflow-hidden rounded-t-[24px] sm:rounded-t-[28px]">
                  <Image
                    src={vid.thumbnail}
                    alt={vid.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

                  {/* Floating Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#F37021] text-white flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform duration-300">
                      <FaPlay className="w-5 h-5 text-white ml-1" />
                    </div>
                  </div>

                  {/* Bottom Left Duration Pill */}
                  <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md text-white font-bold text-sm px-2.5 py-1 rounded-md shadow-sm tracking-wide">
                    <span>{vid.duration}</span>
                  </div>
                </div>

                {/* Card Title & Info */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {vid.category && (
                      <span className="text-sm font-bold text-[#F37021] uppercase tracking-wider mb-1 block">
                        {vid.category}
                      </span>
                    )}
                    <h3 className="text-base sm:text-lg font-bold text-[#2C1810] leading-snug group-hover:text-[#F37021] transition-colors">
                      {vid.title}
                    </h3>
                  </div>
                </div>
              </MotionCard>
            </FadeIn>
          ))}
        </div>

        {/* Fullscreen Video Lightbox Modal */}
        <AnimatePresence>
          {selectedIndex !== null && activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-[#0c0d10]/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedIndex(null)}
            >
              {/* Close Button Top Right */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-6 right-6 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer z-50 backdrop-blur-sm hover:scale-105"
                aria-label="Close video lightbox"
              >
                <FaTimes className="w-5 h-5 text-white" />
              </button>

              {/* Previous Button Left */}
              {videos.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer z-50 backdrop-blur-sm shadow-xl hover:scale-105"
                  aria-label="Previous video"
                >
                  <FaChevronLeft className="w-5 h-5 text-white" />
                </button>
              )}

              {/* Next Button Right */}
              {videos.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer z-50 backdrop-blur-sm shadow-xl hover:scale-105"
                  aria-label="Next video"
                >
                  <FaChevronRight className="w-5 h-5 text-white" />
                </button>
              )}

              {/* Main Video Container */}
              <div
                className="relative max-w-5xl w-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  key={activeVideo.id || selectedIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10"
                >
                  <iframe
                    src={`${activeVideo.videoUrl}?autoplay=1`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />

                  {/* Bottom Title Badge Floating On Video */}
                  {activeVideo.title && (
                    <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-[#2d211b]/85 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full shadow-2xl z-20 pointer-events-none max-w-[90%] text-center">
                      <p className="text-white font-bold text-sm sm:text-base tracking-wide drop-shadow-sm whitespace-nowrap overflow-hidden text-ellipsis">
                        {activeVideo.title}
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

