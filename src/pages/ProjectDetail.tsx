import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { PROJECTS, SITE_IMAGES } from '../data/site'

const GALLERY = [SITE_IMAGES.wallNight1, SITE_IMAGES.sandstoneWall, SITE_IMAGES.slateFacade, SITE_IMAGES.quartzPillar]

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-navy-900 px-6 text-white">
        <h1 className="font-display text-4xl font-bold">Project not found</h1>
        <Link to="/projects" className="mt-8 flex items-center gap-2 text-orange-500">
          <ArrowLeft size={18} /> Back to projects
        </Link>
      </section>
    )
  }

  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <img
            src={SITE_IMAGES.wallNight1}
            alt="Stone works detail"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-navy-900/30" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-44 pb-16 lg:px-10">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-display text-sm text-white/70 transition-colors hover:text-orange-500"
            >
              <ArrowLeft size={16} /> All projects
            </Link>
            <p className="font-display mt-8 text-sm font-semibold tracking-[0.3em] text-orange-500 uppercase">
              {project.category} · {project.location}
            </p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl font-bold tracking-tight text-white lg:text-7xl">
              {project.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Summary */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-charcoal-900/75">{project.summary}</p>
              <p className="mt-6 leading-relaxed text-charcoal-900/70">
                Delivered by our team of skilled stone masons, builders, and engineers — handled
                with precision, transparency, and a commitment to client satisfaction, from design
                planning and material selection through supply, cutting, installation, and quality
                control.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <dl className="border-t-2 border-charcoal-900/10">
                <div className="flex justify-between border-b border-charcoal-900/10 py-4">
                  <dt className="font-display text-sm tracking-wider text-charcoal-900/50 uppercase">Category</dt>
                  <dd className="font-display font-semibold text-charcoal-900">{project.category}</dd>
                </div>
                <div className="flex justify-between border-b border-charcoal-900/10 py-4">
                  <dt className="font-display text-sm tracking-wider text-charcoal-900/50 uppercase">Location</dt>
                  <dd className="font-display font-semibold text-charcoal-900">{project.location}</dd>
                </div>
              </dl>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 font-display font-semibold text-navy-800"
              >
                Enquire about similar work
                <ArrowUpRight size={18} className="text-orange-500" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {GALLERY.map((src, i) => (
            <Reveal key={i} delay={(i % 2) * 0.08}>
              <img
                src={src}
                alt="Stone craftsmanship detail"
                className={`aspect-[4/3] w-full object-cover ${i % 3 === 0 ? 'md:aspect-[16/10]' : ''}`}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other projects */}
      <section className="border-t border-charcoal-900/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900">More projects</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link to={`/projects/${p.slug}`} className="group block">
                  <p className="font-display text-sm tracking-[0.2em] text-orange-500 uppercase">
                    {p.category} · {p.location}
                  </p>
                  <h3 className="font-display mt-2 flex items-center justify-between gap-3 text-2xl font-semibold tracking-tight text-charcoal-900 group-hover:text-navy-800">
                    {p.title}
                    <ArrowUpRight size={20} className="text-charcoal-900/30 transition-colors group-hover:text-orange-500" />
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
