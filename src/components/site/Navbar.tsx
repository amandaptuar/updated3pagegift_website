import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Gift } from "lucide-react";

const links = [
  { name: "Home", to: "/" },
  { name: "Gallery", to: "/gallery" },
  { name: "Contact Us", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "glass shadow-soft" : "bg-background/80"}`}>
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-luxury">
            <Gift className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight">
            Desi <span className="text-gradient-primary">Artizans</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-9 text-sm font-semibold">
          {links.map((l) => (
            <Link
              key={l.name}
              to={l.to}
              activeProps={{ className: "text-primary font-bold active-link" }}
              inactiveProps={{ className: "text-foreground/80 hover:text-primary" }}
              className="relative transition group py-1"
            >
              {l.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-primary transition-all group-hover:w-full group-[.active-link]:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-secondary"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur px-4 py-4 space-y-2">
          {links.map((l) => (
            <Link
              key={l.name}
              to={l.to}
              onClick={() => setOpen(false)}
              activeProps={{ className: "text-primary font-bold bg-primary/5" }}
              inactiveProps={{ className: "text-foreground/85 hover:text-primary hover:bg-secondary/40" }}
              className="block py-2.5 px-4 rounded-xl text-sm font-semibold transition"
            >
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
