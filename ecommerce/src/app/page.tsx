import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CategoryGrid } from "@/components/category-grid";
import { ProductShowcase } from "@/components/product-showcase";
import { Sustainability } from "@/components/sustainability";
import { Testimonials } from "@/components/testimonials";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { CollectionSpotlights } from "@/components/collection-spotlights";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-sand-50">
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid />
        <CollectionSpotlights />
        <ProductShowcase />
        <Sustainability />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
