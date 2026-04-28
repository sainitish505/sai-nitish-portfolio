import type { Metadata } from "next";
import { profile, projects, skills, teaching } from "@/data/portfolio";

export const siteUrl = "https://bimari.org";
export const siteName = "Sai Nitish Bimari Portfolio";

export const seoKeywords = [
  "Sai Nitish Bimari",
  "Sai Nitish",
  "Bimari",
  "AI Product Engineer",
  "Full Stack Developer",
  "Next.js Developer",
  "React Developer",
  "AI Engineer",
  "Technology Lead",
  "Amealio",
  "YouTube Autopilot",
  "Sales Inventory Management",
  "Oklahoma Christian University",
];

export const defaultDescription =
  "Official portfolio of Sai Nitish Bimari, an AI Product Engineer building AI products, full-stack systems, operational platforms, Amealio technology leadership work, Sales & Inventory Management software, YouTube Autopilot, and applied AI projects while pursuing an MS in Artificial Intelligence.";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  keywords = [],
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...seoKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: "Sai Nitish Bimari - AI Product Engineer portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#sai-nitish-bimari"),
    name: "Sai Nitish Bimari",
    alternateName: ["Sai Nitish", "Bimari"],
    url: siteUrl,
    email: profile.email,
    jobTitle: profile.title,
    description: defaultDescription,
    sameAs: [profile.linkedin, "https://github.com/sainitish505"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oklahoma",
      addressCountry: "US",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Oklahoma Christian University",
        url: "https://www.oc.edu/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Mother Theressa College of Engineering & Technology",
      },
    ],
    knowsAbout: [...new Set(skills.flatMap((group) => group.items).concat(seoKeywords))],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "AI Product Engineer",
        skills: "AI products, full-stack engineering, operational platforms, system architecture, technology leadership",
      },
      {
        "@type": "Occupation",
        name: "Tutor",
        description: teaching.summary,
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteName,
    alternateName: ["Sai Nitish Bimari", "Sai Nitish Portfolio", "Bimari Portfolio"],
    url: siteUrl,
    description: defaultDescription,
    publisher: {
      "@id": absoluteUrl("/#sai-nitish-bimari"),
    },
  };
}

export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/#profile-page"),
    url: siteUrl,
    name: "Sai Nitish Bimari - AI Product Engineer",
    description: defaultDescription,
    mainEntity: {
      "@id": absoluteUrl("/#sai-nitish-bimari"),
    },
  };
}

export function projectJsonLd(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return null;

  return {
    "@context": "https://schema.org",
    "@type": project.slug === "sales-inventory-management" || project.slug === "youtube-autopilot" ? "SoftwareApplication" : "CreativeWork",
    "@id": absoluteUrl(`/projects/${project.slug}#project`),
    name: project.title,
    url: absoluteUrl(`/projects/${project.slug}`),
    applicationCategory: project.category,
    operatingSystem: "Web",
    description: project.summary,
    creator: {
      "@id": absoluteUrl("/#sai-nitish-bimari"),
    },
    author: {
      "@id": absoluteUrl("/#sai-nitish-bimari"),
    },
    keywords: project.stack.concat(project.impact).join(", "),
    sameAs: project.links?.map((link) => link.url) ?? (project.liveUrl ? [project.liveUrl] : []),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
