export function Sustainability() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-sand-100"
      aria-labelledby="sustainability-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(100%_120%_at_20%_20%,rgba(47,143,131,0.2),rgba(253,250,244,0))]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">
            Conscious materials
          </p>
          <h2
            id="sustainability-heading"
            className="section-heading mt-3 text-3xl text-ink-800 sm:text-4xl"
          >
            Every fiber documented. Every maker credited.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-ink-800/75">
            Our Atelier Index tracks the lifecycle of every garment—from the
            regenerative farms we partner with to the ateliers crafting the
            finishing seam. Pieces are produced in micro-batches to minimize
            waste and maximize longevity.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-6 text-sm text-ink-800/75 sm:grid-cols-2">
            <div className="rounded-2xl border border-ink-800/10 bg-white p-6 shadow-[0_20px_45px_-45px_rgba(15,23,42,0.55)]">
              <dt className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                Supply chain
              </dt>
              <dd className="mt-3 text-base font-semibold text-ink-800">
                100% traceable fabrics
              </dd>
              <p className="mt-2 text-xs text-ink-800/60">
                Verified through blockchain-certified partners across Europe and
                South America.
              </p>
            </div>
            <div className="rounded-2xl border border-ink-800/10 bg-white p-6 shadow-[0_20px_45px_-45px_rgba(15,23,42,0.55)]">
              <dt className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                Impact
              </dt>
              <dd className="mt-3 text-base font-semibold text-ink-800">
                72% less water usage
              </dd>
              <p className="mt-2 text-xs text-ink-800/60">
                Dyehouses utilize closed-loop water systems and plant-based
                pigments.
              </p>
            </div>
          </dl>
        </div>

        <div className="grainy relative overflow-hidden rounded-[3rem] border border-ink-800/10 bg-white p-10 shadow-[0_30px_70px_-50px_rgba(15,23,42,0.55)]">
          <div className="relative flex flex-col gap-7">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                Atelier index
              </p>
              <p className="section-heading mt-2 text-2xl text-ink-800">
                From fiber to finish
              </p>
            </div>
            <ul className="space-y-6 text-sm text-ink-800/75">
              <li>
                <span className="font-semibold text-ink-800">
                  01. Regenerative fibers
                </span>
                <p className="mt-2 text-xs text-ink-800/60">
                  Alpaca, hemp, and bamboo sourced from partner collectives with
                  biodiversity initiatives.
                </p>
              </li>
              <li>
                <span className="font-semibold text-ink-800">
                  02. Conscious construction
                </span>
                <p className="mt-2 text-xs text-ink-800/60">
                  Limited micro-batch production in certified ateliers paid 30%
                  above living wage benchmarks.
                </p>
              </li>
              <li>
                <span className="font-semibold text-ink-800">
                  03. Circular care
                </span>
                <p className="mt-2 text-xs text-ink-800/60">
                  Complimentary repair studio and garment take-back program with
                  upcycling partners.
                </p>
              </li>
            </ul>
            <button className="self-start rounded-full border border-ink-800/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink-800 transition hover:border-emerald-500 hover:text-emerald-500">
              Explore impact report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
