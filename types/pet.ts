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

export interface PetData {
  brand: BrandData;
  navbar: NavbarData;
  footer: FooterData;
}
