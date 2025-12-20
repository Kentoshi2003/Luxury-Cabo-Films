import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WhatIDoSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-background px-6 py-section-lg"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Section Label */}
        <span 
          className={`text-refined mb-6 inline-block text-xs text-champagne transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          The Work
        </span>

        {/* Section Title */}
        <h2 
          className={`text-display text-display-md text-foreground transition-all duration-700 delay-100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          High-End Visual & Digital Marketing for{' '}
          <span className="text-editorial">Luxury Real Estate</span>
        </h2>

        {/* Divider */}
        <div 
          className={`mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-champagne/50 to-transparent transition-all duration-1000 delay-200 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}
        />

        {/* Description */}
        <p 
          className={`mx-auto mt-10 max-w-2xl font-body text-lg font-light leading-relaxed text-muted-foreground transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          I create high-end visual and digital marketing assets for luxury real estate, 
          pre-construction developments, and lifestyle brands in Los Cabos.
        </p>
        <p 
          className={`mx-auto mt-6 max-w-2xl font-body text-lg font-light leading-relaxed text-muted-foreground transition-all duration-700 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          My work is focused on <span className="text-champagne">selling vision</span>, 
          elevating brand perception, and helping properties and projects 
          <span className="text-champagne"> attract the right buyers and investors</span>.
        </p>
      </div>
    </section>
  );
};

export default WhatIDoSection;
