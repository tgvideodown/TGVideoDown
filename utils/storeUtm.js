/** Append a fixed UTM tag for all site → Chrome Web Store install links. */
export function withStoreUtm(rawUrl) {
  if (!rawUrl) return rawUrl
  try {
    const url = new URL(rawUrl)
    url.searchParams.set('utm_source', 'tgvideodown')
    return url.toString()
  } catch {
    return rawUrl
  }
}
