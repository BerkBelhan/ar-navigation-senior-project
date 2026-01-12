import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  

  basePath: "/ar-navigation-senior-project",
  
  assetPrefix: "/ar-navigation-senior-project/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;