import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  FileText, 
  Video, 
  Users, 
  Shield,
  Calendar,
  BookOpen,
  Building,
  Camera,
  FileCheck,
  Heart,
  Stethoscope,
  Printer,
  CreditCard,
  Award,
  GraduationCap,
  Briefcase,
  Upload
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: "high" | "medium" | "low";
  dueDate: string;
  estimatedTime: string;
  completed: boolean;
  icon: any;
  hasUpload?: boolean;
}

const Tasks = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Digital Photo 4x6",
      description: "Upload high-quality digital photo for business use",
      category: "Documents",
      priority: "high",
      dueDate: "Dec 5, 2024",
      estimatedTime: "10 min",
      completed: false,
      icon: Camera,
      hasUpload: true
    },
    {
      id: "2",
      title: "Computerized Birth Certificate",
      description: "Submit computerized birth certificate",
      category: "Documents",
      priority: "high",
      dueDate: "Dec 5, 2024",
      estimatedTime: "5 min",
      completed: false,
      icon: FileText
    },
    {
      id: "3",
      title: "Labour Office Registration Certificate",
      description: "Provide Labour Office Registration Certificate",
      category: "Documents",
      priority: "high",
      dueDate: "Dec 6, 2024",
      estimatedTime: "5 min",
      completed: false,
      icon: FileCheck
    },
    {
      id: "4",
      title: "Eight Passport Sized Photographs",
      description: "Submit 8 passport-sized photographs",
      category: "Documents",
      priority: "medium",
      dueDate: "Dec 6, 2024",
      estimatedTime: "10 min",
      completed: false,
      icon: Camera
    },
    {
      id: "5",
      title: "Copy of National ID/Passport",
      description: "National ID for Egyptians or Passport for Foreigners",
      category: "Documents",
      priority: "high",
      dueDate: "Dec 5, 2024",
      estimatedTime: "5 min",
      completed: false,
      icon: CreditCard
    },
    {
      id: "6",
      title: "Criminal Record Certificate",
      description: "Clean criminal record certificate from authorities",
      category: "Documents",
      priority: "high",
      dueDate: "Dec 7, 2024",
      estimatedTime: "15 min",
      completed: false,
      icon: Shield
    },
    {
      id: "7",
      title: "Military Service Certificate",
      description: "Military service certificate (Males only)",
      category: "Documents",
      priority: "medium",
      dueDate: "Dec 8, 2024",
      estimatedTime: "5 min",
      completed: false,
      icon: Award
    },
    {
      id: "8",
      title: "Academic Qualifications (Arabic)",
      description: "Academic certificates in Arabic language",
      category: "Documents",
      priority: "high",
      dueDate: "Dec 6, 2024",
      estimatedTime: "10 min",
      completed: false,
      icon: GraduationCap
    },
    {
      id: "9",
      title: "Experience Letter (3-5 years)",
      description: "Experience letter covering previous 3 years (5 for high risk roles)",
      category: "Documents",
      priority: "high",
      dueDate: "Dec 7, 2024",
      estimatedTime: "10 min",
      completed: false,
      icon: Briefcase
    },
    {
      id: "10",
      title: "Clearance Letter from Previous Employer",
      description: "Clearance letter from your previous employer",
      category: "Documents",
      priority: "high",
      dueDate: "Dec 7, 2024",
      estimatedTime: "10 min",
      completed: false,
      icon: FileCheck
    },
    {
      id: "11",
      title: "Social Insurance Form No. 6",
      description: "Social Insurance form from previous work",
      category: "Documents",
      priority: "medium",
      dueDate: "Dec 8, 2024",
      estimatedTime: "5 min",
      completed: false,
      icon: FileText
    },
    {
      id: "12",
      title: "Social Insurance Office Print Out",
      description: "Print out with period from Social Insurance Office",
      category: "Documents",
      priority: "medium",
      dueDate: "Dec 8, 2024",
      estimatedTime: "15 min",
      completed: false,
      icon: Printer
    },
    {
      id: "13",
      title: "Governmental Medical Certificate",
      description: "Medical certificate from government medical insurance (Call 19806)",
      category: "Medical",
      priority: "high",
      dueDate: "Dec 9, 2024",
      estimatedTime: "30 min",
      completed: false,
      icon: Heart
    },
    {
      id: "14",
      title: "Bank Doctor Medical Certificate",
      description: "Medical certificate from Bank Doctor (Level 4, Star Capital A1 Building)",
      category: "Medical",
      priority: "high",
      dueDate: "Dec 10, 2024",
      estimatedTime: "45 min",
      completed: false,
      icon: Stethoscope
    },
    {
      id: "15",
      title: "Marriage Certificate & Dependents",
      description: "Marriage certificate, birth certificates of dependents, and photos",
      category: "Family",
      priority: "low",
      dueDate: "Dec 12, 2024",
      estimatedTime: "15 min",
      completed: false,
      icon: Heart
    },
    {
      id: "16",
      title: "Open Staff Bank Account",
      description: "Open your staff account with Attijariwafa Bank Egypt",
      category: "Banking",
      priority: "medium",
      dueDate: "Dec 11, 2024",
      estimatedTime: "30 min",
      completed: false,
      icon: CreditCard
    }
  ]);

  const toggleTask = (taskId: string) => {
    setTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        const updatedTask = { ...task, completed: !task.completed };
        
        toast({
          title: updatedTask.completed ? "Task completed!" : "Task marked as incomplete",
          description: updatedTask.completed 
            ? `Great job completing "${task.title}"!` 
            : `"${task.title}" marked as incomplete.`,
        });
        
        return updatedTask;
      }
      return task;
    }));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "warning";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Documents": return "text-primary";
      case "Medical": return "text-success";
      case "Family": return "text-purple-600";
      case "Banking": return "text-info";
      default: return "text-muted-foreground";
    }
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
            <img 
              src="https://upload.wikimedia.org/wikipedia/ar/b/bb/Attijariwafa_bank_logo.png"
              alt="Attijariwafa Bank Egypt" 
              className="h-8 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Document Submission</h1>
              <p className="text-muted-foreground">Submit required documents for your onboarding</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Overview */}
        <Card className="bg-gradient-card shadow-card border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Progress Overview</span>
              <Badge variant="outline" className="text-primary">
                {completedTasks}/{totalTasks} completed
              </Badge>
            </CardTitle>
            <CardDescription>
              You're doing great! Keep up the momentum.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={progressPercentage} className="h-4" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">
                  {Math.round(progressPercentage)}% complete
                </span>
                <span className="font-medium text-primary">
                  {totalTasks - completedTasks} tasks remaining
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Task List */}
        <div className="space-y-4">
          {tasks.map((task) => (
            <Card 
              key={task.id} 
              className={`bg-gradient-card shadow-card border-0 transition-all duration-200 ${
                task.completed ? 'opacity-75' : 'hover:shadow-hover'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task.id)}
                    className="mt-1"
                  />
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center ${
                          task.completed ? 'opacity-50' : ''
                        }`}>
                          <task.icon className={`w-5 h-5 ${getCategoryColor(task.category)}`} />
                        </div>
                        <div>
                          <h3 className={`font-semibold ${
                            task.completed ? 'line-through text-muted-foreground' : 'text-foreground'
                          }`}>
                            {task.title}
                          </h3>
                          <p className={`text-sm mt-1 ${
                            task.completed ? 'text-muted-foreground' : 'text-muted-foreground'
                          }`}>
                            {task.description}
                          </p>
                          {task.hasUpload && (
                            <div className="mt-3">
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                id={`upload-${task.id}`}
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    console.log(`File uploaded for ${task.title}:`, file.name);
                                    // Auto-mark as completed when file is uploaded
                                    toggleTask(task.id);
                                  }
                                }}
                              />
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => document.getElementById(`upload-${task.id}`)?.click()}
                                className="mr-2"
                              >
                                <Upload className="w-4 h-4 mr-2" />
                                Upload Image
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant={getPriorityColor(task.priority) as any} className="text-xs">
                          {task.priority}
                        </Badge>
                        {task.completed && (
                          <CheckCircle className="w-5 h-5 text-success" />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Due: {task.dueDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {task.estimatedTime}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {task.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Encouragement Message */}
        {completedTasks === totalTasks && (
          <Card className="bg-gradient-primary text-white shadow-card border-0 mt-8">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Congratulations! 🎉</h3>
              <p>You've completed all your onboarding tasks. Welcome to the team!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Tasks;