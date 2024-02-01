/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    typedRoutes: true,
  },
  env: {
    siteTitle: 'North Boutique Ltd.',
    siteDescription: 'Premier Tech and Design Consulting',
    siteKeywords: 'North Boutqiue Design Development Tech Consulting',
    siteUrl: 'https://north.boutique',
    siteImagePreviewUrl: '/assets/img/sitepreview.png',
  },
};

export default nextConfig;
