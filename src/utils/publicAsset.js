// Prefixes a root-relative path (e.g. "/images/foo.png") with Vue CLI's publicPath,
// so assets served from `public/` resolve correctly when the app is deployed under a subpath (GitHub Pages).
export function publicAsset(path) {
  if (!path) return path
  const base = process.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
