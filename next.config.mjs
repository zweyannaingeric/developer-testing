/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["loremflickr.com"],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*",
      },
    ];
  },
};

export default nextConfig;
