import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Photo from '../components/Photo'
import PageHeader, { Accent } from '../components/PageHeader'
import { TEAM, VALUES } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

export default function About() {
  usePageMeta({
    title: 'About Us',
    description:
      'Taona Ori International is a Zimbabwean-owned stone construction and design company, established 2019, working in Harare, Victoria Falls and Kwekwe.',
  })

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={
          <>
            Craftsmanship, durability <Accent>&amp; timeless design.</Accent>
          </>
        }
        intro="Taona Ori International is a Zimbabwean-owned construction and design company specializing in premium stone work, cladding, and bespoke building solutions for residential and commercial projects. Established 2019."
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-charcoal-900 lg:text-4xl">
                Who we are
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-charcoal-900/75">
                <p>
                  We are driven by a passion for craftsmanship, durability, and timeless design,
                  delivering high-quality finishes that elevate architectural spaces.
                </p>
                <p>
                  With a strong presence in Harare, Victoria Falls, and Kwekwe, Taona Ori
                  International has built a reputation for reliability, attention to detail, and
                  professional project execution. Our services cover the full project lifecycle —
                  from consultation and design to supply, installation, and project management.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <div className="overflow-hidden">
                <Photo photo="wallNight2" sizes="(min-width: 1024px) 30vw, 100vw" className="aspect-[4/5] w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-navy-900 py-24 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight lg:text-4xl">Our approach</h2>
            <p className="mt-6 leading-relaxed text-white/70">
              We combine skilled artisanship with modern construction techniques to ensure every
              project meets both aesthetic and structural standards. Each project is handled with
              precision, transparency, and a commitment to client satisfaction.
            </p>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="border-t-2 border-orange-500 pt-5">
                <h3 className="font-display text-lg font-semibold">Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  To deliver high-quality stone work and construction solutions that exceed client
                  expectations through craftsmanship and professionalism.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border-t-2 border-white/20 pt-5">
                <h3 className="font-display text-lg font-semibold">Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  To be a leading provider of innovative stone design and construction services in
                  Zimbabwe.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="sm:col-span-2">
                <h3 className="font-display text-lg font-semibold">Core values</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {VALUES.map((v) => (
                    <span key={v} className="rounded-full border border-white/25 px-5 py-2 font-display text-sm">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-orange-700 uppercase">
            Leadership &amp; Team
          </p>
          <h2 className="font-display mt-6 max-w-2xl text-4xl font-bold tracking-tight text-charcoal-900 lg:text-5xl">
            Skilled people, hands-on experience
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-charcoal-900/70">
            Our team of skilled stone masons, builders, and engineers brings hands-on industry
            experience to every project.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div>
                <div className="overflow-hidden bg-navy-800">
                  {m.image ? (
                    <Photo photo={m.image} sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw" className="aspect-[4/5] w-full object-cover object-top" />
                  ) : (
                    <div className="flex aspect-[4/5] w-full items-center justify-center bg-navy-800">
                      <span className="font-display text-5xl font-bold text-white/15">
                        {m.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-charcoal-900">
                  {m.name}
                </h3>
                <p className="mt-1 font-display text-sm font-medium text-orange-700">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-900/60">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 bg-navy-800 px-8 py-14 text-white md:flex-row md:items-center lg:px-14">
            <h2 className="font-display max-w-xl text-3xl font-bold tracking-tight lg:text-4xl">
              Let us bring your vision to life through stone.
            </h2>
            <Link
              to="/contact"
              className="press rounded-full bg-orange-500 px-8 py-4 font-display font-semibold text-navy-950 hover:bg-white"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
