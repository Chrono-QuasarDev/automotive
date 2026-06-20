import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Wrench, DollarSign, Star, ChevronRight, MapPin, Phone, Cog } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';

const HERO_IMG = 'https://images.pexels.com/photos/12658309/pexels-photo-12658309.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600';

const categories = [
  {
    title: 'Engine Parts',
    description: 'Cylinder heads, pistons, gaskets, timing belts, and more for all makes.',
    image: 'https://images.pexels.com/photos/8651903/pexels-photo-8651903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    icon: <Cog size={24} />,
  },
  {
    title: 'Brake Systems',
    description: 'Pads, rotors, calipers, and complete brake kits for safe stopping power.',
    image: 'https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    icon: <ShieldCheck size={24} />,
  },
  {
    title: 'Lighting',
    description: 'Headlights, tail lights, LED upgrades, and fog lamps for every vehicle.',
    image: 'https://images.pexels.com/photos/2611708/pexels-photo-2611708.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    icon: <Star size={24} />,
  },
  {
    title: 'Suspension',
    description: 'Shocks, struts, control arms, and springs for a smooth ride.',
    image: 'https://images.pexels.com/photos/5330288/pexels-photo-5330288.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    icon: <Wrench size={24} />,
  },
  {
    title: 'Accessories',
    description: 'Rims, interior trim, floor mats, spoilers, and exterior styling.',
    image: 'https://images.pexels.com/photos/35612805/pexels-photo-35612805.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    icon: <Award size={24} />,
  },
  {
    title: 'Used Parts',
    description: 'Quality inspected used parts at unbeatable prices. Eco-friendly choice.',
    image: 'https://images.pexels.com/photos/5506059/pexels-photo-5506059.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    icon: <DollarSign size={24} />,
  },
];

const whyChoose = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Premium Quality',
    description: 'Every part is carefully inspected and sourced from trusted manufacturers and suppliers worldwide.',
  },
  {
    icon: <DollarSign size={32} />,
    title: 'Affordable Prices',
    description: 'Competitive pricing on OEM, aftermarket, and used parts without compromising on quality.',
  },
  {
    icon: <Award size={32} />,
    title: 'Trusted Brand',
    description: 'Hundreds of satisfied customers trust MACAR SOLUTION for their automotive needs.',
  },
  {
    icon: <Wrench size={32} />,
    title: 'Expert Support',
    description: 'Our knowledgeable team helps you find the right part for your exact vehicle make and model.',
  },
];

