import type { ReactNode } from 'react'
import Reveal from './Reveal'

type PageHeaderProps = {
  eyebrow: string
  title: ReactNode
  intro?: string
  children?: ReactNode
}

export default function PageHeader({ eyebrow, title, intro, children }: PageHeaderProps) {
  return (
    <section className="stone-courses relative overflow-hidden pt-40 pb-20 text-white lg:pt-48 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-900" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-display text-sm font-semibold tracking-[0.25em] text-orange-500 uppercase">{eyebrow}</p>
          <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.4rem,7vw,4.75rem)] leading-[1.03] font-bold tracking-tight">
            {title}
          </h1>
          {intro && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  )
}

/** Serif italic accent used inside display headings. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="font-serif font-normal text-orange-500 italic">{children}</span>
}
