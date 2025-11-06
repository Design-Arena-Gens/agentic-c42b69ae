import Image from "next/image";
import { categories } from "@/data/products";

const spotlights = {
  women: {
    headline: "Women",
    blurb:
      "Sculpted tailoring, fluid knitwear, and evening layers that transition with ease.",
    stat: "Capsule 04",
  },
  men: {
    headline: "Men",
    blurb:
      "Engineered outerwear, modular shirting, and relaxed suiting in elevated fabrics.",
    stat: "Edition 07",
  },
  kids: {
    headline: "Kids",
    blurb:
      "Playproof silhouettes in organic cottons and plant-dyed palettes sized to grow.",
    stat: "Drop 03",
  },
  accessories: {
    headline: "Accessories",
    blurb:
      "Architectural bags, merino knits, and sculptural jewelry to finish every look.",
    stat: "Studio Lab",
  },
} as const;

export function CollectionSpotlights() {
  return (
    <section className="relative bg-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(90%_120%_at_80%_20%,rgba(241,91,79,0.25),rgba(255,255,255,0))]" />
      <div className="relative mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        {categories.map((category) => {
          const content = spotlights[category.id as keyof typeof spotlights];
          return (
            <article
              id={category.id}
              key={category.id}
              className="group relative overflow-hidden rounded-[2.5rem] border border-sand-100 bg-sand-50 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.4)]"
            >
              <div className="grid gap-0 md:grid-cols-[1.1fr,0.9fr]">
                <div className="p-10">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                    {content.stat}
                  </p>
                  <h3 className="section-heading mt-3 text-2xl text-ink-800">
                    {content.headline}
                  </h3>
                  <p className="mt-3 text-sm text-ink-800/70">
                    {content.blurb}
                  </p>
                  <button className="mt-8 inline-flex items-center text-xs font-semibold uppercase tracking-[0.3em] text-ink-800 transition hover:text-emerald-500">
                    Explore {content.headline} →
                  </button>
                </div>
                <div className="relative h-64 md:h-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-800/30 via-transparent to-transparent md:bg-gradient-to-l" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
