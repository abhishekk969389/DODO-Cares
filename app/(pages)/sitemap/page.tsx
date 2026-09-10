import SubBanner from "@/app/components/ui/subbanner";
import SitemapSec from "@/app/components/layout/sitemap/sitemapsec";

export default function Sitemap() {
  return (
    <main className="w-full min-h-screen">
      <SubBanner pageKey="sitemap" />
      <SitemapSec />
    </main>
  );
}


