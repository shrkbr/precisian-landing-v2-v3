import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const ContentSection = ({ title, children, className = "" }: ContentSectionProps) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="font-display text-2xl font-bold mb-6 gradient-text">{title}</h2>
      <div className="text-muted-foreground space-y-4">{children}</div>
    </div>
  );
};

export default ContentSection;
