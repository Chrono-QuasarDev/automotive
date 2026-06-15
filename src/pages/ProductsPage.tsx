import { Link } from 'react-router-dom';
import { ArrowRight, Cog, ShieldCheck, Lightbulb, Wrench, Sparkles, Recycle, ChevronRight } from 'lucide-react';
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

const categories = [
  {
    id: 'oem',
    title: 'OEM Parts',
    subtitle: 'Original Equipment Manufacturer',
    description: 'Genuine manufacturer parts designed specifically for your vehicle. Our OEM parts ensure perfect fit, optimal performance, and manufacturer-backed reliability. We carry OEM parts for Toyota, Honda, Hyundai, Mercedes-Benz, BMW, Nissan, Kia, and many more brands.',
    features: ['Factory-grade quality', 'Perfect fitment guarantee', 'Manufacturer warranty', 'All major brands'],
    image: 'https://images.pexels.com/photos/29226618/pexels-photo-29226618.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
    icon: <ShieldCheck size={32} />,
  },
  {
    id: 'aftermarket',
    title: 'Aftermarket Parts',
    subtitle: 'Performance & Replacement',
    description: 'High-quality aftermarket parts that offer excellent performance at competitive prices. Our carefully curated aftermarket selection includes performance upgrades, reliable replacement parts, and cost-effective alternatives to OEM components.',
    features: ['Performance upgrades', 'Cost-effective', 'Trusted brands', 'Wide compatibility'],
    image: 'https://images.pexels.com/photos/12658309/pexels-photo-12658309.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
    icon: <Cog size={32} />,
  },
  {
    id: 'used',
    title: 'Used Parts',
    subtitle: 'Quality-Tested Pre-Owned',
    description: 'Carefully inspected and tested used parts that offer reliability at a fraction of the cost. Every used part in our inventory undergoes rigorous quality checks to ensure it meets our standards. An eco-friendly and budget-friendly choice.',
    features: ['Rigorously inspected', 'Budget-friendly', 'Eco-conscious choice', 'Tested for reliability'],
    image: 'https://images.pexels.com/photos/5506059/pexels-photo-5506059.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
    icon: <Recycle size={32} />,
  },
  {
    id: 'accessories',
    title: 'Accessories',
    subtitle: 'Style & Functionality',
    description: 'Premium car accessories to enhance the look, comfort, and functionality of your vehicle. From custom alloy rims and LED lighting to interior upgrades and exterior styling — we have everything to personalize your ride.',
    features: ['Custom rims & wheels', 'LED lighting upgrades', 'Interior accessories', 'Exterior styling'],
    image: 'https://images.pexels.com/photos/35612805/pexels-photo-35612805.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
    icon: <Sparkles size={32} />,
  },
];

const partTypes = [
  { name: 'Engine Components', icon: <Cog size={20} /> },
  { name: 'Brake Systems', icon: <ShieldCheck size={20} /> },
  { name: 'Suspension Parts', icon: <Wrench size={20} /> },
  { name: 'Lighting & Electrical', icon: <Lightbulb size={20} /> },
  { name: 'Body & Exterior', icon: <Sparkles size={20} /> },
  { name: 'Interior & Comfort', icon: <Sparkles size={20} /> },
  { name: 'Transmission & Drivetrain', icon: <Cog size={20} /> },
  { name: 'Exhaust Systems', icon: <Wrench size={20} /> },
  { name: 'Cooling & Heating', icon: <Wrench size={20} /> },
  { name: 'Filters & Fluids', icon: <ShieldCheck size={20} /> },
  { name: 'Wheels & Tires', icon: <Cog size={20} /> },
  { name: 'Batteries & Starting', icon: <Lightbulb size={20} /> },
];

export default function ProductsPage() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7565172/pexels-photo-7565172.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1600"
            alt="Engine parts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-8 h-0.5 bg-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.2em]">Our Products</span>
            <span className="w-8 h-0.5 bg-brand-orange" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-white mb-6">
            Car Parts & <span className="text-brand-orange">Accessories</span>
          </h1>
          <p className="text-brand-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Browse our comprehensive range of OEM, aftermarket, used parts, and premium accessories for every make and model.
          </p>
        </div>
      </section>

      {/* ===== CATEGORY SECTIONS ===== */}
      <section className="py-20 md:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Categories"
              title="Explore Our Product Range"
              description="We organize our inventory into four main categories to help you find exactly what you need."
            />
          </AnimatedSection>

          <div className="space-y-20">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.id}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <div className="relative group">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="rounded-2xl w-full h-[350px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-black/50 to-transparent" />
                      <div className="absolute top-6 left-6 w-14 h-14 rounded-xl bg-brand-orange flex items-center justify-center text-brand-black shadow-lg">
                        {cat.icon}
                      </div>
                    </div>
                  </div>

                  <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.15em] mb-2 block">
                      {cat.subtitle}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">{cat.title}</h3>
                    <p className="text-brand-text-muted leading-relaxed mb-6">{cat.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {cat.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-brand-white text-sm">
                          <ChevronRight size={14} className="text-brand-orange flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-black font-bold px-6 py-3 rounded-lg transition-all duration-300 group"
                    >
                      Inquire Now
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTS WE CARRY ===== */}
      <section className="py-20 md:py-28 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="What We Carry"
              title="Types of Parts Available"
              description="No matter what system on your car needs attention, we have the parts to fix it."
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {partTypes.map((part, i) => (
              <AnimatedSection key={part.name} delay={i * 50}>
                <div className="bg-brand-black border border-brand-gray rounded-xl p-5 flex items-center gap-3 hover:border-brand-orange/30 hover:-translate-y-1 transition-all duration-300 group cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:bg-brand-orange group-hover:text-brand-black transition-all duration-300">
                    {part.icon}
                  </div>
                  <span className="text-brand-white text-sm font-medium">{part.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRANDS ===== */}
      <section className="py-20 md:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Brands We Serve"
              title="Parts for Every Make"
              description="We stock parts for virtually every major car brand on the road today."
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
              {['Toyota', 'Honda', 'Hyundai', 'Mercedes-Benz', 'BMW', 'Nissan', 'Kia', 'Ford', 'Volkswagen', 'Audi', 'Peugeot', 'Chevrolet'].map((brand) => (
                <div
                  key={brand}
                  className="bg-brand-charcoal border border-brand-gray rounded-xl p-4 md:p-6 flex items-center justify-center text-center hover:border-brand-orange/30 transition-all duration-300 group cursor-default"
                >
                  <span className="text-brand-text-muted group-hover:text-brand-orange font-semibold text-xs md:text-sm transition-colors">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4294075/pexels-photo-4294075.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1600"
            alt="Brake system"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Can't Find What You Need?
            </h2>
            <p className="text-brand-text-muted text-lg mb-8 max-w-2xl mx-auto">
              Tell us what part you're looking for and we'll source it from our global network. We specialize in finding hard-to-get parts.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-black font-bold px-8 py-4 rounded-lg transition-all duration-300 group animate-pulse-glow"
            >
              Request a Part
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
