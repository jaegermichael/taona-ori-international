import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal'
import Photo from '../components/Photo'
import Lightbox from '../components/Lightbox'
import PageHeader from '../components/PageHeader'
import NotFound from './NotFound'
import { PROJECTS, whatsappLink } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)
  const [viewer, setViewer] = useState<number | null>(null)

  usePageMeta({
    title: project ? `${project.title}, ${project.location}` : 'Project not found',
    description: project
      ? `${project.summary} ${project.category} project by Taona Ori International.`
      : 'The project you were looking for could not be found.',
    noindex: !project,
  })

  if (!project) return <NotFound what="project" backTo="/projects" backLabel="All projects" />

  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3)
  const photos = project.photos ?? []

  return (
    <>
      <PageHeader eyebrow={`${project.category} · ${project.location}`} title={project.title} intro={project.summary}>
        <Link
          to="/projects"
          className="mt-10 inline-flex items-center gap-2 font-display text-sm text-white/70 transition-colors hover:text-orange-500"
        >
          <ArrowLeft size={16} aria-hidden /> All projects
        </Link>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-charcoal-900/75">
                Delivered by our team of stone masons, builders and engineers, from design planning and material
                selection through supply, cutting, installation and quality control.
              </p>
              {photos.length === 0 && (
                <div className="mt-10 border-l-2 border-orange-500 pl-6">
                  <p className="font-display text-lg font-semibold text-charcoal-900">Want to see this project?</p>
                  <p className="mt-2 leading-relaxed text-charcoal-900/70">
                    We can share photographs of the {project.title} work on request.
                  </p>
                  <a
                    href={whatsappLink(`Hello Taona Ori International, could you share photos of the ${project.title} (${project.location}) project?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press mt-5 inline-flex items-center gap-2 rounded-full border border-charcoal-900/20 px-6 py-3 font-display font-semibold hover:border-navy-800 hover:text-navy-800"
                  >
                    <MessageCircle size={18} aria-hidden /> Request photos on WhatsApp
                  </a>
                </div>
              )}
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <dl className="border-t-2 border-charcoal-900/10">
                <div className="flex justify-between border-b border-charcoal-900/10 py-4">
                  <dt className="font-display text-sm tracking-wider text-charcoal-900/60 uppercase">Category</dt>
                  <dd className="font-display font-semibold text-charcoal-900">{project.category}</dd>
                </div>
                <div className="flex justify-between border-b border-charcoal-900/10 py-4">
                  <dt className="font-display text-sm tracking-wider text-charcoal-900/60 uppercase">Location</dt>
                  <dd className="font-display font-semibold text-charcoal-900">{project.location}</dd>
                </div>
              </dl>
              <Link to="/contact" className="group mt-8 inline-flex items-center gap-2 font-display font-semibold text-navy-800">
                Enquire about similar work
                <ArrowUpRight size={18} className="text-orange-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {photos.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-24">
          <div className="grid gap-6 md:grid-cols-2">
            {photos.map((key, i) => (
              <button key={key} onClick={() => setViewer(i)} className="group overflow-hidden" aria-label="View photo full screen">
                <Photo photo={key} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </button>
            ))}
          </div>
          <Lightbox photos={photos} index={viewer} onChange={setViewer} />
        </section>
      )}

      <section className="border-t border-charcoal-900/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900">More projects</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {others.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="group block border-t-2 border-charcoal-900/10 pt-5 hover:border-orange-500">
                <p className="font-serif text-lg text-navy-800 italic">
                  {p.location} · {p.category}
                </p>
                <h3 className="font-display mt-1 flex items-center justify-between gap-3 text-2xl font-semibold tracking-tight text-charcoal-900 group-hover:text-navy-800">
                  {p.title}
                  <ArrowUpRight size={20} className="text-charcoal-900/30 transition-colors group-hover:text-orange-700" aria-hidden />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
