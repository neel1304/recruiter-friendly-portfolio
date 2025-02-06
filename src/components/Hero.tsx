
import { GithubIcon, LinkedinIcon, MailIcon, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#8B5CF6] to-[#D946EF]">
      <div className="container mx-auto px-4 py-16 animate-fade-up">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
            Hi, I'm Nilargha Roy
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            A passionate software developer specializing in building exceptional digital experiences.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              onClick={() => window.open("https://github.com/neel1304", "_blank")}
            >
              <GithubIcon className="w-5 h-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              onClick={() => window.open("https://www.linkedin.com/in/nilargha/", "_blank")}
            >
              <LinkedinIcon className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              onClick={() => window.location.href = "mailto:nilarghar@gmail.com"}
            >
              <MailIcon className="w-5 h-5" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
