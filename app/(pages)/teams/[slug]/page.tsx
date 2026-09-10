import React from "react";
import { notFound } from "next/navigation";
import petDataJson from "@/data/pet.json";
import type { PetData } from "@/types/pet";
import SubBanner from "@/app/components/ui/subbanner";
import TeamDetails from "@/app/components/layout/teamdetails/teamdetails";

const petData: PetData = petDataJson as unknown as PetData;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return (petData.teamDetails || []).map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const member = petData.teamDetails?.find((m) => m.slug === slug);

  if (!member) {
    return {
      title: "Team Member Not Found",
    };
  }

  return {
    title: `${member.name} - ${member.role} | Dodo Cares`,
    description: member.shortBio,
  };
}

export default async function TeamDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const member = petData.teamDetails?.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <SubBanner
        title={member.title}
        bgImage={member.bgImage || "/subbanner.jpg"}
        breadcrumbs={member.breadcrumbs}
      />
      <TeamDetails data={member} />
    </main>
  );
}
