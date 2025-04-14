
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Goals', href: '#goals' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Find active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 backdrop-blur-xl bg-gaming-dark/80 border-b border-white/5 shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        {/* Main Title - Centered with Animation */}
        <div className="flex flex-col items-center justify-center mb-4">
          <h1 className="text-4xl font-bold font-display animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-gaming-accent via-gaming-accent-light to-gaming-accent">
            Gamer Portfolio
          </h1>
        </div>
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={cn(
                  "nav-link",
                  activeSection === link.href.substring(1) ? "active" : ""
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white focus:outline-none absolute top-4 right-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="absolute inset-0 bg-gaming-dark opacity-95"></div>
        <nav className="relative h-full flex flex-col items-center justify-center gap-8 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-2xl font-medium text-white hover:text-gaming-accent transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
