import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import PartnerSec from "@/app/components/layout/partners/partnersec";
import PartnerCTA from "@/app/components/layout/partners/cta";


export default function PartnersPage() {
  return (
    <main className="w-full min-h-screen">
      <SubBanner pageKey="partners" />
      <PartnerSec />
      <PartnerCTA />
    </main>
  );
}
