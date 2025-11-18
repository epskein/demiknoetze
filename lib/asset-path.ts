/**
 * Get the full asset path with basePath for production
 * In development, returns the path as-is
 * In production (GitHub Pages), adds the basePath prefix
 */
export const getAssetPath = (path: string): string => {
  const rawBase =
    process.env.NODE_ENV === 'production'
      ? (() => {
          // Preserve empty string (user site/custom domain) if explicitly provided
          const envVal = process.env.NEXT_PUBLIC_BASE_PATH
          // On Netlify builds, default to root (no base path)
          if (typeof envVal !== 'string' && process.env.NETLIFY === 'true') {
            return ''
          }
          return typeof envVal === 'string' ? envVal : 'demiknoetze'
        })()
      : ''

  const basePath = (() => {
    if (rawBase === '') return ''
    const withLeading = rawBase.startsWith('/') ? rawBase : `/${rawBase}`
    const withoutTrailing = withLeading.endsWith('/') ? withLeading.slice(0, -1) : withLeading
    return withoutTrailing
  })()
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  return `${basePath}${normalizedPath}`
}

