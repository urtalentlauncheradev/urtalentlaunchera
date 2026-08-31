import { useState } from 'react'
import { useForm } from '@formspree/react'
import { motion } from 'framer-motion'
import { Phone, Mail, Globe, Upload, Send, ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 9492241609', href: 'tel:9492241609' },
  {
    icon: Mail,
    label: 'Email',
    value: 'urtalentlaunchera@gmail.com',
    href: 'mailto:urtalentlaunchera@gmail.com',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.urtalentlaunchera.com',
    href: 'https://www.urtalentlaunchera.com',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [state, handleSubmit] = useForm('mdeoeneg')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for interview prep, resume review, classes, or any career guidance. Share your CV and we’ll call you."
      />

      <Section className="pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-1 space-y-6"
          >
            <h2 className="section-heading text-xl">Reach Out</h2>
            <div className="space-y-4">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-brand-border hover:border-brand-primary/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/20 transition-colors">
                    <c.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-brand-mute text-sm">{c.label}</p>
                    <p className="text-brand-heading font-medium">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="mailto:urtalentconsulting@gmail.com?subject=CV%20Submission%20-%20UR%20Talent%20Consulting"
                className="btn-primary w-full justify-center inline-flex items-center gap-2"
              >
                <Upload className="w-5 h-5" />
                Share Your CV – We Will Call You
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="card">
              <h2 className="section-heading text-xl mb-2">Send a Message</h2>
              <p className="section-sub mb-6">
                Tell us about your goals—interview prep, resume, classes, or assignments. We’ll get back soon.
              </p>

              {state.succeeded ? (
                <div className="py-12 text-center">
                  <p className="text-brand-primary font-semibold mb-2">Thank you!</p>
                  <p className="text-brand-mute text-sm">
                    We’ve received your message. We’ll reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-heading mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-brand-border text-brand-heading placeholder-brand-mute focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-heading mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-border text-brand-heading placeholder-brand-mute focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-heading mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-border text-brand-heading placeholder-brand-mute focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        placeholder="Your number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-heading mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-brand-border text-brand-heading placeholder-brand-mute focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
                      placeholder="What do you need help with?"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn-primary w-full sm:w-auto inline-flex items-center gap-2"
                    disabled={state.submitting}>
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
