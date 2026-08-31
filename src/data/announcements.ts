  import type { AnnouncementItem } from '../types/content'

export const announcements: AnnouncementItem[] = [
  {
    id: 'announce-revision-drive',
    title: { en: '2027 Smart Revision registration open', si: '2027 Smart Revision ලියාපදිංචිය විවෘත​යි' },
    description: {
      en: 'Join the Smart program of the 2027 Smart Revision today. Classes will begin from early September.',
      si: '2027 Smart Revision එකේ Smart වැඩපිලිවෙල හා අදම සම්බන්ධ වන්න. සැප්තැම්බර් මුල සිට පන්ති ආරම්භ වේ.',
    },
    date: '2026-08-31',
    category: 'Revision',
    image: '/images/gallery-2.svg',
    active: true,
  },
  {
    id: 'announce-paper-class',
    title: { en: 'Paper Class registration open', si: 'Paper Class ලියාපදිංචිය විවෘතයි' },
    description: {
      en: 'The best Paper class to familiarize you with the exam pattern will start from early September via Online.',
      si: 'විභාග රටාවට හුරු කරවන හොඳම Paper පන්තිය සැප්තැම්බර් මුල සිට ආරම්භ වේ. ලංකාවටම Online...',
    },
    date: '2026-08-31',
    category: 'Classes',
    image: '/images/gallery-3.svg',
    active: true,
  },
  {
    id: 'announce-resource-library',
    title: { en: '2027 | 2028 Theory', si: '2027 | 2028 සිද්ධාන්​ත' },
    description: {
      en: 'New students can join for new units.',
      si: 'නව ඒකක සඳහා නවක සිසුන්ට සම්බන්ධ විය හැක.',
    },
    date: '2026-08-11',
    category: 'Classes',
    image: '/images/gallery-4.svg',
    active: true,
  },
]
