/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    qualities: [75, 90],
  },
  experimental: {
    cpus: 1,
  },
  async redirects() {
    return [
      {
        source: "/staffs",
        destination: "/team",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
