/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["naszsklep-api.vercel.app"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
