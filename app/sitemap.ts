import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://sewamobilsolo.com",
      lastModified: "2025-07-09T13:30:00Z",
      changeFrequency: "hourly", // sebelumnya "minutely"
      priority: 1,
    },
    {
      url: "https://sewamobilsolo.com/#cars",
      lastModified: "2025-07-09T13:30:00Z",
      changeFrequency: "hourly", // sebelumnya "minutely"
      priority: 1,
    },
        {
      url: "https://sewamobilsolo.com/#testimonials",
      lastModified: "2025-07-09T13:30:00Z",
      changeFrequency: "hourly", // sebelumnya "minutely"
      priority: 1,
    },
  ];
}
