import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Account for fixed navigation height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed left-0 right-0 top-0 z-40 px-6 py-6 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/90 backdrop-blur-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <img 
              src="/logo.png"
              alt="David Flores Logo"
              className="h-8 w-auto"
            />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-refined text-xs transition-colors duration-300 hover:text-foreground ${
                  link.id === 'contact' ? 'text-champagne' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-foreground md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute right-6 top-6 p-2 text-foreground"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Menu Content */}
            <div className="flex h-full flex-col items-center justify-center">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="mb-16"
              >
                <img 
              src="/logo.png"
              alt="David Flores Logo"
              className="h-8 w-auto"
            />
                <p className="text-refined mt-4 text-center text-[10px] text-muted-foreground">
                  Los Cabos, Mexico
                </p>
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    onClick={() => scrollToSection(link.id)}
                    className="group relative font-display text-3xl text-foreground transition-colors duration-300 hover:text-champagne"
                  >
                    {link.label}
                    <span className="absolute -bottom-2 left-0 h-px w-0 bg-champagne transition-all duration-300 group-hover:w-full" />
                  </motion.button>
                ))}
              </nav>

              {/* Footer Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute bottom-12 text-center"
              >
                <a 
                  href="mailto:davidflvan18@gmail.com"
                  className="font-body text-sm font-light text-muted-foreground transition-colors duration-300 hover:text-champagne"
                >
                  davidflvan18@gmail.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
