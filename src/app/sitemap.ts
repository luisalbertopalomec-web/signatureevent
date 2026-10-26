import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://signaturegroup.mx/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}