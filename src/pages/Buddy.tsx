import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  ArrowLeft, 
  Users, 
  Mail, 
  Phone, 
  MessageCircle,
  Calendar,
  MapPin,
  Star,
  Coffee,
  Clock,
  Briefcase
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Buddy {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  bio: string;
  avatar: string;
  specialties: string[];
  availability: {
    days: string[];
    hours: string;
  };
  funFacts: string[];
}

const Buddy = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [buddy] = useState<Buddy>({
    id: "1",
    name: "Sarah Chen",
    position: "Senior Financial Analyst",
    department: "Investment Banking",
    email: "sarah.chen@bank.com",
    phone: "+1 (555) 123-4567",
    location: "Floor 8, Desk 24",
    experience: "5 years at the bank",
    bio: "Hi John! I'm excited to be your onboarding buddy. I've been with the bank for 5 years and love helping new team members settle in. I specialize in investment analysis and risk management, and I'm here to answer any questions you might have about our processes, culture, or anything else!",
    avatar: "/api/placeholder/120/120",
    specialties: ["Risk Analysis", "Financial Modeling", "Client Relations", "Regulatory Compliance"],
    availability: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      hours: "9:00 AM - 5:00 PM"
    },
    funFacts: [
      "Coffee enthusiast ☕ - knows all the best spots nearby",
      "Marathon runner 🏃‍♀️ - completed 3 marathons",
      "Speaks 3 languages fluently",
      "Organized the office charity drive last year"
    ]
  });

  const handleSayHi = () => {
    const subject = "Nice to meet you - New team member";
    const body = `Hi ${buddy.name},

I'm John Doe, the new Junior Financial Analyst who just joined the Investment Banking team. I'm excited to work with you as my onboarding buddy!

I'd love to schedule a time to meet and learn more about the team and processes. Please let me know when would be a good time for you.

Looking forward to hearing from you!

Best regards,
John Doe`;

    window.location.href = `mailto:${buddy.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast({
      title: "Email opened!",
      description: "Your default email client should open with a pre-filled message.",
    });
  };

  const handleScheduleMeeting = () => {
    toast({
      title: "Calendar integration",
      description: "This would integrate with your calendar app to schedule a meeting.",
    });
  };

  const handleCallBuddy = () => {
    window.location.href = `tel:${buddy.phone}`;
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <div className="bg-white/50 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/dashboard")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Buddy Connect</h1>
              <p className="text-muted-foreground">Connect with your onboarding buddy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Buddy Profile */}
        <Card className="bg-gradient-card shadow-card border-0 mb-8">
          <CardHeader className="text-center pb-4">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-24 h-24 border-4 border-primary/20">
                <AvatarImage src={buddy.avatar} alt={buddy.name} />
                <AvatarFallback className="text-2xl font-semibold bg-gradient-primary text-white">
                  {buddy.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="text-center">
                <CardTitle className="text-2xl text-foreground">{buddy.name}</CardTitle>
                <CardDescription className="text-lg">{buddy.position}</CardDescription>
                <Badge variant="outline" className="mt-2">{buddy.department}</Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Quick Contact Actions */}
            <div className="grid md:grid-cols-3 gap-4">
              <Button 
                variant="gradient" 
                onClick={handleSayHi}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Say Hi via Email
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleCallBuddy}
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleScheduleMeeting}
                className="flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Schedule Meeting
              </Button>
            </div>

            {/* Bio */}
            <div className="bg-accent rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Welcome Message
              </h4>
              <p className="text-muted-foreground leading-relaxed">{buddy.bio}</p>
            </div>

            {/* Contact & Location Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Professional Info
                </h4>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>{buddy.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>{buddy.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{buddy.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="w-4 h-4" />
                    <span>{buddy.experience}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Availability
                </h4>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Available Days:</p>
                    <div className="flex flex-wrap gap-1">
                      {buddy.availability.days.map((day, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {day}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Hours:</p>
                    <span className="text-foreground">{buddy.availability.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Specialties & Fun Facts */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Specialties */}
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Areas of Expertise
              </CardTitle>
              <CardDescription>
                Sarah can help you with these topics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {buddy.specialties.map((specialty, index) => (
                  <Badge key={index} variant="outline" className="mb-2">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fun Facts */}
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-primary" />
                Fun Facts
              </CardTitle>
              <CardDescription>
                Get to know Sarah better
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {buddy.funFacts.map((fact, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Tips Card */}
        <Card className="bg-accent border-0 mt-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-info mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Buddy Program Tips</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Your buddy is here to help you succeed! Don't hesitate to reach out with questions about processes, culture, or just to chat. 
                  Consider scheduling regular check-ins during your first month.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Buddy Guidelines
                  </Button>
                  <Button variant="ghost" size="sm">
                    Program FAQ
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Buddy;