/** @type {import('next').NextConfig} */

const i18n = {
  locales: ['en', 'ar'],
  defaultLocale: 'en',
};

const nextConfig = {
    i18n,
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
