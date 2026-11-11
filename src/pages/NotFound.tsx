import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PageHeader, { Accent } from '../components/PageHeader'
import { usePageMeta } from '../lib/usePageMeta'

type NotFoundProps = {
  what?: string
  backTo?: string
  backLabel?: string
}

export default function NotFound({ what = 'page', backTo = '/', backLabel = 'Back to the home page' }: NotFoundProps) {
  usePageMeta({
    title: 'Page not found',
    description: 'The page you were looking for could not be found.',
    noindex: true,
  })

  return (
    <PageHeader
      eyebrow="404"
      title={
        <>
          This {what} isn't <Accent>on our plans.</Accent>
        </>
      }
      intro="The link may be out of date or mistyped. Everything we build is reachable from the menu above."
    >
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          to={backTo}
          className="press inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-display font-semibold text-navy-950 hover:bg-white"
        >
          <ArrowLeft size={18} aria-hidden /> {backLabel}
        </Link>
        <Link
          to="/contact"
          className="press inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 font-display font-semibold hover:border-orange-500 hover:text-orange-500"
        >
          Contact us
        </Link>
      </div>
    </PageHeader>
  )
}
