const words = ['Brand', 'Motion', 'Type', 'Packaging', 'Web', 'Sound', 'Story']

export function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-ink py-4 text-paper">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-3xl font-bold">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            {w}
            <span className="inline-block animate-spin-slow text-tangerine">✺</span>
          </span>
        ))}
      </div>
    </div>
  )
}
