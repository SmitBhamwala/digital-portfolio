export default function robots() {
	return {
		rules: [
			{
				userAgent: "*",
				allow: ["/"],
				disallow: ["/api/*", "/_next/*", "/favicon.ico"]
			}
		],
		sitemap: "https://smitbhamwala.vercel.app/sitemap.xml"
	};
}
