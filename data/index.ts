import petData from "./pet.json";

export type RawPetData = typeof petData;

export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

const sec = petData.DodoIndustries.sections;

export type DodoBrandData = typeof sec.Brand.variants.DodoBrand1;
export type DodoHeaderData = typeof sec.Header.variants.DodoHeader1;
export type DodoSubBannersData = typeof sec.SubBanners.variants.DodoSubBanners1;
export type DodoBannerData = typeof sec.Banner.variants.DodoBanner1;
export type BannerSlideItem = NonNullable<DodoBannerData["slides"]>[number] & {
  features?: typeof sec.Banner.variants.DodoBanner1.features;
};
export type DodoAboutSectionData = typeof sec.AboutSection.variants.DodoAboutSection1;
export type DodoServiceAreasData = typeof sec.ServiceAreas.variants.DodoServiceAreas1;
export type DodoServicesData = typeof sec.Services.variants.DodoServices1;
export type DodoWhyChooseUsData = typeof sec.WhyChooseUs.variants.DodoWhyChooseUs1;
export type DodoHowItWorksData = typeof sec.HowItWorks.variants.DodoHowItWorks1;
export type DodoPricingPageData = typeof sec.PricingPage.variants.DodoPricingPage1;
export type DodoBlogData = typeof sec.Blog.variants.DodoBlog1;
export type DodoBlogPageData = typeof sec.BlogPage.variants.DodoBlogPage1;
export type DodoAppointmentPageData = typeof sec.AppointmentPage.variants.DodoAppointmentPage1;
export type DodoGalleryData = typeof sec.Gallery.variants.DodoGallery1;
export type DodoVideoGalleryData = typeof sec.VideoGallery.variants.DodoVideoGallery1;
export type DodoPartnersPageData = typeof sec.PartnersPage.variants.DodoPartnersPage1;
export type DodoPartnersCtaData = typeof sec.PartnersCta.variants.DodoPartnersCta1;
export type DodoContactPageData = typeof sec.ContactPage.variants.DodoContactPage1;
export type DodoDisclaimerPageData = typeof sec.LegalPage.variants.DodoDisclaimerPage1;
export type DodoCookiePolicyPageData = typeof sec.LegalPage.variants.DodoCookiePolicyPage1;
export type DodoTermsConditionPageData = typeof sec.LegalPage.variants.DodoTermsConditionPage1;
export type DodoSitemapPageData = typeof sec.SitemapPage.variants.DodoSitemapPage1;
export type DodoMissionData = typeof sec.Mission.variants.DodoMission1;
export type DodoMissionCtaData = typeof sec.MissionCta.variants.DodoMissionCta1;
export type DodoTeamData = typeof sec.Team.variants.DodoTeam1;
export type DodoFooterData = typeof sec.Footer.variants.DodoFooter1;
export type DodoTestimonialData = typeof sec.Testimonial.variants.DodoTestimonial1;
export type DodoFaqData = typeof sec.Faq.variants.DodoFaq1;
export type DodoBlogSidebarData = typeof sec.BlogSidebar.variants.DodoBlogSidebar1;

