"use client";

import Link from "next/link";
import { FaPaw as FaPawIcon } from "react-icons/fa6";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

const LeftSparkle = ({ className = "w-6 h-10 sm:w-8 sm:h-14" }: { className?: string }) => (
    <svg
        viewBox="0 0 40 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <line
            x1="32"
            y1="14"
            x2="12"
            y2="4"
            stroke="#FA4F00"
            strokeWidth="6"
            strokeLinecap="round"
        />
        <line
            x1="34"
            y1="30"
            x2="10"
            y2="30"
            stroke="#FA4F00"
            strokeWidth="6"
            strokeLinecap="round"
        />
        <line
            x1="32"
            y1="46"
            x2="12"
            y2="56"
            stroke="#FA4F00"
            strokeWidth="6"
            strokeLinecap="round"
        />
    </svg>
);

const RightSparkle = ({ className = "w-6 h-10 sm:w-8 sm:h-14" }: { className?: string }) => (
    <svg
        viewBox="0 0 40 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <line
            x1="8"
            y1="14"
            x2="28"
            y2="4"
            stroke="#FA4F00"
            strokeWidth="6"
            strokeLinecap="round"
        />
        <line
            x1="6"
            y1="30"
            x2="30"
            y2="30"
            stroke="#FA4F00"
            strokeWidth="6"
            strokeLinecap="round"
        />
        <line
            x1="8"
            y1="46"
            x2="28"
            y2="56"
            stroke="#FA4F00"
            strokeWidth="6"
            strokeLinecap="round"
        />
    </svg>
);

export default function NotFound() {
    return (
        <div className="min-h-screen w-full bg-[#FAF5EF] flex flex-col items-center justify-center relative overflow-hidden px-4 pt-28 sm:pt-32 md:pt-36 pb-16 select-none">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                className="absolute top-48 left-24 text-[#F8DEC9] rotate-12 pointer-events-none"
            >
                <FaPawIcon className="w-7 h-7 md:w-9 md:h-9" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: [0, 12, 0] }}
                transition={{ duration: 5, delay: 0.3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                className="absolute top-1/2 left-6 sm:left-10 -translate-y-1/2 text-[#F5D8C3] -rotate-45 pointer-events-none"
            >
                <FaPawIcon className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -8, 0] }}
                transition={{ duration: 4.5, delay: 0.6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                className="absolute bottom-10 left-16 sm:left-20 text-[#F8DEC9] rotate-45 pointer-events-none"
            >
                <FaPawIcon className="w-9 h-9 md:w-12 md:h-12" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 4.2, delay: 0.4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                className="absolute top-48 right-28 text-[#F8DEC9] -rotate-12 pointer-events-none"
            >
                <FaPawIcon className="w-7 h-7 md:w-9 md:h-9" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: [0, -12, 0] }}
                transition={{ duration: 4.8, delay: 0.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                className="absolute bottom-16 right-16 sm:right-20 text-[#F8DEC9] -rotate-45 pointer-events-none"
            >
                <FaPawIcon className="w-9 h-9 md:w-12 md:h-12" />
            </motion.div>

            <motion.svg
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-6 md:right-20 bottom-16 w-32 h-32 md:w-48 md:h-48 text-[#F2CCA9] pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
            >
                <path d="M 10,80 Q 60,0 85,55 T 40,85" />
            </motion.svg>

            <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto my-auto pt-6 sm:pt-8">

                <div className="flex items-center justify-center gap-2 sm:gap-4 relative">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: -10 }}
                        animate={{ opacity: [0.7, 1, 0.7], scale: [0.95, 1.1, 0.95], x: 0 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="my-auto mr-1 sm:mr-2"
                    >
                        <LeftSparkle className="w-6 h-10 sm:w-8 sm:h-14 md:w-9 md:h-16" />
                    </motion.div>

                    <motion.span
                        initial={{ opacity: 0, y: -30, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="text-[90px] sm:text-[140px] md:text-[170px] lg:text-[200px] font-black text-[#331B0E] leading-none tracking-tighter"
                    >
                        4
                    </motion.span>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                        transition={{
                            opacity: { duration: 0.5 },
                            scale: { type: "spring", stiffness: 220, damping: 12 },
                            y: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
                        }}
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        className="w-18 h-24 sm:w-26 sm:h-36 md:w-30 md:h-40 bg-[#FA4F00] rounded-full flex items-center justify-center mx-1 sm:mx-2 shadow-md my-auto cursor-pointer"
                    >
                        <motion.div
                            animate={{ rotate: [-6, 6, -6] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FaPawIcon className="text-white text-3xl sm:text-5xl md:text-6xl" />
                        </motion.div>
                    </motion.div>

                    <motion.span
                        initial={{ opacity: 0, y: -30, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
                        className="text-[90px] sm:text-[140px] md:text-[170px] lg:text-[200px] font-black text-[#331B0E] leading-none tracking-tighter"
                    >
                        4
                    </motion.span>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: 10 }}
                        animate={{ opacity: [0.7, 1, 0.7], scale: [0.95, 1.1, 0.95], x: 0 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                        className="my-auto ml-1 sm:ml-2"
                    >
                        <RightSparkle className="w-6 h-10 sm:w-8 sm:h-14 md:w-9 md:h-16" />
                    </motion.div>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#331B0E] mt-4 sm:mt-6 mb-3 tracking-tight"
                >
                    Oops! Page Not Found
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="text-[#6E5D53] text-sm sm:text-base leading-relaxed max-w-md mx-auto"
                >
                    We can&apos;t seem to find the page you&apos;re looking for.
                    <br className="hidden sm:inline" />
                    It might have been moved, deleted, or you entered the wrong URL.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/"
                        className="mt-8 inline-flex items-center gap-2 bg-[#FA4F00] hover:bg-[#E04400] text-white font-medium text-sm sm:text-base px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-colors duration-200"
                    >
                        <Home className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                        <span>Go Back Home</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
