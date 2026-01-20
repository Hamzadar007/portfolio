import { Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tkxel.",
      period: "May 2023 - Present",
      description:
        "Working as a Senior React Native Developer, contributing to multiple apps including ProfitDrive and Signal Edge. Led the development of ProfitDrive, building core features such as route tracking, property research, and lead management, while also contributing as a team member on Signal Edge by developing key modules like officer duty management, attendance tracking, and in-app chat. Focused on creating scalable React Native modules, optimizing performance, and delivering a seamless user experience across all products.",
    },
    {
      title: "Software Engineer",
      company: "Khaleef Technologies",
      period: "Mar 2021 - April 2023",
      description:
        "Working as a React Native Developer in a product-based company, contributing to a large-scale sports application. Built and maintained React Native modules integrated into native Android and iOS apps. Developed major features including Fantasy Cricket (match creation, leaderboards, groups, and chat) while optimizing performance and improving app stability.",
    },
    {
      title: "Mobile App Developer Intern",
      company: "Technic Mentors",
      period: "Aug 2020 - Jan 2021",
      description:
        "Developed cross-platform mobile applications from scratch. Collaborated with designers to implement pixel-perfect UIs and integrated RESTful APIs for real-time data synchronization.",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-dark-section text-dark-section-foreground">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Experience</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Professional journey building exceptional mobile experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{exp.title}</h3>
                    <p className="text-white/70">{exp.company}</p>
                  </div>
                </div>
                <span className="text-accent font-medium text-sm md:text-base whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-white/60 leading-relaxed pl-0 md:pl-16">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
