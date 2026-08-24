export type Advertisement = {
  id: string
  type: 'image' | 'video'
  mediaSrc: string
  posterSrc?: string
  title: { en: string; si: string }
  description?: { en: string; si: string }
  ctaText?: { en: string; si: string }
  ctaLink?: string
  duration?: number
  active?: boolean
}
