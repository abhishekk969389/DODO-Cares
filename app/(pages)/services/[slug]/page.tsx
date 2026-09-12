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

    const serviceTitle = service.titlePrefix && service.titleHighlight
        ? `${service.titlePrefix} ${service.titleHighlight}`.trim()
        : service.title && service.title !== "Service Detail"
        ? service.title
        : service.titleHighlight || service.title || "Service Detail";

    return {
        title: `${serviceTitle} - Dodo Cares`,
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

    const serviceTitle = service.titlePrefix && service.titleHighlight
        ? `${service.titlePrefix} ${service.titleHighlight}`.trim()
        : service.title && service.title !== "Service Detail"
        ? service.title
        : service.titleHighlight || service.title || "Service Detail";

    const breadcrumbs = service.breadcrumbs?.map((b) => ({
        ...b,
        label: b.active ? serviceTitle : b.label,
    })) || [
        { label: "Home", href: "/" },
        { label: serviceTitle, active: true },
    ];

    return (
        <main className="min-h-screen">
            <SubBanner
                title={serviceTitle}
                breadcrumbs={breadcrumbs}
                bgImage={service.bgImage}
            />
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 lg:mt-14">
                <ServiceHero data={service} />
                <ServiceIncluded data={service} />
                <ServiceProcess data={service} />
            </div>
        </main>
    );
}
