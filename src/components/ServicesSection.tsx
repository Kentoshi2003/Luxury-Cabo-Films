import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    title: 'Luxury Real Estate Cinematic Films',
    description: 'Full cinematic property videos that tell a story and evoke emotion, designed for discerning buyers.',
    image: '/placeholder.svg',
  },
  {
    title: 'Social Media Content',
    description: 'Platform-optimized video and photo content for realtors and developers who understand modern marketing.',
    image: '/placeholder.svg',
  },
  {
    title: 'Luxury Architectural Photography',
    description: 'Refined imagery that captures the essence of space, light, and design with meticulous attention to detail.',
    image: '/placeholder.svg',
  },
  {
    title: 'Pre-Construction Visuals',
    description: 'Compelling visual narratives for developments that exist only on paper, helping investors see the vision.',
    image: '/placeholder.svg',
  },
  {
    title: 'Motion Graphics & Enhancement',
    description: 'Subtle motion design and post-production refinement that elevates raw footage to cinematic quality.',
    image: '/placeholder.svg',
  },
  {
    title: 'Luxury Websites & Landing Pages',
    description: 'Bespoke digital experiences that match the caliber of the properties and brands they represent.',
    image: '/placeholder.svg',
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

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
            Expertise
          </span>
          <h2 
            className={`text-display text-display-md text-foreground transition-all duration-700 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            What I Offer
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group grid gap-8 border-t border-border py-12 transition-all duration-700 last:border-b md:grid-cols-2 md:gap-16 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 2) * 100}ms` : '0ms' }}
            >
              {/* Content - alternating order */}
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                {/* Service Number */}
                <span className="text-refined mb-4 block text-xs text-muted-foreground/50">
                  0{index + 1}
                </span>

                {/* Service Title */}
                <h3 className="font-display text-2xl font-normal text-foreground transition-colors duration-300 group-hover:text-champagne">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="mt-4 font-body text-base font-light leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Subtle Line */}
                <div className="mt-8 h-px w-8 bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-champagne/50" />
              </div>

              {/* Image */}
              <div className={`relative aspect-[4/3] overflow-hidden bg-secondary ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
