import { Link } from "react-router-dom";
import {
  Mail,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  ExternalLink,
} from "lucide-react";
import Logo from "@/assets/wequitech_transparant.png"; // adjust path

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                <img
                  src={Logo}
                  alt="Wequi Tech logo"
                  className="h-14 w-auto"
                />
              </span>
              <div>
                <p className="font-semibold text-foreground">Wequi Tech</p>
                <p className="text-sm text-muted-foreground">
                  Digital safety startup
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wequi Tech builds digital safety tools for safer internet use. Our
              flagship product, Wequi Guard, helps reduce harmful and
              distracting online content through DNS-based filtering and device
              protection controls.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Verification
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <a href="mailto:info@wequitech.com" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Mail size={16} /> info@wequitech.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Dhaka, Bangladesh
              </li>
              <li className="text-sm text-muted-foreground">
                <a
                  href="https://protect.wequitech.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  Product site
                  <ExternalLink size={14} />
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Public website: wequitech.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/wequi" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/wequi" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/wequi" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://github.com/Wequi-Technology-Limited" className="text-muted-foreground hover:text-accent transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wequi Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
