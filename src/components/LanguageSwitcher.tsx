import { Globe2 } from 'lucide-react'
import { useTranslation } from '../i18n'

export default function LanguageSwitcher() {
  const { lang, setLang } = useTranslation()

  return (
    <div className="language-switcher" aria-label="Language switcher">
      <span className="language-switcher__icon" aria-hidden="true">
        <Globe2 size={16} />
      </span>
      <button
        type="button"
        className={lang === 'en' ? 'is-active' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        English
      </button>
      <span className="language-switcher__divider">|</span>
      <button
        type="button"
        className={lang === 'si' ? 'is-active' : ''}
        onClick={() => setLang('si')}
        aria-pressed={lang === 'si'}
      >
        සිංහල
      </button>
    </div>
  )
}
