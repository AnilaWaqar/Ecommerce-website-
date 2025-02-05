/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.greatdeals.com.sg',
      'th.bing.com',
      'plus.unsplash.com',
      'img.freepik.com',
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
