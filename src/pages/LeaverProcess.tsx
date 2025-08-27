import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  UserMinus, 
  FileText, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  Mail,
  Phone,
  Building,
  CreditCard,
  Package,
  Key,
  Briefcase,
  Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import bankLogo from "@/assets/attijariwafa-bank-logo.png";

const LeaverProcess = () => {
  const navigate = useNavigate();

  const leaverSteps = [
    {
      step: 1,
      title: "Resignation Letter Submission",
      description: "Submit formal resignation letter to your line manager",
      timeframe: "As early as possible",
      responsible: "Employee",
      documents: ["Resignation Letter", "Notice Period Confirmation"],
      icon: FileText,
      status: "required"
    },
    {
      step: 2,
      title: "HR Notification & Processing",
      description: "HR department processes resignation and initiates leaver procedures",
      timeframe: "Within 2 business days",
      responsible: "HR Department",
      documents: ["Exit Interview Scheduling", "Clearance Form"],
      icon: Users,
      status: "automated"
    },
    {
      step: 3,
      title: "Handover Documentation",
      description: "Complete handover of responsibilities and ongoing projects",
      timeframe: "During notice period",
      responsible: "Employee & Line Manager",
      documents: ["Handover Report", "Project Status Updates"],
      icon: Briefcase,
      status: "required"
    },
    {
      step: 4,
      title: "IT Equipment Return",
      description: "Return all company equipment and access credentials",
      timeframe: "Last working day",
      responsible: "Employee & IT Department",
      documents: ["Equipment Return Form", "Access Deactivation"],
      icon: Package,
      status: "required"
    },
    {
      step: 5,
      title: "Financial Settlement",
      description: "Final salary, benefits calculation, and clearance",
      timeframe: "Within 30 days",
      responsible: "Finance & HR",
      documents: ["Final Settlement Statement", "Tax Clearance"],
      icon: CreditCard,
      status: "automated"
    },
    {
      step: 6,
      title: "Exit Interview",
      description: "Feedback session with HR about your experience",
      timeframe: "Last week of employment",
      responsible: "HR Department",
      documents: ["Exit Interview Form", "Feedback Survey"],
      icon: Users,
      status: "required"
    }
  ];

  const equipmentReturn = [
    "Laptop/Desktop Computer",
    "Mobile Phone & SIM Card",
    "Access Cards & Keys",
    "Company Vehicle (if applicable)",
    "Office Stationery",
    "Company Credit Cards",
    "Uniform/Company Branded Items",
    "Any Confidential Documents"
  ];

  const contactInfo = [
    {
      department: "HR Department",
      contact: "hr@attijariwafa-bank.com.eg",
      phone: "+20 2 2617 3000",
      icon: Users
    },
    {
      department: "IT Support",
      contact: "it-support@attijariwafa-bank.com.eg",
      phone: "+20 2 2617 3100",
      icon: Building
    },
    {
      department: "Finance Department",
      contact: "finance@attijariwafa-bank.com.eg",
      phone: "+20 2 2617 3200",
      icon: CreditCard
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "required": return "warning";
      case "automated": return "info";
      default: return "secondary";
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
              src={bankLogo} 
              alt="Attijariwafa Bank Egypt" 
              className="h-8 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Leaver Process</h1>
              <p className="text-muted-foreground">Complete guide for resignation procedures</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Overview */}
        <Card className="bg-gradient-card shadow-card border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserMinus className="w-5 h-5 text-primary" />
              Resignation Process Overview
            </CardTitle>
            <CardDescription>
              Follow these steps to ensure a smooth transition when leaving Attijariwafa Bank Egypt
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-warning/10 rounded-lg">
                <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Notice Period</h4>
                <p className="text-sm text-muted-foreground">Minimum 30 days notice required</p>
              </div>
              <div className="text-center p-4 bg-info/10 rounded-lg">
                <Clock className="w-8 h-8 text-info mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Processing Time</h4>
                <p className="text-sm text-muted-foreground">2-5 business days for completion</p>
              </div>
              <div className="text-center p-4 bg-success/10 rounded-lg">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Final Settlement</h4>
                <p className="text-sm text-muted-foreground">Within 30 days of last working day</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Steps */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Step-by-Step Process</h2>
          <div className="space-y-6">
            {leaverSteps.map((step, index) => (
              <Card key={index} className="bg-gradient-card shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <step.icon className="w-5 h-5" />
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground mt-1">{step.description}</p>
                        </div>
                        <Badge variant={getStatusColor(step.status) as any} className="ml-2">
                          {step.status}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div>
                          <h4 className="font-medium text-foreground mb-1">Timeframe</h4>
                          <p className="text-sm text-muted-foreground">{step.timeframe}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">Responsible</h4>
                          <p className="text-sm text-muted-foreground">{step.responsible}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">Documents</h4>
                          <div className="flex flex-wrap gap-1">
                            {step.documents.map((doc, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {doc}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Equipment Return Checklist */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Equipment Return Checklist
              </CardTitle>
              <CardDescription>
                Ensure all company property is returned before your last day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {equipmentReturn.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-accent rounded">
                    <Key className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Contact Information
              </CardTitle>
              <CardDescription>
                Get help with your resignation process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="p-3 bg-accent rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <contact.icon className="w-4 h-4 text-primary" />
                      <h4 className="font-medium text-foreground">{contact.department}</h4>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground ml-6">
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3" />
                        <span>{contact.contact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        <span>{contact.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notice */}
        <Card className="bg-warning/10 border-warning/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Important Notice</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Please ensure all steps are completed before your last working day. Failure to complete the leaver process 
                  may result in delays in final settlement payments or other complications.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Download Resignation Template
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact HR
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

export default LeaverProcess;