import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Mic2,
  MessageSquare,
  Mail,
  Smile,
  Check,
  ArrowRight,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'

const topics = [
  {
    icon: Mic2,
    title: 'English Speaking Practice',
    description: 'Build fluency with structured sessions, vocabulary, and real-world scenarios. We focus on clarity and confidence.',
  },
  {
    icon: MessageSquare,
    title: 'Interview Communication',
    description: 'How to introduce yourself, answer HR and behavioral questions, and present your ideas clearly under pressure.',
  },
  {
    icon: Mail,
    title: 'Email & Professional Communication',
    description: 'Formal emails, follow-ups, and professional tone. Etiquette for networking and job applications.',
  },
  {
    icon: Smile,
    title: 'Body Language & Confidence',
    description: 'Eye contact, posture, gestures, and voice modulation. Small changes that create a strong impression.',
  },
]

const dailyTips = [
  'Speak in English for at least 15–30 minutes daily (mirror, recording, or partner).',
  'Read aloud—articles, books, or scripts—to improve pronunciation and flow.',
  'Practice common interview Q&As until they feel natural.',
  'Watch English content (news, podcasts) and shadow or summarize.',
  'Write short paragraphs or emails in English to strengthen written communication.',
]

export default function CommunicationSkills() {
  return (
    <>
      <PageHero
        title="Communication Skills"
        subtitle="English speaking, interview communication, professional writing, and body language—so you present yourself with confidence."
      />

      <Section
        title="What We Cover"
        subtitle="End-to-end communication support for interviews and the workplace."
        className="bg-brand-bgAlt"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((t) => (
            <Card key={t.title} icon={t.icon} title={t.title} description={t.description} />
          ))}
        </div>
      </Section>

      <Section
        title="Daily Practice Tips"
        subtitle="Small, consistent habits that compound over time."
      >
        <div className="max-w-2xl space-y-4">
          {dailyTips.map((tip, i) => (
            <motion.div
              key={tip}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-white border border-brand-border"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <p className="text-brand-mute text-sm pt-1.5">{tip}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link to="/classes" className="btn-primary inline-flex items-center gap-2">
            Join Communication Classes
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="btn-outline inline-flex">
            Share Your CV – We Will Call You
          </Link>
        </div>
      </Section>
    </>
  )
}
