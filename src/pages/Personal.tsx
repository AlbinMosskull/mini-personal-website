import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Personal = () => {
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
              Personal
            </h1>
            <p className="text-secondary/90 leading-relaxed">
              Beyond robotics and engineering, here's a bit more about me.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Team Building</h3>
              <p className="text-secondary/90">
                Passionate about growing engineering teams and helping team members develop their skills and careers.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Learning Philosophy</h3>
              <p className="text-secondary/90">
                I believe in continuous learning and staying curious about new developments in technology and engineering.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Interests</h3>
              <p className="text-secondary/90">
                When not working with robots, I enjoy exploring new technologies and contributing to the engineering community.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Personal;