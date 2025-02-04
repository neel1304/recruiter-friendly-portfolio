
import { Card, CardContent } from "./ui/card";
import { Sparkles } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Others",
    technologies: ["Git", "Docker", "AWS", "Jest", "Agile/Scrum"],
  },
];

const Skills = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#E5DEFF] to-[#D3E4FD]" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-portfolio-primary mb-12 text-center flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-portfolio-primary" />
          Skills & Technologies
          <Sparkles className="w-6 h-6 text-portfolio-primary" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <Card key={index} className="hover:scale-105 transition-transform duration-300 bg-white/70 backdrop-blur-sm border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-portfolio-primary mb-4">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.technologies.map((tech, techIndex) => (
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

export default Skills;
