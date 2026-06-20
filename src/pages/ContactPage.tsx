import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
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

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: 'Visit Us',
    details: ['Opposite Regimanuel Unite Gate Estates', 'Kwabenya, Accra, Ghana'],
  },
  {
    icon: <Phone size={24} />,
    title: 'Call Us',
    details: ['+2348102908811'],
    links: ['tel: +2348102908811'],
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Us',
    details: ['Mostadmirable27@gmail.com'],
    links: ['mailto:Mostadmirable27@gmail.com'],
  },
  {
    icon: <Clock size={24} />,
    title: 'Business Hours',
    details: ['Mon - Sat: 8:00 AM - 6:00 PM', 'Sunday: Closed'],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/+2348102908811?text=${text}`, '_blank');
  };

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8478244/pexels-photo-8478244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1600"
            alt="Mechanic workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-8 h-0.5 bg-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.2em]">Get In Touch</span>
            <span className="w-8 h-0.5 bg-brand-orange" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-white mb-6">
            Contact <span className="text-brand-orange">Us</span>
          </h1>
          <p className="text-brand-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Have a question or need a specific part? We'd love to hear from you. Reach out using any of the methods below.
          </p>
        </div>
      </section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <AnimatedSection key={info.title} delay={i * 100}>
                <div className="bg-brand-charcoal border border-brand-gray rounded-xl p-6 text-center hover:border-brand-orange/30 hover:-translate-y-1 transition-all duration-500 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-4 group-hover:bg-brand-orange group-hover:text-brand-black transition-all duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-brand-white font-bold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, j) => (
                      <div key={j}>
                        {info.links?.[j] ? (
                          <a
                            href={info.links[j]}
                            className="text-brand-text-muted text-sm hover:text-brand-orange transition-colors block break-all"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p className="text-brand-text-muted text-sm">{detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM + MAP ===== */}
      <section className="py-20 md:py-28 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Send a Message"
              title="We'd Love to Hear From You"
              description="Fill out the form below and our team will get back to you as soon as possible."
            />
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-brand-black border border-brand-gray rounded-2xl p-6 md:p-10">
                {submitted && (
                  <div className="mb-6 flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-400">
                    <CheckCircle size={20} />
                    <span className="text-sm font-medium">Thank you! Your message has been sent. We'll get back to you soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-brand-white text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-brand-charcoal border border-brand-gray rounded-lg px-4 py-3 text-brand-white text-sm placeholder-brand-text-muted focus:outline-none focus:border-brand-orange transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-white text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-brand-charcoal border border-brand-gray rounded-lg px-4 py-3 text-brand-white text-sm placeholder-brand-text-muted focus:outline-none focus:border-brand-orange transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-brand-white text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-brand-charcoal border border-brand-gray rounded-lg px-4 py-3 text-brand-white text-sm placeholder-brand-text-muted focus:outline-none focus:border-brand-orange transition-colors"
                        placeholder="+233 xxx xxx xxx"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-white text-sm font-medium mb-2">Subject *</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-brand-charcoal border border-brand-gray rounded-lg px-4 py-3 text-brand-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
                      >
                        <option value="" className="text-brand-text-muted">Select a subject</option>
                        <option value="part-inquiry">Part Inquiry</option>
                        <option value="price-quote">Price Quote</option>
                        <option value="wholesale">Wholesale Inquiry</option>
                        <option value="recommendation">Part Recommendation</option>
                        <option value="general">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-white text-sm font-medium mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-brand-charcoal border border-brand-gray rounded-lg px-4 py-3 text-brand-white text-sm placeholder-brand-text-muted focus:outline-none focus:border-brand-orange transition-colors resize-none"
                      placeholder="Tell us about the part you need, your vehicle make/model/year, and any other details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-black font-bold px-8 py-4 rounded-lg transition-all duration-300 text-base group hover:shadow-lg hover:shadow-brand-orange/20"
                  >
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={200} className="lg:col-span-2">
              <div className="space-y-6">
                {/* WhatsApp CTA */}
                <div className="bg-brand-black border border-green-500/30 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-brand-white font-bold">Chat on WhatsApp</h3>
                      <p className="text-brand-text-muted text-xs">Fastest response time</p>
                    </div>
                  </div>
                  <p className="text-brand-text-muted text-sm mb-4 leading-relaxed">
                    For the fastest response, send us a message on WhatsApp. We typically reply within minutes during business hours.
                  </p>
                  <a
                    href="https://wa.me/2348102908811"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Open WhatsApp Chat
                  </a>
                </div>

                {/* Instagram */}
                <div className="bg-brand-black border border-brand-gray rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                      <InstagramIcon size={24} />
                    </div>
                    <div>
                      <h3 className="text-brand-white font-bold">Follow on Instagram</h3>
                      <p className="text-brand-text-muted text-xs">@macarsolustion</p>
                    </div>
                  </div>
                  <p className="text-brand-text-muted text-sm mb-4 leading-relaxed">
                    Follow us on Instagram for the latest arrivals, special offers, and automotive tips.
                  </p>
                  <a
                    href="https://instagram.com/macarsolustion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    <InstagramIcon size={18} />
                    Follow @macarsolustion
                  </a>
                </div>

                {/* Direct call */}
                <div className="bg-brand-black border border-brand-orange/30 rounded-2xl p-6 md:p-8">
                  <h3 className="text-brand-white font-bold mb-3">Prefer to Call?</h3>
                  <p className="text-brand-text-muted text-sm mb-4">Speak directly with our team:</p>
                  <div className="space-y-2">
                    {['+234 810 290 8811'].map((num) => (
                      <a
                        key={num}
                        href={`tel:${num}`}
                        className="flex items-center gap-3 bg-brand-charcoal rounded-lg px-4 py-3 text-brand-white hover:border-brand-orange/30 border border-brand-gray transition-all duration-300 group"
                      >
                        <Phone size={16} className="text-brand-orange" />
                        <span className="text-sm font-medium group-hover:text-brand-orange transition-colors">{num}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="py-20 md:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Location"
              title="Find Us on the Map"
              description="We're conveniently located opposite Regimanuel Unite Gate Estates in Kwabenya, Accra."
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-brand-gray h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15881.98!2d-0.22!3d5.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDAnMTIuMCJOIDDCsDEzJzEyLjAiVw!5e0!3m2!1sen!2sgh!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.6) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MACAR SOLUTION Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
