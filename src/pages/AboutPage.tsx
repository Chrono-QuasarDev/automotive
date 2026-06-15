import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, ShieldCheck, Users, Award, Sparkles, Handshake } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';

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

const values = [
  { icon: <ShieldCheck size={28} />, title: 'Quality First', description: 'We never compromise on the quality of parts we source and sell. Every item is inspected before it reaches our customers.' },
  { icon: <Heart size={28} />, title: 'Customer Focus', description: 'Your satisfaction is our priority. We listen, advise, and deliver solutions tailored to your vehicle needs.' },
  { icon: <Handshake size={28} />, title: 'Integrity', description: 'Honest pricing, transparent communication, and genuine parts. We build trust with every transaction.' },
  { icon: <Sparkles size={28} />, title: 'Innovation', description: 'We stay updated with the latest automotive trends and technologies to offer you the most advanced parts and solutions.' },
  { icon: <Users size={28} />, title: 'Community', description: 'We are proud to serve the Accra automotive community and contribute to keeping Ghana\'s vehicles running strong.' },
  { icon: <Award size={28} />, title: 'Excellence', description: 'From sourcing to delivery, we aim for excellence in every step of our service to earn your repeat business.' },
];

export default function AboutPage() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/19499409/pexels-photo-19499409.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1600"
            alt="Auto workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-8 h-0.5 bg-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.2em]">About Us</span>
            <span className="w-8 h-0.5 bg-brand-orange" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-white mb-6">
            Our <span className="text-brand-orange">Story</span>
          </h1>
          <p className="text-brand-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Learn about our journey, our mission, and why thousands of customers trust MACAR SOLUTION for their automotive needs.
          </p>
        </div>
      </section>

      {/* ===== COMPANY STORY ===== */}
      <section className="py-20 md:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4116224/pexels-photo-4116224.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
                  alt="Mechanic at work"
                  className="rounded-2xl w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-orange/20 rounded-2xl -z-10" />
                <div className="absolute bottom-6 left-6 bg-brand-charcoal/90 backdrop-blur-sm rounded-xl p-4 border border-brand-orange/20">
                  <div className="text-brand-orange font-bold text-2xl">Since 2014</div>
                  <div className="text-brand-text-muted text-sm">Serving Ghana's Automotive Industry</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-brand-orange" />
                <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.2em]">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white leading-tight mb-6">
                Built on Passion, Driven by <span className="text-brand-orange">Excellence</span>
              </h2>
              <div className="space-y-4 text-brand-text-muted leading-relaxed">
                <p>
                  MACAR SOLUTION was founded with a simple but powerful vision: to make quality car parts accessible and affordable for every vehicle owner in Ghana. What started as a small operation has grown into one of Accra's most trusted automotive parts suppliers.
                </p>
                <p>
                  Located opposite Regimanuel Unite Gate Estates in Kwabenya, our shop has become a go-to destination for everyday car owners, professional mechanics, and car enthusiasts seeking genuine OEM parts, high-performance aftermarket components, reliable used parts, and premium accessories.
                </p>
                <p>
                  Our team combines deep automotive knowledge with a genuine passion for helping customers. We don't just sell parts — we provide solutions. From diagnosing what you need to sourcing rare components, we go the extra mile to keep you on the road.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-20 md:py-28 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Our Purpose"
              title="Mission & Vision"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-brand-black border border-brand-gray rounded-2xl p-8 md:p-10 h-full hover:border-brand-orange/30 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-brand-black transition-all duration-300">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-white mb-4">Our Mission</h3>
                <p className="text-brand-text-muted leading-relaxed">
                  To provide every car owner and mechanic in Ghana with access to high-quality, affordable automotive parts and accessories — backed by expert knowledge and outstanding customer service. We aim to be the most reliable and trusted partner in keeping Ghana's vehicles running safely and efficiently.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-brand-black border border-brand-gray rounded-2xl p-8 md:p-10 h-full hover:border-brand-orange/30 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-brand-black transition-all duration-300">
                  <Eye size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-white mb-4">Our Vision</h3>
                <p className="text-brand-text-muted leading-relaxed">
                  To become West Africa's leading automotive parts and accessories provider — recognized for quality, innovation, and customer-first service. We envision a future where every vehicle on Ghana's roads has access to the parts it needs to perform at its best.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== WHY TRUST US ===== */}
      <section className="py-20 md:py-28 bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Why Trust Us"
              title="The MACAR Difference"
              description="Here's what sets us apart from the competition and makes us the preferred choice for car parts in Accra."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Genuine Parts Guarantee', desc: 'Every OEM part we sell comes with authenticity verification. No counterfeits, no compromises.' },
              { title: 'Expert Technical Team', desc: 'Our team has decades of combined automotive experience to help you identify and source the exact part you need.' },
              { title: 'Competitive Pricing', desc: 'We negotiate the best rates with suppliers worldwide and pass the savings directly to you.' },
              { title: 'Wide Inventory', desc: 'From Toyota to Mercedes, Honda to Hyundai — we stock parts for virtually every make and model.' },
              { title: 'Fast Sourcing', desc: "Can't find a part? We'll source it for you from our global network of trusted suppliers." },
              { title: 'After-Sales Support', desc: "Our relationship doesn't end at the sale. We provide guidance on installation and maintenance." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="flex gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/20 flex items-center justify-center text-brand-orange flex-shrink-0 mt-1 group-hover:bg-brand-orange group-hover:text-brand-black transition-all duration-300">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="text-brand-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-brand-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRAND VALUES ===== */}
      <section className="py-20 md:py-28 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Our Values"
              title="What We Stand For"
              description="These core values guide every decision we make and every interaction we have with our customers."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 100}>
                <div className="bg-brand-black border border-brand-gray rounded-xl p-8 text-center hover:border-brand-orange/30 hover:-translate-y-1 transition-all duration-500 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-5 group-hover:bg-brand-orange group-hover:text-brand-black transition-all duration-300">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-white mb-3">{val.title}</h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed">{val.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 via-transparent to-brand-orange/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Ready to Experience the <span className="text-brand-orange">MACAR Difference?</span>
            </h2>
            <p className="text-brand-text-muted text-lg mb-8 max-w-2xl mx-auto">
              Visit our store or get in touch today. Let us help you find the perfect parts for your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-black font-bold px-8 py-4 rounded-lg transition-all duration-300 group"
              >
                View Our Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-white/20 hover:border-brand-orange text-brand-white hover:text-brand-orange font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
