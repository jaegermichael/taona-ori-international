import { MessageCircle } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { whatsappLink } from '../data/site'

export default function WhatsAppButton() {
  const { pathname } = useLocation()
  if (pathname === '/contact') return null

  return (
    <a
      href={whatsappLink('Hello Taona Ori International, I would like a quote for stone work.')}
      target="_blank"
      rel="noopener noreferrer"
      className="press fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-[#1f8f4e] px-4 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-navy-950/30 hover:bg-[#177a41] sm:right-6 sm:bottom-6 sm:px-5"
      aria-label="Chat with Taona Ori International on WhatsApp"
    >
      <MessageCircle size={20} aria-hidden />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  )
}
