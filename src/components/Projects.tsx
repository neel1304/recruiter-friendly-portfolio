import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink, Github, Bot, Database, Brain, Eye } from "lucide-react";

const projects = [
  {
    title: "Employee Turnover Prediction",
    description: "Built an ML model using Decision Trees & Random Forests to predict employee turnover rates. Includes interactive GUI components for easy visualization and analysis.",
    tech: ["Python", "Scikit-learn", "Random Forest", "GUI Development"],
    github: "https://github.com/neel1304/Employee-Turnover-Prediction",
    live: "https://github.com/neel1304/Employee-Turnover-Prediction",
  },
  {
    title: "Selenium ToolsQA Automation",
    description: "Developed an automated testing framework for website registration processes using Selenium WebDriver, demonstrating expertise in test automation.",
    tech: ["Java", "Selenium", "TestNG", "Automation Testing"],
    github: "https://github.com/neel1304/Selenium_ToolsQA__Automation",
    live: "https://github.com/neel1304/Selenium_ToolsQA__Automation",
  },
  {
    title: "Florence Chatbot",
    description: "Created an intelligent recommendation chatbot using IBM Watson, implementing advanced concepts like Digression, Handlers & Slots. Deployed on WordPress.",
    tech: ["IBM Watson", "NLP", "JavaScript", "WordPress"],
    github: "https://github.com/neel1304/Florence-Chatbot",
    live: "https://github.com/neel1304/Florence-Chatbot",
  },
  {
    title: "Driver Drowsiness Detection",
    description: "Developed a real-time computer vision system to detect driver drowsiness using facial landmarks and eye aspect ratio analysis. Implements alert mechanisms for drowsy driving prevention.",
    tech: ["OpenCV", "Python", "Deep Learning", "Computer Vision"],
    github: "https://github.com/neel1304/driver-drowsiness-detection",
    live: "https://github.com/neel1304/driver-drowsiness-detection",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#FEC6A1] to-[#FFDEE2]" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-portfolio-primary mb-12 text-center flex items-center justify-center gap-2">
          <Brain className="w-6 h-6 text-portfolio-primary" />
          Featured Projects
          <Brain className="w-6 h-6 text-portfolio-primary" />
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