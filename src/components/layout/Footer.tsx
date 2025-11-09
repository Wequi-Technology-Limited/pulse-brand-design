import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Github, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="text-xl font-bold text-foreground">Wequi Tech</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Making your online world safe and secure.
            </p>
          </div>

          {/* Quick Links */}
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
              {/* <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <a href="mailto:info@wequitech.com" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Mail size={16} /> info@wequitech.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Istanbul, Turkey
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
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
