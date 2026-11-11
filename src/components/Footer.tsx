export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="card -rotate-1 bg-tangerine text-center hover:rotate-0 md:p-16">
        <h2 className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">
          Got a wild idea?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg">Tell us about it. We reply within two days, usually faster.</p>
        <a href="mailto:hello@moxie.studio" className="btn-ghost mt-8">hello@moxie.studio ✉</a>
      </div>
      <p className="mt-12 text-center font-mono text-xs uppercase tracking-wider text-ink/60">
        © 2026 Moxie Studio — made with too much coffee
      </p>
    </footer>
  )
}
