/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  images: {
    domains: ['placeholder.svg'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

export default nextConfig
