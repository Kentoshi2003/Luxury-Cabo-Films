import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with David feels like having an in-house creative director rather than an external vendor. The level of care and attention to detail is unmatched.",
    author: "Maria Rodriguez",
    role: "Luxury Development Director",
    company: "Costa Palmas Developments",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
  },
  {
    quote: "His ability to visualize pre-construction projects makes a huge difference in how developments are presented to investors. Our sales cycle shortened by 40%.",
    author: "Carlos Mendez",
    role: "Development Partner",
    company: "Los Cabos Corridor Properties",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
  },
  {
    quote: "The content immediately elevated our brand and positioning. We went from competing on price to commanding premium valuations.",
    author: "Ana Gutierrez",
    role: "Brokerage Director",
    company: "Cabo Luxury Real Estate",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
  },
  {
    quote: "David doesn't just create videos—he creates experiences. Every project has exceeded our expectations and delivered measurable results.",
    author: "James Mitchell",
    role: "Private Client",
    company: "Villa Paraíso Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
  },
];

// Add your company logo URLs here - these are placeholders for your actual client logos
const clientLogos = [
  { name: "Costa Palmas", logo: "", placeholder: "CP" },
  { name: "Montage", logo: "", placeholder: "M" },
  { name: "Four Seasons", logo: "", placeholder: "FS" },
  { name: "Chileno Bay", logo: "", placeholder: "CB" },
  { name: "Palmilla", logo: "", placeholder: "P" },
  { name: "Solaz", logo: "", placeholder: "SZ" },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-card px-6 py-section-lg overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-champagne/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-champagne/3 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
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
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display text-display-md text-foreground"
          >
            What Clients <span className="text-editorial italic">Say</span>
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          {/* Large Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-0">
            <Quote className="h-24 w-24 text-champagne/10" fill="currentColor" />
          </div>

          {/* Carousel Container */}
          <div className="relative min-h-[320px] sm:min-h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute w-full max-w-3xl mx-auto text-center px-2 sm:px-4"
              >
                {/* Quote */}
                <blockquote className="mb-6 sm:mb-10">
                  <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed text-foreground/90">
                    "{testimonials[activeIndex].quote}"
                  </p>
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center gap-3 sm:gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-champagne/50 to-transparent blur-md" />
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].author}
                      className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-champagne/30"
                    />
                  </div>
                  
                  <div>
                    <p className="font-display text-base sm:text-lg text-foreground">
                      {testimonials[activeIndex].author}
                    </p>
                    <p className="text-refined mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-muted-foreground">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-refined mt-0.5 text-[10px] sm:text-xs text-champagne/70">
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <button
              onClick={handlePrev}
              className="group flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center border border-border/50 bg-transparent transition-all duration-300 hover:border-champagne/50 hover:bg-champagne/5"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground transition-colors group-hover:text-champagne" />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className="group relative h-2 w-2 overflow-hidden"
                >
                  <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-champagne' 
                      : 'bg-border group-hover:bg-champagne/50'
                  }`} />
                  {index === activeIndex && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-champagne"
                      layoutId="activeTestimonial"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center border border-border/50 bg-transparent transition-all duration-300 hover:border-champagne/50 hover:bg-champagne/5"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground transition-colors group-hover:text-champagne" />
            </button>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-20 pt-10 sm:pt-16 border-t border-border/30"
        >
          <p className="text-center text-refined text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground mb-6 sm:mb-10">
            Trusted by Leading Properties
          </p>
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-12">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.08 }}
                className="group relative"
              >
                {/* Container for logo - replace placeholder with actual logo images */}
                <div className="flex h-12 w-full sm:h-16 sm:w-24 md:h-20 md:w-32 items-center justify-center border border-border/20 bg-background/30 backdrop-blur-sm transition-all duration-500 group-hover:border-champagne/30 group-hover:bg-champagne/5">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="h-6 sm:h-8 md:h-10 w-auto object-contain opacity-50 grayscale transition-all duration-500 group-hover:opacity-80 group-hover:grayscale-0"
                    />
                  ) : (
                    <span className="font-display text-sm sm:text-lg md:text-xl tracking-widest text-muted-foreground/40 transition-colors duration-300 group-hover:text-champagne/60">
                      {client.placeholder}
                    </span>
                  )}
                </div>
                {/* Tooltip with company name */}
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-refined text-[8px] sm:text-[9px] tracking-wider text-muted-foreground/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap hidden sm:block">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;