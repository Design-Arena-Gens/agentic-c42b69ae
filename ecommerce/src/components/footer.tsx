import Link from "next/link";

const links = {
  shop: [
    { label: "Women", href: "#women" },
    { label: "Men", href: "#men" },
    { label: "Kids", href: "#kids" },
    { label: "Accessories", href: "#accessories" },
  ],
  studio: [
    { label: "Our story", href: "#story" },
    { label: "Sustainability", href: "#story" },
    { label: "Craftsmanship", href: "#story" },
    { label: "Journal", href: "#" },
  ],
  support: [
    { label: "Customer care", href: "#" },
    { label: "Shipping & returns", href: "#" },
    { label: "Gift cards", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-sand-100 bg-sand-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 bg-white text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                LA
              </span>
              <p className="section-heading text-xl text-ink-800">
                Lumé Atelier
              </p>
            </div>
            <p className="mt-4 max-w-md text-sm text-ink-800/70">
              A modern wardrobe of long-lasting silhouettes, crafted with
              architectural sensibility and conscious materials.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm text-ink-800/70 sm:grid-cols-3">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-800/60">
                  {title}
                </p>
                <ul className="mt-3 space-y-2">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="transition hover:text-emerald-500"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-sand-100 pt-6 text-xs text-ink-800/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Lumé Atelier. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="transition hover:text-emerald-500">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-emerald-500">
              Terms
            </Link>
            <Link href="#" className="transition hover:text-emerald-500">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
