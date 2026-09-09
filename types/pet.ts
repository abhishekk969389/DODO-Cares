export interface NavLink {
  id: string;
  label: string;
  href: string;
  active?: boolean;
}

export interface CtaButton {
  label: string;
  href: string;
}

export interface LogoConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface NavbarData {
  logo: LogoConfig;
  navLinks: NavLink[];
  ctaButton: CtaButton;
}

export interface BrandData {
  name: string;
  tagline: string;
  logo: string;
}

// Footer Types
export interface FooterFeature {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkSection {
  title: string;
  links: FooterLink[];
}

export interface FooterContactAddress {
  title: string;
  lines: string[];
}

export interface FooterContactPhone {
  title: string;
  numbers: string[];
}

export interface FooterContactEmail {
  title: string;
  emails: string[];
}

export interface FooterContactInfo {
  title: string;
  address: FooterContactAddress;
  phone: FooterContactPhone;
  email: FooterContactEmail;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface FooterBottomBar {
  copyright: string;
  loveText: string;
  followText: string;
  socialLinks: SocialLink[];
}

export interface FooterBrandData {
  logo: string;
  alt: string;
  description: string;
  features: FooterFeature[];
}

export interface FooterData {
  brand: FooterBrandData;
  quickLinks: FooterLinkSection;
  ourServices: FooterLinkSection;
  resources: FooterLinkSection;
  contactInfo: FooterContactInfo;
  bottomBar: FooterBottomBar;
}

export interface AboutData {
  badge: string;
  title: string;
  paragraphs: string[];
  experienceYears: string;
  experienceTitle: string;
  mainImage: string;
  secondaryImage: string;
  btnText: string;
  btnLink: string;
}

export interface ServiceLocation {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface ServiceStat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export type StatisticItem = ServiceStat;

export interface StatisticsProps {
  stats?: StatisticItem[];
  className?: string;
}

export interface ServiceAreasData {
  badge: string;
  titlePrefix: string;
  titleMiddle: string;
  titleSuffix: string;
  description: string;
  locations: ServiceLocation[];
  stats: ServiceStat[];
}

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  badgeIcon: string;
  link: string;
}

export interface OurServicesData {
  badge: string;
  titlePrefix: string;
  titleMiddle: string;
  titleHighlight: string;
  description: string;
  services: ServiceCardItem[];
}

export interface WhyChooseFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface WhyChooseBottomBanner {
  title: string;
  subtitle: string;
  icon: string;
  btnText: string;
  btnLink: string;
}

export interface WhyChooseUsData {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  mainImage: string;
  btnText: string;
  btnLink: string;
  features: WhyChooseFeature[];
  bottomBanner: WhyChooseBottomBanner;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  image: string;
  link?: string;
}

export interface OurTeamData {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  members: TeamMemberItem[];
}

export interface BlogPostItem {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

export interface OurBlogsData {
  badge?: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  posts: BlogPostItem[];
}

export interface BlogSecData {
  badge?: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  posts: BlogPostItem[];
}

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

export interface PartnerSecData {
  badge?: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  partners: PartnerItem[];
}

export interface PartnerCtaData {
  title: string;
  description: string;
  icon: string;
  btnText: string;
  btnLink: string;
  btnIcon?: string;
}

export interface ContactInfoCard {
  id: string;
  title: string;
  value: string;
  subtext?: string;
  icon: string;
  iconBgColor?: "orange" | "dark";
}

export interface ContactFormFieldLabels {
  namePlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  subjectOptions: string[];
  messagePlaceholder: string;
  submitBtnText: string;
}

export interface ContactSecData {
  touchTitle: string;
  infoCards: ContactInfoCard[];
  formTitle: string;
  formSubtitle: string;
  form: ContactFormFieldLabels;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface SubBannerData {
  title: string;
  bgImage: string;
  breadcrumbs: BreadcrumbItem[];
}

export interface SubBannersData {
  about: SubBannerData;
  mission?: SubBannerData;
  whychooseus?: SubBannerData;
  pricing?: SubBannerData;
  servicelocation?: SubBannerData;
  appointment?: SubBannerData;
  services?: SubBannerData;
  blog?: SubBannerData;
  contact?: SubBannerData;
  gallery?: SubBannerData;
  testimonial?: SubBannerData;
  faq?: SubBannerData;
  [key: string]: SubBannerData | undefined;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FaqSidebarInfo {
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  image?: string;
  phone?: string;
  email?: string;
  address?: string;
  hours?: string;
}

export interface FaqSecData {
  badge?: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  sidebar?: FaqSidebarInfo;
  faqs: FaqItem[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  rating: number;
  comment: string;
  avatar: string;
  petName?: string;
}

export interface TestimonialSecData {
  badge?: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  testimonials: TestimonialItem[];
}

export interface WorkStepItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface HowItWorksData {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  steps: WorkStepItem[];
}

export interface PricingPackageItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  price: string;
  period: string;
  currency: string;
  isPopular?: boolean;
  popularBadgeText?: string;
  features: string[];
  duration: string;
  btnText: string;
  btnLink: string;
}

export interface PricingTrustItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingSecData {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  packages: PricingPackageItem[];
  trustFeatures: PricingTrustItem[];
}

export interface HelpContactItem {
  id: string;
  title: string;
  value: string;
  lines?: string[];
  icon: string;
}

export interface AppointmentHelpBox {
  title: string;
  description: string;
  icon: string;
}

export interface AppointmentSidebar {
  title: string;
  subtitle: string;
  contacts: HelpContactItem[];
  careBox: AppointmentHelpBox;
}

export interface AppointmentFormFields {
  fullNameLabel: string;
  fullNamePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  petNameLabel: string;
  petNamePlaceholder: string;
  petTypeLabel: string;
  petTypePlaceholder: string;
  petTypeOptions: string[];
  serviceLabel: string;
  servicePlaceholder: string;
  serviceOptions: string[];
  dateLabel: string;
  datePlaceholder: string;
  timeLabel: string;
  timePlaceholder: string;
  timeOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitBtnText: string;
  privacyNote: string;
}

export interface AppointmentSecData {
  badge: string;
  title: string;
  description: string;
  formTitle: string;
  form: AppointmentFormFields;
  sidebar: AppointmentSidebar;
}

export interface GalleryCategory {
  id: string;
  name: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface GallerySecData {
  badge?: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  categories: GalleryCategory[];
  items: GalleryItem[];
}

export interface VideoItem {
  id: string;
  title: string;
  category?: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
}

export interface VideoGalleryData {
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  videos: VideoItem[];
}

export interface DisclaimerPoint {
  id: number | string;
  title: string;
  content: string;
}

export interface DisclaimerSecData {
  badge?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  lastUpdated?: string;
  intro?: string;
  sections: DisclaimerPoint[];
  footerNote?: string;
  footerSubnote?: string;
}

export interface CookiePolicySecData {
  badge?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  lastUpdated?: string;
  intro?: string;
  sections: DisclaimerPoint[];
  footerNote?: string;
  footerSubnote?: string;
}

export interface TermsConditionSecData {
  badge?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  lastUpdated?: string;
  intro?: string;
  sections: DisclaimerPoint[];
  footerNote?: string;
  footerSubnote?: string;
}

export interface PetData {
  brand: BrandData;
  navbar: NavbarData;
  banner: BannerData;
  subBanners?: SubBannersData;
  about: AboutData;
  serviceAreas?: ServiceAreasData;
  ourServices?: OurServicesData;
  whyChooseUs?: WhyChooseUsData;
  howItWorks?: HowItWorksData;
  pricingSec?: PricingSecData;
  appointmentSec?: AppointmentSecData;
  gallerySec?: GallerySecData;
  videoGallery?: VideoGalleryData;
  testimonialSec?: TestimonialSecData;
  faqSec?: FaqSecData;
  disclaimerSec?: DisclaimerSecData;
  cookiePolicySec?: CookiePolicySecData;
  termsConditionSec?: TermsConditionSecData;
  ourTeam?: OurTeamData;
  ourBlogs?: OurBlogsData;
  blogSec?: BlogSecData;
  partnerSec?: PartnerSecData;
  partnerCta?: PartnerCtaData;
  contactSec?: ContactSecData;
  footer: FooterData;
}


export interface FeatureItem {
  id: string;
  title: string;
  icon: string;
}

export interface BannerData {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  bgImage: string;
  bgImages?: string[];
  features: FeatureItem[];
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}