import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { photoSources } from './Photo'
import { PHOTOS, type PhotoKey } from '../data/site'

type LightboxProps = {
  photos: PhotoKey[]
  index: number | null
  onChange: (index: number | null) => void
}

export default function Lightbox({ photos, index, onChange }: LightboxProps) {
  const reduce = useReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)
  const open = index !== null

  const go = useCallback(
    (delta: number) => {
      if (index === null) return
      onChange((index + delta + photos.length) % photos.length)
    },
    [index, onChange, photos.length],
  )

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      previouslyFocused?.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChange(null)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, go, onChange])

  const key = index !== null ? photos[index] : null

  return createPortal(
    <AnimatePresence>
      {key && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[80] flex flex-col bg-navy-950/95 backdrop-blur-sm"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onChange(null)
          }}
        >
          <div className="flex items-center justify-between px-5 py-4 text-white/70">
            <p className="font-display text-sm tabular-nums">
              {index! + 1} / {photos.length}
            </p>
            <button
              ref={closeRef}
              onClick={() => onChange(null)}
              className="press grid size-11 place-items-center rounded-full border border-white/20 text-white hover:border-orange-500 hover:text-orange-500"
              aria-label="Close photo viewer"
            >
              <X size={20} />
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20"
            onClick={(e) => {
              if (e.target === e.currentTarget) onChange(null)
            }}
          >
            <motion.img
              key={key}
              src={photoSources(key).largest}
              alt={PHOTOS[key].alt}
              className="max-h-full max-w-full object-contain"
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            {photos.length > 1 && (
              <>
                <button
                  onClick={() => go(-1)}
                  className="press absolute left-2 grid size-11 place-items-center rounded-full bg-navy-900/80 text-white hover:text-orange-500 sm:left-5"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={() => go(1)}
                  className="press absolute right-2 grid size-11 place-items-center rounded-full bg-navy-900/80 text-white hover:text-orange-500 sm:right-5"
                  aria-label="Next photo"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>

          <p className="px-5 py-5 text-center font-serif text-xl text-white/85 italic">{PHOTOS[key].caption}</p>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
