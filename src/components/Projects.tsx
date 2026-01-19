import { ExternalLink, Smartphone } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Cricwick",
      image: "/cricwick.webp",
      description:
        "Cricwick is a complete cricket platform offering fastest live scores, ball-by-ball updates, news, videos, and exclusive interviews. It also features a fantasy league where users create teams, compete in contests, and win exciting rewards.",
      tech: ["React Native", "TypeScript", "Redux", "Firebase"],
      color: "#3B82F6",
      platforms: ["iOS", "Android"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.Khaleef.CricWick.TelenorZong&hl=en",
      appStoreLink: "https://apps.apple.com/us/iphone/search?term=cricwick",
    },
    {
      title: "ProfitDrive",
      image: "/profitDrive.webp",
      description:
        "ProfitDrive is a smart real estate investing app that helps users find, track, and manage off-market property leads while driving for deals. It automates research, route tracking, and lead management so investors can close more deals faster.",
      tech: ["React Native", "Expo", "Maps", "Node.js","Zustand"],
      color: "#10B981",
      platforms: ["iOS", "Android"],
      playStoreLink: "https://play.google.com/store/apps/details?id=io.profitdrive.mobile&hl=en",
      appStoreLink: "https://apps.apple.com/us/app/profit-drive/id1490552063",
    },
    {
      title: "Edge by FrameBrand",
      image: "/signal.webp",
      description:
        "A robust security operations app with real-time officer monitoring, shift scheduling, panic alerts, management tools, and detailed reporting to streamline workforce operations.",
      tech: ["React Native", "Google Maps", "Firebase", "Azure","Formik"],
      color: "#8B5CF6",
      platforms: ["iOS", "Android"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.signal.edge&hl=en",
      appStoreLink: "https://apps.apple.com/us/app/edge-by-framebrand/id6470830060",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of mobile applications I've built and shipped
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Project Image */}
              <div className="bg-secondary/50 py-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" 
                  style={{ 
                    background: `radial-gradient(circle at 50% 50%, ${project.color}, transparent 70%)` 
                  }} 
                />
                <div className="transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-contain max-h-96 mx-auto"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {project.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="text-xs font-medium px-2 py-1 bg-accent/10 text-accent rounded-full flex items-center gap-1"
                    >
                      <Smartphone className="w-3 h-3" />
                      {platform}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2 py-1 bg-secondary text-foreground/70 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 flex-wrap">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="gap-2"
                    asChild
                  >
                    <a 
                      href={project.playStoreLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Play Store
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                    asChild
                  >
                    <a 
                      href={project.appStoreLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      App Store
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