export const site = {
  brand: sec.Brand.variants.DodoBrand1,
  navbar: sec.Header.variants.DodoHeader1,
  subBanners: sec.SubBanners.variants.DodoSubBanners1,
  banner: sec.Banner.variants.DodoBanner1,
  about: sec.AboutSection.variants.DodoAboutSection1,
  serviceAreas: sec.ServiceAreas.variants.DodoServiceAreas1,
  ourServices: sec.Services.variants.DodoServices1,
  whyChooseUs: sec.WhyChooseUs.variants.DodoWhyChooseUs1,
  howItWorks: sec.HowItWorks.variants.DodoHowItWorks1,
  pricingSec: sec.PricingPage.variants.DodoPricingPage1,
  ourBlogs: sec.Blog.variants.DodoBlog1,
  blogSec: sec.BlogPage.variants.DodoBlogPage1,
  appointmentSec: sec.AppointmentPage.variants.DodoAppointmentPage1,
  gallerySec: sec.Gallery.variants.DodoGallery1,
  videoGallery: sec.VideoGallery.variants.DodoVideoGallery1,
  partnerSec: sec.PartnersPage.variants.DodoPartnersPage1,
  partnerCta: sec.PartnersCta.variants.DodoPartnersCta1,
  contactSec: sec.ContactPage.variants.DodoContactPage1,
  disclaimerSec: sec.LegalPage.variants.DodoDisclaimerPage1,
  cookiePolicySec: sec.LegalPage.variants.DodoCookiePolicyPage1,
  termsConditionSec: sec.LegalPage.variants.DodoTermsConditionPage1,
  sitemapSec: sec.SitemapPage.variants.DodoSitemapPage1,
  missionSec: sec.Mission.variants.DodoMission1,
  missionCtaSec: sec.MissionCta.variants.DodoMissionCta1,
  ourTeam: sec.Team.variants.DodoTeam1,
  footer: sec.Footer.variants.DodoFooter1,
  testimonialSec: sec.Testimonial.variants.DodoTestimonial1,
  faqSec: sec.Faq.variants.DodoFaq1,
  blogSidebar: sec.BlogSidebar.variants.DodoBlogSidebar1,
  serviceDetailsSec: sec.ServiceDetails.variants.DodoServiceDetails1,
};

const serviceDetailItems = sec.ServiceDetails.variants.DodoServiceDetails1.services;
export const defaultEnquireForm = sec.ServiceDetails.variants.DodoServiceDetails1.enquireForm;
const teamDetailMembers = sec.TeamDetails.variants.DodoTeamDetails1.members;
const blogDetailPosts = sec.BlogDetails.variants.DodoBlogDetails1.posts;
const serviceAreaDetailLocations = sec.ServiceAreaDetails.variants.DodoServiceAreaDetails1.locations;

export type ServiceEnquireForm = typeof defaultEnquireForm;
export type ServiceDetailsItem = typeof serviceDetailItems[number] & {
  enquireForm?: ServiceEnquireForm;
};
export type PetTeamMemberDetail = typeof teamDetailMembers[number];
export type PetBlogDetailPost = typeof blogDetailPosts[number];
export type PetServiceAreaDetail = typeof serviceAreaDetailLocations[number];

export function getServiceBySlug(slug: string): ServiceDetailsItem | null {
  return serviceDetailItems.find((service) => service.slug === slug || service.slug?.includes(slug)) || null;
}

export function getServiceSlugs(): ServiceDetailsItem[] {
  return serviceDetailItems as unknown as ServiceDetailsItem[];
}

export function getBlogDetailBySlug(slug: string): PetBlogDetailPost | null {
  const cleanSlug = slug.replace(/^blog\//, "");
  return (
    blogDetailPosts.find(
      (post) => post.slug === cleanSlug || post.slug?.endsWith(cleanSlug),
    ) || null
  );
}

export function getBlogDetailSlugs(): PetBlogDetailPost[] {
  return blogDetailPosts as unknown as PetBlogDetailPost[];
}

export function getTeamMemberDetailBySlug(
  slug: string,
): PetTeamMemberDetail | null {
  return teamDetailMembers.find((member) => member.slug === slug) || null;
}

export function getTeamDetailSlugs(): PetTeamMemberDetail[] {
  return teamDetailMembers as unknown as PetTeamMemberDetail[];
}

export function getServiceAreaDetailBySlug(
  slug: string,
): PetServiceAreaDetail | null {
  const cleanSlug = slug.replace(/^servicelocation\//, "");
  return (
    serviceAreaDetailLocations.find(
      (loc) => loc.slug === cleanSlug || loc.slug?.endsWith(cleanSlug),
    ) || null
  );
}

export function getServiceAreaDetailSlugs(): PetServiceAreaDetail[] {
  return serviceAreaDetailLocations as unknown as PetServiceAreaDetail[];
}

export default petData;
