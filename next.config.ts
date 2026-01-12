import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  
  trailingSlash: true,
  basePath: "/ar-navigation-senior-project",
  

  images: {
    unoptimized: true,
  },
};

export default nextConfig;