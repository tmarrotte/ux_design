const cards = [
  { title: 'Fizzo', kind: 'Identity', desc: 'A sparkling-water brand with a loud personality.', color: 'bg-sky', span: 'md:col-span-2' },
  { title: 'Plume', kind: 'Packaging', desc: 'Tea tins that belong on a shelf, not in a cupboard.', color: 'bg-blush', span: '' },
  { title: 'Orbit', kind: 'Product', desc: 'A habit tracker that feels like a game.', color: 'bg-lime', span: '' },
  { title: 'Kiln & Co.', kind: 'Web', desc: 'Ceramics storefront with tactile, bouncy interactions.', color: 'bg-lilac', span: 'md:col-span-2' },
]

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between gap-6">
        <h2 className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">Selected work</h2>
        <span className="tag hidden bg-paper md:inline-block">2023 — 2026</span>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <article key={c.title} className={`card group ${c.color} ${c.span}`}>
            <div className="flex items-center justify-between">
              <span className="tag bg-paper">{c.kind}</span>
              <span className="grid size-10 place-items-center rounded-full border-2 border-ink bg-paper transition-transform group-hover:rotate-45">↗</span>
            </div>
            <h3 className="mt-16 font-display text-4xl font-bold">{c.title}</h3>
            <p className="mt-2 max-w-sm text-ink/80">{c.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
