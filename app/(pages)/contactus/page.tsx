import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import ContactSec from "@/app/components/layout/contactus/contactsec";


export default function ContactPage() {
  return (
    <main className="w-full min-h-screen">
      <SubBanner pageKey="contactus" />
      <ContactSec />
    </main>
  );
}
