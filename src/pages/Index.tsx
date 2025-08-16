
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
            <ExternalLink href="https://linkedin.com">LinkedIn</ExternalLink>
          </nav>
        </div>
      </main>
    </div>
    </>
  );
};

export default Index;
