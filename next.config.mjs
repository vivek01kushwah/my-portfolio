/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
