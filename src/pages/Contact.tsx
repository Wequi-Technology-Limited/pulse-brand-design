import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Mail, MapPin, Globe, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/lib/email";
import { SEO } from "@/components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await sendContactEmail(formData);

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Failed to send message.";
      toast({
        title: "Unable to send",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="Contact Wequi Tech | Support and verification"
        description="Contact Wequi Tech for support, startup verification, partnership inquiries, and Wequi Guard product questions."
        pathname="/contact"
      />

      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact Wequi Tech
            </h1>
            <p className="text-xl text-muted-foreground">
              Reach us for support, startup verification, product questions, or
              partnership inquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8 animate-fade-up">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  This page is intended to help reviewers, users, and partners
                  quickly verify the company, product, and public contact route.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <div className="space-y-1">
                      <a
                        href="mailto:hello@wequitech.com"
                        className="block text-muted-foreground hover:text-accent transition-colors"
                      >
                        Business: hello@wequitech.com
                      </a>
                      <a
                        href="mailto:info@wequitech.com"
                        className="block text-muted-foreground hover:text-accent transition-colors"
                      >
                        Support: info@wequitech.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Domains</h3>
                    <a
                      href="https://wequitech.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      wequitech.com
                    </a>
                    <p>
                      <a
                        href="https://protect.wequitech.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        protect.wequitech.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Region</h3>
                    <p className="text-muted-foreground">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Public legal pages
                    </h3>
                    <div className="flex gap-4 text-muted-foreground">
                      <Link to="/privacy" className="hover:text-accent transition-colors">
                        Privacy Policy
                      </Link>
                      <Link to="/terms" className="hover:text-accent transition-colors">
                        Terms of Use
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Reviewer Notes
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>Company: Wequi Tech</p>
                  <p>Flagship product: Wequi Guard</p>
                  <p>Product category: digital safety and content filtering</p>
                  <p>Primary contact: info@wequitech.com</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Support, verification, partnership, or product question"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting} aria-busy={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
