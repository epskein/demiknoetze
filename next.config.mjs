/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Derive base path from env so it works for any repo name on GitHub Pages
  // Example: set NEXT_PUBLIC_BASE_PATH=/your-repo-name (with or without leading slash)
  basePath:
    process.env.NODE_ENV === 'production'
      ? (() => {
          // Preserve empty string (user site/custom domain) if explicitly provided
          const envVal = process.env.NEXT_PUBLIC_BASE_PATH
          // On Netlify builds, default to root (no base path)
          if (typeof envVal !== 'string' && process.env.NETLIFY === 'true') {
            return ''
          }
          const fromEnv = typeof envVal === 'string' ? envVal : 'demiknoetze'
          if (fromEnv === '') return ''
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
