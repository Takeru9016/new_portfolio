/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "via.placeholder.com" },
      { hostname: "source.unsplash.com" },
    ],
  },
};

export default nextConfig;
