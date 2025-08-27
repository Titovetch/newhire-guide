import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Check, 
  CreditCard, 
  MapPin, 
  Calendar,
  DollarSign,
  Building,
  PenTool,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <div className="bg-white/50 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <img 
            src="https://upload.wikimedia.org/wikipedia/ar/b/bb/Attijariwafa_bank_logo.png"
            alt="Attijariwafa Bank Egypt" 
            className="h-8 w-auto object-contain"
          />
          <h1 className="text-xl font-semibold text-foreground">Job Details</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Job Offer & Contract */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Job Offer & Contract
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-background rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">Job Offer Letter</span>
                <div className="flex items-center gap-2">
                  <Badge variant="success">Available</Badge>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
              <Button variant="default" size="sm" className="w-full">
                <Check className="w-4 h-4 mr-2" />
                Accept Offer Digitally
              </Button>
            </div>

            <div className="bg-background rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">Work Contract</span>
                <Badge variant="warning">Pending Signature</Badge>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <PenTool className="w-4 h-4 mr-2" />
                Digital Signature Required
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Position Details */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              Position Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Role:</span>
                <span className="font-medium">Junior Financial Analyst</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Department:</span>
                <span className="font-medium">Investment Banking</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Manager:</span>
                <span className="font-medium">Ahmed Hassan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Work Location:</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">Cairo Head Office</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Start Date:</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">December 2, 2024</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bank Account & Payroll */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              Bank Account & Payroll
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-background rounded-lg p-4 space-y-3">
              <h4 className="font-medium">Staff Bank Account</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account Status:</span>
                  <Badge variant="warning">Pending Setup</Badge>
                </div>
                <Button variant="default" size="sm" className="w-full">
                  Open Staff Account
                </Button>
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 space-y-3">
              <h4 className="font-medium">Payroll Preferences</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Currency:</span>
                  <span className="font-medium">EGP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Frequency:</span>
                  <span className="font-medium">Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payslip Access:</span>
                  <Badge variant="secondary">Available Soon</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compensation & Benefits */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              Compensation & Benefits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-background rounded-lg p-4">
              <h4 className="font-medium mb-3">Benefits Package</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-success" />
                  Medical Insurance (Full Coverage)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-success" />
                  Annual Leave (21 days)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-success" />
                  Social Insurance
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-success" />
                  Performance Bonus
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-success" />
                  Professional Development Fund
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;