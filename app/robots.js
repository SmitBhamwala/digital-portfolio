export default function robots() {
	return {
		rules: [
			{
				userAgent: "*",
				allow: ["/"],
				disallow: ["/api/*"]
			}
		],
		sitemap: "https://smitbhamwala.vercel.app/sitemap.xml"
	};
}
