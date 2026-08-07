/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  //   async rewrites() {
  //     return [
  //       {
  //         source: "/api/:path*",
  //         destination: "https://idevos.id/api/:path*", // Proxy ke server API
  //       },
  //     ];
  //   },
};

module.exports = nextConfig;
