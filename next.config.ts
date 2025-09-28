import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "file3.qdnd.vn",
      },
      {
        protocol: "https",
        hostname: "vov.vn",
      },
      {
        protocol: "https",
        hostname: "bcp.cdnchinhphu.vn",
      },
      {
        protocol: "https",
        hostname: "vufo.org.vn",
      },
      {
        protocol: "https",
        hostname: "vstatic.vietnam.vn",
      },
      {
        protocol: "https",
        hostname: "cdn.britannica.com",
      },
      {
        protocol: "https",
        hostname: "th.bing.com",
      },
      {
        protocol: "https",
        hostname: "e7.pngegg.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "nghiencuuquocte.org",
      },
    ],
  },
};

export default nextConfig;
