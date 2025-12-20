import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const metrics = [
  { value: '50+', label: 'Properties Filmed' },
  { value: '30%', label: 'Faster Sales' },
  { value: '5x', label: 'More Engagement' },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-card px-6 py-section-lg overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-champagne/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto grid max-w-6xl gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left Column - Photo */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden bg-secondary">
            {/* Photo placeholder - replace src with your image */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="David Flores - Filmmaker & Visual Strategist"
              className="w-full h-auto object-contain sm:aspect-[3/4] sm:object-cover sm:h-full"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            
            {/* Floating accent - hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 border border-champagne/30 pointer-events-none" />
          </div>

          {/* Behind the scenes hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-6 sm:-bottom-8 left-4 sm:left-8 bg-card/90 backdrop-blur-sm border border-border/50 p-3 sm:p-4"
          >
            <span className="text-refined text-[9px] sm:text-[10px] tracking-[0.2em] text-champagne">Los Cabos Based</span>
            <p className="font-body text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">Filmmaker & Visual Strategist</p>
          </motion.div>
        </motion.div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center lg:py-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-refined mb-6 text-xs tracking-[0.3em] text-champagne"
          >
            About
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display text-display-md text-foreground"
          >
            David Flores
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-2 font-body text-sm font-light tracking-wide text-champagne/80"
          >
            Filmmaker & Visual Strategist
          </motion.p>

          {/* Decorative Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 h-px w-24 origin-left bg-gradient-to-r from-champagne/50 to-transparent"
          />

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 space-y-6"
          >
            <p className="font-body text-lg font-light leading-relaxed text-muted-foreground">
              I work with luxury real estate professionals, developers, and lifestyle brands who want their 
              projects to look and feel <span className="text-champagne">top-tier—not generic</span>. I've filmed villas, yachts, 
              developments, and high-end experiences across Los Cabos.
            </p>
            <p className="font-body text-lg font-light leading-relaxed text-muted-foreground">
              I'm hands-on with every project. I think about the buyer, the investor, the platform where 
              the content will live, and the story we're actually trying to tell. Especially with 
              pre-construction projects, I help clients <span className="text-champagne">show the full vision</span>—not just what exists today.
            </p>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-6"
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center md:text-left">
                <span className="font-display text-xl sm:text-2xl md:text-3xl text-champagne">
                  {metric.value}
                </span>
                <p className="mt-0.5 sm:mt-1 text-refined text-[9px] sm:text-[10px] tracking-[0.15em] text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Pull Quote */}
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 border-l-2 border-champagne/30 pl-6"
          >
            <p className="font-display text-xl italic text-foreground/80">
              "Great visuals are not just about aesthetics—it's about how something is presented 
              and who it is meant to attract."
            </p>
          </motion.blockquote>

          {/* CTA */}
          <motion.a
            href="#contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group mt-10 inline-flex items-center gap-3 text-refined text-xs tracking-[0.2em] text-champagne"
          >
            <span>Work With Me</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
