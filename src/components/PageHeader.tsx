import Reveal from './Reveal'

type PageHeaderProps = {
  eyebrow: string
  title: string
  intro?: string
}

export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="bg-navy-900 pt-40 pb-20 text-white lg:pt-48 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-orange-500 uppercase">
            {eyebrow}
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight lg:text-7xl">
            {title}
          </h1>
          {intro && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</p>}
        </Reveal>
      </div>
    </section>
  )
}
