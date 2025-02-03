import { Card, CardContent } from "./ui/card";

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
    <section className="py-16 bg-portfolio-light" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-portfolio-primary mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-portfolio-primary mb-4">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white text-portfolio-primary rounded-full text-sm"
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