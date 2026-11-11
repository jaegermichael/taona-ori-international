import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Expand } from 'lucide-react'
import Reveal from '../components/Reveal'
import Photo from '../components/Photo'
import Lightbox from '../components/Lightbox'
import PageHeader, { Accent } from '../components/PageHeader'
import { CONTACT, PHOTOS, PROJECTS, type PhotoKey } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

const WORK_PHOTOS: PhotoKey[] = ['wallNight1', 'slateFacade', 'sandstoneWall', 'quartzPillar', 'wallNight2']
const TILE_LAYOUT = [
  'aspect-[4/5] md:col-span-7 md:row-span-2 md:aspect-auto',
  'aspect-[4/3] md:col-span-5 md:aspect-auto',
  'aspect-[4/3] md:col-span-5 md:aspect-auto',
  'aspect-square md:col-span-5 md:aspect-auto',
  'aspect-[4/3] md:col-span-7 md:aspect-auto',
]

export default function Projects() {
  const [viewer, setViewer] = useState<number | null>(null)

  usePageMeta({
    title: 'Projects',
    description:
      'Residential and commercial stone works by Taona Ori International in Harare, Victoria Falls and Kwekwe, including Umwinzdale, Madokero, Mabvazuva, Arlington and the Exodus Project.',
  })

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            Work across homes <Accent>&amp; commercial sites.</Accent>
          </>
        }
        intro="Our portfolio covers a range of settings, scales and design requirements across three regions of Zimbabwe."
      />

      {/* Project index */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="hidden grid-cols-[1fr_10rem_10rem_2rem] gap-6 pb-4 font-display text-xs tracking-[0.2em] text-charcoal-900/50 uppercase md:grid">
          <span>Project</span>
          <span>Location</span>
          <span>Type</span>
        </div>
        <ul className="border-t border-charcoal-900/15">
          {PROJECTS.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 0.03} y={16}>
                <Link
                  to={`/projects/${p.slug}`}
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-b border-charcoal-900/15 py-6 transition-colors hover:bg-stone-200/60 md:grid-cols-[1fr_10rem_10rem_2rem] md:px-3"
                >
                  <span className="font-display text-2xl font-semibold tracking-tight text-charcoal-900 transition-transform duration-300 group-hover:translate-x-2 lg:text-3xl">
                    {p.title}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="row-span-2 self-center text-charcoal-900/30 transition-colors group-hover:text-orange-700 md:order-last md:row-span-1"
                    aria-hidden
                  />
                  <span className="font-serif text-lg text-navy-800 italic md:text-xl">{p.location}</span>
                  <span className="font-display text-sm text-charcoal-900/60">{p.category}</span>
                </Link>
            </Reveal>
          ))}
        </ul>
        <p className="mt-6 text-sm text-charcoal-900/55">
          Projects in {CONTACT.locations.join(', ')}. Ask us for photographs of a specific project.
        </p>
      </section>

      {/* Gallery */}
      <section className="bg-navy-950 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display max-w-2xl text-4xl font-bold tracking-tight lg:text-5xl">
              Stonework, <Accent>up close.</Accent>
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-white/65">
              A selection of finished walls and facades by our teams. Tap any photo to view it full screen.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:auto-rows-[16rem] md:grid-cols-12 lg:auto-rows-[19rem]">
            {WORK_PHOTOS.map((key, i) => (
              <button
                key={key}
                onClick={() => setViewer(i)}
                className={`group relative overflow-hidden bg-navy-900 text-left ${TILE_LAYOUT[i]}`}
                aria-label={`View full screen: ${PHOTOS[key].caption}`}
              >
                <Photo
                  photo={key}
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-navy-950/90 to-transparent p-5 pt-16">
                  <span className="font-serif text-lg italic">{PHOTOS[key].caption}</span>
                  <Expand size={16} className="shrink-0 opacity-60 transition-opacity group-hover:opacity-100" aria-hidden />
                </span>
              </button>
            ))}
          </div>
        </div>
        <Lightbox photos={WORK_PHOTOS} index={viewer} onChange={setViewer} />
      </section>
    </>
  )
}
