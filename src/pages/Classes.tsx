import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { classCatalog } from '../data/classes'
import { useTranslation } from '../i18n'

const motionProps = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
}

export default function Classes() {
  const { t } = useTranslation()
  const yearOptions = t('classes.yearOptions', { returnObjects: true }) as string[]
  const [selectedYear, setSelectedYear] = useState('All years')

  const visibleClasses = useMemo(() => {
    if (selectedYear === 'All years') return classCatalog
    return classCatalog.filter((item) => item.year === selectedYear)
  }, [selectedYear])

  return (
    <section className="page-section">
      <span className="eyebrow-tag">{t('classes.title')}</span>
      <h1 className="page-title">{t('classes.title')}</h1>
      <p className="page-subtitle">{t('classes.subtitle')}</p>

      <div className="filters" aria-label="Filter classes by year">
        {yearOptions.map((option) => (
          <button
            key={option}
            type="button"
            className={`filter-button ${selectedYear === option ? 'is-active' : ''}`}
            onClick={() => setSelectedYear(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="class-grid" style={{ marginTop: '32px' }}>
        {visibleClasses.map((item, index) => (
          <motion.article key={item.id} {...motionProps} className="class-card" style={{ animationDelay: `${index * 50}ms` }}>
            <div className="class-card__header">
              <span className="tag">{item.type}</span>
              <span className="tag">{item.year}</span>
            </div>
            <h3>{item.title.en}</h3>
            <p>{item.description.en}</p>
            <div className="class-card__actions">
              <Link to={item.link} className="button button--secondary">{item.cta.en}</Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
