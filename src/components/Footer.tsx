const Footer = () => {
  return (
    <footer className="bg-card px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center">
          {/* Brand Name */}
          <h3 className="font-display text-2xl text-foreground">
            David Flores
          </h3>
          
          {/* Location */}
          <p className="text-refined mt-3 text-xs text-muted-foreground">
            Los Cabos, Mexico
          </p>

          {/* Decorative Divider */}
          <div className="my-10 h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Description */}
          <p className="max-w-xl font-body text-sm font-light leading-relaxed text-muted-foreground">
            Luxury real estate videography, cinematic property films, architectural photography, 
            and visual marketing services across Cabo San Lucas, San José del Cabo, and the 
            Los Cabos Corridor.
          </p>

          {/* Email */}
          <a 
            href="mailto:hello@davidflores.film"
            className="mt-8 font-body text-sm font-light text-foreground/80 transition-colors duration-300 hover:text-champagne"
          >
            hello@davidflores.film
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-body text-xs font-light text-muted-foreground/60">
            © {new Date().getFullYear()} David Flores. All rights reserved.
          </p>
          <p className="text-refined text-[10px] text-muted-foreground/40">
            Luxury Visual Marketing Partner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
