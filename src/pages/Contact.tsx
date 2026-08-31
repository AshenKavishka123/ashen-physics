import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { useTranslation } from '../i18n'

const motionProps = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
}

const CONTACT_PHONE = '+94 70 405 5549'
const CONTACT_EMAIL = 'ashenkavishka3224@gmail.com'
const CONTACT_WHATSAPP = '+94 70405 5549'
const CONTACT_LOCATION = 'Texas College, Galle'

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '' }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: { [key: string]: string } = {}

    if (!form.name.trim()) nextErrors.name = t('contact.required')
    if (!form.email.trim() || !form.email.includes('@')) nextErrors.email = t('contact.required')
    if (!form.phone.trim()) nextErrors.phone = t('contact.required')
    if (!form.message.trim()) nextErrors.message = t('contact.required')

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    setSubmitted(true)
  }

  return (
    <section className="page-section">
      <span className="eyebrow-tag">{t('contact.title')}</span>
      <h1 className="page-title">{t('contact.title')}</h1>
      <p className="page-subtitle">{t('contact.subtitle')}</p>

      <div className="contact-layout" style={{ marginTop: '28px' }}>
        <motion.aside {...motionProps} className="contact-card">
          <div className="contact-card__header">
            <h3>{t('contact.infoTitle')}</h3>
          </div>
          <div className="contact-list">
            <div className="contact-list__item">
              <Phone size={18} color="#3b82f6" />
              <div>
                <strong>{t('contact.phone')}</strong>
                <span>{CONTACT_PHONE}</span>
              </div>
            </div>
            <div className="contact-list__item">
              <Mail size={18} color="#3b82f6" />
              <div>
                <strong>{t('contact.email')}</strong>
                <span>{CONTACT_EMAIL}</span>
              </div>
            </div>
            <div className="contact-list__item">
              <Send size={18} color="#3b82f6" />
              <div>
                <strong>WhatsApp</strong>
                <span>{CONTACT_WHATSAPP}</span>
              </div>
            </div>
            <div className="contact-list__item">
              <MapPin size={18} color="#3b82f6" />
              <div>
                <strong>{t('common.cta')}</strong>
                <span>{CONTACT_LOCATION}</span>
              </div>
            </div>
          </div>
        </motion.aside>

        <motion.form {...motionProps} className="page-card" onSubmit={handleSubmit} noValidate>
          <div className="field-grid">
            <div className="field">
              <label htmlFor="name">{t('contact.name')}</label>
              <input id="name" value={form.name} onChange={(event) => handleChange('name', event.target.value)} />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="email">{t('contact.email')}</label>
              <input id="email" type="email" value={form.email} onChange={(event) => handleChange('email', event.target.value)} />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>
          </div>

          <div className="field" style={{ marginTop: '18px' }}>
            <label htmlFor="phone">{t('contact.phone')}</label>
            <input id="phone" value={form.phone} onChange={(event) => handleChange('phone', event.target.value)} />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>

          <div className="field" style={{ marginTop: '18px' }}>
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea id="message" value={form.message} onChange={(event) => handleChange('message', event.target.value)} />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>

          <button type="submit" className="button button--primary" style={{ marginTop: '18px' }}>
            {t('contact.submit')}
          </button>

          {isSubmitted && <div className="form-success">{t('contact.success')}</div>}
        </motion.form>
      </div>
    </section>
  )
}
