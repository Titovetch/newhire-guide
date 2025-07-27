import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Package, 
  Laptop, 
  Phone, 
  CreditCard,
  CheckCircle,
  Truck,
  Clock,
  MapPin,
  Calendar,
  AlertCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EquipmentItem {
  id: string;
  name: string;
  description: string;
  status: "processing" | "shipped" | "ready" | "delivered";
  icon: any;
  estimatedDelivery: string;
  trackingNumber?: string;
  location?: string;
  progress: number;
}

const Equipment = () => {
  const navigate = useNavigate();
  
  const [equipment] = useState<EquipmentItem[]>([
    {
      id: "1",
      name: "MacBook Pro 14-inch",
      description: "M3 Pro chip, 16GB RAM, 512GB SSD with pre-installed banking software",
      status: "ready",
      icon: Laptop,
      estimatedDelivery: "Ready for pickup",
      location: "IT Department, Floor 5",
      progress: 100
    },
    {
      id: "2",
      name: "Cisco IP Phone 8851",
      description: "VoIP desk phone with headset and conference capabilities",
      status: "shipped",
      icon: Phone,
      estimatedDelivery: "Dec 4, 2024",
      trackingNumber: "AWB12345678",
      location: "Out for delivery",
      progress: 75
    },
    {
      id: "3",
      name: "Security Access Card",
      description: "Building access card with department-specific permissions",
      status: "processing",
      icon: CreditCard,
      estimatedDelivery: "Dec 5, 2024",
      location: "Security Office",
      progress: 25
    }
  ]);

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "processing":
        return {
          label: "Processing",
          variant: "secondary" as const,
          color: "text-muted-foreground",
          icon: Clock
        };
      case "shipped":
        return {
          label: "Shipped",
          variant: "warning" as const,
          color: "text-warning",
          icon: Truck
        };
      case "ready":
        return {
          label: "Ready for Pickup",
          variant: "success" as const,
          color: "text-success",
          icon: CheckCircle
        };
      case "delivered":
        return {
          label: "Delivered",
          variant: "success" as const,
          color: "text-success",
          icon: CheckCircle
        };
      default:
        return {
          label: "Unknown",
          variant: "secondary" as const,
          color: "text-muted-foreground",
          icon: AlertCircle
        };
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "ready":
      case "delivered":
        return "bg-success";
      case "shipped":
        return "bg-warning";
      default:
        return "bg-primary";
    }
  };

  const completedItems = equipment.filter(item => item.status === "ready" || item.status === "delivered").length;
  const totalItems = equipment.length;
  const overallProgress = (completedItems / totalItems) * 100;

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
              <Package className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Equipment Tracker</h1>
              <p className="text-muted-foreground">Track your work equipment delivery status</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overall Progress */}
        <Card className="bg-gradient-card shadow-card border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Equipment Overview</span>
              <Badge variant="outline" className="text-primary">
                {completedItems}/{totalItems} ready
              </Badge>
            </CardTitle>
            <CardDescription>
              Track the status of all your work equipment in real-time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={overallProgress} className="h-4" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">
                  {Math.round(overallProgress)}% of equipment ready
                </span>
                <span className="font-medium text-primary">
                  {totalItems - completedItems} items pending
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Equipment Items */}
        <div className="space-y-6">
          {equipment.map((item) => {
            const statusInfo = getStatusInfo(item.status);
            const StatusIcon = statusInfo.icon;
            
            return (
              <Card key={item.id} className="bg-gradient-card shadow-card border-0 hover:shadow-hover transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        </div>
                        
                        <Badge variant={statusInfo.variant} className="flex items-center gap-1">
                          <StatusIcon className="w-3 h-3" />
                          {statusInfo.label}
                        </Badge>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Progress</span>
                          <span>{item.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(item.status)}`}
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                      
                      {/* Details */}
                      <div className="grid md:grid-cols-2 gap-4 pt-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{item.estimatedDelivery}</span>
                        </div>
                        
                        {item.location && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                        )}
                        
                        {item.trackingNumber && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground md:col-span-2">
                            <Package className="w-4 h-4" />
                            <span>Tracking: {item.trackingNumber}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Action Buttons */}
                      {item.status === "ready" && (
                        <div className="pt-2">
                          <Button variant="gradient" size="sm">
                            Schedule Pickup
                          </Button>
                        </div>
                      )}
                      
                      {item.status === "shipped" && item.trackingNumber && (
                        <div className="pt-2">
                          <Button variant="outline" size="sm">
                            Track Package
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Help Section */}
        <Card className="bg-accent border-0 mt-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-info mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  If you have questions about your equipment delivery or need to report an issue, contact our IT support team.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Contact IT Support
                  </Button>
                  <Button variant="ghost" size="sm">
                    View FAQ
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

export default Equipment;