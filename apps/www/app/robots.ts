import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/", // Homepage
          "/docs/", // Documentation
        ],
        disallow: [
          "/private/", // Private routes
          "/api/", // API routes
        ],
      },
    ],
    sitemap: "https://legacy.skiper-ui.com/sitemap.xml",
  }
}
