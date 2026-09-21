import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'
import { PROJECTS, SITE_IMAGES } from '../data/site'

const COVER_IMAGES = [
  SITE_IMAGES.wallNight1,
  SITE_IMAGES.sandstoneWall,
  SITE_IMAGES.slateFacade,
  SITE_IMAGES.wallNight2,
  SITE_IMAGES.quartzPillar,
  SITE_IMAGES.sandstoneWall,
  SITE_IMAGES.wallNight1,
]

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Work across residential & commercial environments."
        intro="Our portfolio demonstrates experience across diverse environments, scales, and design requirements — reflecting our versatility and expertise."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <Link to={`/projects/${p.slug}`} className="group block">
                <div className="overflow-hidden bg-navy-800">
                  <img
                    src={COVER_IMAGES[i % COVER_IMAGES.length]}
                    alt={`${p.category} stone works, ${p.location}`}
                    className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-sm tracking-[0.2em] text-orange-500 uppercase">
                      {p.category} · {p.location}
                    </p>
                    <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-charcoal-900 group-hover:text-navy-800 lg:text-3xl">
                      {p.title}
                    </h2>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-charcoal-900/60">
                      {p.summary}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="mt-1 shrink-0 text-charcoal-900/30 transition-colors group-hover:text-orange-500"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
