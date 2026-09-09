import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import TestimonialSec from "@/app/components/layout/testimonial/testimonialsec";


export default function TestimonialPage() {
  return (
    <main className="w-full min-h-screen">
      <SubBanner pageKey="testimonial" />
      <TestimonialSec />
    </main>
  );
}
