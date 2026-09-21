export const CONTACT = {
  phone: '+263 783 220 589',
  phoneHref: 'tel:+263783220589',
  email: 'Taonaorint@gmail.com',
  locations: ['Harare', 'Victoria Falls', 'Kwekwe'],
}

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

export const SERVICES = [
  {
    slug: 'stone-cladding-masonry',
    title: 'Stone Cladding & Masonry',
    text: 'Expert stone cladding including strip walling, rivens, and dolomite finishes — enhancing both the visual appeal and durability of buildings, suited to modern and traditional design.',
    tags: ['Strip walling', 'Rivens', 'Dolomite finishes'],
  },
  {
    slug: 'custom-cutting-installation',
    title: 'Custom Stone Cutting & Installation',
    text: 'Tailored stone cutting that aligns with architectural requirements. From feature walls to detailed finishes, each piece is precisely cut and professionally installed.',
    tags: ['Feature walls', 'Bespoke cuts', 'Professional installation'],
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

export const SITE_IMAGES = {
  wallNight1: '/images/wall-night-1.jpg',
  wallNight2: '/images/wall-night-2.jpg',
  quartzPillar: '/images/quartz-pillar.jpg',
  slateFacade: '/images/slate-facade.jpg',
  sandstoneWall: '/images/sandstone-wall.jpg',
  director: '/images/director.jpg',
}

export const TEAM = [
  {
    name: 'Stanley Mugabe',
    role: 'Director / Owner',
    bio: 'Provides strategic leadership and oversees quality and execution.',
    image: SITE_IMAGES.director as string | null,
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
