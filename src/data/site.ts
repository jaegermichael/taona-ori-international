export const SITE_URL = 'https://taona-ori-international.vercel.app'

export const CONTACT = {
  phone: '+263 783 220 589',
  phoneHref: 'tel:+263783220589',
  /** WhatsApp number in international format without "+". Assumed to be the same as the phone line; confirm with the client. */
  whatsapp: '263783220589',
  email: 'Taonaorint@gmail.com',
  locations: ['Harare', 'Victoria Falls', 'Kwekwe'],
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${CONTACT.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/**
 * Client-supplied photographs (originals in /source-images). Captions describe what is visible;
 * none of these photos is attributed to a specific named project.
 */
export const PHOTOS = {
  wallNight1: {
    alt: 'Random rubble stone cladding on a building, lit at night',
    caption: 'Random rubble stone cladding, night lighting',
  },
  wallNight2: {
    alt: 'Random rubble stone boundary wall with downlights at night',
    caption: 'Random rubble walling with downlights',
  },
  slateFacade: {
    alt: 'Dark slate strip cladding on a building facade with a site engineer in front',
    caption: 'Slate strip cladding on a facade',
  },
  sandstoneWall: {
    alt: 'Sandstone strip walling along a boundary wall',
    caption: 'Sandstone strip walling',
  },
  quartzPillar: {
    alt: 'Multi-tone quartz stone cladding on a feature column at a residence',
    caption: 'Quartz stone cladding on a feature column',
  },
  director: {
    alt: 'Stanley Mugabe, Director of Taona Ori International',
    caption: 'Stanley Mugabe, Director',
  },
} as const

export type PhotoKey = keyof typeof PHOTOS

/** Finishes shown in the home-page explorer. Only finishes we have real photos of. */
export const FINISHES: { key: PhotoKey; name: string; note: string; image: PhotoKey }[] = [
  {
    key: 'wallNight1',
    name: 'Random rubble',
    note: 'Irregular natural stone laid by hand, so no two walls look the same. Used here as full building cladding.',
    image: 'wallNight1',
  },
  {
    key: 'slateFacade',
    name: 'Slate strip',
    note: 'Thin slate strips stacked in tight courses for a dark, layered facade.',
    image: 'slateFacade',
  },
  {
    key: 'sandstoneWall',
    name: 'Sandstone strip',
    note: 'Warm sandstone in long horizontal strips, here run the full length of a boundary wall.',
    image: 'sandstoneWall',
  },
  {
    key: 'quartzPillar',
    name: 'Quartz cladding',
    note: 'Multi-tone quartz strips that turn a plain column into a feature.',
    image: 'quartzPillar',
  },
]

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Consultation & site assessment',
    text: 'We visit your site, understand your vision, and assess conditions before any stone is cut.',
  },
  {
    n: '02',
    title: 'Design planning & material selection',
    text: 'Together we select stone types and finishes that align with the architecture of your space.',
  },
  {
    n: '03',
    title: 'Quotation & project scheduling',
    text: 'A transparent, detailed quotation and a realistic schedule — no surprises.',
  },
  {
    n: '04',
    title: 'Supply, cutting & installation',
    text: 'We supply the stone, cut each piece to specification, and install it with our own teams.',
  },
  {
    n: '05',
    title: 'Quality control & handover',
    text: 'Every project is inspected against the specification before we hand it over.',
  },
]

export type Service = {
  slug: string
  title: string
  text: string
  tags: string[]
  /** A related real photograph, only where one genuinely shows this kind of work. */
  image?: PhotoKey
}

