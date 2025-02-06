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
    <section className="py-16 relative overflow-hidden" id="projects">
      {/* Custom background with multiple gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FEC6A1] to-[#FFDEE2] opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDUwIDAgTCAwIDAgMCA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-[#1A1F2C] mb-12 text-center flex items-center justify-center gap-2">
          <Brain className="w-6 h-6 text-[#9b87f5]" />
          Featured Projects
          <Brain className="w-6 h-6 text-[#9b87f5]" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm border-none shadow-[0_10px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center text-[#1A1F2C] group-hover:text-[#9b87f5] transition-colors duration-300">
                  <span className="flex items-center gap-2">
                    {project.title}
                    <span className="inline-block w-2 h-2 rounded-full bg-[#9b87f5] animate-pulse"></span>
                  </span>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8E9196] hover:text-[#9b87f5] transform hover:scale-110 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8E9196] hover:text-[#9b87f5] transform hover:scale-110 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </CardTitle>
                <CardDescription className="text-[#403E43] mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-[#f8f9fa] to-white border border-[#e9ecef] rounded-full text-[#403E43] hover:border-[#9b87f5] hover:text-[#9b87f5] transition-all duration-300 shadow-sm"
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