import type { AnnouncementItem } from '../types/content'

export const announcements: AnnouncementItem[] = [
  {
    id: 'announce-revision-drive',
    title: { en: 'Revision drive for A/L Physics', si: 'උසස් පෙළ භෞතික විද්‍යාව සමාලෝචන වැඩසටහන' },
    description: {
      en: 'A focused revision support cycle designed for students preparing for the upcoming examination period.',
      si: 'ඉදිරි විභාග කාලයට සූදානම් වන සිසුන් සඳහා සෘජු සමාලෝචන සහාය වැඩසටහන.',
    },
    date: '2026-01-15',
    category: 'Revision',
    image: '/images/gallery-2.svg',
    active: true,
  },
  {
    id: 'announce-paper-class',
    title: { en: 'Paper class registration open', si: 'ප්‍රශ්න පන්තියට ලියාපදිංචිය විවෘතයි' },
    description: {
      en: 'Students can join structured practice sessions focused on problem-solving and exam technique.',
      si: 'ප්‍රශ්න විසඳුම් සහ විභාග කුසලතා වැඩි දියුණු කිරීම උදෙසා ව්‍යුහගත පුහුණුවලට එක්විය හැක.',
    },
    date: '2026-02-02',
    category: 'Classes',
    image: '/images/gallery-3.svg',
    active: true,
  },
  {
    id: 'announce-resource-library',
    title: { en: 'Updated resource library', si: 'යාවත්කාලීන කළ සම්පත් ගබඩාව' },
    description: {
      en: 'New notes, model questions, and revision summaries are now available in the resource section.',
      si: 'නව සටහන්, මොඩල් ප්‍රශ්න සහ සමාලෝචන සාරාංශ සම්පත් කොටසේ දැන් ලබා ගත හැක.',
    },
    date: '2026-03-11',
    category: 'Resources',
    image: '/images/gallery-4.svg',
    active: true,
  },
]
