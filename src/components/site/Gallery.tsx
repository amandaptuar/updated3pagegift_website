import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, ShoppingBag, Phone, Mail } from "lucide-react";
import { SectionHeading } from "./Categories";
import { WhatsAppIcon } from "./ProductCard";

const galleryItems = [
  {
    id: 1,
    src: "/WhatsApp Image 2026-05-19 at 12.05.35 AM.jpeg",
    title: "Premium Photo Collage Frame",
    category: "frames",
    desc: "A stunning hand-assembled wooden photo collage frame featuring high-definition prints. Perfectly engineered to preserve and celebrate your family's most cherished memories.",
    customization: "Add up to 8 high-resolution photos, custom titles, and select wood finish colors (Warm Mahogany, Classic Oak, Sleek Black).",
  },
  {
    id: 2,
    src: "/WhatsApp Image 2026-05-19 at 12.05.36 AM.jpeg",
    title: "Thermochromic Magic Ceramic Mug",
    category: "mugs",
    desc: "A premium heat-sensitive ceramic mug. It appears completely black at room temperature, then elegantly transitions to reveal a vibrant custom photo when a warm beverage is poured.",
    customization: "Upload 1 high-resolution photo and optional back-side text script. Dishwasher and microwave safe.",
  },
  {
    id: 3,
    src: "/WhatsApp Image 2026-05-19 at 12.05.37 AM (1).jpeg",
    title: "Custom 3D Acrylic LED Lamp",
    category: "lamps",
    desc: "A beautiful acrylic art lamp precision engraved with custom line portraits or decorative typography. Emits a comforting warm golden glow over a solid beechwood base.",
    customization: "Provide couple names, a special anniversary date, or upload a photo to convert into a hand-drawn line art portrait.",
  },
  {
    id: 4,
    src: "/WhatsApp Image 2026-05-19 at 12.05.37 AM.jpeg",
    title: "Magical Reversible Sequin Cushion",
    category: "mugs",
    desc: "A delightful interactive cushion wrapped in premium two-tone magical sequins. Swipe your hand over the sequins to seamlessly reveal or conceal your custom picture.",
    customization: "Available in Gold-White, Crimson-White, and Black-White sequin varieties. Includes soft down-alternative insert.",
  },
  {
    id: 5,
    src: "/WhatsApp Image 2026-05-19 at 12.05.38 AM (1).jpeg",
    title: "Sleek Custom Name Pendant Necklace",
    category: "jewelry",
    desc: "A luxury stainless steel pendant personalized with custom typography script, finished in 18k champagne gold plating. Hypoallergenic and highly durable.",
    customization: "Specify name (up to 12 characters), select cursive font styling, and chain length (16 inches to 22 inches).",
  },
  {
    id: 6,
    src: "/WhatsApp Image 2026-05-19 at 12.05.38 AM (2).jpeg",
    title: "Executive Corporate Product Box",
    category: "hampers",
    desc: "An ultra-premium corporate product kit. Includes a matte black thermal flask, leatherette agenda planner, elegant pen, and fine dark chocolates packaged in a luxury presentation box.",
    customization: "Custom laser-engraved corporate branding, company logos, and individual employee name tags.",
  },
  {
    id: 7,
    src: "/WhatsApp Image 2026-05-19 at 12.05.38 AM.jpeg",
    title: "Eternal Love Anniversary Hamper",
    category: "hampers",
    desc: "A lavishly prepared premium romantic product box. Features custom matching ceramic mugs, artificial gold roses, personalized scroll letters, and scented candles.",
    customization: "Customized letters, special couple photos for the box cover, and custom names on mugs.",
  },
  {
    id: 8,
    src: "/WhatsApp Image 2026-05-19 at 12.05.39 AM (1).jpeg",
    title: "Deluxe Birthday Explosion Box",
    category: "frames",
    desc: "An intricate multi-layered handmade papercraft explosion box. Spills open into a breathtaking display of beautiful photo panels, pull-out message cards, and hidden chocolate treats.",
    customization: "Submit 12-24 photos, hand-written message drafts, and select preferred color palettes (Crimson blush, Midnight gold, Lavender mist).",
  },
  {
    id: 9,
    src: "/WhatsApp Image 2026-05-19 at 12.05.39 AM (2).jpeg",
    title: "Anniversary Magic Mug Pair",
    category: "mugs",
    desc: "A beautiful matching pair of custom couple photo magic mugs celebrating your long-lasting love journey.",
    customization: "Upload 2 separate high-res photos and names for the dual mug arrangement.",
  },
  {
    id: 10,
    src: "/WhatsApp Image 2026-05-19 at 12.05.39 AM.jpeg",
    title: "Premium Walnut Photo Frame",
    category: "frames",
    desc: "A robust solid walnut wooden photo frame featuring high-contrast premium printing for your single landscape or portrait memories.",
    customization: "Upload 1 high-resolution photo and choose frame hanging orientations.",
  },
  {
    id: 11,
    src: "/WhatsApp Image 2026-05-19 at 12.05.40 AM (1).jpeg",
    title: "Custom Signature T-Shirt",
    category: "jewelry",
    desc: "Premium combed cotton T-shirt custom printed with names, vector line illustrations, or matching couple designs.",
    customization: "Choose standard size (S, M, L, XL, XXL) and provide custom name/design vector.",
  },
  {
    id: 12,
    src: "/WhatsApp Image 2026-05-19 at 12.05.40 AM.jpeg",
    title: "Festival Warm Glow LED Stand",
    category: "lamps",
    desc: "An elegant wooden stand holding custom name cuts illuminated with warm LED lights, creating the perfect cozy home atmosphere.",
    customization: "Provide family names or home address cut text.",
  },
];

