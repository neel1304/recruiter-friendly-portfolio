import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";

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
    <section className="py-16 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-portfolio-primary mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {project.title}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-portfolio-primary"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-portfolio-primary"
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
                      className="px-3 py-1 bg-portfolio-light text-portfolio-primary rounded-full text-sm"
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