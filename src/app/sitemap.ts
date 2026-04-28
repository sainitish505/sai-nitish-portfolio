import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = ["/", "/about", "/projects", "/resume", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/projects/") ? 0.85 : 0.75,
  }));
}
