import { Link } from 'react-router-dom';
import { ArrowRight, Search, MessageCircle, Package, Wrench, ChevronRight, CheckCircle } from 'lucide-react';
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

const services = [
  {
    icon: <Search size={32} />,
    title: 'Parts Sourcing',
    description: 'Can\'t find a specific part? We\'ll source it for you. Our global network of trusted suppliers ensures we can find virtually any automotive part — from common components to rare, discontinued pieces.',
    features: [
      'Global supplier network',
      'Rare & discontinued parts',
      'Fast turnaround times',
      'Competitive pricing on sourced parts',
      'Verification before delivery',
      'Multiple sourcing options',
    ],
    image: 'https://images.pexels.com/photos/8478206/pexels-photo-8478206.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <MessageCircle size={32} />,
    title: 'Part Recommendations',
    description: 'Not sure which part you need? Our experienced team will diagnose your issue, recommend the right solution, and help you choose between OEM, aftermarket, or used options based on your budget and needs.',
    features: [
      'Expert diagnostic guidance',
      'OEM vs aftermarket advice',
      'Budget-friendly alternatives',
      'Compatibility verification',
      'Performance recommendations',
      'Maintenance schedule advice',
    ],
    image: 'https://images.pexels.com/photos/4116221/pexels-photo-4116221.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <Package size={32} />,
    title: 'Wholesale Inquiries',
    description: 'Running an auto shop, garage, or dealership? We offer wholesale pricing for bulk orders. Partner with MACAR SOLUTION and enjoy competitive rates, priority sourcing, and reliable supply of quality parts.',
    features: [
      'Bulk order discounts',
      'Priority sourcing',
      'Dedicated account manager',
      'Regular supply agreements',
      'Flexible payment terms',
      'Quality guarantee on bulk orders',
    ],
    image: 'https://images.pexels.com/photos/5506059/pexels-photo-5506059.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <Wrench size={32} />,
    title: 'Mechanic Support',
    description: 'We partner with professional mechanics to ensure parts are correctly identified and sourced. Get technical support, installation guidance, and access to our parts database to serve your clients better.',
    features: [
      'Technical parts lookup',
      'Installation guidance',
      'Mechanic partnership program',
      'Priority order processing',
      'Return & exchange support',
      'Technical documentation',
    ],
    image: 'https://images.pexels.com/photos/8478244/pexels-photo-8478244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
];

const process = [
  { step: '01', title: 'Tell Us What You Need', description: 'Contact us with your vehicle details and the part you\'re looking for.' },
  { step: '02', title: 'We Find the Best Option', description: 'Our team searches our inventory and supplier network for the perfect match.' },
  { step: '03', title: 'Review & Confirm', description: 'We present options with pricing. You choose what works best for your budget.' },
  { step: '04', title: 'Get Your Part', description: 'Pick up at our store or arrange delivery. We\'re here to support you after the sale too.' },
];

export default function ServicesPage() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4116224/pexels-photo-4116224.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1600"
            alt="Mechanic tools"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-8 h-0.5 bg-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.2em]">Our Services</span>
            <span className="w-8 h-0.5 bg-brand-orange" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-white mb-6">
            How We <span className="text-brand-orange">Help You</span>
          </h1>
          <p className="text-brand-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Beyond selling parts, we offer comprehensive services to make sure you get exactly what your vehicle needs.
          </p>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 md:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, i) => (
              <AnimatedSection key={service.title}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <div className="relative group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl w-full h-[350px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-black/60 to-transparent" />
                      {/* Decorative hex */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-brand-orange/20 rounded-lg rotate-45 hidden md:block" />
                    </div>
                  </div>

                  <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <div className="w-14 h-14 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange mb-5">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">{service.title}</h3>
                    <p className="text-brand-text-muted leading-relaxed mb-8">{service.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-brand-white text-sm">
                          <CheckCircle size={16} className="text-brand-orange flex-shrink-0 mt-0.5" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-black font-bold px-6 py-3 rounded-lg transition-all duration-300 group"
                    >
                      Get Started
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 md:py-28 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="How It Works"
              title="Simple Process, Great Results"
              description="Getting the right part from MACAR SOLUTION is easy. Here's how it works."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 150}>
                <div className="relative text-center group">
                  {/* Connector line */}
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-brand-gray">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        <ChevronRight size={16} className="text-brand-orange" />
                      </div>
                    </div>
                  )}

                  <div className="w-20 h-20 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-500">
                    <span className="text-brand-orange text-2xl font-bold group-hover:text-brand-black transition-colors">{step.step}</span>
                  </div>
                  <h4 className="text-lg font-bold text-brand-white mb-2">{step.title}</h4>
                  <p className="text-brand-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-orange/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Ready to Get <span className="text-brand-orange">Started?</span>
            </h2>
            <p className="text-brand-text-muted text-lg mb-8 max-w-2xl mx-auto">
              Whether you need a single part or bulk wholesale orders, we're here to help. Reach out today and let our team assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-black font-bold px-8 py-4 rounded-lg transition-all duration-300 group"
              >
                Contact Us Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/233242910351"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
