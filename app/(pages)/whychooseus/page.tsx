import SubBanner from "@/app/components/ui/subbanner";
import WhyChooseUs from "@/app/components/homelayout/whychooseus";


export default function WhyChooseUsPage() {
    return (
        <main className="w-full min-h-screen">
            <SubBanner pageKey="whychooseus" />
            <WhyChooseUs />
        </main>
    );
}
