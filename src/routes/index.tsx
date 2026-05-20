import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { TrendingProducts, PopularProducts } from "@/components/site/Products";
import { Banners } from "@/components/site/Banners";
import { Features } from "@/components/site/Features";
import { BestDeals } from "@/components/site/BestDeals";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    document.title = "Giforia — Premium Customized Gifts for Every Occasion";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "India's premium customized gift shop. Personalized photo frames, mugs, LED lamps, couple gifts & corporate hampers — hand-wrapped and delivered with love."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <TrendingProducts />
        <Banners />
        <Features />
        <PopularProducts />
        <BestDeals />
        <Gallery />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
