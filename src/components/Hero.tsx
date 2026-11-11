export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
      <span className="tag bg-lime">Now booking Q1 ✦</span>
      <h1 className="mt-6 font-display text-6xl font-extrabold leading-[0.95] tracking-tight md:text-8xl">
        Ideas that
        <br />
        <span className="relative inline-block">
          <span className="relative z-10">refuse</span>
          <span className="absolute inset-x-0 bottom-1 z-0 h-5 -rotate-1 rounded-full bg-lilac md:h-7" />
        </span>{' '}
        to blend in.
      </h1>
      <p className="mt-8 max-w-xl text-xl text-ink/75">
        Moxie is an independent studio crafting bold identities, playful products and
        brands people actually talk about.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a href="#work" className="btn">See the work →</a>
        <a href="#contact" className="btn-ghost">Say hello</a>
      </div>

      <div aria-hidden className="pointer-events-none absolute right-6 top-24 hidden lg:block">
        <div className="relative h-72 w-72">
          <div className="absolute inset-0 animate-float rounded-full border-2 border-ink bg-sky shadow-pop" />
          <div className="absolute -left-10 top-40 size-28 animate-wiggle rounded-blob border-2 border-ink bg-blush shadow-pop" />
          <div className="absolute -bottom-6 right-2 size-20 rotate-12 border-2 border-ink bg-lime shadow-pop-sm [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow text-7xl text-tangerine">✺</span>
        </div>
      </div>
    </section>
  )
}
