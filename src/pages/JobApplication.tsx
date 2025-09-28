import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { JobApplicationForm } from "@/components/JobApplicationForm";
import { jobsData } from "@/data/jobs";
import { ArrowLeft, MapPin, Clock, DollarSign, Calendar, CheckCircle, Users, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const JobApplication = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const job = jobsData.find(j => j.id === jobId);

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-warm flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Job Not Found</h1>
          <Button onClick={() => navigate('/jobs')}>Browse All Jobs</Button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted Successfully!",
      description: `Thank you for applying to ${job.title}. We'll review your application and get back to you within 5-7 business days.`,
      duration: 6000,
    });
    
    setIsSubmitting(false);
    navigate('/application-success', { 
      state: { 
        jobTitle: job.title, 
        applicantName: data.name,
        applicationId: `APP-${Date.now()}` 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/jobs')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Jobs
          </Button>
          
          <div className="flex items-center gap-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/ar/b/bb/Attijariwafa_bank_logo.png"
              alt="Attijariwafa Bank"
              className="h-8 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Job Application</h1>
              <p className="text-sm text-muted-foreground">Attijariwafa Bank Egypt</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Details */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <div className="space-y-2">
                  <CardTitle className="text-xl text-foreground">{job.title}</CardTitle>
                  <Badge variant="secondary">{job.department}</Badge>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    {job.salary}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Experience: {job.experience}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Job Description
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Key Requirements
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {job.requirements.slice(0, 4).map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Benefits
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {job.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <JobApplicationForm
              jobTitle={job.title}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm">
            Need assistance with your application? Contact HR at{" "}
            <a href="mailto:HR@attijariwafabank.com.eg" className="text-primary hover:underline">
              HR@attijariwafabank.com.eg
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;