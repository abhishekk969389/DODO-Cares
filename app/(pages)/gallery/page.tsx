import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import ImageGallery from "@/app/components/layout/gallery/imagegallery";
import VideoGallery from "@/app/components/layout/gallery/videogallery";



export default function GalleryPage() {
  return (
    <main className="w-full min-h-screen">
      <SubBanner pageKey="gallery" />
      <ImageGallery />
      <VideoGallery />
    </main>
  );
}
