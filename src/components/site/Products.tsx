import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard, type Product } from "./ProductCard";
import { SectionHeading } from "./Categories";

export const all: Product[] = [
  {
    name: "Custom Love Collage Frame",
    image: "/new-product-1.jpeg",
    price: 699,
    oldPrice: 999,
    rating: 5,
    badge: "NEW",
    desc: "A gorgeous custom-printed collage frame capturing your perfect couple moments. Elegant borders and high-definition photographic print.",
    customization: "Upload 4-8 photos, specify background titles (e.g. 'Together Forever'), and choose black or natural wood borders.",
  },
  {
    name: "Personalized Couple Photo Mug",
    image: "/new-product-2.jpeg",
    price: 699,
    oldPrice: 999,
    rating: 4,
    badge: "HOT",
    desc: "A premium heat-activated ceramic mug that turns from black to reveal your favorite picture when hot tea or coffee is poured.",
    customization: "Provide 1 high-resolution picture and select a base color (Glossy Black, Red Velvet, Midnight Blue).",
  },
  {
    name: "Golden Glow LED Lamp",
    image: "/new-product-3.jpeg",
    price: 699,
    oldPrice: 1299,
    rating: 5,
    badge: "-46%",
    desc: "A beautiful acrylic lamp custom engraved with line-art portrait drawings or special dates, standing on a solid wooden base.",
    customization: "Upload a high-quality portrait photo for conversion into custom line art, and provide names/anniversary date.",
  },
  {
    name: "Soft Magic Custom Cushion",
    image: "/WhatsApp Image 2026-05-19 at 12.05.37 AM.jpeg",
    price: 699,
    oldPrice: 999,
    rating: 4,
    desc: "An interactive sequined pillow that reveals your hidden custom photo with a simple swipe. Soft, cuddly, and extremely aesthetic.",
    customization: "Specify sequin color (Gold, Silver, Black, Red) and submit 1 high-definition photograph.",
  },
  {
    name: "Engraved Name Gold Locket",
    image: "/new-product-4.jpeg",
    price: 699,
    oldPrice: 1499,
    rating: 5,
    badge: "SALE",
    desc: "An ultra-premium gold-plated nameplate locket featuring custom calligraphic text script. Beautiful, long-lasting, and highly elegant.",
    customization: "Provide name (up to 12 characters) and choose chain length options.",
  },
  {
    name: "Elite Corporate Hampers Set",
    image: "/new-product-5.jpeg",
    price: 699,
    oldPrice: 1299,
    rating: 5,
    badge: "NEW",
    desc: "A professional executive product pack containing a temperature flask, notebook, metallic pen, and branded calendar.",
    customization: "Upload your corporate logo and brand name for custom laser-engraved branding.",
  },
  {
    name: "Eternal Rose Anniversary Product",
    image: "/WhatsApp Image 2026-05-19 at 12.05.38 AM.jpeg",
    price: 699,
    oldPrice: 999,
    rating: 4,
    desc: "A luxury romantic present featuring custom ceramic mugs, beautiful artificial gold roses, and scented wax candles.",
    customization: "Submit custom message text to print on the mugs and choose box arrangement colors.",
  },
  {
    name: "Handcrafted Birthday Explosion Box",
    image: "/new-product-6.jpeg",
    price: 699,
    oldPrice: 1199,
    rating: 5,
    desc: "An intricate multi-layered explosion box that opens into a spectacular sequence of photographs, message flaps, and treats.",
    customization: "Submit 16-24 photo memories, custom written birthday messages, and select base color themes.",
  },
  {
    name: "Anniversary Magic Mug Pair",
    image: "/WhatsApp Image 2026-05-19 at 12.05.39 AM (2).jpeg",
    price: 699,
    oldPrice: 999,
    rating: 5,
    desc: "A beautiful matching pair of custom couple photo magic mugs celebrating your long-lasting love journey.",
    customization: "Upload 2 separate high-res photos and names for the dual mug arrangement.",
  },
  {
    name: "Premium Walnut Photo Frame",
    image: "/WhatsApp Image 2026-05-19 at 12.05.39 AM.jpeg",
    price: 699,
    oldPrice: 999,
    rating: 4,
    badge: "BEST",
    desc: "A robust solid walnut wooden photo frame featuring high-contrast premium printing for your single landscape or portrait memories.",
    customization: "Upload 1 high-resolution photo and choose frame hanging orientations.",
  },
  {
    name: "Custom Signature T-Shirt",
    image: "/WhatsApp Image 2026-05-19 at 12.05.40 AM (1).jpeg",
    price: 699,
    oldPrice: 999,
    rating: 5,
    desc: "Premium combed cotton T-shirt custom printed with names, vector line illustrations, or matching couple designs.",
    customization: "Choose standard size (S, M, L, XL, XXL) and provide custom name/design vector.",
  },
  {
    name: "Festival Warm Glow LED Stand",
    image: "/WhatsApp Image 2026-05-19 at 12.05.40 AM.jpeg",
    price: 699,
    oldPrice: 1299,
    rating: 5,
    badge: "HOT",
    desc: "An elegant wooden stand holding custom name cuts illuminated with warm LED lights, creating the perfect cozy home atmosphere.",
    customization: "Provide family names or home address cut text.",
  },
];

const tabs = ["All", "Birthday", "Anniversary", "Couple", "Corporate"];

export function TrendingProducts() {
  return (
    <section className="bg-gradient-blush py-20">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Trending Now" title="Best Selling Products" />
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {all.slice(0, 8).map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function PopularProducts() {
  const [tab, setTab] = useState(0);
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Popular Items</div>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Loved by Everyone</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map((t, i) => (
              <button
                key={t}
                onClick={() => setTab(i)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  tab === i
                    ? "bg-gradient-primary text-primary-foreground shadow-luxury"
                    : "bg-secondary text-foreground/70 hover:bg-accent"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4"
        >
          {all
            .slice(tab, tab + 4)
            .concat(all.slice(0, Math.max(0, 4 - (all.length - tab))))
            .slice(0, 4)
            .map((p) => (
              <ProductCard key={p.name + tab} p={p} />
            ))}
        </motion.div>
      </div>
    </section>
  );
}
