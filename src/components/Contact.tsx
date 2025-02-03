import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MailIcon, GithubIcon, LinkedinIcon } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-portfolio-primary mb-12 text-center">
          Get In Touch
        </h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Let's Connect!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={() => window.location.href = "mailto:your.email@example.com"}
              >
                <MailIcon className="w-5 h-5" />
                Email Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={() => window.open("https://linkedin.com/in/yourusername", "_blank")}
              >
                <LinkedinIcon className="w-5 h-5" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={() => window.open("https://github.com/yourusername", "_blank")}
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