import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import Services from "@/app/components/homelayout/services";
import ServiceArea from "@/app/components/homelayout/servicearea";


export default function ServicesPage() {
    return (
        <main className="w-full min-h-screen">
            <SubBanner pageKey="services" />
            <Services />
        </main>
    );
}


