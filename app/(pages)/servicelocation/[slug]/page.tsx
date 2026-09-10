import React from "react";
import { notFound } from "next/navigation";
import petDataJson from "@/data/pet.json";
import type { PetData } from "@/types/pet";
import SubBanner from "@/app/components/ui/subbanner";
import LocationDetails from "@/app/components/layout/locationdetails/details";

const petData: PetData = petDataJson as unknown as PetData;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return (petData.locationDetails || []).map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const location = petData.locationDetails?.find((l) => l.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${location.name} | Dodo Cares`,
    description: location.description,
  };
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const location = petData.locationDetails?.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <SubBanner
        title={location.title || "Location Detail"}
        bgImage={location.bgImage || "/subbanner.jpg"}
        breadcrumbs={location.breadcrumbs}
      />
      <LocationDetails data={location} />
    </main>
  );
}
