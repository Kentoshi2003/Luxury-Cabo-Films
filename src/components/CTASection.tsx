import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, Mail, Copy, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

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
      id="contact-form"
      className="relative bg-background px-6 py-section-lg overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-champagne/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-champagne/3 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Decorative Line Top */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 1 }}
          className="mx-auto mb-16 h-px w-24 bg-gradient-to-r from-transparent via-champagne/30 to-transparent"
        />

        {/* Section Header */}
        <div className="text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-refined mb-6 inline-block text-xs tracking-[0.3em] text-champagne"
          >
            Get in Touch
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display text-display-md text-foreground"
          >
            Ready to <span className="text-editorial italic">Elevate</span> Your Property?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-8 max-w-lg font-body text-lg font-light leading-relaxed text-muted-foreground"
          >
            Let's create cinematic visuals that reflect the true value of your 
            property or development.
          </motion.p>
        </div>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={`mailto:${email}?subject=Inquiry%20-%20Luxury%20Visual%20Project`}
            className="group relative px-10 py-4 overflow-hidden"
          >
            {/* Background */}
            <span className="absolute inset-0 bg-champagne/10 transition-all duration-500 group-hover:bg-champagne/20" />
            <span className="absolute inset-0 border border-champagne/40 transition-all duration-500 group-hover:border-champagne/70" />
            
            {/* Shimmer effect */}
            <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-champagne/20 to-transparent group-hover:translate-x-[100%] transition-transform duration-700" />
            
            <span className="relative flex items-center gap-3 text-refined text-xs tracking-[0.2em] text-champagne">
              <span>Book Your Cinematic Experience</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid gap-4 sm:grid-cols-2 max-w-md mx-auto"
        >
          {/* Phone */}
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="group flex flex-col items-center gap-3 border border-border/50 bg-card/30 p-6 transition-all duration-500 hover:border-champagne/30 hover:bg-card/50"
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
        </motion.div>

        {/* Trust indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center text-refined text-[10px] tracking-[0.15em] text-muted-foreground/60"
        >
          Typically responds within 24 hours
        </motion.p>

        {/* Decorative Line Bottom */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-16 h-px w-24 bg-gradient-to-r from-transparent via-champagne/30 to-transparent"
        />
      </div>
    </section>
  );
};

export default CTASection;
