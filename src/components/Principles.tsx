const principles = [
  { n: '01', t: 'Be loud, be kind', d: 'Big type and saturated color, always with warmth.' },
  { n: '02', t: 'Make it tactile', d: 'Hard shadows and thick strokes that invite a press.' },
  { n: '03', t: 'Play with purpose', d: 'Motion should delight and then get out of the way.' },
]

const swatches = [
  ['Paper', 'bg-paper'],
  ['Ink', 'bg-ink text-paper'],
  ['Tangerine', 'bg-tangerine'],
  ['Lilac', 'bg-lilac'],
  ['Lime', 'bg-lime'],
  ['Sky', 'bg-sky'],
  ['Blush', 'bg-blush'],
]

export function Principles() {
  return (
    <section className="border-y-2 border-ink bg-lilac/40">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">How we think</h2>
          <ul className="mt-10 space-y-6">
            {principles.map((p) => (
              <li key={p.n} className="flex gap-5">
                <span className="font-mono text-sm pt-2 text-tangerine">{p.n}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold">{p.t}</h3>
                  <p className="text-ink/75">{p.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 self-start sm:grid-cols-3">
          {swatches.map(([name, cls]) => (
            <div key={name} className={`${cls} flex aspect-square items-end rounded-2xl border-2 border-ink p-3 shadow-pop-sm transition-transform hover:-translate-y-1 hover:rotate-2`}>
              <span className="font-mono text-xs uppercase">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
