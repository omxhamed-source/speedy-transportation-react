import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Truck, ShieldCheck, Clock3, ArrowRight,
  Menu, X, Thermometer, Package, Route, Send,
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const LOGO = "/speedy-transportation-react/logo.png";

const fleetImages = [
  {
    url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=85&auto=format&fit=crop",
    label: "Long Haul Fleet",
  },
  {
    url: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=85&auto=format&fit=crop",
    label: "Cross-Country Delivery",
  },
  {
    url: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=900&q=85&auto=format&fit=crop",
    label: "Highway Operations",
  },
  {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&auto=format&fit=crop",
    label: "Freight Shipping",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", cdl: "", experience: "", position: "", location: "", start: "", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["Services", "Fleet", "About", "Locations", "Careers", "Contact"];

  const services = [
    { icon: <Route className="h-6 w-6" />, title: "Long Haul Trucking", desc: "Cross-country freight with experienced drivers and real-time load tracking." },
    { icon: <Package className="h-6 w-6" />, title: "Local Delivery", desc: "Same-day and next-day local deliveries within all our service areas." },
    { icon: <Truck className="h-6 w-6" />, title: "Freight Shipping", desc: "FTL and LTL options — flexible solutions for businesses of every size." },
    { icon: <Thermometer className="h-6 w-6" />, title: "Refrigerated Transport", desc: "Temperature-controlled shipping for perishables and sensitive cargo." },
  ];

  const stats = [
    { number: "3+", label: "States Covered" },
    { number: "24/7", label: "Availability" },
    { number: "100%", label: "Insured Loads" },
    { number: "On-Time", label: "Delivery Promise" },
  ];

  const locations = [
    { emoji: "🌨️", city: "Minnesota", desc: "Our home base — Twin Cities metro and greater Minnesota." },
    { emoji: "🏙️", city: "Columbus, Ohio", desc: "Midwest hub connecting the eastern corridor to the heartland." },
    { emoji: "☀️", city: "California", desc: "West Coast operations covering major freight corridors and ports." },
  ];

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const body = Object.entries(formData).map(([k, v]) => `${k}: ${v}`).join("\n");
    window.location.href = `mailto:speedy.transportation@outlook.com?subject=Driver Application — ${formData.name}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#05070b] text-white overflow-x-hidden">

      {/* NAV */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#05070b]/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src={LOGO} alt="Speedy Transportation LLC" className="h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/65">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-orange-500 text-black font-semibold px-5 py-2.5 text-sm hover:bg-orange-400 transition-colors">
            Get a Quote <ArrowRight className="h-4 w-4" />
          </a>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#05070b]/95 backdrop-blur-xl px-5 pb-6">
            <div className="flex flex-col gap-4 pt-5 text-white/75 text-sm">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">
                  {item}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-orange-500 text-black font-semibold px-5 py-2.5 w-fit mt-2 hover:bg-orange-400 transition-colors">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-5 pt-20 overflow-hidden">
        {/* Background truck image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80&auto=format&fit=crop"
            alt="Speedy Transportation truck on highway"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#05070b]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-[#05070b]/40 to-transparent" />
        </div>

        <motion.div className="text-center max-w-4xl mx-auto relative z-10" initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="mb-8">
            <img src={LOGO} alt="Speedy Transportation LLC" className="h-24 md:h-32 w-auto mx-auto drop-shadow-2xl" />
          </motion.div>

          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold px-4 py-2 mb-6 tracking-widest uppercase">
            <ShieldCheck className="h-3.5 w-3.5" /> Licensed &amp; Fully Insured
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Moving Freight<br />
            <span className="text-orange-500">Fast &amp; Reliably</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Speedy Transportation LLC delivers across the country — Minnesota, Ohio, and California. Long haul, local, refrigerated, and more.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-orange-500 text-black font-bold px-7 py-3.5 hover:bg-orange-400 transition-colors">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white font-semibold px-7 py-3.5 hover:border-white/50 transition-colors">
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <div className="border-y border-white/8 bg-white/3">
        <div className="max-w-5xl mx-auto px-5 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-orange-500">{s.number}</p>
              <p className="text-white/50 text-sm mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-28 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">What We Do</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight">Our Services</motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 mt-4 max-w-lg mx-auto">We handle freight of all kinds — from coast to coast and everything in between.</motion.p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="rounded-2xl border border-white/8 bg-white/4 p-7 hover:border-orange-500/40 hover:bg-white/6 transition-all group">
                <div className="h-12 w-12 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center mb-5 group-hover:bg-orange-500/25 transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-bold text-base mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FLEET GALLERY */}
      <section id="fleet" className="py-28 px-5 bg-white/2 border-y border-white/8">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Our Fleet</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight">Built to Deliver</motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 mt-4 max-w-lg mx-auto">Modern, well-maintained trucks operated by professional drivers — every load treated with care.</motion.p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 gap-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {fleetImages.map((img) => (
              <motion.div key={img.label} variants={fadeUp} className="relative rounded-2xl overflow-hidden group aspect-video">
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Logo watermark */}
                <img
                  src={LOGO}
                  alt="Speedy Transportation LLC"
                  className="absolute top-4 right-4 h-10 w-auto drop-shadow-lg opacity-90"
                />
                {/* Label */}
                <p className="absolute bottom-4 left-4 font-bold text-white text-sm tracking-wide">{img.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Who We Are</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight mb-6">Built on Trust<br />&amp; Hard Work</motion.h2>
            <motion.p variants={fadeUp} className="text-white/55 leading-relaxed mb-8">Speedy Transportation LLC is a family-owned trucking company committed to delivering your freight safely and on time — every time.</motion.p>
            <motion.ul variants={stagger} className="space-y-3">
              {["Licensed, bonded, and fully insured", "Experienced professional drivers", "Serving Minnesota, Ohio & California", "Available 24/7 for urgent shipments", "Competitive rates with no hidden fees"].map((point) => (
                <motion.li key={point} variants={fadeUp} className="flex items-center gap-3 text-white/75 text-sm">
                  <span className="h-5 w-5 rounded-full bg-orange-500 text-black text-xs flex items-center justify-center flex-shrink-0 font-bold">✓</span>
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* About image with logo overlay */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden h-80 group">
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=85&auto=format&fit=crop"
              alt="Speedy Transportation fleet"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <img src={LOGO} alt="Speedy Transportation LLC" className="absolute bottom-4 left-4 h-12 w-auto drop-shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="py-28 px-5 bg-white/2 border-y border-white/8">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Where We Operate</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight">Our Locations</motion.h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {locations.map((loc) => (
              <motion.div key={loc.city} variants={fadeUp} className="rounded-2xl border border-white/8 bg-white/4 p-8 text-center hover:border-orange-500/30 transition-colors">
                <div className="text-5xl mb-4">{loc.emoji}</div>
                <h3 className="font-bold text-lg mb-2">{loc.city}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{loc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="py-28 px-5">
        <div className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Join Our Team</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight">Drive With Speedy</motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 mt-4">We're always looking for experienced, reliable drivers. Fill out the form and we'll be in touch.</motion.p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-12 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-bold text-xl mb-2">Application Sent!</h3>
              <p className="text-white/55">Thanks for applying. We'll review your info and reach out within 2–3 business days.</p>
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-5">
              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" type="text" placeholder="John Smith" value={formData.name} onChange={handleChange} required />
                <Field label="Email Address" name="email" type="email" placeholder="you@email.com" value={formData.email} onChange={handleChange} required />
              </motion.div>
              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-5">
                <Field label="Phone Number" name="phone" type="tel" placeholder="(555) 000-0000" value={formData.phone} onChange={handleChange} required />
                <Select label="CDL License Type" name="cdl" value={formData.cdl} onChange={handleChange} required options={["Class A", "Class B", "Class C", "No CDL (seeking training)"]} />
              </motion.div>
              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-5">
                <Select label="Years of Experience" name="experience" value={formData.experience} onChange={handleChange} required options={["Less than 1 year", "1–3 years", "3–5 years", "5–10 years", "10+ years"]} />
                <Select label="Position" name="position" value={formData.position} onChange={handleChange} required options={["Long Haul Driver", "Local Delivery Driver", "Refrigerated Transport Driver", "Owner Operator"]} />
              </motion.div>
              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-5">
                <Select label="Preferred Location" name="location" value={formData.location} onChange={handleChange} required options={["Minnesota", "Columbus, Ohio", "California", "Flexible / Any"]} />
                <Field label="Available to Start" name="start" type="date" value={formData.start} onChange={handleChange} />
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">Additional Info</label>
                <textarea name="notes" rows={4} value={formData.notes} onChange={handleChange}
                  placeholder="Tell us about endorsements, driving record, or anything else..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 text-white text-sm px-4 py-3 placeholder-white/25 focus:outline-none focus:border-orange-500/60 resize-none transition-colors" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-orange-500 text-black font-bold px-8 py-3.5 hover:bg-orange-400 transition-colors">
                  Submit Application <Send className="h-4 w-4" />
                </button>
                <p className="text-white/35 text-xs mt-3">We respond within 2–3 business days.</p>
              </motion.div>
            </motion.form>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-5 bg-white/2 border-y border-white/8">
        <motion.div className="max-w-2xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Get in Touch</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight mb-4">Ready to Ship?</motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 mb-10">Send us an email and we'll get back to you with a free quote — usually within a few hours.</motion.p>
          <motion.a variants={fadeUp} href="mailto:speedy.transportation@outlook.com"
            className="inline-flex items-center gap-3 rounded-2xl border border-orange-500/40 bg-orange-500/10 text-orange-400 font-semibold px-8 py-5 text-lg hover:bg-orange-500/20 transition-colors">
            ✉️ speedy.transportation@outlook.com
          </motion.a>
          <motion.p variants={fadeUp} className="text-white/30 text-sm mt-6 flex items-center justify-center gap-2">
            <Clock3 className="h-4 w-4" /> Available 24/7 · No load too big or too small
          </motion.p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/8 py-10 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={LOGO} alt="Speedy Transportation LLC" className="h-10 w-auto" />
          <p className="text-white/30 text-sm text-center">© 2026 <span className="text-orange-500 font-semibold">Speedy Transportation LLC</span> · Minnesota · Ohio · California</p>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type, placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">{label}</label>
      <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 text-white text-sm px-4 py-3 placeholder-white/25 focus:outline-none focus:border-orange-500/60 transition-colors" />
    </div>
  );
}

function Select({ label, name, value, onChange, required, options }) {
  return (
    <div>
      <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">{label}</label>
      <select name={name} value={value} onChange={onChange} required={required}
        className="w-full rounded-xl border border-white/10 bg-[#05070b] text-white text-sm px-4 py-3 focus:outline-none focus:border-orange-500/60 transition-colors">
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
