import { motion } from 'framer-motion'
import { announcements } from '../data/announcements'
import { useTranslation } from '../i18n'

const motionProps = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
}

export default function Announcements() {
  const { t } = useTranslation()

  return (
    <section className="page-section">
      <span className="eyebrow-tag">{t('announcements.title')}</span>
      <h1 className="page-title">{t('announcements.title')}</h1>
      <p className="page-subtitle">{t('announcements.subtitle')}</p>

      <div className="announcement-list" style={{ marginTop: '28px' }}>
        {announcements.map((announcement) => (
          <motion.article key={announcement.id} {...motionProps} className="announcement-card">
            <img src={announcement.image} alt={announcement.title.en} style={{ borderRadius: '14px', height: '190px', width: '100%', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <span className="announcement-card__tag">{announcement.category}</span>
              <h3 style={{ marginTop: '14px' }}>{announcement.title.en}</h3>
              <p style={{ marginTop: '12px' }}>{announcement.description.en}</p>
              <div className="announcement-card__actions">
                <span>{announcement.date}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
