import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import Logo from './Logo';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const productLinks = [
  { name: 'OEM Parts', path: '/products' },
  { name: 'Aftermarket Parts', path: '/products' },
  { name: 'Used Parts', path: '/products' },
  { name: 'Accessories', path: '/products' },
];

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-brand-charcoal relative">
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Logo size="md" />
            <p className="mt-4 text-brand-text-muted text-sm leading-relaxed">
              Your trusted source for OEM, aftermarket, and used car parts & accessories in Accra, Ghana. Quality parts at affordable prices.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/macarsolustion"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-gray flex items-center justify-center text-brand-text-muted hover:bg-brand-orange hover:text-brand-black transition-all duration-300"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://wa.me/233242910351"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-gray flex items-center justify-center text-brand-text-muted hover:bg-brand-orange hover:text-brand-black transition-all duration-300"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-brand-orange" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-brand-text-muted hover:text-brand-orange text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-brand-orange" />
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-brand-text-muted hover:text-brand-orange text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-brand-orange" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-orange mt-0.5 flex-shrink-0" />
                <span className="text-brand-text-muted text-sm">
                  Opposite Regimanuel Unite Gate Estates, Kwabenya, Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-orange flex-shrink-0" />
                <div className="text-brand-text-muted text-sm space-y-1">
                  <a href="tel:+2348102908811" className="block hover:text-brand-orange transition-colors">+234 810 290 8811</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-orange flex-shrink-0" />
                <a
                  href="mailto:Mostadmirable27@gmail.com"
                  className="text-brand-text-muted text-sm hover:text-brand-orange transition-colors break-all"
                >
                  Mostadmirable27@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon size={16} />
                <a
                  href="https://instagram.com/macarsolustion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text-muted text-sm hover:text-brand-orange transition-colors"
                >
                  @macarsolustion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-text-muted text-xs">
            © {new Date().getFullYear()} MACAR SOLUTION. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-brand-text-muted hover:text-brand-orange text-xs transition-colors duration-300"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
