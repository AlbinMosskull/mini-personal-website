
import ExternalLink from "@/components/ExternalLink";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <main className="max-w-2xl w-full animate-fadeIn">
        <div className="glass p-8 rounded-2xl space-y-8">
          <div className="space-y-2">
            <span className="text-sm text-secondary/80 uppercase tracking-wider">Welcome</span>
            <h1 className="text-4xl font-bold tracking-tight">
              Hello, I'm Alex
            </h1>
            <p className="text-secondary/90 leading-relaxed">
              A designer and developer focused on crafting clean & user‑friendly experiences.
            </p>
          </div>
          
          <nav className="flex flex-col gap-3">
            <ExternalLink href="https://twitter.com">Twitter</ExternalLink>
            <ExternalLink href="https://github.com">GitHub</ExternalLink>
            <ExternalLink href="https://linkedin.com">LinkedIn</ExternalLink>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default Index;
