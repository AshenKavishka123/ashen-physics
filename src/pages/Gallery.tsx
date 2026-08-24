import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'
import { galleryItems } from '../data/gallery'
import { useTranslation } from '../i18n'

const motionProps = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
}

export default function Gallery() {
  const { t } = useTranslation()
  const [activeImage, setActiveImage] = useState<typeof galleryItems[number] | null>(null)

  return (
    <section className="page-section">
      <span className="eyebrow-tag">{t('gallery.title')}</span>
      <h1 className="page-title">{t('gallery.title')}</h1>
      <p className="page-subtitle">{t('gallery.subtitle')}</p>

      <div className="gallery-collection" style={{ marginTop: '28px' }}>
        {galleryItems.map((item) => (
          <motion.button
            key={item.id}
            type="button"
            {...motionProps}
            className="gallery-card"
            onClick={() => setActiveImage(item)}
            style={{ border: 'none', width: '100%', padding: 0, textAlign: 'left' }}
          >
            <img src={item.image} alt={item.alt.en} />
            <div className="gallery-card__caption">
              <span>{item.title.en}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="modal-card"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" className="modal-close" onClick={() => setActiveImage(null)} aria-label="Close image">
                <X size={18} />
              </button>
              <img src={activeImage.image} alt={activeImage.alt.en} style={{ maxHeight: '78vh', width: '100%', objectFit: 'cover', borderRadius: '18px' }} />
              <h3 style={{ marginTop: '16px' }}>{activeImage.title.en}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
