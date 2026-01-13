import { Github, Linkedin, Twitter, Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Hamzadar007", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hamza-dar-97a4851a1/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Hami_dar007", label: "Twitter" },
    { icon: Mail, href: "mailto:hamzadar535@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-accent">Build Something</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Have a mobile app idea? Looking for a React Native developer? 
            I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5 text-accent" />
              <a href="mailto:hello@hamzadar.dev" className="hover:text-foreground transition-colors">
                hello@hamzadar.dev
              </a>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Available Worldwide</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="social-icon"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <Button size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Send className="w-5 h-5" />
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
