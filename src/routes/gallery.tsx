import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Gallery } from "@/components/site/Gallery";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

function GalleryPage() {
  useEffect(() => {
    document.title = "Lookbook Gallery — Desi Artizans Products";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Browse our custom curated lookbook of personalized photo collage frames, magical sequins, corporate kits, and luxury lamps."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Gallery isFullPage={true} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
