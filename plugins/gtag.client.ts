export default defineNuxtPlugin(() => {
  const { public: pub } = useRuntimeConfig()
  const id = pub.gaId as string
  if (!id) return

  const w = window as Window & { dataLayer: unknown[]; gtag?: (...args: unknown[]) => void }
  w.dataLayer = w.dataLayer || []
  function gtag(...args: unknown[]) {
    w.dataLayer.push(args)
  }
  w.gtag = gtag

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)

  gtag('js', new Date())
  gtag('config', id)
})
