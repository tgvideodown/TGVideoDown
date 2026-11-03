import { withStoreUtm } from '~/utils/storeUtm'

/** Telegram plugin Chrome Web Store URL with fixed UTM. */
export function useExtensionStoreUrl() {
  const config = useRuntimeConfig()
  return computed(() => withStoreUtm(config.public.extensionStoreUrl))
}
