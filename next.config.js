/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "**",
         },
      ],
   },
   async rewrites() {
      return [
         {
            source: "/api/v1/:path*",
            destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
         },
      ];
   },
};

module.exports = nextConfig;
