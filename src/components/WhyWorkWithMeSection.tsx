import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Heart, Clock, Layers, Target, Sparkles } from 'lucide-react';

const reasons = [
  {
    title: "I don't treat this like a one-off video job",
    description: "I care about how your brand looks, how the property is positioned, and how the content will perform once it's out in the world. Every project is approached with the long game in mind.",
    icon: Heart,
    stat: 'Partnership',
    statLabel: 'Not Just a Vendor'
  },
  {
    title: 'Detail-oriented, easy to work with, and fast',
    description: "I move fast without sacrificing quality. Clear communication, reliable timelines, and meticulous attention to every frame. You get premium results without the premium headaches.",
    icon: Clock,
    stat: '48hrs',
    statLabel: 'Quick Turnaround'
  },
  {
    title: 'Everything in one place',
    description: "Video, AI renderings, motion graphics, site visualization, and web—all under one roof. You don't have to manage multiple people to get a luxury-level result.",
    icon: Layers,
    stat: 'All-in-One',
    statLabel: 'Full Creative Suite'
  },
  {
    title: 'I understand luxury positioning',
    description: "Every visual decision is made with your target buyer in mind. I know the difference between content that sells and content that just looks pretty. Your visuals will attract the right audience.",
    icon: Target,
    stat: '30%',
    statLabel: 'Faster Sales'
  },
  {
    title: 'Make it credible, aspirational, and worth the price point',
    description: "At the end of the day, my goal is simple: make the project look credible, aspirational, and worth the price point. That's the standard every piece of content is measured against.",
    icon: Sparkles,
    stat: 'Premium',
    statLabel: 'Brand Perception'
  },
];

const WhyWorkWithMeSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-card px-6 py-section-lg overflow-hidden"
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -left-32 w-96 h-96 bg-champagne/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-champagne/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, hsl(40, 45%, 65%) 1px, transparent 1px), linear-gradient(to bottom, hsl(40, 45%, 65%) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Section Header - Eye-catching */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: '6rem' } : {}}
            transition={{ duration: 1 }}
            className="mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-champagne to-transparent"
          />
          
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-refined mb-6 inline-block text-xs tracking-[0.4em] text-champagne"
          >
            The Difference
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display text-display-lg text-foreground mb-6"
          >
            Why Work <span className="text-editorial italic text-champagne">With Me</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl font-body text-lg font-light text-muted-foreground"
          >
            When you invest in luxury visuals, you deserve a partner who understands excellence
          </motion.p>
        </div>

        {/* Interactive Reasons List */}
        <div className="space-y-0">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isExpanded = expandedIndex === index;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-champagne/0 via-champagne/5 to-champagne/0"
                  initial={false}
                  animate={{
                    opacity: isHovered || isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Main clickable area */}
                <button
                  onClick={() => toggleItem(index)}
                  className="relative flex w-full items-center gap-3 sm:gap-6 md:gap-10 py-5 sm:py-8 md:py-10 text-left border-t border-border/50 last:border-b transition-all duration-500"
                >
                  {/* Animated line indicator */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-champagne origin-top"
                    initial={false}
                    animate={{
                      scaleY: isHovered || isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Number with icon */}
                  <div className="relative flex items-center gap-2 sm:gap-4 shrink-0">
                    <motion.div
                      className="flex h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center border border-border/50 bg-background/50"
                      animate={{
                        borderColor: isHovered || isExpanded ? 'hsl(40, 45%, 65%, 0.5)' : 'hsl(var(--border) / 0.5)',
                        backgroundColor: isHovered || isExpanded ? 'hsl(40, 45%, 65%, 0.1)' : 'hsl(var(--background) / 0.5)'
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-colors duration-300 ${
                        isHovered || isExpanded ? 'text-champagne' : 'text-muted-foreground'
                      }`} />
                    </motion.div>
                    
                    <span className={`text-refined text-xs transition-colors duration-300 hidden md:block ${
                      isExpanded ? 'text-champagne' : 'text-muted-foreground/50'
                    }`}>
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title and Stats */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 sm:gap-2 md:gap-8">
                      <motion.p 
                        className={`font-display text-sm sm:text-lg md:text-xl lg:text-2xl transition-colors duration-300 leading-tight ${
                          isExpanded ? 'text-champagne' : 'text-foreground'
                        }`}
                      >
                        {reason.title}
                      </motion.p>
                      
                      {/* Stats badge - visible on hover/expanded */}
                      <motion.div
                        className="flex items-center gap-3 shrink-0"
                        initial={false}
                        animate={{
                          opacity: isHovered || isExpanded ? 1 : 0.4,
                          x: isHovered || isExpanded ? 0 : 10
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-right hidden sm:block">
                          <span className="block font-display text-base sm:text-lg md:text-xl text-champagne">
                            {reason.stat}
                          </span>
                          <span className="text-refined text-[9px] sm:text-[10px] tracking-wider text-muted-foreground">
                            {reason.statLabel}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Chevron with rotation */}
                  <motion.div
                    className="shrink-0"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-300 ${
                      isExpanded ? 'text-champagne' : 'text-muted-foreground'
                    }`} />
                  </motion.div>
                </button>

                {/* Expandable Description */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 sm:pb-10 pl-14 sm:pl-20 md:pl-28 pr-4 sm:pr-8 md:pr-16">
                        <motion.p 
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="font-body text-sm sm:text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-3xl"
                        >
                          {reason.description}
                        </motion.p>
                        
                        {/* Mobile stats */}
                        <motion.div 
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="mt-4 sm:hidden"
                        >
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-champagne/30 bg-champagne/5">
                            <span className="font-display text-base text-champagne">
                              {reason.stat}
                            </span>
                            <span className="text-refined text-[9px] tracking-wider text-muted-foreground">
                              {reason.statLabel}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <a 
            href="#contact-form"
            className="group relative inline-flex items-center gap-4 px-10 py-5 overflow-hidden"
          >
            <span className="absolute inset-0 border border-champagne/40 transition-all duration-500 group-hover:border-champagne/80" />
            <span className="absolute inset-0 bg-champagne/0 transition-all duration-500 group-hover:bg-champagne/10" />
            
            {/* Shimmer effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-champagne/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            
            <span className="relative text-refined text-xs tracking-[0.25em] text-champagne">
              Let's Create Something Exceptional
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithMeSection;
