import { useRef, useState, type KeyboardEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Expand } from 'lucide-react'
import Photo from './Photo'
import Lightbox from './Lightbox'
import { FINISHES, PHOTOS } from '../data/site'

/**
 * Signature section: pick a stone finish, see it on a real job. The image reveals with a
 * horizontal "coursing" wipe, like a new course of stone being laid.
 */
export default function FinishExplorer() {
  const [active, setActive] = useState(0)
  const [viewer, setViewer] = useState<number | null>(null)
  const reduce = useReducedMotion()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const finish = FINISHES[active]

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }
    let next: number | null = null
    if (e.key in keys) next = (active + keys[e.key] + FINISHES.length) % FINISHES.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = FINISHES.length - 1
    if (next === null) return
    e.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className="stone-courses-offset relative overflow-hidden bg-navy-900 py-24 text-white lg:py-32" aria-labelledby="finishes-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="font-display text-sm font-semibold tracking-[0.25em] text-orange-500 uppercase">
              Finishes on real jobs
            </p>
            <h2 id="finishes-heading" className="font-display mt-6 text-4xl leading-[1.05] font-bold tracking-tight lg:text-6xl">
              Choose the stone. <span className="font-serif font-normal text-orange-500 italic">See it laid.</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-white/65">
              Every photograph here is our own work. Pick a finish to see how it reads on a finished wall.
            </p>

            <div role="tablist" aria-label="Stone finishes" aria-orientation="vertical" onKeyDown={onKeyDown} className="mt-12 border-t border-white/15">
              {FINISHES.map((f, i) => {
                const selected = i === active
                return (
                  <button
                    key={f.key}
                    ref={(el) => {
                      tabRefs.current[i] = el
                    }}
                    role="tab"
                    id={`finish-tab-${f.key}`}
                    aria-selected={selected}
                    aria-controls="finish-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={`group grid w-full grid-cols-[2.5rem_1fr] items-baseline gap-3 border-b border-white/15 py-5 text-left transition-colors ${
                      selected ? 'text-white' : 'text-white/50 hover:text-white/85'
                    }`}
                  >
                    <span className={`font-display text-sm tabular-nums ${selected ? 'text-orange-500' : ''}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="font-display block text-2xl font-semibold tracking-tight sm:text-3xl">{f.name}</span>
                      <AnimatePresence initial={false}>
                        {selected && (
                          <motion.span
                            className="block overflow-hidden"
                            initial={reduce ? false : { height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <span className="block max-w-sm pt-3 text-sm leading-relaxed text-white/65">{f.note}</span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div
              id="finish-panel"
              role="tabpanel"
              aria-labelledby={`finish-tab-${finish.key}`}
              className="relative aspect-[4/5] overflow-hidden bg-navy-950"
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={finish.key}
                  className="absolute inset-0"
                  initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
                  animate={reduce ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 0.75, ease: [0.65, 0, 0.35, 1] }}
                >
                  <Photo photo={finish.image} sizes="(min-width: 1024px) 45vw, 100vw" className="h-full w-full object-cover" />
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 to-transparent p-6 pt-20">
                <p className="font-serif text-xl text-white italic">{PHOTOS[finish.image].caption}</p>
              </div>
              <button
                onClick={() => setViewer(active)}
                className="press absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-navy-950/70 text-white backdrop-blur hover:text-orange-500"
                aria-label={`View ${finish.name} photo full screen`}
              >
                <Expand size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Lightbox photos={FINISHES.map((f) => f.image)} index={viewer} onChange={setViewer} />
    </section>
  )
}
