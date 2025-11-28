/** @type {import('next').NextConfig} */
const repoName = 'my-portfolio'; // your correct repo name

const nextConfig = {
  output: 'export',

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
