import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  PlayCircle, 
  FileText, 
  Clock, 
  CheckCircle, 
  Users, 
  Calendar,
  BookOpen,
  Video,
  Download
} from "lucide-react";

const TrainingOrientation = () => {
  const preJoiningMaterials = [
    { 
      title: "Welcome Video", 
      type: "video", 
      duration: "15 min", 
      status: "completed",
      description: "Introduction to Attijariwafa Bank Egypt"
    },
    { 
      title: "Company Handbook", 
      type: "pdf", 
      duration: "30 min", 
      status: "in-progress",
      description: "Policies, procedures, and guidelines"
    },
    { 
      title: "Banking Fundamentals Quiz", 
      type: "quiz", 
      duration: "20 min", 
      status: "pending",
      description: "Test your banking knowledge"
    },
    { 
      title: "Compliance Training", 
      type: "video", 
      duration: "45 min", 
      status: "pending",
      description: "Anti-money laundering and ethics"
    }
  ];

  const orientationSchedule = [
    {
      date: "Dec 2, 2024",
      time: "9:00 AM",
      activity: "HR Welcome Meeting",
      location: "HR Office - Level 3",
      status: "scheduled"
    },
    {
      date: "Dec 2, 2024", 
      time: "11:00 AM",
      activity: "IT Setup & Security Briefing",
      location: "IT Department - Level 2",
      status: "scheduled"
    },
    {
      date: "Dec 3, 2024",
      time: "10:00 AM", 
      activity: "Department Introduction",
      location: "Investment Banking Floor",
      status: "scheduled"
    },
    {
      date: "Dec 3, 2024",
      time: "2:00 PM",
      activity: "Team Meet & Greet",
      location: "Conference Room A",
      status: "scheduled"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "success";
      case "in-progress": return "warning";
      case "pending": return "secondary";
      default: return "secondary";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return <Video className="w-4 h-4" />;
      case "pdf": return <FileText className="w-4 h-4" />;
      case "quiz": return <BookOpen className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold text-foreground">Training & Orientation</h2>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pre-joining Training Materials */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-primary" />
              Pre-joining Training Materials
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-background rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm text-muted-foreground">1/4 completed</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>

            {preJoiningMaterials.map((material, index) => (
              <div key={index} className="bg-background rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {getTypeIcon(material.type)}
                    <div>
                      <h4 className="font-medium text-sm">{material.title}</h4>
                      <p className="text-xs text-muted-foreground">{material.description}</p>
                    </div>
                  </div>
                  <Badge variant={getStatusColor(material.status) as any}>
                    {material.status === "completed" && <CheckCircle className="w-3 h-3 mr-1" />}
                    {material.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {material.duration}
                  </div>
                  <Button 
                    variant={material.status === "completed" ? "outline" : "default"} 
                    size="sm"
                  >
                    {material.status === "completed" ? "Review" : "Start"}
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* E-learning Modules */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              E-learning Modules
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-background rounded-lg p-4">
              <h4 className="font-medium mb-3">Core Banking Modules</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Customer Service Excellence</span>
                  <div className="flex items-center gap-2">
                    <Progress value={100} className="w-20 h-2" />
                    <CheckCircle className="w-4 h-4 text-success" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Risk Management Basics</span>
                  <div className="flex items-center gap-2">
                    <Progress value={60} className="w-20 h-2" />
                    <span className="text-xs text-muted-foreground">60%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Digital Banking Solutions</span>
                  <div className="flex items-center gap-2">
                    <Progress value={0} className="w-20 h-2" />
                    <span className="text-xs text-muted-foreground">Not Started</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-4">
              <h4 className="font-medium mb-3">Compliance Training</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Anti-Money Laundering</span>
                  <Badge variant="warning">Due Soon</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Data Protection & Privacy</span>
                  <Badge variant="secondary">Not Started</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orientation Schedule */}
        <div className="lg:col-span-2">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Orientation Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orientationSchedule.map((item, index) => (
                  <div key={index} className="bg-background rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-sm font-medium">{item.date}</div>
                          <div className="text-xs text-muted-foreground">{item.time}</div>
                        </div>
                        <div>
                          <h4 className="font-medium">{item.activity}</h4>
                          <p className="text-sm text-muted-foreground">{item.location}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">{item.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Policies & Benefits */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Policies & Benefits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm">Leave Policy</span>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm">Benefits Guide</span>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm">Overtime Policy</span>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm">Safety Guidelines</span>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support & Communication */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Support & Communication
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-background rounded-lg p-4">
              <h4 className="font-medium mb-3">HR Contact Details</h4>
              <div className="space-y-2 text-sm">
                <p>📧 hr@attijariwafa.com.eg</p>
                <p>📞 +20 2 2480 5001</p>
                <p>💬 Live Chat (9 AM - 5 PM)</p>
              </div>
            </div>
            
            <Button variant="outline" className="w-full">
              View FAQs
            </Button>
            
            <Button variant="outline" className="w-full">
              Submit Feedback
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrainingOrientation;