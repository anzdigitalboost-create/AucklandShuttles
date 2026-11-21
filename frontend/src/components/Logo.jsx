import { cn } from '../lib/cn'

/** Shuttle mark — same artwork as public/favicon.svg. */
export function LogoMark({ className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#186DCC" />
      <path
        fill="#fff"
        d="M6 12.5A2.5 2.5 0 0 1 8.5 10h10.2a2.5 2.5 0 0 1 1.9.9l4.3 5a2.5 2.5 0 0 1 .6 1.6v2a1.5 1.5 0 0 1-1.5 1.5h-.6a3 3 0 0 0-5.8 0h-4.2a3 3 0 0 0-5.8 0H7.5A1.5 1.5 0 0 1 6 19.5z"
      />
      <path fill="#186DCC" d="M8.5 12.2h4v3.3h-4zM14 12.2h4.300l2.800 3.300H14z" />
      <circle cx="10.500" cy="21.500" r="2" fill="#FFB703" />
      <circle cx="20.500" cy="21.500" r="2" fill="#FFB703" />
    </svg>
  )
}

/** Full logo: mark + wordmark. `light` is for dark backgrounds. */
export default function Logo({ light = false, className = '' }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark />
      <span className="font-display leading-none">
        <span className={cn('block text-lg font-extrabold tracking-tight', light ? 'text-white' : 'text-ink')}>
          Auckland
        </span>
        <span className={cn('block text-[13px] font-bold uppercase tracking-[0.22em]', light ? 'text-sun' : 'text-brand')}>
          Shuttles
        </span>
      </span>
    </span>
  )
}
