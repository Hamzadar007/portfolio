import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Hamzadar007", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hamza-dar-97a4851a1/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/Hami_dar007", label: "Twitter" },
    { icon: Mail, href: "mailto:hamzadar535@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center section-padding pt-32"
    >
      <div className="container-max w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <p className="text-muted-foreground text-lg mb-4">Hello I'm</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Hamza Dar.
            </h1>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              React Native{" "}
              <span className="relative">
                <span className="highlight-box text-accent">Developer</span>
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
            React Native developer with 4+ years of experience building fast, scalable, and user-focused mobile apps for iOS and Android. I focus on clean architecture, performance, and great user experience. I enjoy solving complex problems, working with cross-functional teams, and turning ideas into reliable, production-ready products. Always learning, always improving.

            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
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
          </div>

          {/* Illustration */}
          <div className="order-1 lg:order-2 animate-fade-up-delayed">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl scale-75" />
              <img
                src={heroIllustration}
                alt="Developer working on mobile apps"
                className="relative w-full max-w-lg mx-auto animate-float"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-foreground/40 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
