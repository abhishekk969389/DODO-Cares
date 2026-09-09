import SubBanner from "@/app/components/ui/subbanner";
import DisclaimerSec from "@/app/components/layout/disclaimer/disclaimersec";

export default function DisclaimerPage() {
  return (
    <main className="w-full min-h-screen">
      <SubBanner pageKey="disclaimer" />
      <DisclaimerSec />
    </main>
  );
}
