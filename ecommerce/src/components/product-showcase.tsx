import { featuredProducts, trendingProducts } from "@/data/products";
import { ProductCard } from "./product-card";

export function ProductShowcase() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">
              Featured edit
            </p>
            <h2 className="section-heading mt-3 text-3xl text-ink-800 sm:text-4xl">
              The seasonless essentials collection.
            </h2>
          </div>
          <p className="max-w-lg text-sm text-ink-800/70">
            Crafted in limited runs, each garment is made with regenerative
            fibers, low-impact dyes, and precise tailoring to ensure a timeless
            wardrobe that endures beyond the season.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div id="featured">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">
              Trending now
            </p>
            <h2 className="section-heading mt-3 text-2xl text-ink-800 sm:text-3xl">
              Pieces to build your uniform.
            </h2>
          </div>
          <button className="rounded-full border border-ink-800/15 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink-800 transition hover:border-emerald-500 hover:text-emerald-500">
            View all drops
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
