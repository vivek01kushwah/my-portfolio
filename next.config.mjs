/** @type {import('next').NextConfig} */
const repoName = 'my-portfolio';

const nextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  env: {
    NEXT_PUBLIC_BASE_PATH: `/${repoName}`,
  },
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
