import { motion } from 'framer-motion'
import { useTranslation } from '../i18n'

const motionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45 },
}

export default function About() {
  const { t } = useTranslation()
  const pillars = t('about.pillars', { returnObjects: true }) as string[]

  return (
    <>
      <section className="page-section page-hero">
        <span className="eyebrow-tag">{t('about.title')}</span>
        <h1 className="page-title">{t('about.heading')}</h1>
        <p className="page-subtitle">{t('about.subtitle')}</p>
      </section>

      <section className="page-section two-column">
        <motion.div {...motionProps} className="page-card">
          <h3>{t('about.philosophyTitle')}</h3>
          <p style={{ marginTop: '12px' }}>{t('about.philosophyText')}</p>
        </motion.div>

        <motion.div {...motionProps} className="page-card">
          <h3>{t('about.approachTitle')}</h3>
          <p style={{ marginTop: '12px' }}>{t('about.approachText')}</p>
        </motion.div>
      </section>

      <section className="page-section">
        <motion.div {...motionProps} className="section-header">
          <span className="eyebrow-tag">{t('about.focusTitle')}</span>
          <h2>{t('about.focusTitle')}</h2>
        </motion.div>

        <div className="stat-list">
          <motion.div {...motionProps} className="stat-item">
            <strong>01</strong>
            <span>{pillars[0]}</span>
          </motion.div>
          <motion.div {...motionProps} className="stat-item">
            <strong>02</strong>
            <span>{pillars[1]}</span>
          </motion.div>
          <motion.div {...motionProps} className="stat-item">
            <strong>03</strong>
            <span>{pillars[2]}</span>
          </motion.div>
          <motion.div {...motionProps} className="stat-item">
            <strong>04</strong>
            <span>{pillars[3]}</span>
          </motion.div>
        </div>
      </section>
    </>
  )
}
