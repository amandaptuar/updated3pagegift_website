import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  useEffect(() => {
    document.title = "Contact Design Studio — Desi Artizans Products";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Reach out to our customized product design studio in Jaipur. Create photo collage frames, magical sequins, corporate products, and luxury anniversary packs."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
