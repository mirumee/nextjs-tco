import type { NextConfig } from "next";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'static.colourlovers.com',
      },
    ],
  },
  /* config options here */
};

async function setupDevCloudflarePlatform() {
  await setupDevPlatform();
}

setupDevCloudflarePlatform()

export default nextConfig;