const categories = [
  { id: "all", name: "All Stories" },
  { id: "frames", name: "Custom Frames" },
  { id: "mugs", name: "Mugs & Cushions" },
  { id: "lamps", name: "LED Lamps" },
  { id: "hampers", name: "Product Hampers" },
  { id: "jewelry", name: "Name Jewelry" },
];

export function Gallery({ isFullPage = false }: { isFullPage?: boolean }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className={`bg-gradient-blush ${isFullPage ? "py-12 md:py-20" : "py-20"}`}>
      <div className="container mx-auto px-4">
        {isFullPage ? (
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">Our Gallery</span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mt-2 text-foreground">
              Let's Check Our Product Stories
            </h1>
            <p className="text-muted-foreground mt-4 text-sm md:text-base leading-relaxed">
              Explore our lookbook of hand-wrapped customized memories. Each photo represents a real product designed, packaged, and delivered to bring wide smiles.
            </p>
          </div>
        ) : (
          <SectionHeading eyebrow="Photo Gallery" title="Let's Check Our Product Stories" />
        )}

        {/* Filter Navigation */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-primary text-white shadow-soft"
                  : "bg-white text-muted-foreground hover:text-foreground hover:bg-white/80 border border-border/40"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-12 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-soft group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto max-h-[450px] object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Visual Glassmorphic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                  <span className="text-gold text-xs font-semibold uppercase tracking-wider mb-1">
                    {categories.find((c) => c.id === item.category)?.name}
                  </span>
                  <h3 className="text-white font-display text-lg font-bold">{item.title}</h3>
                  <p className="text-white/70 text-xs mt-2 line-clamp-2 leading-relaxed">{item.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-white/90">
                    <span>View Custom Details</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Luxury Lightbox Overlay Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-background max-w-4xl w-full rounded-3xl overflow-hidden shadow-luxury grid md:grid-cols-2 max-h-[90vh] md:max-h-[80vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute right-4 top-4 z-10 p-2.5 rounded-full bg-black/50 hover:bg-black/80 transition text-white"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Left Column: Premium Photo Gallery View */}
                <div className="relative h-64 md:h-full bg-secondary">
                  <img src={selectedItem.src} alt={selectedItem.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 bg-primary/95 text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase shadow">
                    Handcrafted Story
                  </div>
                </div>

                {/* Right Column: Custom Details */}
                <div className="p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <span className="text-primary font-bold text-xs uppercase tracking-widest">
                      {categories.find((c) => c.id === selectedItem.category)?.name}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-1">
                      {selectedItem.title}
                    </h2>

                    <div className="h-px bg-border my-5" />

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{selectedItem.desc}</p>

                    {/* Customization Details Grid */}
                    <div className="bg-secondary/70 rounded-2xl p-4 md:p-5 border border-border/30 space-y-3">
                      <div className="flex items-start gap-3">
                        <ShoppingBag className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-foreground">Customization Options</h4>
                          <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                            {selectedItem.customization}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-foreground font-display">Preparation Time</h4>
                          <p className="text-muted-foreground text-xs mt-1">
                            Requires 2-3 business days for custom design work.
                          </p>
                        </div>
                      </div>

                      {/* Official Contact Details */}
                      <div className="h-px bg-border/40 my-2" />
                      <div className="space-y-2 text-xs">
                        <div className="font-bold text-foreground uppercase tracking-wider">Design Concierge Contact</div>
                        <div className="flex items-center gap-2.5 text-muted-foreground mt-1">
                          <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>Call Support: <b className="text-foreground">+91 83023 09238</b></span>
                        </div>
                        <div className="flex items-center gap-2.5 text-muted-foreground">
                          <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>Email Concierge: <b className="text-foreground">shankeysain75@gmail.com</b></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Order / Enquire WhatsApp CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/918302309238?text=Hi%20Desi%20Artizans!%20I'm%20interested%20in%20customizing%20the%20*${encodeURIComponent(
                        selectedItem.title
                      )}*%20from%20your%20Gallery!%20Could%20you%20please%20help%20me%20with%20pricing%20and%20options?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-whatsapp hover:bg-whatsapp/90 text-white font-semibold py-3.5 px-6 shadow-soft transition-all text-sm uppercase tracking-wider animate-pulse-ring"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Enquire via WhatsApp
                    </a>

                    <button
                      onClick={() => setSelectedItem(null)}
                      className="border border-border/80 hover:bg-secondary rounded-2xl text-foreground font-semibold py-3.5 px-6 transition text-sm"
                    >
                      Close Lookbook
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
