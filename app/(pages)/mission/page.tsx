import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";


export default function MissionPage() {
    return (
        <main className="w-full min-h-screen bg-[#FDF8F3]">
            <SubBanner pageKey="mission" />
        </main>
    );
}
