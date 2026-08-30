import { ArrowUpRight, Globe2, MessageCircle, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand--footer">
            <span className="brand__name">ASHEN KAVISHKA</span>
            <span className="brand__tag">PHYSICS</span>
          </div>
          <p className="footer-sinhala">අශේන් කවිශ්ක | භෞතික විද්‍යාව</p>
          <div className="footer-socials" aria-label="Social media placeholders">
            <a href="#" aria-label="Facebook placeholder">
              <Globe2 size={16} />
            </a>
            <a href="#" aria-label="Instagram placeholder">
              <MessageCircle size={16} />
            </a>
            <a href="#" aria-label="LinkedIn placeholder">
              <Send size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3>{t('footer.quickLinks')}</h3>
          <ul className="footer-links">
            <li><Link to="/classes">{t('nav.classes')}</Link></li>
            <li><Link to="/resources">{t('nav.resources')}</Link></li>
            <li><Link to="/contact">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h3>{t('footer.socialPlaceholder')}</h3>
          <ul className="footer-links">
            <li><a href="https://www.facebook.com/profile.php?id=100090797553290">Facebook <ArrowUpRight size={14} /></a></li>
            <li><a href="https://www.instagram.com/ashen__kavishka_/">Instagram <ArrowUpRight size={14} /></a></li>
            <li><a href="https://www.linkedin.com/in/ashen-kavishka-47b962231/">LinkedIn <ArrowUpRight size={14} /></a></li>
          </ul>
        </div>

        <div>
          <h3>{t('footer.language')}</h3>
          <LanguageSwitcher />
        </div>
      </div>

      <div className="container footer-bottom">
        <span>{t('footer.copyright')}</span>
      </div>
    </footer>
  )
}
