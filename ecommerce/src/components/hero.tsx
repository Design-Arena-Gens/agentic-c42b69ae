import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1.2fr,1fr] md:items-center">
        <div className="relative z-10 space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">
            New Season Capsule
          </p>
          <h1 className="section-heading text-4xl leading-tight text-ink-800 sm:text-5xl md:text-6xl">
            Sculpted silhouettes with architectural softness.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-ink-800/70">
            Crafted from regenerative fabrics and precise tailoring, each piece
            is designed to move with intention. Discover modular layers that
            transition effortlessly from day to evening.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-ink-800"
            >
              Explore the collection
            </button>
            <button
              type="button"
              className="rounded-full border border-ink-800/20 px-6 py-3 text-sm font-semibold text-ink-800 transition hover:border-emerald-500 hover:text-emerald-500"
            >
              View lookbook
            </button>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-5 text-sm text-ink-800/70 sm:grid-cols-4">
            <div>
              <dt className="font-semibold text-ink-800">93%</dt>
              <dd>Regenerative textiles</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-800">48 hr</dt>
              <dd>Made-to-ship cadence</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-800">12k+</dt>
              <dd>Community members</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-800">4.9 ★</dt>
              <dd>Customer rating</dd>
            </div>
          </dl>
        </div>

        <div className="relative flex justify-end">
          <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-sand-100 via-white to-sand-100 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.45)]">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
              alt="Model wearing Lumé Atelier"
              width={720}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-x-6 bottom-6 rounded-3xl bg-white/80 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                Featured look
              </p>
              <p className="section-heading mt-2 text-xl text-ink-800">
                The Aurora Set
              </p>
              <p className="mt-2 text-sm text-ink-800/70">
                Layered knit top, modular wrap skirt, and the Meridian coat in
                limited Velvet Clay.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(120%_120%_at_10%_10%,rgba(47,143,131,0.25),rgba(253,250,244,0))]" />
    </section>
  );
}
