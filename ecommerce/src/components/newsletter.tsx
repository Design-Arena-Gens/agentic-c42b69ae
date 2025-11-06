export function Newsletter() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 rounded-[3rem] border border-sand-100 bg-sand-50 p-12 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.4)] lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">
              Atelier dispatch
            </p>
            <h2 className="section-heading mt-3 text-3xl text-ink-800 sm:text-4xl">
              Join the circle for early access drops and tailoring events.
            </h2>
            <p className="mt-5 max-w-lg text-sm text-ink-800/70">
              Members receive bespoke fit consultations, styling guides, and
              invitations to seasonal previews across New York, Copenhagen, and
              Tokyo studios.
            </p>
          </div>
          <form className="grid gap-4 text-sm text-ink-800/70">
            <label className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-800/60">
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-ink-800/15 bg-white px-4 py-3 text-sm text-ink-800 shadow-inner shadow-ink-800/5 outline-none transition placeholder:text-ink-800/40 focus:border-emerald-500"
              />
            </label>
            <label className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-800/60">
              Preferred capsule
              <select
                name="capsule"
                className="mt-2 w-full rounded-2xl border border-ink-800/15 bg-white px-4 py-3 text-sm text-ink-800 shadow-inner shadow-ink-800/5 outline-none transition focus:border-emerald-500"
              >
                <option>Women&apos;s Atelier</option>
                <option>Men&apos;s Studio</option>
                <option>Kids Capsule</option>
                <option>Accessory Editions</option>
              </select>
            </label>
            <div className="flex items-center gap-3 text-xs text-ink-800/60">
              <input
                type="checkbox"
                id="consent"
                className="h-5 w-5 rounded border border-ink-800/15 accent-emerald-500"
                defaultChecked
              />
              <label htmlFor="consent">
                I agree to receive communications in line with the privacy
                policy.
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-ink-800 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-500"
            >
              Request invitation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
