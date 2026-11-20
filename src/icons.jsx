// Symbole de la marque : la pelote de fil dont le fil devient écriture.
export function Yarn({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 56" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="3.4" strokeLinecap="round">
        <circle cx="26" cy="25" r="18" />
        <path d="M12.5 14.5c8.5 1.5 18 8.5 22.5 21" />
        <path d="M19.5 9c7 3.5 14 12 17.5 23" />
        <path d="M9 25.5c7.5 0 15.5 6 19 17" />
        <path d="M39 37.5c2.5 6 6 7.5 8.5 5s4.8-2.5 6 1" />
      </g>
      <circle cx="59" cy="47" r="3" className="yarn-dot" />
    </svg>
  )
}

const paths = {
  chart: <><path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-5" /></>,
  video: <><rect x="2" y="5" width="15" height="14" rx="2" /><path d="M17 10l5-3v10l-5-3" /></>,
  pen: <><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.6 7.6" /><circle cx="11" cy="11" r="2" /></>,
  code: <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />,
}

export function Icon({ name }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
