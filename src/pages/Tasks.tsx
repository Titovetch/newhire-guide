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
  Building
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
}

const Tasks = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Complete Employee Information Form",
      description: "Fill out personal details, emergency contacts, and banking information",
      category: "Documentation",
      priority: "high",
      dueDate: "Dec 2, 2024",
      estimatedTime: "15 min",
      completed: true,
      icon: FileText
    },
    {
      id: "2",
      title: "Watch Compliance Training Video",
      description: "Complete mandatory compliance and ethics training module",
      category: "Training",
      priority: "high",
      dueDate: "Dec 3, 2024",
      estimatedTime: "45 min",
      completed: true,
      icon: Video
    },
    {
      id: "3",
      title: "Attend IT Setup Meeting",
      description: "Meet with IT team to configure your workstation and accounts",
      category: "Setup",
      priority: "high",
      dueDate: "Dec 3, 2024",
      estimatedTime: "30 min",
      completed: true,
      icon: Building
    },
    {
      id: "4",
      title: "Complete Security Training",
      description: "Learn about bank security protocols and data protection",
      category: "Training",
      priority: "high",
      dueDate: "Dec 4, 2024",
      estimatedTime: "60 min",
      completed: false,
      icon: Shield
    },
    {
      id: "5",
      title: "Schedule Team Introduction Meeting",
      description: "Meet your team members and understand your role",
      category: "Social",
      priority: "medium",
      dueDate: "Dec 5, 2024",
      estimatedTime: "30 min",
      completed: false,
      icon: Users
    },
    {
      id: "6",
      title: "Read Employee Handbook",
      description: "Review company policies, benefits, and procedures",
      category: "Documentation",
      priority: "medium",
      dueDate: "Dec 6, 2024",
      estimatedTime: "90 min",
      completed: false,
      icon: BookOpen
    },
    {
      id: "7",
      title: "Set Up Direct Deposit",
      description: "Configure your payroll and direct deposit information",
      category: "Administrative",
      priority: "medium",
      dueDate: "Dec 6, 2024",
      estimatedTime: "10 min",
      completed: false,
      icon: FileText
    },
    {
      id: "8",
      title: "Complete First Week Check-in",
      description: "Meet with HR to discuss your first week experience",
      category: "Administrative",
      priority: "low",
      dueDate: "Dec 9, 2024",
      estimatedTime: "20 min",
      completed: false,
      icon: Calendar
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
      case "Training": return "text-info";
      case "Documentation": return "text-primary";
      case "Setup": return "text-success";
      case "Social": return "text-purple-600";
      case "Administrative": return "text-orange-600";
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
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">My Tasks</h1>
              <p className="text-muted-foreground">Complete your onboarding checklist</p>
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