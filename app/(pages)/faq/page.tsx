import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import FaqSec from "@/app/components/layout/faq/faqsec";


export default function FaqPage() {
  return (
    <main className="w-full min-h-screen">
      <SubBanner pageKey="faq" />
      <FaqSec />
    </main>
  );
}
