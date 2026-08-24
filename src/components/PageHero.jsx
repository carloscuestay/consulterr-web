import Logo from './Logo'

/** Cabecera estándar de las páginas interiores. */
export default function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="relative overflow-hidden bg-marina-900 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.055]">
        <Logo variant="isotipo" tone="blanco" className="absolute -right-24 -top-20 h-[420px] w-auto" />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(60rem 32rem at 15% -10%, rgba(46,109,164,.55), transparent 60%)',
        }}
      />
      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        {eyebrow && (
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-marina-300">
            <span className="h-px w-6 bg-marina-400" />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-5 max-w-4xl text-[2.1rem] leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-marina-200/85 sm:text-lg">{lead}</p>
        )}
        {children}
      </div>
    </section>
  )
}
