import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../../i18n'
import type { AdvertisementItem } from '../../types/content'
import './Carousel.css'

type Props = {
  ads: AdvertisementItem[]
  autoplay?: boolean
  interval?: number
}

export default function Carousel({ ads, autoplay = true, interval = 7 }: Props) {
  const { lang } = useTranslation()
  const activeAds = ads.filter((ad) => ad.active)
  const [index, setIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    if (!autoplay || activeAds.length <= 1) return

    timeoutRef.current = window.setTimeout(() => {
      setIndex((current) => (current + 1) % activeAds.length)
    }, interval * 1000)

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [activeAds.length, autoplay, index, interval])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setIndex((current) => (current - 1 + activeAds.length) % activeAds.length)
      }
      if (event.key === 'ArrowRight') {
        setIndex((current) => (current + 1) % activeAds.length)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeAds.length])

  if (activeAds.length === 0) return null

  const currentAd = activeAds[index]

  const goToPrevious = () =>
    setIndex((current) => (current - 1 + activeAds.length) % activeAds.length)

  const goToNext = () =>
    setIndex((current) => (current + 1) % activeAds.length)

  return (
    <section className="carousel" aria-roledescription="carousel" aria-label="Advertisement carousel">
      <div
        className="carousel__viewport"
        onTouchStart={(event) => setTouchStartX(event.changedTouches[0]?.screenX ?? null)}
        onTouchEnd={(event) => {
          if (touchStartX === null) return
          const diff = (event.changedTouches[0]?.screenX ?? touchStartX) - touchStartX
          if (diff > 40) goToPrevious()
          if (diff < -40) goToNext()
          setTouchStartX(null)
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAd.id}
            className="carousel__slide"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {currentAd.type === 'image' ? (
              <img src={currentAd.mediaSrc} alt={currentAd.title[lang]} className="carousel__media" />
            ) : (
              <div className="carousel__video-wrap">
                <video
                  className="carousel__media"
                  src={currentAd.mediaSrc}
                  poster={currentAd.posterSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  aria-label={currentAd.title[lang]}
                />
              </div>
            )}

            <div className="carousel__overlay" />

            <div className="carousel__content">
              <p className="eyebrow">{currentAd.title[lang].toUpperCase()}</p>
              <h1>{currentAd.title[lang]}</h1>
              <p>{currentAd.description[lang]}</p>
              <div className="carousel__actions">
                <Link to={currentAd.ctaLink} className="button button--primary">
                  {currentAd.ctaText[lang]}
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel__controls">
        <button type="button" className="carousel__button" onClick={goToPrevious} aria-label="Previous slide">
          <ChevronLeft size={18} />
        </button>

        <div className="carousel__dots" aria-label="Slide indicators">
          {activeAds.map((ad, indexValue) => (
            <button
              key={ad.id}
              type="button"
              className={indexValue === index ? 'is-active' : ''}
              onClick={() => setIndex(indexValue)}
              aria-label={`Go to slide ${indexValue + 1}`}
            />
          ))}
        </div>

        <button type="button" className="carousel__button" onClick={goToNext} aria-label="Next slide">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  )
}
