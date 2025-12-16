import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    quote: "Working with David feels like having an in-house creative director rather than an external vendor.",
    author: "Private Client",
    role: "Luxury Development",
  },
  {
    quote: "His ability to visualize pre-construction projects makes a huge difference in how developments are presented.",
    author: "Development Partner",
    role: "Los Cabos Corridor",
  },
  {
    quote: "The content immediately elevated our brand and positioning.",
    author: "Brokerage Director",
    role: "Cabo San Lucas",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-card px-6 py-section-lg"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span 
            className={`text-refined mb-6 inline-block text-xs text-champagne transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Testimonials
          </span>
          <h2 
            className={`text-display text-display-md text-foreground transition-all duration-700 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            What Clients <span className="text-editorial">Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group flex flex-col justify-between border-t border-border pt-8 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 2) * 150}ms` : '0ms' }}
            >
              {/* Quote Mark */}
              <div className="mb-6">
                <span className="font-display text-5xl text-champagne/20">"</span>
              </div>

              {/* Quote */}
              <blockquote className="mb-8 flex-grow">
                <p className="font-display text-xl font-normal leading-relaxed text-foreground/90">
                  {testimonial.quote}
                </p>
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-body text-sm font-normal text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-refined mt-1 text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
