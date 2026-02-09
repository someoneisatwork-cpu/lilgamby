import { Pizza } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-max section-padding py-12">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Pizza className="w-8 h-8 text-primary" />
            <span className="font-display text-2xl text-foreground">
              Lil Gamby
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground">
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#location" className="hover:text-primary transition-colors">Location</a>
            <a href="#order" className="hover:text-primary transition-colors">Order</a>
            <a href="tel:+917718834963" className="hover:text-primary transition-colors">Contact</a>
          </div>

      {/* Divider */}
      <div className="w-full h-px bg-border mb-8" />

      {/* Copyright */}
      <p className="text-muted-foreground/60 text-sm">
        © {new Date().getFullYear()} Lil Gamby. All rights reserved.
      </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
