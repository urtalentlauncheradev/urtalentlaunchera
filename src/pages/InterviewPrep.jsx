import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Code2,
  Users,
  MessageCircle,
  Zap,
  Video,
  ArrowRight,
  XCircle,
  Calendar,
  Check,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'

const needs = [
  {
    icon: Code2,
    title: 'Technical Skills',
    description: 'Strong fundamentals in your domain, problem-solving, and hands-on practice.',
  },
  {
    icon: Users,
    title: 'HR Questions',
    description: 'Tell me about yourself, strengths, weaknesses, and behavioral answers.',
  },
  {
    icon: MessageCircle,
    title: 'Communication Skills',
    description: 'Clear, confident speaking and professional language.',
  },
  {
    icon: Zap,
    title: 'Confidence Building',
    description: 'Mindset, body language, and practice under pressure.',
  },
  {
    icon: Video,
    title: 'Mock Interviews',
    description: 'Simulated rounds with feedback to improve performance.',
  },
]

const roadmap = [
  'Assess your current level and target role',
  'Build technical & HR question banks',
  'Practice mock interviews (technical + HR)',
  'Refine answers and body language',
  'Do final mock rounds before D-day',
]

const mistakes = [
  'Poor preparation on "Tell me about yourself"',
  'Not researching the company or role',
  'Speaking negatively about past employers',
  'Lack of specific examples (STAR format)',
  'Arriving late or inappropriate dress',
  'Not asking thoughtful questions at the end',
]

const schedule = [
  { day: 'Week 1–2', focus: 'Self-assessment, resume polish, company research' },
  { day: 'Week 3–4', focus: 'HR & behavioral Q&A, mock HR rounds' },
  { day: 'Week 5–6', focus: 'Technical prep, mock technical rounds' },
  { day: 'Week 7+', focus: 'Full mock interviews, final refinements' },
]

export default function InterviewPrep() {
  return (
    <>
      <PageHero
        title="Interview Preparation"
        subtitle="Everything you need to walk into interviews with confidence. We cover technical skills, HR questions, mock interviews, and more."
      />

      <Section
        title="What You Need for Interviews"
        subtitle="A complete toolkit to present your best self to recruiters."
        className="bg-brand-bgAlt"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.map((n) => (
            <Card key={n.title} icon={n.icon} title={n.title} description={n.description} />
          ))}
        </div>
      </Section>

      <Section title="Your Interview Roadmap" subtitle="A step-by-step path from prep to offer.">
        <div className="max-w-2xl space-y-4">
          {roadmap.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-semibold flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <p className="text-brand-heading font-medium">{step}</p>
              </div>
              {i < roadmap.length - 1 && (
                <ArrowRight className="w-5 h-5 text-brand-border flex-shrink-0 mt-2 ml-auto hidden sm:block" />
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        title="Common Interview Mistakes"
        subtitle="Avoid these to make a strong impression."
        className="bg-brand-bgAlt"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mistakes.map((m, i) => (
            <motion.div
              key={m}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-lg bg-white border border-brand-border"
            >
              <XCircle className="w-5 h-5 text-amber-400/80 flex-shrink-0 mt-0.5" />
              <p className="text-brand-mute text-sm">{m}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Practice Schedule" subtitle="A suggested timeline for interview prep.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schedule.map((s, i) => (
            <motion.div
              key={s.day}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-heading">{s.day}</h3>
                <p className="text-brand-mute text-sm mt-1">{s.focus}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/classes" className="btn-primary inline-flex items-center gap-2">
            Join Our Mock Interview Classes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  )
}
