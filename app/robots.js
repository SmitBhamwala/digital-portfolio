export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/api/*",
          "/_next/*",
          "/favicon.ico",
          "/_vercel/*",
          "/manifest.json"
        ]
      },
      {
        userAgent: "GPTBot",
        disallow: ["/"]
      },
      {
        userAgent: "Google-Extended",
        disallow: ["/"]
      }
    ],
    sitemap: "https://smitbhamwala.vercel.app/sitemap.xml",
    host: "https://smitbhamwala.vercel.app"
  };
}
