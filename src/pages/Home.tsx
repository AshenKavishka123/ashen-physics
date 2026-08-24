import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, FlaskConical, GraduationCap, NotebookText, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Carousel from '../components/advertisements/Carousel'
import sampleAds from '../data/advertisements/sampleAds'
import { announcements } from '../data/announcements'
import { classCatalog } from '../data/classes'
import { galleryItems } from '../data/gallery'
import { resourceLibrary } from '../data/resources'
import { useTranslation } from '../i18n'

const motionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45 },
}

export default function Home() {
  const { t, lang } = useTranslation()

  const pillars = [
    { icon: BookOpen, label: 'Understand' },
    { icon: NotebookText, label: 'Practice' },
    { icon: FlaskConical, label: 'Apply' },
    { icon: GraduationCap, label: 'Achieve' },
  ]

  return (
    <>
      <div className="hero-wrap">
        <Carousel ads={sampleAds} autoplay interval={7} />
      </div>

      <section className="page-section intro-section">
        <motion.div {...motionProps}>
          <span className="eyebrow-tag">{t('home.badge')}</span>
          <h2 className="page-title">{t('home.introHeading')}</h2>
          <p style={{ marginTop: '16px', maxWidth: '670px', fontSize: '1.08rem' }}>{t('home.introBody')}</p>
        </motion.div>

        <motion.div {...motionProps} className="physics-visual" aria-label="Physics inspired abstract artwork">
          <div className="physics-visual__formula">F = ma</div>
        </motion.div>
      </section>

      <section className="page-section">
        <motion.div {...motionProps} className="section-header">
          <span className="eyebrow-tag">{t('common.learnMore')}</span>
          <h2>{t('home.classesTitle')}</h2>
        </motion.div>

        <div className="card-grid">
          {classCatalog.slice(0, 3).map((item) => (
            <motion.article key={item.id} {...motionProps} className="info-card">
              <div className="info-card__icon">
                <Sparkles size={24} />
              </div>
              <h3>{item.title[lang]}</h3>
              <p style={{ marginTop: '12px' }}>{item.description[lang]}</p>
              <div className="info-card__meta">
                <Link to={item.link}>{t('common.learnMore')}</Link>
                <ArrowRight size={16} />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <motion.div {...motionProps} className="section-header">
          <span className="eyebrow-tag">{t('about.focusTitle')}</span>
          <h2>{t('home.whyTitle')}</h2>
        </motion.div>

        <p style={{ maxWidth: '760px', marginBottom: '24px' }}>{t('home.whyBody')}</p>

        <div className="pillars-grid">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div key={pillar.label} {...motionProps} className="pillar-card">
                <div className="pillar-card__num">{index + 1}</div>
                <div className="info-card__icon" style={{ marginBottom: '14px' }}>
                  <Icon size={20} />
                </div>
                <h3>{pillar.label}</h3>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="page-section">
        <motion.div {...motionProps} className="section-header">
          <span className="eyebrow-tag">{t('home.resourcesTitle')}</span>
          <h2>{t('home.resourcesTitle')}</h2>
        </motion.div>

        <div className="resource-grid">
          {resourceLibrary.slice(0, 4).map((resource) => (
            <motion.article key={resource.id} {...motionProps} className="resource-card">
              <span className="resource-card__label">{resource.category}</span>
              <h3>{resource.title[lang]}</h3>
              <p>{resource.description[lang]}</p>
              <div className="resource-card__actions">
                <Link to={resource.link} className="button button--secondary">
                  {t('common.viewResource')}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <motion.div {...motionProps} className="section-header">
          <span className="eyebrow-tag">{t('home.announcementsTitle')}</span>
          <h2>{t('home.announcementsTitle')}</h2>
        </motion.div>

        <div className="announcement-grid">
          {announcements.slice(0, 3).map((announcement) => (
            <motion.article key={announcement.id} {...motionProps} className="announcement-card">
              <img src={announcement.image} alt={announcement.title[lang]} style={{ borderRadius: '14px', height: '160px', objectFit: 'cover', width: '100%' }} />
              <span className="announcement-card__tag" style={{ marginTop: '14px', display: 'inline-flex' }}>{announcement.category}</span>
              <h3>{announcement.title[lang]}</h3>
              <p>{announcement.description[lang]}</p>
              <div className="announcement-card__actions">
                <span>{announcement.date}</span>
                <Link to="/announcements" className="button button--secondary">{t('common.readMore')}</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <motion.div {...motionProps} className="section-header">
          <span className="eyebrow-tag">{t('home.galleryTitle')}</span>
          <h2>{t('home.galleryTitle')}</h2>
        </motion.div>

        <div className="gallery-grid">
          {galleryItems.slice(0, 4).map((item) => (
            <motion.article key={item.id} {...motionProps} className="gallery-card">
              <img src={item.image} alt={item.title[lang]} />
              <div className="gallery-card__caption">
                <span>{item.title[lang]}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <motion.div {...motionProps} className="contact-cta">
          <div>
            <span className="eyebrow-tag">{t('common.cta')}</span>
            <h2 style={{ marginTop: '14px' }}>{t('home.ctaTitle')}</h2>
          </div>
          <div className="contact-cta__actions">
            <Link to="/contact" className="button button--primary">{t('home.ctaContact')}</Link>
            <a href="#" className="button button--secondary">{t('home.ctaWhatsapp')}</a>
          </div>
        </motion.div>
      </section>
    </>
  )
}
