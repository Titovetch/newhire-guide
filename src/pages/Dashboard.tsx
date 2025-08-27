import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  Laptop, 
  Phone, 
  CreditCard, 
  Users, 
  ClipboardList, 
  Package,
  LogOut,
  User,
  Heart,
  UserMinus,
  Briefcase,
  Settings,
  GraduationCap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user] = useState({
    name: "John Doe",
    position: "Junior Financial Analyst",
    startDate: "December 2, 2024",
    department: "Investment Banking"
  });

  const [taskProgress] = useState({
    completed: 3,
    total: 8,
    percentage: 37.5
  });

  const [equipment] = useState([
    { name: "Laptop", status: "Ready for Pickup", icon: Laptop, variant: "success" as const },
    { name: "Cisco Phone", status: "Shipped", icon: Phone, variant: "warning" as const },
    { name: "Access Card", status: "Processing", icon: CreditCard, variant: "secondary" as const }
  ]);

  const quickActions = [
    {
      title: "My Tasks",
      description: "View and complete onboarding checklist",
      icon: ClipboardList,
      path: "/tasks",
      color: "text-primary"
    },
    {
      title: "Equipment Tracker",
      description: "Track your work equipment delivery",
      icon: Package,
      path: "/equipment",
      color: "text-info"
    },
    {
      title: "Meet your colleagues",
      description: "Connect with your onboarding buddy",
      icon: Users,
      path: "/buddy",
      color: "text-success"
    },
    {
      title: "Medical Network Guide",
      description: "Healthcare policies and medical network",
      icon: Heart,
      path: "/medical-guide",
      color: "text-warning"
    },
    {
      title: "Leaver Process",
      description: "Information about resignation procedures",
      icon: UserMinus,
      path: "/leaver-process",
      color: "text-destructive"
    },
    {
      title: "Welcome & Introduction",
      description: "Learn about Attijariwafa Bank Egypt",
      icon: Heart,
      path: "/welcome-introduction",
      color: "text-primary"
    },
    {
      title: "Training & Orientation",
      description: "Complete your training modules",
      icon: GraduationCap,
      path: "/training-orientation", 
      color: "text-info"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <div className="bg-white/50 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/ar/b/bb/Attijariwafa_bank_logo.png"
              alt="Attijariwafa Bank Egypt" 
              className="h-8 w-auto object-contain"
            />
            <h1 className="text-xl font-semibold text-foreground">Welcome Aboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => navigate("/personal-info")}>
              <User className="w-4 h-4 mr-2" />
              Personal Info
            </Button>
            <Button variant="ghost" onClick={() => navigate("/job-details")}>
              <Briefcase className="w-4 h-4 mr-2" />
              Job Details
            </Button>
            <Button variant="ghost" onClick={() => navigate("/settings")}>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" onClick={() => navigate("/")}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome, {user.name}! 👋
          </h2>
          <p className="text-muted-foreground">
            {user.position} • {user.department} • Started {user.startDate}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Progress Overview */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card shadow-card border-0 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  Onboarding Progress
                </CardTitle>
                <CardDescription>
                  You've completed {taskProgress.completed} out of {taskProgress.total} required tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={taskProgress.percentage} className="h-3" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {taskProgress.completed}/{taskProgress.total} tasks completed
                    </span>
                    <span className="font-medium text-primary">
                      {taskProgress.percentage}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
              {quickActions.map((action, index) => (
                <Card 
                  key={index}
                  className="group cursor-pointer bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-0"
                  onClick={() => navigate(action.path)}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`mx-auto w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className={`w-6 h-6 ${action.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{action.title}</h3>
                      <p className="text-xs text-muted-foreground">{action.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Equipment Status */}
          <div>
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Equipment Status
                </CardTitle>
                <CardDescription>
                  Track your work equipment delivery
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <span className="font-medium text-sm">{item.name}</span>
                    </div>
                    <Badge variant={item.variant} className="text-xs">
                      {item.status}
                    </Badge>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => navigate("/equipment")}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="bg-gradient-card shadow-card border-0 mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-warning" />
                  Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Complete Security Training</p>
                  <p className="text-xs text-muted-foreground">Due: Tomorrow</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">IT Setup Meeting</p>
                  <p className="text-xs text-muted-foreground">Scheduled: Dec 3, 2PM</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => navigate("/tasks")}
                >
                  View All Tasks
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;