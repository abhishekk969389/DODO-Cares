import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import PriceSec from "@/app/components/layout/pricing/pricesec";

export default function PricingPage() {
    return (
        <main className="w-full min-h-screen">
            <SubBanner pageKey="pricing" />
            <PriceSec />
        </main>
    );
}
