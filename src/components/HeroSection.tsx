import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
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
        style={{ y }}
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
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ opacity }}
      >
        {/* Subtle top label */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-refined mb-8 text-xs text-muted-foreground"
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
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
        >
          <Button 
            variant="luxury-solid" 
            size="luxury"
            onClick={() => scrollToSection('contact-form')}
          >
            Work With Me
          </Button>
          <Button 
            variant="luxury-minimal" 
            size="luxury"
            onClick={() => scrollToSection('portfolio')}
          >
            View Portfolio
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-refined text-[10px] text-muted-foreground">Scroll</span>
            <motion.div 
              animate={{ height: [48, 60, 48] }}
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
