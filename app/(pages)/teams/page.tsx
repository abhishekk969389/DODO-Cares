import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import Teams from "@/app/components/homelayout/teams";


export default function TeamsPage() {
    return (
        <main className="w-full min-h-screen">
            <SubBanner title="Our Team" pageKey="about" />
            <Teams />
        </main>
    );
}

