import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";

export function CategoryGrid() {
  return (
    <section
      id="categories"
      className="mx-auto max-w-6xl px-6 py-20"
      aria-labelledby="category-heading"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">
            Shop by category
          </p>
          <h2 className="section-heading mt-3 text-3xl text-ink-800 sm:text-4xl">
            Curated edits for every wardrobe.
          </h2>
        </div>
        <Link
          href="#story"
          className="inline-flex items-center text-sm font-semibold text-emerald-500 transition hover:text-ink-800"
        >
          Our design philosophy →
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`#${category.id}`}
            className="group relative overflow-hidden rounded-3xl bg-sand-100 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.28)]"
          >
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-800/65 via-ink-800/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              <h3 className="section-heading text-2xl">{category.name}</h3>
              <p className="mt-2 text-sm text-white/80">
                {category.description}
              </p>
              <span className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Discover
                <span className="ml-2 h-[1px] w-12 bg-white/50 transition group-hover:w-16" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
