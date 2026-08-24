import type { AdvertisementItem } from '../../types/content'

export const sampleAds: AdvertisementItem[] = [
  {
    id: 'ad-theory-2027',
    type: 'image',
    mediaSrc: '/images/ad-theory.svg',
    posterSrc: '/images/ad-theory.svg',
    title: { en: '2027 A/L Physics — Theory Classes', si: '2027 උ/පෙ භෞතික විද්‍යාව — සම්මත පන්ති' },
    description: {
      en: 'Build a full foundation in A/L Physics with structured, concept-led learning.',
      si: 'සංකල්ප මත පදනම් වූ ව්‍යුහගත ඉගෙනීමෙන් උසස් පෙළ භෞතික විද්‍යාවේ පදනම ගොඩනඟන්න.',
    },
    ctaText: { en: 'Learn more', si: 'තව දැනගන්න' },
    ctaLink: '/classes',
    duration: 7,
    active: true,
  },
  {
    id: 'ad-revision-2026',
    type: 'image',
    mediaSrc: '/images/ad-revision.svg',
    posterSrc: '/images/ad-revision.svg',
    title: { en: '2026 A/L Physics — Revision Classes', si: '2026 උ/පෙ භෞතික විද්‍යාව — සමාලෝචන පන්ති' },
    description: {
      en: 'Use focused revision sessions to sharpen the concepts you already know.',
      si: 'දැන ඇති සංකල්ප තව දුරටත් පදනම් කරගනිමින් සෘජු සමාලෝචන පන්ති භාවිතා කරන්න.',
    },
    ctaText: { en: 'View classes', si: 'පන්ති බලන්න' },
    ctaLink: '/classes',
    duration: 7,
    active: true,
  },
  {
    id: 'ad-paper-class',
    type: 'video',
    mediaSrc: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    posterSrc: '/images/ad-paper-poster.svg',
    title: { en: 'Physics Paper Class — Problem-solving focus', si: 'භෞතික විද්‍යා ප්‍රශ්න පන්තිය — ගැටලු විසඳුම් අවධානය' },
    description: {
      en: 'Practice technique, strengthen accuracy, and develop more confident exam thinking.',
      si: 'ප්‍රශ්න විසඳුමේ කුසලතා, නිවැරදි බව සහ විභාග චින්තනය වැඩි දියුණු කරන්න.',
    },
    ctaText: { en: 'Join paper class', si: 'ප්‍රශ්න පන්තියට එක්වන්න' },
    ctaLink: '/contact',
    duration: 9,
    active: true,
  },
]

export default sampleAds
