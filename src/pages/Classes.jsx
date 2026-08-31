import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Monitor, Users, User, Clock, Check, ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'

const offerings = [
  {
    icon: Monitor,
    title: 'Online & Offline Classes',
    description: 'Learn from anywhere or join us in person. Same quality, flexible mode.',
  },
  {
    icon: Users,
    title: 'Batch-Wise Training',
    description: 'Structured batches with a fixed curriculum, peer learning, and group mocks.',
  },
  {
    icon: User,
    title: '1:1 Mentoring',
    description: 'Personalized sessions for interview prep, resume, communication, or assignments.',
  },
  {
    icon: Clock,
    title: 'Course Duration & Structure',
    description: 'Programs tailored to your goals—short intensive bootcamps or longer comprehensive tracks.',
  },
]

const whoShouldJoin = [
  'Students preparing for campus placements or off-campus jobs',
  'Freshers targeting their first role',
  'Professionals looking to switch or upgrade',
  'Anyone wanting to improve interview skills, resume, or communication',
]

export default function Classes() {
  return (
    <>
      <PageHero
        title="Online & Offline Classes"
        subtitle="Batch training, 1:1 mentoring, and flexible formats. We help you get job-ready on your terms."
      />

      <Section
        title="What We Offer"
        subtitle="Choose the format that fits your schedule and learning style."
        className="bg-brand-bgAlt"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((o) => (
            <Card key={o.title} icon={o.icon} title={o.title} description={o.description} />
          ))}
        </div>
      </Section>

      <Section title="Who Should Join" subtitle="Our programs are built for you.">
        <div className="max-w-2xl space-y-4">
          {whoShouldJoin.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <p className="text-brand-mute pt-1.5">{item}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Share Your CV – We Will Call You
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  )
}
