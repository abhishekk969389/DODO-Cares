import React from "react";
import { notFound } from "next/navigation";
import { site as petData, getTeamMemberDetailBySlug, getTeamDetailSlugs } from "@/data/index";

import SubBanner from "@/app/components/ui/subbanner";
import TeamDetails from "@/app/components/layout/teamdetails/teamdetails";


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return (getTeamDetailSlugs() || []).map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMemberDetailBySlug(slug);

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

  const member = getTeamMemberDetailBySlug(slug);

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
