import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ProjectShowcase = () => {
  return (
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
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Project Showcase
            </h1>
            <p className="text-secondary/90 leading-relaxed">
              Here you'll find a collection of my work in robotics, machine learning, and engineering.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Enodo Robotics</h3>
              <p className="text-secondary/90">
                Industrial manipulator solutions for the recycling industry, expanding the capabilities of robotic systems.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Path Planning Research</h3>
              <p className="text-secondary/90">
                Advanced algorithms for robotic path planning and navigation in complex environments.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Computer Vision Projects</h3>
              <p className="text-secondary/90">
                Machine learning applications in computer vision for industrial automation.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectShowcase;