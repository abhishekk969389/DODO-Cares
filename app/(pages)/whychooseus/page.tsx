import SubBanner from "@/app/components/ui/subbanner";
import WhyChooseUs from "@/app/components/homelayout/whychooseus";


export default function WhyChooseUsPage() {
    return (
        <main className="w-full min-h-screen bg-[#FDF8F3]">
            <SubBanner pageKey="whychooseus" />
            <WhyChooseUs />
        </main>
    );
}
