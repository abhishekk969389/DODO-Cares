import SubBanner from "@/app/components/ui/subbanner";
import CookiePolicySec from "@/app/components/layout/cookiepolicy/cookiepolicy";

export default function CookiePolicyPage() {
  return (
    <main className="w-full min-h-screen">
      <SubBanner pageKey="cookiepolicy" />
      <CookiePolicySec />
    </main>
  );
}
