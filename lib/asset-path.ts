/**
 * Get the full asset path with basePath for production
 * In development, returns the path as-is
 * In production (GitHub Pages), adds the basePath prefix
 */
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/my-v0-project' : ''
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  return `${basePath}${normalizedPath}`
}

