import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, Mail, Phone, Home } from "lucide-react";

const ApplicationSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { jobTitle, applicantName, applicationId } = location.state || {
    jobTitle: "Position",
    applicantName: "Candidate",
    applicationId: "APP-" + Date.now()
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/ar/b/bb/Attijariwafa_bank_logo.png"
              alt="Attijariwafa Bank"
              className="h-10 w-auto"
            />
            <h1 className="text-2xl font-bold text-foreground">Attijariwafa Bank Egypt</h1>
          </div>
        </div>

        {/* Success Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-card shadow-card border-0 text-center">
            <CardHeader className="pb-4">
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <CardTitle className="text-2xl text-foreground">
                Application Submitted Successfully!
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                <p className="text-sm text-muted-foreground">Application ID</p>
                <p className="font-bold text-lg text-foreground">{applicationId}</p>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-2">Application Details</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-muted-foreground">Applicant:</span> <span className="font-medium">{applicantName}</span></p>
                    <p><span className="text-muted-foreground">Position:</span> <span className="font-medium">{jobTitle}</span></p>
                    <p><span className="text-muted-foreground">Submitted:</span> <span className="font-medium">{new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span></p>
                  </div>
                </div>
                
                <div className="bg-info/10 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    What Happens Next?
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      Our HR team will review your application within 5-7 business days
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      If shortlisted, we'll contact you to schedule an interview
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      Keep your phone and email accessible for updates
                    </li>
                  </ul>
                </div>
                
                <div className="bg-warning/10 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Important Notice
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Please save your Application ID ({applicationId}) for future reference. 
                    You may need it when following up on your application status.
                  </p>
                </div>
              </div>
              
              <div className="pt-4 space-y-3">
                <Button 
                  onClick={() => navigate('/jobs')}
                  variant="gradient"
                  size="lg"
                  className="w-full"
                >
                  Browse More Jobs
                </Button>
                
                <Button 
                  onClick={() => navigate('/')}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Return to Home
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="text-center mt-8 space-y-2">
            <p className="text-muted-foreground text-sm">
              Questions about your application?
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <a 
                href="mailto:HR@attijariwafabank.com.eg" 
                className="flex items-center gap-1 text-primary hover:underline"
              >
                <Mail className="w-4 h-4" />
                HR@attijariwafabank.com.eg
              </a>
              <a 
                href="tel:+20222222222" 
                className="flex items-center gap-1 text-primary hover:underline"
              >
                <Phone className="w-4 h-4" />
                +20 2 2222 2222
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSuccess;