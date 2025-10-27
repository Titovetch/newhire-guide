import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  ArrowLeft, 
  Users, 
  CheckCircle, 
  Clock, 
  Package,
  TrendingUp,
  AlertTriangle,
  Calendar,
  Filter,
  Download,
  Search,
  Plus,
  FileText,
  BarChart3
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import CreateNewStaff from "@/components/CreateNewStaff";

interface NewHire {
  id: string;
  name: string;
  position: string;
  department: string;
  startDate: string;
  avatar: string;
  tasksCompleted: number;
  totalTasks: number;
  equipmentStatus: "pending" | "partial" | "complete";
  buddyAssigned: boolean;
  status: "on-track" | "needs-attention" | "at-risk";
}

const HRDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showCreateStaff, setShowCreateStaff] = useState(false);
  
  const [newHires, setNewHires] = useState<NewHire[]>([
    {
      id: "1",
      name: "Ahmed Tawfik",
      position: "Head of Digital Products and Innovation",
      department: "Digital Banking",
      startDate: "Dec 2, 2024",
      avatar: "/api/placeholder/40/40",
      tasksCompleted: 3,
      totalTasks: 8,
      equipmentStatus: "partial",
      buddyAssigned: true,
      status: "on-track"
    },
    {
      id: "2",
      name: "Emily Rodriguez",
      position: "Credit Risk Analyst",
      department: "Risk Management",
      startDate: "Nov 28, 2024",
      avatar: "/api/placeholder/40/40",
      tasksCompleted: 7,
      totalTasks: 8,
      equipmentStatus: "complete",
      buddyAssigned: true,
      status: "on-track"
    },
    {
      id: "3",
      name: "Michael Kim",
      position: "Software Developer",
      department: "IT",
      startDate: "Dec 1, 2024",
      avatar: "/api/placeholder/40/40",
      tasksCompleted: 2,
      totalTasks: 8,
      equipmentStatus: "pending",
      buddyAssigned: false,
      status: "needs-attention"
    },
    {
      id: "4",
      name: "Sarah Johnson",
      position: "Compliance Officer",
      department: "Legal & Compliance",
      startDate: "Nov 25, 2024",
      avatar: "/api/placeholder/40/40",
      tasksCompleted: 8,
      totalTasks: 8,
      equipmentStatus: "complete",
      buddyAssigned: true,
      status: "on-track"
    }
  ]);

  const handleCreateStaff = (newStaff: any) => {
    setNewHires(prev => [...prev, newStaff]);
  };

  const generateReport = (type: string) => {
    toast({
      title: "Generating Report",
      description: `${type} report is being generated and will be available for download shortly.`,
    });
    
    // Mock report generation
    setTimeout(() => {
      toast({
        title: "Report Ready",
        description: `${type} report has been generated successfully.`,
      });
    }, 2000);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "on-track":
        return <Badge variant="success" className="text-xs">On Track</Badge>;
      case "needs-attention":
        return <Badge variant="warning" className="text-xs">Needs Attention</Badge>;
      case "at-risk":
        return <Badge variant="destructive" className="text-xs">At Risk</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs">Unknown</Badge>;
    }
  };

  const getEquipmentStatusBadge = (status: string) => {
    switch (status) {
      case "complete":
        return <Badge variant="success" className="text-xs">Complete</Badge>;
      case "partial":
        return <Badge variant="warning" className="text-xs">Partial</Badge>;
      case "pending":
        return <Badge variant="secondary" className="text-xs">Pending</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs">Unknown</Badge>;
    }
  };

  const totalHires = newHires.length;
  const onTrackHires = newHires.filter(hire => hire.status === "on-track").length;
  const needsAttentionHires = newHires.filter(hire => hire.status === "needs-attention").length;
  const averageProgress = Math.round(
    newHires.reduce((sum, hire) => sum + (hire.tasksCompleted / hire.totalTasks) * 100, 0) / totalHires
  );

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <div className="bg-white/50 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/ar/b/bb/Attijariwafa_bank_logo.png"
                alt="Attijariwafa Bank Egypt" 
                className="h-8 w-auto object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-foreground">HR Dashboard</h1>
                <p className="text-muted-foreground">Monitor new hire onboarding progress</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button onClick={() => setShowCreateStaff(true)} className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Create New Staff
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total New Hires</p>
                  <p className="text-2xl font-bold text-foreground">{totalHires}</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">On Track</p>
                  <p className="text-2xl font-bold text-success">{onTrackHires}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Need Attention</p>
                  <p className="text-2xl font-bold text-warning">{needsAttentionHires}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Avg. Progress</p>
                  <p className="text-2xl font-bold text-primary">{averageProgress}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* New Hires List */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>New Hire Progress</CardTitle>
                <CardDescription>Track onboarding status for all new employees</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {newHires.map((hire) => (
                <div 
                  key={hire.id} 
                  className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={hire.avatar} alt={hire.name} />
                    <AvatarFallback className="bg-gradient-primary text-white">
                      {hire.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{hire.name}</h4>
                        <p className="text-sm text-muted-foreground">{hire.position} • {hire.department}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(hire.status)}
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          Started {hire.startDate}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mt-3">
                      {/* Task Progress */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Tasks</span>
                          <span className="font-medium">{hire.tasksCompleted}/{hire.totalTasks}</span>
                        </div>
                        <Progress 
                          value={(hire.tasksCompleted / hire.totalTasks) * 100} 
                          className="h-2" 
                        />
                      </div>

                      {/* Equipment Status */}
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Equipment:</span>
                        {getEquipmentStatusBadge(hire.equipmentStatus)}
                      </div>

                      {/* Buddy Status */}
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Buddy:</span>
                        {hire.buddyAssigned ? (
                          <Badge variant="success" className="text-xs">Assigned</Badge>
                        ) : (
                          <Badge variant="secondary" className="text-xs">Pending</Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {hire.status === "needs-attention" && (
                      <Button variant="warning" size="sm">
                        Take Action
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => setShowCreateStaff(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Hire
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Package className="w-4 h-4 mr-2" />
                Update Equipment Status
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Check-ins
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Sarah Johnson completed all tasks</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-warning" />
                <span>Ahmed Tawfik's laptop ready for pickup</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-warning" />
                <span>Michael Kim needs buddy assignment</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Reports & Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => generateReport("Weekly Progress")}
              >
                <Download className="w-4 h-4 mr-2" />
                Weekly Progress Report
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => generateReport("Onboarding Analytics")}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Onboarding Analytics
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => generateReport("Time to Productivity")}
              >
                <Clock className="w-4 h-4 mr-2" />
                Time to Productivity
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => generateReport("Equipment Distribution")}
              >
                <Package className="w-4 h-4 mr-2" />
                Equipment Distribution
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Create New Staff Modal */}
      {showCreateStaff && (
        <CreateNewStaff 
          onClose={() => setShowCreateStaff(false)}
          onStaffCreated={handleCreateStaff}
        />
      )}
    </div>
  );
};

export default HRDashboard;