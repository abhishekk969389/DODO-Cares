import SubBanner from "@/app/components/ui/subbanner";
import TermsConSec from "@/app/components/layout/termscondition/termsconsec";

export default function TermsAndConditionPage() {
  return (
    <main className="w-full min-h-screen">
      <SubBanner pageKey="termscondition" />
      <TermsConSec />
    </main>
  );
}
