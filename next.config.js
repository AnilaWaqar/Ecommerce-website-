/** @type {import('next').NextConfig} */
module.exports = {
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
