import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'

const navItems = [
  { label: 'nav.home', to: '/' },
  { label: 'nav.about', to: '/about' },
  { label: 'nav.classes', to: '/classes' },
  { label: 'nav.resources', to: '/resources' },
  { label: 'nav.announcements', to: '/announcements' },
  { label: 'nav.gallery', to: '/gallery' },
  { label: 'nav.contact', to: '/contact' },
] as const

export default function Header() {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-shell">
        <Link to="/" className="brand" aria-label="Ashen Kavishka Physics home">
          <span className="brand__name">ASHEN KAVISHKA</span>
          <span className="brand__tag">PHYSICS</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            >
              {t(item.label)}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <Link to="/contact" className="button button--primary button--compact">
            {t('header.joinClass')}
            <ArrowRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="container mobile-menu__inner">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `mobile-link${isActive ? ' is-active' : ''}`}
                  onClick={() => setMobileOpen(true)}
                >
                  {t(item.label)}
                </NavLink>
              ))}
              <div className="mobile-menu__footer">
                <LanguageSwitcher />
                <Link to="/contact" className="button button--primary" onClick={() => setMobileOpen(true)}>
                  {t('header.joinClass')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
