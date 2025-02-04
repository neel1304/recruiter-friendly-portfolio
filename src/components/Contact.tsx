
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MailIcon, GithubIcon, LinkedinIcon, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#D946EF] to-[#8B5CF6]" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-yellow-300" />
          Get In Touch
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </h2>
        <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-center text-white">Let's Connect!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                onClick={() => window.location.href = "mailto:nilarghar@gmail.com"}
              >
                <MailIcon className="w-5 h-5" />
                Email Me
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
                onClick={() => window.open("https://github.com/neel1304", "_blank")}
              >
                <GithubIcon className="w-5 h-5" />
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
