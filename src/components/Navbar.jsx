import { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react';
import { CONTACT } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'order', label: 'Quick Order', href: '#quick-order' },
    { id: 'care', label: 'Farm Care Guide', href: '#care-guide' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks
        .map((l) => document.getElementById(l.id))
        .filter(Boolean);
      let current = 'home';
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120) current = sec.id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when hash changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-emerald-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-white shadow-soft">
              <Heart className="w-5 h-5 text-amber-400" fill="currentColor" />
            </div>
            <div className="leading-tight">
              <span className="block font-serif font-bold text-lg text-dark-green group-hover:text-emerald-700 transition">
                ANGELA'S
              </span>
              <span className="block text-[10px] sm:text-xs font-medium text-emerald-700 tracking-wide uppercase">
                Poultry Farm
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(l.href);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  activeSection === l.id
                    ? 'text-emerald-800 bg-emerald-50'
                    : 'text-dark-green/80 hover:text-emerald-800 hover:bg-emerald-50/60'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:block">
            <a
              href="#quick-order"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#quick-order');
              }}
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-soft transition transform hover:-translate-y-0.5"
            >
              <ShoppingBag className="w-4 h-4" />
              Build My Order
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-dark-green hover:bg-emerald-50"
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="md:hidden pb-4 pt-2 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(l.href);
                  }}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                    activeSection === l.id
                      ? 'text-emerald-800 bg-emerald-50'
                      : 'text-dark-green/80 hover:text-emerald-800 hover:bg-emerald-50/60'
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#quick-order"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#quick-order');
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-soft transition"
              >
                <ShoppingBag className="w-4 h-4" />
                Build My Order
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}