import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="card-gradient p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300">
      {Icon && (
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      )}
      <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
