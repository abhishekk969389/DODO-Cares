import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import MissionSec from "@/app/components/layout/mission/missionsec";
import MissionCta from "@/app/components/layout/mission/missioncta";
import WhyChooseUs from "@/app/components/homelayout/whychooseus";

export const metadata: Metadata = {
  title: "Vision & Mission | Dodo Cares",
  description: "Guided by love and driven by compassion, we are committed to creating a better world for pets and their families.",
};

export default function MissionPage() {
    return (
        <main className="w-full min-h-screen">
            <SubBanner pageKey="mission" />
            <MissionSec />
            <MissionCta />
            <WhyChooseUs/>
        </main>
    );
}
