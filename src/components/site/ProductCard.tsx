import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Eye, ShoppingBag, Star, Sparkles, X, Mail, Phone, Calendar } from "lucide-react";

export type Product = {
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  rating: number;
  badge?: string;
  desc?: string;
  customization?: string;
};

export function ProductCard({ p }: { p: Product }) {
  const [showModal, setShowModal] = useState(false);

  // Custom descriptors fallback
  const productDesc = p.desc || `A premium customized ${p.name.toLowerCase()} handcrafted specifically for your memorable events. Carefully styled, beautifully designed, and hand-wrapped with love.`;
  const productCustomization = p.customization || "Provide 1-6 high-resolution pictures, custom names/text scripts, and your select color theme (Gold-Burgundy, Blush-Silver, Midnight Classic).";

  const waMsg = encodeURIComponent(
    `Hi Giforia! 🎁 I'm interested in placing an enquiry for the customized gift: *${p.name}* (Price: ₹${p.price}). Could you please guide me on customization options and ordering details?`
  );

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        onClick={() => setShowModal(true)}
        className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:shadow-luxury cursor-pointer"
      >
        <div className="relative overflow-hidden bg-gradient-blush">
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
          />
          {p.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-gradient-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-soft">
              {p.badge}
            </span>
          )}
          <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition group-hover:opacity-100">
            <IconBtn icon={<Heart className="h-4 w-4" />} />
            <IconBtn icon={<Eye className="h-4 w-4" />} />
          </div>
          <div className="absolute inset-x-3 bottom-3 flex translate-y-12 gap-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
            <button className="flex-1 rounded-full bg-gradient-primary py-2.5 text-xs font-semibold text-primary-foreground shadow-luxury">
              <ShoppingBag className="mr-1 inline h-3.5 w-3.5" /> View Details
            </button>
            <button className="rounded-full bg-white px-3 py-2.5 text-xs font-semibold text-primary shadow-soft">
              <Sparkles className="inline h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-0.5 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-3.5 w-3.5 ${i < p.rating ? "fill-current" : "opacity-30"}`} />
            ))}
            <span className="ml-1 text-[10px] text-muted-foreground">({p.rating}.0)</span>
          </div>
          <h3 className="mt-2 line-clamp-1 font-semibold text-foreground group-hover:text-primary transition">
            {p.name}
          </h3>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary">₹{p.price}</span>
            <span className="text-sm text-muted-foreground line-through">₹{p.oldPrice}</span>
          </div>
          <button className="mt-3 w-full flex items-center justify-center gap-2 rounded-full bg-whatsapp/10 py-2.5 text-xs font-bold text-whatsapp transition hover:bg-whatsapp hover:text-white">
            <WhatsAppIcon className="h-4 w-4" /> Enquire & Customize
          </button>
        </div>
      </motion.div>

      {/* Product Details Dialogue Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowModal(false)}
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
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 z-10 p-2.5 rounded-full bg-black/50 hover:bg-black/80 transition text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Left Column: High-res Photo */}
              <div className="relative h-64 md:h-full bg-secondary">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
                {p.badge && (
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase shadow">
                    {p.badge}
                  </div>
                )}
              </div>

              {/* Right Column: Custom Details */}
              <div className="p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center gap-0.5 text-gold mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < p.rating ? "fill-current" : "opacity-30"}`} />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">({p.rating}.0 rating)</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-1">
                    {p.name}
                  </h2>

                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-primary">₹{p.price}</span>
                    <span className="text-base text-muted-foreground line-through">₹{p.oldPrice}</span>
                    <span className="text-xs font-bold text-whatsapp bg-whatsapp/15 px-2.5 py-0.5 rounded-full ml-1">
                      Save ₹{p.oldPrice - p.price}!
                    </span>
                  </div>

                  <div className="h-px bg-border my-5" />

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {productDesc}
                  </p>

                  {/* Customization Details Grid */}
                  <div className="bg-secondary/70 rounded-2xl p-4 md:p-5 border border-border/30 space-y-4">
                    <div className="flex items-start gap-3">
                      <ShoppingBag className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Customization Instructions</h4>
                        <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                          {productCustomization}
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

                {/* Direct WhatsApp CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/918302309238?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-whatsapp hover:bg-whatsapp/90 text-white font-semibold py-3.5 px-6 shadow-soft transition-all text-sm uppercase tracking-wider"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Enquire on WhatsApp
                  </a>

                  <button
                    onClick={() => setShowModal(false)}
                    className="border border-border/80 hover:bg-secondary rounded-2xl text-foreground font-semibold py-3.5 px-6 transition text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function IconBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-primary shadow-soft backdrop-blur transition hover:bg-primary hover:text-white">
      {icon}
    </button>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}
