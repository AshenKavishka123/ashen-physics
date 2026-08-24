import type { ResourceItem } from '../types/content'

export const resourceLibrary: ResourceItem[] = [
  {
    id: 'notes-unit-1',
    title: { en: 'Electricity and Magnetism Notes', si: 'විද්‍යුත් හා චුම්බකත්ව සටහන්' },
    category: 'Notes',
    description: {
      en: 'Concise chapter notes covering core concepts, key formulas, and quick revision points.',
      si: 'ප්‍රධාන සංකල්ප, අත්‍යවශ්‍ය සූත්‍ර සහ සෘජු සමාලෝචන ලක්ෂණ ඇතුළත් සාරාංශ සටහන්.',
    },
    action: { en: 'View notes', si: 'සටහන් බලන්න' },
    link: '#',
  },
  {
    id: 'past-paper-2025',
    title: { en: '2025 Past Paper Collection', si: '2025 පැරණි ප්‍රශ්න එකතුව' },
    category: 'Past Papers',
    description: {
      en: 'Past paper examples for practice, structured review, and identifying common patterns.',
      si: 'පුහුණු කිරීම, සමාලෝචනය කිරීම සහ පොදු රටා හඳුනා ගැනීම සඳහා පැරණි ප්‍රශ්න.',
    },
    action: { en: 'Open papers', si: 'ප්‍රශ්න විවෘත කරන්න' },
    link: '#',
  },
  {
    id: 'model-paper-fluids',
    title: { en: 'Model Paper: Fluids and Waves', si: 'මොඩල් ප්‍රශ්න: ද්‍රව හා තරංග' },
    category: 'Model Papers',
    description: {
      en: 'Practice-focused question sets designed to build confidence with structured problem-solving.',
      si: 'ආකෘතිමත් ගැටලු විසඳුම මත පදනම් වූ පුහුණු ප්‍රශ්න කට්ටලයක්.',
    },
    action: { en: 'Preview model', si: 'මොඩල් පෙර දැක්ම' },
    link: '#',
  },
  {
    id: 'video-lesson-mechanics',
    title: { en: 'Mechanics Video Lesson', si: 'මැක්නික್ಸ್ වීඩියෝ පාඩම' },
    category: 'Video Lessons',
    description: {
      en: 'A visual explanation of motion, forces, and related problem-solving strategies.',
      si: 'චලනය, බල සහ ගැටලු විසඳුම් උපාය මාර්ග පිළිබඳ දෘශ්‍ය ඉගැන්වීම.',
    },
    action: { en: 'Play lesson', si: 'පාඩම කළන්න' },
    link: '#',
  },
]

export const resourceCategories = ['All', 'Notes', 'Past Papers', 'Model Papers', 'Video Lessons'] as const
