import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 hidden sm:block"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, scale: 0.9, width: 56 }}
                animate={{ opacity: 1, scale: 1, width: 'auto' }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Expanded Card */}
                <div className="bg-card/95 backdrop-blur-lg border border-champagne/30 p-6 shadow-2xl">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <div className="pr-6">
                    <span className="text-refined text-[10px] tracking-[0.2em] text-champagne">
                      Ready to Start?
                    </span>
                    <h4 className="font-display text-lg text-foreground mt-2 mb-3">
                      Elevate Your Property
                    </h4>
                    <p className="font-body text-sm text-muted-foreground mb-4 max-w-[200px]">
                      Let's create something extraordinary together.
                    </p>
                    <button
                      onClick={scrollToContact}
                      className="group flex items-center gap-2 px-5 py-2.5 bg-champagne/10 border border-champagne/40 text-champagne text-refined text-xs tracking-[0.15em] transition-all duration-300 hover:bg-champagne/20 hover:border-champagne/60"
                    >
                      <span>Book Consultation</span>
                    </button>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-champagne/20" />
                </div>
              </motion.div>
            ) : (
              <motion.button
                key="collapsed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsExpanded(true)}
                className="group relative"
              >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-champagne/20 animate-ping" />
                
                {/* Button */}
                <div className="relative flex h-14 w-14 items-center justify-center bg-champagne/10 backdrop-blur-lg border border-champagne/40 transition-all duration-300 group-hover:bg-champagne/20 group-hover:border-champagne/60 group-hover:scale-105">
                  <MessageCircle className="h-5 w-5 text-champagne" />
                </div>

                {/* Tooltip */}
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 bg-card/95 backdrop-blur border border-border/50 text-refined text-[10px] tracking-wider text-foreground"
                >
                  Book Your Experience
                </motion.span>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;