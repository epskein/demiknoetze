/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Derive base path from env so it works for any repo name on GitHub Pages
  // Example: set NEXT_PUBLIC_BASE_PATH=/your-repo-name (with or without leading slash)
  basePath:
    process.env.NODE_ENV === 'production'
      ? (() => {
          const fromEnv = process.env.NEXT_PUBLIC_BASE_PATH || ''
          if (!fromEnv) return ''
          const withLeading = fromEnv.startsWith('/') ? fromEnv : `/${fromEnv}`
          const withoutTrailing = withLeading.endsWith('/') ? withLeading.slice(0, -1) : withLeading
          return withoutTrailing
        })()
      : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
