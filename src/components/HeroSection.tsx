import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-luxury-villa.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect for background image
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <img
          src={heroImage}
          alt="Luxury villa with infinity pool overlooking Los Cabos coastline at sunset"
          className="h-[130%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-background/30" />
      </motion.div>

      {/* Content with fade on scroll */}
      <motion.div 
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center"
        style={{ opacity }}
      >
        {/* Subtle top label */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-refined mb-4 sm:mb-8 text-[10px] sm:text-xs text-muted-foreground"
        >
          Los Cabos, Mexico
        </motion.span>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-display text-display-xl max-w-5xl text-foreground"
        >
          Luxury Real Estate{' '}
          <span className="text-editorial text-gradient-gold">Cinematic Films</span>{' '}
          in Los Cabos
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-2xl font-body text-lg font-light leading-relaxed text-muted-foreground md:text-xl"
        >
          High-end videography and visual marketing for luxury properties, 
          developments, and lifestyle brands.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 sm:mt-10 lg:mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <Button 
            variant="luxury-solid" 
            size="luxury"
            onClick={() => scrollToSection('contact-form')}
            className="group w-full sm:w-auto text-sm sm:text-base"
          >
            <span>Elevate Your Property</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="luxury-minimal" 
            size="luxury"
            onClick={() => scrollToSection('portfolio')}
            className="group w-full sm:w-auto text-sm sm:text-base"
          >
            <Play className="mr-2 h-4 w-4" fill="currentColor" />
            <span>View Portfolio</span>
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 sm:mt-12 lg:mt-16 flex items-center gap-3 sm:gap-8 px-4"
        >
          <div className="text-center">
            <span className="font-display text-base sm:text-2xl text-champagne">50+</span>
            <p className="text-refined text-[8px] sm:text-[10px] text-muted-foreground whitespace-nowrap">Properties</p>
          </div>
          <div className="h-5 sm:h-8 w-px bg-border/50" />
          <div className="text-center">
            <span className="font-display text-base sm:text-2xl text-champagne">30%</span>
            <p className="text-refined text-[8px] sm:text-[10px] text-muted-foreground whitespace-nowrap">Faster Sales</p>
          </div>
          <div className="h-5 sm:h-8 w-px bg-border/50" />
          <div className="text-center">
            <span className="font-display text-base sm:text-2xl text-champagne">5x</span>
            <p className="text-refined text-[8px] sm:text-[10px] text-muted-foreground whitespace-nowrap">Engagement</p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <span className="text-refined text-[9px] sm:text-[10px] text-muted-foreground">Scroll</span>
            <motion.div 
              animate={{ height: [32, 44, 32] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px bg-gradient-to-b from-champagne/50 to-transparent" 
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;