export const SERVICES: Service[] = [
  {
    slug: 'stone-cladding-masonry',
    title: 'Stone Cladding & Masonry',
    text: 'Expert stone cladding including strip walling, rivens, and dolomite finishes — enhancing both the visual appeal and durability of buildings, suited to modern and traditional design.',
    tags: ['Strip walling', 'Rivens', 'Dolomite finishes'],
    image: 'slateFacade',
  },
  {
    slug: 'custom-cutting-installation',
    title: 'Custom Stone Cutting & Installation',
    text: 'Tailored stone cutting that aligns with architectural requirements. From feature walls to detailed finishes, each piece is precisely cut and professionally installed.',
    tags: ['Feature walls', 'Bespoke cuts', 'Professional installation'],
    image: 'quartzPillar',
  },
  {
    slug: 'stone-flooring-paving',
    title: 'Stone Flooring & Paving',
    text: 'Supply and installation of stone flooring and paving for homes, commercial properties, walkways, driveways, patios, and courtyards.',
    tags: ['Driveways', 'Patios', 'Courtyards', 'Walkways'],
  },
  {
    slug: 'epoxy-services',
    title: 'Epoxy Flooring & Coating',
    text: 'Smooth, durable, low-maintenance epoxy flooring and coating systems for residential, commercial, and industrial environments.',
    tags: ['Residential', 'Commercial', 'Industrial'],
  },
  {
    slug: 'interior-design',
    title: 'Interior Stone Design',
    text: 'Interior stone features that blend functionality with natural texture: feature walls, fireplaces, kitchen finishes and countertops, and bathroom applications.',
    tags: ['Feature walls', 'Fireplaces', 'Countertops', 'Bathrooms'],
  },
  {
    slug: 'exterior-landscaping',
    title: 'Exterior Design & Landscaping',
    text: 'Landscaping design and execution, outdoor kitchens and entertainment areas, patios, decorative wall features, and swimming pool stone finishes.',
    tags: ['Landscaping', 'Outdoor kitchens', 'Pool finishes'],
    image: 'wallNight2',
  },
  {
    slug: 'building-construction',
    title: 'Building & Construction',
    text: 'Construction of homes and structures, delivering quality workmanship from foundation to completion while adhering to building standards.',
    tags: ['Foundations', 'Structures', 'Turnkey builds'],
  },
  {
    slug: 'renovations-refurbishments',
    title: 'Renovations & Refurbishments',
    text: 'Modernising and enhancing existing properties, improving functionality, aesthetics, and property value.',
    tags: ['Modernisation', 'Refurbishment'],
  },
  {
    slug: 'project-management',
    title: 'Project Management & Consultation',
    text: 'Professional project management and consultation, ensuring projects are completed on time, within budget, and to specification.',
    tags: ['Consultation', 'Scheduling', 'Delivery'],
  },
]

export type Project = {
  slug: string
  title: string
  category: 'Residential' | 'Commercial'
  location: string
  summary: string
  /** Photographs of this specific project. Leave empty until the client supplies them. */
  photos?: PhotoKey[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'umwinzdale',
    title: 'Umwinzdale',
    category: 'Residential',
    location: 'Harare',
    summary: 'Residential stonework in the Umwinzdale area of Harare.',
  },
  {
    slug: 'madokero',
    title: 'Madokero',
    category: 'Residential',
    location: 'Harare',
    summary: 'Residential stone works within the Madokero developments, Harare.',
  },
  {
    slug: 'madokero-commercial',
    title: 'Madokero Commercial Developments',
    category: 'Commercial',
    location: 'Harare',
    summary: 'Commercial stone works across the Madokero commercial developments.',
  },
  {
    slug: 'mabvazuva',
    title: 'Mabvazuva',
    category: 'Residential',
    location: 'Harare',
    summary: 'Residential stonework in Mabvazuva, Harare.',
  },
  {
    slug: 'arlington',
    title: 'Arlington',
    category: 'Residential',
    location: 'Harare',
    summary: 'Residential stonework in Arlington, Harare.',
  },
  {
    slug: 'victoria-falls-residential',
    title: 'Residential Developments',
    category: 'Residential',
    location: 'Victoria Falls',
    summary: 'Residential stone works across developments in Victoria Falls.',
  },
  {
    slug: 'exodus-project',
    title: 'Exodus Project',
    category: 'Commercial',
    location: 'Kwekwe',
    summary: 'Commercial stone construction for the Exodus Project in Kwekwe.',
  },
]

export const TEAM: { name: string; role: string; bio: string; image: PhotoKey | null }[] = [
  {
    name: 'Stanley Mugabe',
    role: 'Director / Owner',
    bio: 'Provides strategic leadership and oversees quality and execution.',
    image: 'director',
  },
  {
    name: 'Nyasha Mugabe',
    role: 'Project Liaison',
    bio: 'Coordinates projects and manages client communication.',
    image: null,
  },
  {
    name: 'Portia Makonese',
    role: 'Marketing Department',
    bio: 'Oversees branding, marketing, and client engagement.',
    image: null,
  },
  {
    name: 'Tawanyasha Mutande',
    role: 'Accounts Department',
    bio: 'Handles financial administration and accounts management.',
    image: null,
  },
]

export const VALUES = ['Quality', 'Integrity', 'Customer Focus', 'Innovation']
