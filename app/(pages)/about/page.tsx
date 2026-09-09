import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import AboutSec from "@/app/components/layout/about/aboutsec";
import Teams from "@/app/components/homelayout/teams";
import WhyChooseUs from "@/app/components/homelayout/whychooseus";
import Works from "@/app/components/homelayout/works";


export default function AboutPage() {
    return (
        <main className="w-full min-h-screen">
            <SubBanner pageKey="about" />
            <AboutSec />
            <Works/>
            <Teams/>
            <WhyChooseUs/>
        </main>
    );
}


