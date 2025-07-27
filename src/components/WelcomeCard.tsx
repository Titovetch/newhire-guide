import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCheck, Users } from "lucide-react";

interface WelcomeCardProps {
  title: string;
  description: string;
  icon: "user" | "hr";
  onClick: () => void;
}

export const WelcomeCard = ({ title, description, icon, onClick }: WelcomeCardProps) => {
  const IconComponent = icon === "user" ? UserCheck : Users;
  
  return (
    <Card className="group cursor-pointer bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-0">
      <CardContent className="p-8 text-center space-y-6">
        <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-10 h-10 text-white" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        
        <Button 
          onClick={onClick}
          variant="gradient" 
          size="lg"
          className="w-full mt-6"
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
};