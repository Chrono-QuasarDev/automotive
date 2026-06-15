import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-brand-orange/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
            <Logo size="sm" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-lg group ${
                  location.pathname === link.path
                    ? 'text-brand-orange'
                    : 'text-brand-white/80 hover:text-brand-orange'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand-orange transition-all duration-300 ${
                    location.pathname === link.path ? 'w-6' : 'w-0 group-hover:w-6'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+233242910351"
              className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-black font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 text-sm tracking-wide hover:shadow-lg hover:shadow-brand-orange/20"
            >
              <Phone size={16} />
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-brand-white hover:text-brand-orange transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-charcoal/98 backdrop-blur-xl border-t border-brand-orange/10 px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-brand-orange bg-brand-orange/10'
                  : 'text-brand-white/80 hover:text-brand-orange hover:bg-brand-orange/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+233242910351"
            className="flex items-center justify-center gap-2 mt-4 bg-brand-orange hover:bg-brand-orange-dark text-brand-black font-semibold px-5 py-3 rounded-lg transition-all duration-300 text-sm tracking-wide"
          >
            <Phone size={16} />
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
