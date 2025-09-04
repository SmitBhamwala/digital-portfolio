export default async function sitemap() {
  const baseUrl = "https://smitbhamwala.vercel.app";
  const currentDate = new Date();

  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0
    }
  ];

  return routes;
}
