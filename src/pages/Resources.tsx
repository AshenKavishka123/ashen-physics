import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { resourceCategories, resourceLibrary } from '../data/resources'
import { useTranslation } from '../i18n'

const motionProps = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
}

export default function Resources() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState<'All' | string>('All')

  const visibleResources = useMemo(() => {
    if (activeCategory === 'All') return resourceLibrary
    return resourceLibrary.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="page-section">
      <span className="eyebrow-tag">{t('resources.title')}</span>
      <h1 className="page-title">{t('resources.title')}</h1>
      <p className="page-subtitle">{t('resources.subtitle')}</p>

      <div className="filters" aria-label="Filter resources by category">
        {resourceCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-button ${activeCategory === category ? 'is-active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category === 'All' ? t('resources.all') : category}
          </button>
        ))}
      </div>

      <div className="resource-library" style={{ marginTop: '28px' }}>
        {visibleResources.map((resource) => (
          <motion.article key={resource.id} {...motionProps} className="resource-card">
            <span className="resource-card__label">{resource.category}</span>
            <h3>{resource.title.en}</h3>
            <p>{resource.description.en}</p>
            <div className="resource-card__actions">
              <span>{resource.category}</span>
              <a href={resource.link} className="button button--secondary">{resource.action.en}</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
