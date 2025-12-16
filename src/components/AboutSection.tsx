import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-card px-6 py-section-lg"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left Column - Photo */}
        <div 
          className={`relative aspect-[3/4] overflow-hidden bg-secondary transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Photo placeholder - replace src with your image */}
          <img 
            src="/David.jpg"
            alt="David Flores"
            className="h-full w-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center">
          <span 
            className={`text-refined mb-6 text-xs text-champagne transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            About
          </span>
          <h2 
            className={`text-display text-display-md text-foreground transition-all duration-700 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            David Flores
          </h2>
          <p 
            className={`mt-2 font-body text-sm font-light tracking-wide text-muted-foreground transition-all duration-700 delay-150 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Filmmaker & Visual Strategist
          </p>

          {/* Decorative Line */}
          <div 
            className={`mt-10 h-px w-24 bg-gradient-to-r from-champagne/50 to-transparent transition-all duration-1000 delay-200 ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
          />

          <p 
            className={`mt-10 font-body text-lg font-light leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            I'm David Flores, a filmmaker and visual strategist based in Los Cabos.
          </p>
          <p 
            className={`mt-6 font-body text-lg font-light leading-relaxed text-muted-foreground transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            I work with luxury real estate professionals, developers, and lifestyle brands 
            who want their projects to look and feel top-tier—not generic. I've filmed villas, 
            yachts, developments, and high-end experiences, always thinking about the buyer, 
            the investor, and the platform where the content will live.
          </p>
          <p 
            className={`mt-6 font-body text-lg font-light leading-relaxed text-muted-foreground transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            For pre-construction projects, I help clients communicate the full vision—not 
            just what exists today.
          </p>

          {/* Pull Quote */}
          <blockquote 
            className={`mt-10 border-l border-champagne/30 pl-6 transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <p className="font-display text-xl italic text-foreground/80">
              "The difference between ordinary and extraordinary is in the details."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
