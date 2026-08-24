export type Lang = 'en' | 'si'

export type LangString = {
  en: string
  si: string
}

export interface AdvertisementItem {
  id: string
  type: 'image' | 'video'
  mediaSrc: string
  posterSrc?: string
  title: LangString
  description: LangString
  ctaText: LangString
  ctaLink: string
  duration: number
  active: boolean
}

export interface ClassItem {
  id: string
  title: LangString
  description: LangString
  type: string
  year: string
  cta: LangString
  link: string
}

export interface ResourceItem {
  id: string
  title: LangString
  category: 'Notes' | 'Past Papers' | 'Model Papers' | 'Video Lessons'
  description: LangString
  action: LangString
  link: string
}

export interface AnnouncementItem {
  id: string
  title: LangString
  description: LangString
  date: string
  image: string
  category: string
  active: boolean
}

export interface GalleryItem {
  id: string
  title: LangString
  image: string
  alt: LangString
}
