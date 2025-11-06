import Image from "next/image";
import { testimonials } from "@/data/products";

export function Testimonials() {
  return (
    <section
      id="community"
      className="bg-ink-800 text-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">
              Community voices
            </p>
            <h2
              id="testimonials-heading"
              className="section-heading mt-3 text-3xl text-white sm:text-4xl"
            >
              Design-forward, planet-minded, celebrated by creators.
            </h2>
          </div>
          <p className="max-w-lg text-sm text-white/70">
            Lumé Atelier partners with regenerative farms, local ateliers, and
            independent designers to create refined staples that support both
            people and planet.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.65)] backdrop-blur transition hover:border-emerald-400/40"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/80">
                “{testimonial.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
