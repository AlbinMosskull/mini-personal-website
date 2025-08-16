import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass p-3 rounded-xl text-secondary hover:text-primary transition-colors duration-300"
      >
        <Menu className="h-5 w-5" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 glass p-4 rounded-xl min-w-48">
          <nav className="flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-secondary hover:text-primary transition-colors duration-300"
            >
              <span className="link-underline">Home</span>
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="text-secondary hover:text-primary transition-colors duration-300"
            >
              <span className="link-underline">Project Showcase</span>
            </Link>
            <Link
              to="/personal"
              onClick={() => setIsOpen(false)}
              className="text-secondary hover:text-primary transition-colors duration-300"
            >
              <span className="link-underline">Personal</span>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navigation;