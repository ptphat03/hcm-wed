import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "i.ytimg.com",
      "www.google.com",
      "blogger.googleusercontent.com",
      "file3.qdnd.vn",
      "vov.vn",
      "bcp.cdnchinhphu.vn",
      "vufo.org.vn",
      "vstatic.vietnam.vn",
    ],
  },
};

export default nextConfig;
