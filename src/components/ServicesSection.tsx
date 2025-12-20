import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, X, Film, Camera, Building2, Plane, Sparkles, Globe } from 'lucide-react';

const services = [
  {
    title: 'Luxury Video & Visuals',
    shortDesc: 'Cinematic storytelling for exceptional properties',
    description: 'Cinematic real estate and lifestyle videos crafted for discerning buyers. Advanced drone cinematography for villas, yachts, and developments. Short-form and long-form content optimized for Instagram, TikTok, and YouTube. Every frame designed to evoke desire and command attention.',
    features: ['Cinematic Real Estate Films', 'Advanced Drone Cinematography', 'Social Media Content', 'Lifestyle Storytelling'],
    metric: 'Premium Production',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    icon: Film,
  },
  {
    title: 'Pre-Construction & Development',
    shortDesc: 'Sell the vision before the first brick',
    description: 'Transform architectural plans into compelling visual narratives. AI renderings and build visualizations that bring unbuilt properties to life. Concept imagery for pre-sales, polygon lot outlines, and site visualization. Investment-focused development videos that help investors see the full potential.',
    features: ['AI Renderings & Visualizations', 'Concept Imagery for Pre-Sales', 'Polygon Lot Outlines', 'Investment-Focused Videos'],
    metric: 'Vision Realized',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
    icon: Building2,
  },
  {
    title: 'Motion & Enhancements',
    shortDesc: 'Elevate with motion graphics and effects',
    description: 'Add dimension and sophistication to your visual assets. 3D text and motion graphics that captivate. Premium transitions and visual effects that set your content apart. Branded and MLS-safe unbranded versions for maximum flexibility across platforms.',
    features: ['3D Text & Motion Graphics', 'Premium Transitions', 'Visual Effects', 'Branded & Unbranded Versions'],
    metric: 'Next Level',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    icon: Sparkles,
  },
  {
    title: 'Web & Digital',
    shortDesc: 'High-conversion luxury web presence',
    description: 'Hard-coded luxury websites and landing pages built for performance. High-conversion pages for listings, developments, and personal brands. Clean, fast, non-template builds aligned with premium positioning. Every pixel intentional, every interaction refined.',
    features: ['Luxury Websites', 'High-Conversion Landing Pages', 'Custom Development', 'Premium Positioning'],
    metric: 'Built to Convert',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    icon: Globe,
  },
  {
    title: 'Aerial & Drone Services',
    shortDesc: 'Breathtaking perspectives from above',
    description: 'Licensed drone operations delivering cinematic aerial perspectives that showcase properties, developments, and their stunning surroundings. From sweeping coastal panoramas to detailed site documentation, we capture angles impossible from the ground.',
    features: ['Licensed Operations', 'Cinematic Aerial Footage', 'Site Documentation', 'Panoramic Photography'],
    metric: 'Licensed Pro',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    icon: Plane,
  },
  {
    title: 'Architectural Photography',
    shortDesc: 'Refined imagery of space and light',
    description: 'Museum-quality imagery that captures the essence of space, light, and design with meticulous attention to detail. Each photograph is carefully composed to highlight architectural features and create an emotional connection with discerning buyers.',
    features: ['Twilight Photography', 'Interior & Exterior', 'Magazine-Quality Output', 'Virtual Staging Ready'],
    metric: 'Museum Quality',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    icon: Camera,
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <>
      <section 
        ref={ref as React.RefObject<HTMLElement>}
        id="services"
        className="relative bg-card px-6 py-section-lg overflow-hidden"
      >
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-champagne/5 via-transparent to-champagne/3" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-20 text-center">
            <motion.div
              initial={{ width: 0 }}
              animate={isVisible ? { width: '4rem' } : {}}
              transition={{ duration: 0.8 }}
              className="mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-champagne to-transparent"
            />
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-refined mb-6 inline-block text-xs tracking-[0.3em] text-champagne"
            >
              Services
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-display text-display-md text-foreground"
            >
              What I <span className="text-editorial italic">Offer</span>
            </motion.h2>
          </div>

          {/* Services Grid - 6 items in 3x2 */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.2 + index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => setSelectedService(index)}
                  className="group relative cursor-pointer overflow-hidden"
                >
                  {/* Card */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {/* Background Image */}
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                      animate={{
                        scale: hoveredService === index ? 1.08 : 1,
                      }}
                      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                    
                    {/* Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40"
                      animate={{
                        opacity: hoveredService === index ? 1 : 0.9
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      {/* Top Row */}
                      <div className="flex items-start justify-between">
                        {/* Icon */}
                        <motion.div
                          className="flex h-12 w-12 items-center justify-center border border-champagne/30 bg-background/30 backdrop-blur-sm"
                          animate={{
                            borderColor: hoveredService === index ? 'hsl(40, 45%, 65%, 0.6)' : 'hsl(40, 45%, 65%, 0.3)'
                          }}
                        >
                          <Icon className="h-5 w-5 text-champagne" />
                        </motion.div>

                        {/* Metric Badge */}
                        <motion.div
                          animate={{
                            y: hoveredService === index ? 0 : -10,
                            opacity: hoveredService === index ? 1 : 0
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          <span className="px-3 py-1 text-refined text-[10px] tracking-[0.15em] text-champagne border border-champagne/30 bg-background/50 backdrop-blur-sm">
                            {service.metric}
                          </span>
                        </motion.div>
                      </div>

                      {/* Bottom Content */}
                      <div>
                        {/* Title */}
                        <motion.h3 
                          className="font-display text-lg md:text-xl text-foreground mb-2"
                          animate={{
                            color: hoveredService === index ? 'hsl(40, 45%, 65%)' : 'hsl(45, 20%, 95%)'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.title}
                        </motion.h3>

                        {/* Short Description */}
                        <p className="font-body text-sm font-light text-muted-foreground mb-4">
                          {service.shortDesc}
                        </p>

                        {/* View Details Link */}
                        <motion.div
                          className="flex items-center gap-2"
                          animate={{
                            x: hoveredService === index ? 8 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-refined text-xs tracking-wider text-champagne">
                            View Details
                          </span>
                          <ArrowRight className="h-3 w-3 text-champagne" />
                        </motion.div>

                        {/* Bottom Line */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-px bg-champagne"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: hoveredService === index ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                          style={{ originX: 0 }}
                        />
                      </div>
                    </div>

                    {/* Corner Accents */}
                    <motion.div 
                      className="absolute top-0 right-0 w-12 h-12 border-t border-r border-champagne/0"
                      animate={{
                        borderColor: hoveredService === index ? 'hsl(40, 45%, 65%, 0.3)' : 'hsl(40, 45%, 65%, 0)'
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <a 
              href="#contact-form"
              className="group inline-flex items-center gap-3 text-refined text-xs tracking-[0.2em] text-champagne transition-all duration-300 hover:gap-4"
            >
              <span>Book Your Cinematic Experience</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Service Lightbox Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/98 backdrop-blur-lg p-6"
            onClick={() => setSelectedService(null)}
          >
            {/* Close Button - Fixed top bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="absolute top-0 left-0 right-0 z-50 flex justify-end p-4 sm:p-6 bg-gradient-to-b from-background/80 to-transparent"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="group flex items-center gap-3 px-4 py-2 border border-champagne/40 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:bg-champagne/10 hover:border-champagne"
              >
                <span className="text-refined text-[10px] tracking-[0.2em] text-champagne uppercase">Close</span>
                <X className="h-4 w-4 text-champagne transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </motion.div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative corners - hidden on mobile */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-champagne/30" />
              <div className="hidden sm:block absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-champagne/30" />
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-champagne/30" />
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-champagne/30" />

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 bg-card border border-border/20 p-5 sm:p-8 md:p-12">
                {/* Image */}
                <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={services[selectedService].image}
                    alt={services[selectedService].title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  {/* Icon & Metric */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center border border-champagne/40 bg-champagne/5">
                      {(() => {
                        const Icon = services[selectedService].icon;
                        return <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-champagne" />;
                      })()}
                    </div>
                    <span className="px-3 py-1.5 sm:px-4 sm:py-2 text-refined text-[10px] sm:text-xs tracking-[0.15em] text-champagne border border-champagne/30 bg-champagne/5">
                      {services[selectedService].metric}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-3 sm:mb-4">
                    {services[selectedService].title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm sm:text-base font-light text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                    {services[selectedService].description}
                  </p>

                  {/* Features */}
                  <div className="mb-6 sm:mb-8">
                    <span className="text-refined text-[10px] sm:text-xs tracking-[0.2em] text-champagne mb-3 sm:mb-4 block">
                      Includes
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {services[selectedService].features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 font-body text-xs sm:text-sm text-foreground/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-champagne flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact-form"
                    onClick={() => setSelectedService(null)}
                    className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 border border-champagne/50 bg-champagne/5 text-refined text-[10px] sm:text-xs tracking-[0.2em] text-champagne transition-all duration-300 hover:bg-champagne/10 hover:border-champagne w-fit"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesSection;
