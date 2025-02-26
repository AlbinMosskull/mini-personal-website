
import { ExternalLink as ExternalLinkIcon } from "lucide-react";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1 text-secondary hover:text-primary transition-colors duration-300"
    >
      <span className="link-underline">{children}</span>
      <ExternalLinkIcon className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
};

export default ExternalLink;
