import type { ImgHTMLAttributes } from 'react'
import manifest from '../data/images.generated.json'
import { PHOTOS, type PhotoKey } from '../data/site'

const FILE_STEM: Record<PhotoKey, keyof typeof manifest> = {
  wallNight1: 'wall-night-1',
  wallNight2: 'wall-night-2',
  slateFacade: 'slate-facade',
  sandstoneWall: 'sandstone-wall',
  quartzPillar: 'quartz-pillar',
  director: 'director',
}

export function photoSources(key: PhotoKey) {
  const entry = manifest[FILE_STEM[key]]
  const sources = entry.sources
  return {
    src: sources[0].src,
    largest: sources[sources.length - 1].src,
    srcSet: sources.map((s) => `${s.src} ${s.w}w`).join(', '),
    width: entry.width,
    height: entry.height,
  }
}

type PhotoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'alt'> & {
  photo: PhotoKey
  /** Override the default alt text; pass "" for purely decorative use. */
  alt?: string
  priority?: boolean
}

export default function Photo({ photo, alt, priority, sizes = '100vw', ...rest }: PhotoProps) {
  const s = photoSources(photo)
  return (
    <img
      src={s.src}
      srcSet={s.srcSet}
      sizes={sizes}
      width={s.width}
      height={s.height}
      alt={alt ?? PHOTOS[photo].alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : undefined}
      {...rest}
    />
  )
}
