/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "nfkwtcbqtysabrfszmdq.supabase.co",
			},
		],
	},
};

export default nextConfig;
