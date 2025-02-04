
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of your first project",
    tech: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/yourusername/project1",
    live: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "A brief description of your second project",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/yourusername/project2",
    live: "https://project2.com",
  },
  {
    title: "Project 3",
    description: "A brief description of your third project",
    tech: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/yourusername/project3",
    live: "https://project3.com",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#FEC6A1] to-[#FFDEE2]" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-portfolio-primary mb-12 text-center flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-portfolio-primary" />
          Featured Projects
          <Sparkles className="w-6 h-6 text-portfolio-primary" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:scale-105 transition-transform duration-300 bg-white/70 backdrop-blur-sm border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {project.title}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-primary hover:text-portfolio-accent transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-primary hover:text-portfolio-accent transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/50 text-portfolio-primary rounded-full text-sm hover:bg-white/80 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
