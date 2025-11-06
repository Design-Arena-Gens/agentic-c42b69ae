import Link from "next/link";

const navigation = [
  { name: "Women", href: "#women" },
  { name: "Men", href: "#men" },
  { name: "Kids", href: "#kids" },
  { name: "Accessories", href: "#accessories" },
  { name: "About", href: "#story" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-sand-50/90 backdrop-blur border-b border-sand-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 bg-white text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500 transition group-hover:border-emerald-500">
            LA
          </span>
          <span className="section-heading text-xl text-ink-800 transition group-hover:text-emerald-500">
            Lumé Atelier
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-800 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition hover:text-emerald-500"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-sand-200 px-4 py-2 text-sm font-medium text-ink-800 transition hover:border-emerald-500 hover:text-emerald-500 md:inline-flex">
            Sign in
          </button>
          <button className="rounded-full bg-ink-800 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500">
            Shop New Arrivals
          </button>
        </div>
      </div>
    </header>
  );
}
