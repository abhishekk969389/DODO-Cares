import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import AppSection from "@/app/components/layout/appointment/appsection";


export default function AppointmentPage() {
  return (
    <main className="w-full min-h-screen">
      <SubBanner pageKey="appointment" />
      <AppSection />
    </main>
  );
}
