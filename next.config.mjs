/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com"
			},
			{
				protocol: "https",
				hostname: "media.licdn.com"
			}
		]
	}
};

export default nextConfig;
