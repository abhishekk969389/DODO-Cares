import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import LocationSec from "@/app/components/layout/servicelocation/locationsec";


export default function ServiceLocationPage() {
  return (
    <main className="w-full min-h-screen">
      <SubBanner pageKey="servicelocation" />
      <LocationSec />
    </main>
  );
}