const testimonials = [
  {
    name: 'Kwame Mensah',
    role: 'Car Owner',
    text: 'MACAR SOLUTION saved me thousands of cedis. They found the exact OEM part I needed for my Toyota within a day. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Ama Darko',
    role: 'Professional Mechanic',
    text: 'As a mechanic, I need reliable parts at good prices. MACAR is my go-to supplier. Their aftermarket parts are top quality.',
    rating: 5,
  },
  {
    name: 'Samuel Osei',
    role: 'Car Enthusiast',
    text: 'Great selection of performance parts and accessories. The team really knows their stuff and helped me upgrade my ride perfectly.',
    rating: 5,
  },
];

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Automotive engine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/80 to-brand-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 border border-brand-orange/10 rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-40 h-40 border border-brand-orange/5 rounded-full opacity-20" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
              <span className="w-12 h-0.5 bg-brand-orange" />
              <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.3em]">
                Solution @ Topnotch
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-white leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Top-Notch Auto{' '}
              <span className="text-brand-orange relative">
                Solutions
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                  <path d="M0 6 Q50 0 100 4 T200 4" stroke="#F2A33A" strokeWidth="2" fill="none" opacity="0.5" />
                </svg>
              </span>{' '}
              for Every Car
            </h1>

            <p className="text-lg md:text-xl text-brand-text-muted leading-relaxed mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Your one-stop shop for OEM parts, aftermarket performance upgrades, quality used parts, and premium accessories — all in Accra, Ghana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-black font-bold px-8 py-4 rounded-lg transition-all duration-300 text-base tracking-wide hover:shadow-xl hover:shadow-brand-orange/20 group"
              >
                Explore Our Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-white/20 hover:border-brand-orange text-brand-white hover:text-brand-orange font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base tracking-wide"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-brand-white/10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              {[
                { value: '5K+', label: 'Parts Available' },
                { value: '1K+', label: 'Happy Customers' },
                { value: '10+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-brand-orange">{stat.value}</div>
                  <div className="text-sm text-brand-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-20 md:py-28 bg-brand-black line-pattern relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4116221/pexels-photo-4116221.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
                  alt="Mechanic working"
                  className="rounded-2xl w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-orange rounded-xl p-6 shadow-2xl hidden md:block">
                  <div className="text-3xl font-bold text-brand-black">10+</div>
                  <div className="text-sm text-brand-black/80 font-medium">Years of Excellence</div>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand-orange/30 rounded-xl" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-brand-orange" />
                <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.2em]">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white leading-tight mb-6">
                Your Trusted <span className="text-brand-orange">Car Parts</span> Partner in Ghana
              </h2>
              <p className="text-brand-text-muted leading-relaxed mb-6">
                MACAR SOLUTION is a leading automotive parts and accessories provider based in Kwabenya, Accra. We specialize in sourcing and supplying genuine OEM parts, high-performance aftermarket components, quality-tested used parts, and premium car accessories.
              </p>
              <p className="text-brand-text-muted leading-relaxed mb-8">
                Whether you're an everyday car owner, a car enthusiast, or a professional mechanic, we have the right parts at the right price, backed by expert guidance and support.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {['OEM Parts', 'Aftermarket Parts', 'Used Parts', 'Accessories'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-brand-white text-sm">
                    <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={14} className="text-brand-orange" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-black font-bold px-6 py-3 rounded-lg transition-all duration-300 group"
              >
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES GRID ===== */}
      <section className="py-20 md:py-28 bg-brand-charcoal relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Our Categories"
              title="What We Offer"
              description="Browse our wide selection of car parts and accessories organized by category. We carry everything your vehicle needs."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 100}>
                <Link
                  to="/products"
                  className="group relative rounded-xl overflow-hidden h-[280px] md:h-[320px] block"
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-12 h-12 rounded-lg bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center text-brand-orange mb-3 group-hover:bg-brand-orange group-hover:text-brand-black transition-all duration-300">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-white mb-1">{cat.title}</h3>
                    <p className="text-brand-text-muted text-sm leading-relaxed">{cat.description}</p>
                    <div className="flex items-center gap-1 mt-3 text-brand-orange text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Explore <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 md:py-28 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-brand-orange" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-brand-orange" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-brand-orange" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <SectionHeading
              label="Why Choose Us"
              title="The MACAR Advantage"
              description="We go above and beyond to ensure every customer gets the best parts, the best prices, and the best service."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChoose.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 150}>
                <div className="group bg-brand-charcoal border border-brand-gray hover:border-brand-orange/40 rounded-xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-orange/5 h-full">
                  <div className="w-16 h-16 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-5 group-hover:bg-brand-orange group-hover:text-brand-black transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-white mb-3">{item.title}</h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 md:py-28 bg-brand-charcoal relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Testimonials"
              title="What Our Customers Say"
              description="Don't just take our word for it. Here's what our valued customers have to say about their experience with MACAR SOLUTION."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 150}>
                <div className="bg-brand-black border border-brand-gray rounded-xl p-8 relative h-full flex flex-col">
                  {/* Quote mark */}
                  <div className="text-brand-orange/20 text-6xl font-serif absolute top-4 right-6">"</div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} className="text-brand-orange fill-brand-orange" />
                    ))}
                  </div>
                  <p className="text-brand-text-muted leading-relaxed mb-6 flex-grow">"{t.text}"</p>
                  <div className="flex items-center gap-3 border-t border-brand-gray pt-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-sm">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-brand-white font-semibold text-sm">{t.name}</div>
                      <div className="text-brand-text-muted text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAP / LOCATION ===== */}
      <section className="py-20 md:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Find Us"
              title="Visit Our Location"
              description="Come visit us at our Kwabenya location in Accra, Ghana. We're easy to find — right opposite Regimanuel Unite Gate Estates."
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 rounded-xl overflow-hidden h-[400px] border border-brand-gray">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15881.98!2d-0.22!3d5.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDAnMTIuMCJOIDDCsDEzJzEyLjAiVw!5e0!3m2!1sen!2sgh!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.8) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MACAR SOLUTION Location"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="bg-brand-charcoal rounded-xl p-6 border border-brand-gray">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-3">
                    <MapPin size={20} />
                  </div>
                  <h4 className="text-brand-white font-semibold mb-2">Address</h4>
                  <p className="text-brand-text-muted text-sm leading-relaxed">
                    Opposite Regimanuel Unite Gate Estates, Kwabenya, Accra, Ghana
                  </p>
                </div>
                <div className="bg-brand-charcoal rounded-xl p-6 border border-brand-gray">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-3">
                    <Phone size={20} />
                  </div>
                  <h4 className="text-brand-white font-semibold mb-2">Call Us</h4>
                  <div className="text-brand-text-muted text-sm space-y-1">
                    <a href="tel:+2348102908811" className="block hover:text-brand-orange transition-colors">+234 810 290 8811</a>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="bg-brand-orange hover:bg-brand-orange-dark text-brand-black font-bold px-6 py-4 rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Get Directions
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/94272/sports-car-pkw-auto-vehicle-94272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1600"
            alt="Sports car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white mb-6">
              Need a Part? <span className="text-brand-orange">Contact Us Today.</span>
            </h2>
            <p className="text-brand-text-muted text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether it's an engine component, brake system, or custom accessory — we'll help you find the exact part you need at the best price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-black font-bold px-8 py-4 rounded-lg transition-all duration-300 text-base group animate-pulse-glow"
              >
                Contact Us Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/2348102908811"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
