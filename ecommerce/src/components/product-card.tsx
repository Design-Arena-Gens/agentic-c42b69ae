import Image from "next/image";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-sand-100 bg-white shadow-[0_25px_60px_-45px_rgba(15,23,42,0.45)] transition hover:-translate-y-1">
      <div className="relative h-72 w-full overflow-hidden bg-sand-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 768px) 280px, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        {product.tag ? (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
            {product.tag}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-500">
            {product.category}
          </p>
          <h3 className="section-heading mt-2 text-lg text-ink-800">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-ink-800/70">{product.description}</p>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-ink-800/60">
            <div className="flex items-center gap-1 font-medium text-ink-800">
              <span>★</span>
              <span>{product.rating.toFixed(1)}</span>
            </div>
            <span>•</span>
            <span>{product.colors.length} colorways</span>
            <span>•</span>
            <span>{product.sizes.length} sizes</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold text-ink-800">
              ${product.price}
            </p>
            <button className="rounded-full border border-ink-800/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-ink-800 transition hover:border-emerald-500 hover:text-emerald-500">
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
