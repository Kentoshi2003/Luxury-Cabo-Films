const Footer = () => {
  return (
    <footer className="bg-card px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center">
          {/* Brand Name */}
          <h3 className="font-display text-2xl text-foreground">
            Luxury Cabo Films
          </h3>
          
          {/* Location */}
          <p className="text-refined mt-3 text-xs text-muted-foreground">
            Los Cabos, Mexico
          </p>

          {/* Decorative Divider */}
          <div className="my-10 h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Description */}
          <p className="max-w-xl font-body text-sm font-light leading-relaxed text-muted-foreground">
            Luxury real estate, developments, and lifestyle. High-end visual and digital marketing 
            for properties and brands that demand excellence across Cabo San Lucas, San José del Cabo, 
            and the Los Cabos Corridor.
          </p>

          {/* Email */}
          <a 
            href="mailto:davidflvan18@gmail.com"
            className="mt-8 font-body text-sm font-light text-foreground/80 transition-colors duration-300 hover:text-champagne"
          >
            davidflvan18@gmail.com
          </a>
          
          {/* Phone */}
          <a 
            href="tel:+526242106519"
            className="mt-2 font-body text-sm font-light text-foreground/80 transition-colors duration-300 hover:text-champagne"
          >
            +52 624 210 6519
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-body text-xs font-light text-muted-foreground/60">
            © {new Date().getFullYear()} Luxury Cabo Films. All rights reserved.
          </p>
          <p className="text-refined text-[10px] text-muted-foreground/40">
            Luxury Visual Marketing Partner
          </p>
        </div>

        {/* Developer Credit */}
        <p className="mt-6 text-center font-body text-[10px] font-light text-muted-foreground/40 tracking-wider">
          Developed by <span className="text-champagne/50">Luxury Cabo Films</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
