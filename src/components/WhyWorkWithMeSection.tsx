import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const reasons = [
  {
    title: 'Cinematic quality with a refined visual identity',
    description: 'Every frame is crafted with intentional composition, color grading, and movement that elevates your property above standard real estate content.',
  },
  {
    title: 'Fast delivery without sacrificing polish',
    description: 'Efficient workflows and professional processes mean you get stunning results on tight timelines—perfect for market-ready listings.',
  },
  {
    title: 'Licensed drone operation',
    description: 'Fully certified for aerial cinematography, capturing breathtaking perspectives that showcase the full scope and setting of your properties.',
  },
  {
    title: 'Strong brand positioning awareness',
    description: 'I understand luxury market positioning. Every visual decision is made with your target buyer and brand perception in mind.',
  },
  {
    title: 'One creative partner for video, visuals, motion, and web',
    description: 'Streamline your creative process with a single point of contact who delivers cohesive content across all visual mediums.',
  },
];

const WhyWorkWithMeSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Close accordion on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (expandedIndex !== null) {
        setExpandedIndex(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [expandedIndex]);

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-background px-6 py-section-lg"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span 
            className={`text-refined mb-6 inline-block text-xs text-champagne transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            The Difference
          </span>
          <h2 
            className={`text-display text-display-md text-foreground transition-all duration-700 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Why Work <span className="text-editorial">With Me</span>
          </h2>
        </div>

        {/* Reasons List */}
        <div className="space-y-0">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group border-t border-border transition-all duration-700 last:border-b ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 2) * 100}ms` : '0ms' }}
            >
              {/* Clickable Header */}
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center gap-8 py-8 text-left transition-colors duration-300"
              >
                {/* Number */}
                <span className={`text-refined shrink-0 text-xs transition-colors duration-300 ${
                  expandedIndex === index ? 'text-champagne' : 'text-muted-foreground/50 group-hover:text-champagne'
                }`}>
                  0{index + 1}
                </span>

                {/* Line */}
                <div className={`h-px w-8 transition-all duration-500 ${
                  expandedIndex === index ? 'w-12 bg-champagne/50' : 'bg-border group-hover:w-12 group-hover:bg-champagne/50'
                }`} />

                {/* Text */}
                <p className={`flex-1 font-body text-lg font-light transition-colors duration-300 ${
                  expandedIndex === index ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
                }`}>
                  {reason.title}
                </p>

                {/* Chevron */}
                <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                  expandedIndex === index ? 'rotate-180 text-champagne' : ''
                }`} />
              </button>

              {/* Expandable Description */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-[calc(2rem+theme(spacing.8)+theme(spacing.8))]">
                      <p className="font-body text-base font-light leading-relaxed text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMeSection;
