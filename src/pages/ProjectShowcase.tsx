import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";

const ProjectShowcase = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center p-6">
        <main className="max-w-4xl w-full animate-fadeIn">
          <div className="glass p-8 rounded-2xl space-y-8">
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="link-underline">Back to Home</span>
              </Link>
            </div>
            
            <div className="space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tight">
                Arbitrary Project Showcase
              </h1>
              <p className="text-secondary/90 leading-relaxed">
                Our project from the Mistral AI Hackaton, End-to-end ML controlled robot.
              </p>
              
              <div className="w-full max-w-3xl mx-auto">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/TfWXdF7YVUo?si=OOUqSpFGennSYakv"
                    title="Project Showcase Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProjectShowcase;