import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Google-Extended",
  "PerplexityBot",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/register", "/cart", "/wishlist"],
      },
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
