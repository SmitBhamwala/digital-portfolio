export default async function sitemap() {
  const myXML = [
    {
      url: "https://smitbhamwala.vercel.app",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    }
  ];

  return myXML;
}
