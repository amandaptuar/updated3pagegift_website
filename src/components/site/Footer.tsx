import { Gift, Instagram, Facebook, Twitter, Youtube, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { WhatsAppIcon } from "./ProductCard";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.04_350)] text-white/80">
      <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary">
              <Gift className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-2xl font-bold text-white">
              Desi <span className="text-primary">Artizans</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            India's premium destination for customized products. Hand-wrapped, thoughtfully designed, and delivered with love to every doorstep.
          </p>
          <div className="mt-6 space-y-2.5 text-sm text-white/60">
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-primary shrink-0" /> Jaipur, India
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-primary shrink-0" /> +91 83023 09238
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-primary shrink-0" /> shankeysain75@gmail.com
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((I, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-gradient-primary hover:text-white transition duration-300"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links with proper Router Links */}
        <div>
          <h4 className="mb-4 font-display text-lg font-bold text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Home Page
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-primary transition">
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <FooterCol
          title="Categories"
          links={["Birthday Products", "Anniversary Products", "Corporate Hampers", "Couple Products", "Acrylic LED Lamps"]}
        />
        <FooterCol title="Support" links={["FAQ Help", "Shipping Info", "Returns Policy", "Privacy Terms"]} />
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-xs md:flex-row">
          <div>© {new Date().getFullYear()} Desi Artizans. Crafted with ❤ for product moments.</div>
          <a
            href="https://wa.me/918302309238"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-whatsapp hover:text-white transition"
          >
            <WhatsAppIcon className="h-4 w-4" /> Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="mb-4 font-display text-lg font-bold text-white">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l}>
            <Link to="/contact" className="hover:text-primary transition text-white/70 hover:text-white">
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
