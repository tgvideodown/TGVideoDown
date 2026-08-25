/** Site-wide support contact (also in runtimeConfig.public.supportEmail) */
export function useSupportEmail() {
  const config = useRuntimeConfig()
  const email = computed(() => config.public.supportEmail || 'support@tgvideodown.com')
  const mailto = computed(() => `mailto:${email.value}`)
  return { email, mailto }
}
