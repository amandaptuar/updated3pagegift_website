import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { WhatsAppIcon } from "./ProductCard";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    occasion: "birthday",
    giftType: "frames",
    date: "",
    message: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText("shankeysain75@gmail.com");
    setCopied(true);
    toast.success("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.whatsapp || !form.message) {
      toast.error("Please fill in all required fields!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Enquiry received successfully! We'll reply within 2 hours.");
    }, 1500);
  };

  const getWhatsAppMessageUrl = () => {
    const text = `Hi Giforia! 🎁 I'd like to make an enquiry:
*Name:* ${form.name}
*Email:* ${form.email}
*WhatsApp:* ${form.whatsapp}
*Occasion:* ${form.occasion}
*Gift Preference:* ${form.giftType}
*Needed By:* ${form.date || "Not specified"}
*Custom Requirements:* ${form.message}`;
    return `https://wa.me/918302309238?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="bg-gradient-blush py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display mt-2 text-foreground">
            Create Your Perfect Gift
          </h1>
          <p className="text-muted-foreground mt-4 text-sm md:text-base leading-relaxed">
            Have questions about custom designs, group orders, or corporate gifting? Contact our dedicated design concierge. We design feelings, not just shapes.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 items-start">
          {/* Left Column: Contact cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 shadow-soft border border-border/20 flex gap-4 items-start"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary shrink-0 animate-pulse-ring">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Phone Support</span>
                <h4 className="font-bold text-foreground mt-1 text-lg">+91 83023 09238</h4>
                <p className="text-xs text-muted-foreground mt-1">Available Daily: 9:00 AM - 9:00 PM</p>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 shadow-soft border border-border/20 flex gap-4 items-start relative group"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email Concierge</span>
                <h4 className="font-bold text-foreground mt-1 text-lg truncate">shankeysain75@gmail.com</h4>
                <p className="text-xs text-muted-foreground mt-1">Response time: Within 2 hours</p>
              </div>
              
              <button
                onClick={copyEmail}
                className="absolute right-4 top-4 p-2 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all md:opacity-0 group-hover:opacity-100"
                title="Copy Email Address"
              >
                {copied ? <Check className="h-4 w-4 text-whatsapp" /> : <Copy className="h-4 w-4" />}
              </button>
            </motion.div>

            {/* Address Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 shadow-soft border border-border/20 flex gap-4 items-start"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Design Studio</span>
                <h4 className="font-bold text-foreground mt-1 text-lg">Mumbai, India</h4>
                <p className="text-xs text-muted-foreground mt-1">Hand-wrapping with love for nationwide express shipping.</p>
              </div>
            </motion.div>

            {/* Premium Interactive Map Placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-soft h-64 border border-border/30 relative">
              <iframe
                title="Giforia Location Map"
                src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d3770.786526117621!2d72.8776559!3d19.076008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition duration-500"
                allowFullScreen={false}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Custom Form Panel */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-luxury border border-border/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 h-32 w-32 bg-primary/5 rounded-full blur-3xl" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 relative"
                  >
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex gap-1">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="E.g., Ananya Sharma"
                          className="w-full px-5 py-3 rounded-2xl border border-border bg-secondary/30 text-sm focus:border-primary focus:bg-white outline-none transition"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex gap-1">
                          Email Address <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="E.g., ananya@gmail.com"
                          className="w-full px-5 py-3 rounded-2xl border border-border bg-secondary/30 text-sm focus:border-primary focus:bg-white outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex gap-1">
                          WhatsApp Number <span className="text-primary">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.whatsapp}
                          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                          placeholder="E.g., +91 83023 09238"
                          className="w-full px-5 py-3 rounded-2xl border border-border bg-secondary/30 text-sm focus:border-primary focus:bg-white outline-none transition"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Date Required
                        </label>
                        <input
                          type="date"
                          value={form.date}
                          onChange={(e) => setForm({ ...form, date: e.target.value })}
                          className="w-full px-5 py-3 rounded-2xl border border-border bg-secondary/30 text-sm focus:border-primary focus:bg-white outline-none transition text-muted-foreground"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Occasion
                        </label>
                        <select
                          value={form.occasion}
                          onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                          className="w-full px-5 py-3 rounded-2xl border border-border bg-secondary/30 text-sm focus:border-primary focus:bg-white outline-none transition text-muted-foreground"
                        >
                          <option value="birthday">Birthday Celebration</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="couple">Couple Gift</option>
                          <option value="corporate">Corporate Hamper</option>
                          <option value="festival">Festivals & Holidays</option>
                          <option value="other">Other Occasion</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Preferred Gift Category
                        </label>
                        <select
                          value={form.giftType}
                          onChange={(e) => setForm({ ...form, giftType: e.target.value })}
                          className="w-full px-5 py-3 rounded-2xl border border-border bg-secondary/30 text-sm focus:border-primary focus:bg-white outline-none transition text-muted-foreground"
                        >
                          <option value="frames">Photo Collage Frame</option>
                          <option value="mugs">Custom Mugs & Cushions</option>
                          <option value="lamps">LED Engraved Lamp</option>
                          <option value="hampers">Luxury Gift Hampers</option>
                          <option value="jewelry">Name Pendants</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex gap-1">
                        Tell us about your customization ideas <span className="text-primary">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Mention colors, text scripts, or package customization you would love us to design..."
                        className="w-full px-5 py-3 rounded-2xl border border-border bg-secondary/30 text-sm focus:border-primary focus:bg-white outline-none transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-primary hover:opacity-90 text-white font-semibold py-4 shadow-luxury transition cursor-pointer uppercase tracking-wider text-sm"
                    >
                      {loading ? (
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Custom Enquiry
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="grid h-16 w-16 place-items-center bg-whatsapp/15 text-whatsapp rounded-full mx-auto animate-float">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold font-display text-foreground">Enquiry Sent!</h2>
                      <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                        Thank you, <span className="font-semibold text-foreground">{form.name}</span>! We've received your request and will reach out to you within 2 hours.
                      </p>
                    </div>

                    <div className="h-px bg-border max-w-xs mx-auto" />

                    <div className="space-y-3">
                      <p className="text-xs text-muted-foreground max-w-xs mx-auto leading-relaxed">
                        For a near-instant response and to send custom images directly, click the button below to share this enquiry summary instantly on WhatsApp!
                      </p>
                      
                      <a
                        href={getWhatsAppMessageUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-whatsapp hover:bg-whatsapp/90 text-white font-semibold py-3.5 px-6 shadow-soft transition-all text-xs uppercase tracking-wider"
                      >
                        <WhatsAppIcon className="h-5 w-5" />
                        Send on WhatsApp Now
                      </a>
                    </div>

                    <div>
                      <button
                        onClick={() => {
                          setForm({
                            name: "",
                            email: "",
                            whatsapp: "",
                            occasion: "birthday",
                            giftType: "frames",
                            date: "",
                            message: "",
                          });
                          setSubmitted(false);
                        }}
                        className="text-xs text-primary font-bold hover:underline"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
