
import ExternalLink from "@/components/ExternalLink";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center p-6">
      <main className="max-w-2xl w-full animate-fadeIn">
        <div className="glass p-8 rounded-2xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Hi, I'm Albin
            </h1>
            <div className="space-y-4 text-secondary/90 leading-relaxed">
              <p>
                I am a founding engineer at Enodo Robotics, where we expand the uses of industrial manipulators, such as our robot solution for picking within the recycling industry.
              </p>
              <p>
                My interests are broad within robotics and machine learning, though I am particularly passionate about path planning and computer vision, as well as growing engineering teams and the members within them.
              </p>
            </div>
          </div>
          
          <nav className="flex flex-col gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Connect on LinkedIn</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </nav>
        </div>
      </main>
    </div>
    </>
  );
};

export default Index;
