import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Calendar,
  LayoutList,
  Clock,
  BookOpen,
  TrendingUp,
  Check,
  ArrowRight,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'

const dailyPlan = [
  { time: 'Morning', focus: 'Technical revision / coding practice (1–2 hrs)' },
  { time: 'Midday', focus: 'HR & behavioral Q&A practice (30–45 min)' },
  { time: 'Afternoon', focus: 'Resume polish / company research (30 min)' },
  { time: 'Evening', focus: 'Mock interview or English practice (30–60 min)' },
]

const weeklyRoadmap = [
  'Mon–Wed: Technical prep + mocks',
  'Thu–Fri: HR & communication + company research',
  'Sat: Full mock interview + review',
  'Sun: Light revision + plan next week',
]

const skillPaths = [
  {
    icon: BookOpen,
    title: 'Technical Track',
    desc: 'DSA, domain fundamentals, projects. Ideal for dev/tech roles.',
  },
  {
    icon: LayoutList,
    title: 'HR & Communication Track',
    desc: 'Behavioral Q&A, storytelling, body language. For all roles.',
  },
  {
    icon: Clock,
    title: 'Hybrid Track',
    desc: 'Mix of technical and soft skills. Best for full-stack prep.',
  },
]

const progressItems = [
  'Resume ready',
  'HR Q&A practiced',
  'Technical mocks done',
  'Company research completed',
  'Final mock cleared',
]

export default function StudyPlan() {
  return (
    <>
      <PageHero
        title="Study Plan"
        subtitle="Daily plans, weekly roadmaps, and skill-based learning paths. Structure your prep and track progress."
      />

      <Section
        title="Daily Study Plan"
        subtitle="A sample routine you can adapt to your schedule."
        className="bg-brand-bgAlt"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dailyPlan.map((p, i) => (
            <motion.div
              key={p.time}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card"
            >
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-brand-primary" />
                <h3 className="font-semibold text-brand-heading">{p.time}</h3>
              </div>
              <p className="text-brand-mute text-sm">{p.focus}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        title="Weekly Preparation Roadmap"
        subtitle="Balance technical, HR, and mock practice across the week."
      >
        <div className="max-w-2xl space-y-4">
          {weeklyRoadmap.map((r, i) => (
            <motion.div
              key={r}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-white border border-brand-border"
            >
              <span className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-semibold text-sm flex-shrink-0">
                {i + 1}
              </span>
              <p className="text-brand-mute">{r}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        title="Skill-Based Learning Paths"
        subtitle="Choose a track that matches your target role."
        className="bg-brand-bgAlt"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillPaths.map((s) => (
            <Card key={s.title} icon={s.icon} title={s.title} description={s.desc} />
          ))}
        </div>
      </Section>

      <Section
        title="Interview Preparation Timetable"
        subtitle="A suggested multi-week timeline."
      >
        <div className="overflow-x-auto">
          <div className="min-w-[280px] grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Week 1–2', 'Week 3–4', 'Week 5–6', 'Week 7+'].map((w, i) => (
              <motion.div
                key={w}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card text-center"
              >
                <Calendar className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                <h3 className="font-semibold text-brand-heading">{w}</h3>
                <p className="text-brand-mute text-sm mt-1">
                  {i === 0 && 'Assess & plan, resume, company research'}
                  {i === 1 && 'HR & behavioral prep, mock HR'}
                  {i === 2 && 'Technical prep, mock technical'}
                  {i === 3 && 'Full mocks, final refinements'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="Progress Tracking (UI)"
        subtitle="Track your prep milestones. Use this as a checklist."
        className="bg-brand-bgAlt"
      >
        <div className="max-w-xl mx-auto">
          <div className="space-y-3">
            {progressItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-white border border-brand-border"
              >
                <div className="w-10 h-10 rounded-full border-2 border-brand-primary/50 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-brand-primary" />
                </div>
                <span className="text-brand-heading font-medium">{item}</span>
                <TrendingUp className="w-5 h-5 text-brand-mute ml-auto" />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get a Custom Study Plan
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  )
}
