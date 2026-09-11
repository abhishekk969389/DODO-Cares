import React from "react";
import { notFound } from "next/navigation";
import SubBanner from "@/app/components/ui/subbanner";
import ServiceHero from "@/app/components/layout/servicedetails/servicehero";
import ServiceIncluded from "@/app/components/layout/servicedetails/serviceincluded";
import ServiceProcess from "@/app/components/layout/servicedetails/serviceprocess";
import { getServiceBySlug, getServiceSlugs } from "@/data/index";
import type { ServiceDetailsItem as ServiceDetailItem } from "@/data/index";


interface ServiceDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const serviceDetails = getServiceSlugs() || [];
    return serviceDetails.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: "Service Detail - Dodo Cares",
        };
    }

    return {
        title: `${service.titlePrefix || ""} ${service.titleHighlight || service.title} - Dodo Cares`,
        description: service.description,
    };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
    const { slug } = await params;
    const serviceDetails = getServiceSlugs() || [];
    const service = getServiceBySlug(slug) || serviceDetails[0];

    if (!service) {
        notFound();
    }

    const breadcrumbs = service.breadcrumbs || [
        { label: "Home", href: "/" },
        { label: "Service Detail", active: true },
    ];

    return (
        <main className="min-h-screen">
            {/* SUBBANNER WITH BREADCRUMBS: Home / Service Detail */}
            <SubBanner
                title={service.title || "Service Detail"}
                breadcrumbs={breadcrumbs}
                bgImage={service.bgImage}
            />

            {/* MAIN SERVICE DETAIL CONTENT (3 COMPONENTS) */}
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 lg:mt-14">
                {/* 1. HERO & ENQUIRE NOW FORM */}
                <ServiceHero data={service} />

                {/* 2. WHAT'S INCLUDED TABS & BENEFITS */}
                <ServiceIncluded data={service} />

                {/* 3. GROOMING PROCESS TIMELINE */}
                <ServiceProcess data={service} />
            </div>
        </main>
    );
}
