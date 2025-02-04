import type { NextConfig } from "next";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig: NextConfig = {
  /* config options here */
};

async function setupDevCloudflarePlatform() {
  await setupDevPlatform();
}  

setupDevCloudflarePlatform()

export default nextConfig;
