import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [copied, setCopied] = useState(false);
  const email = 'davidflvan18@gmail.com';
  const phone = '+52 624 210 6519';

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success('Email copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-background px-6 py-section-lg"
    >
      <div className="mx-auto max-w-4xl">
        {/* Decorative Line Top */}
        <div 
          className={`mx-auto mb-16 h-px w-24 bg-gradient-to-r from-transparent via-champagne/30 to-transparent transition-all duration-1000 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}
        />

        {/* Section Header */}
        <div className="text-center">
          <span 
            className={`text-refined mb-6 inline-block text-xs text-champagne transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Get in Touch
          </span>
          <h2 
            className={`text-display text-display-md text-foreground transition-all duration-700 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Ready to Elevate Your{' '}
            <span className="text-editorial">Next Project?</span>
          </h2>
          <p 
            className={`mx-auto mt-8 max-w-lg font-body text-lg font-light leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Let's create cinematic visuals that reflect the true value of your 
            property or development.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div 
          className={`mt-16 grid gap-4 sm:grid-cols-2 max-w-md mx-auto transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Phone */}
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="group flex flex-col items-center gap-3 border border-border/50 bg-card/30 p-6 transition-all duration-500 hover:border-champagne/30 hover:bg-card/50"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors duration-300 group-hover:text-champagne">
              <Phone className="h-5 w-5" />
            </div>
            <span className="text-refined text-[10px] text-muted-foreground">
              Phone
            </span>
            <span className="text-center font-body text-xs font-light text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
              {phone}
            </span>
          </a>

          {/* Email - Copy to Clipboard */}
          <button
            onClick={copyEmail}
            className="group flex flex-col items-center gap-3 border border-border/50 bg-card/30 p-6 transition-all duration-500 hover:border-champagne/30 hover:bg-card/50"
            style={{ transitionDelay: '500ms' }}
          >
            <div className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors duration-300 group-hover:text-champagne">
              {copied ? <Check className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
            </div>
            <span className="text-refined text-[10px] text-muted-foreground">
              {copied ? 'Copied!' : 'Email'}
            </span>
            <span className="text-center font-body text-xs font-light text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
              {email}
            </span>
          </button>
        </div>

        {/* Decorative Line Bottom */}
        <div 
          className={`mx-auto mt-16 h-px w-24 bg-gradient-to-r from-transparent via-champagne/30 to-transparent transition-all duration-1000 delay-500 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}
        />
      </div>
    </section>
  );
};

export default CTASection;
