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
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  posts: BlogPostItem[];
}

export interface PetData {
  brand: BrandData;
  navbar: NavbarData;
  banner: BannerData;
  about: AboutData;
  serviceAreas?: ServiceAreasData;
  ourServices?: OurServicesData;
  whyChooseUs?: WhyChooseUsData;
  ourTeam?: OurTeamData;
  ourBlogs?: OurBlogsData;
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