/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.greatdeals.com.sg',
      'th.bing.com',
      'plus.unsplash.com',
      'img.freepik.com'
    ],
  },
};

export default nextConfig;
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
