import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Heart, 
  Phone, 
  MapPin, 
  Clock, 
  FileText,
  Download,
  ExternalLink,
  Shield,
  Stethoscope,
  Building,
  Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import bankLogo from "@/assets/attijariwafa-bank-logo.png";

const MedicalGuide = () => {
  const navigate = useNavigate();

  const medicalProviders = [
    {
      name: "Prime Medical Network",
      type: "Primary Healthcare",
      address: "New Cairo Medical Center, 5th Settlement",
      phone: "+20 2 2617 4000",
      workingHours: "24/7 Emergency, 8AM-8PM Regular",
      coverage: "Full Coverage",
      specialties: ["General Practice", "Internal Medicine", "Emergency Care"]
    },
    {
      name: "Cairo Specialized Hospital",
      type: "Specialized Care",
      address: "Zamalek, Cairo",
      phone: "+20 2 2735 8000",
      workingHours: "8AM-6PM",
      coverage: "80% Coverage",
      specialties: ["Cardiology", "Orthopedics", "Neurology", "Oncology"]
    },
    {
      name: "Egyptian Dental Clinic",
      type: "Dental Care",
      address: "Heliopolis, Cairo",
      phone: "+20 2 2414 5000",
      workingHours: "9AM-7PM",
      coverage: "70% Coverage",
      specialties: ["General Dentistry", "Orthodontics", "Oral Surgery"]
    }
  ];

  const policies = [
    {
      title: "Medical Insurance Policy",
      description: "Complete coverage details and claim procedures",
      type: "Policy Document",
      icon: Shield
    },
    {
      title: "Emergency Procedures Guide",
      description: "Step-by-step guide for medical emergencies",
      type: "Emergency Guide",
      icon: Heart
    },
    {
      title: "Maternity & Family Benefits",
      description: "Coverage for pregnancy, childbirth, and family care",
      type: "Benefits Guide",
      icon: Users
    },
    {
      title: "Mental Health Support",
      description: "Resources for mental health and wellness programs",
      type: "Wellness Guide",
      icon: Stethoscope
    }
  ];

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
              <h1 className="text-2xl font-bold text-foreground">Medical Network Guide</h1>
              <p className="text-muted-foreground">Healthcare policies and medical network information</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Overview Card */}
        <Card className="bg-gradient-card shadow-card border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Your Medical Benefits Overview
            </CardTitle>
            <CardDescription>
              Attijariwafa Bank Egypt provides comprehensive medical coverage for all employees and their families
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-accent rounded-lg">
                <h4 className="font-semibold text-foreground">Coverage</h4>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Employee Coverage</p>
              </div>
              <div className="text-center p-4 bg-accent rounded-lg">
                <h4 className="font-semibold text-foreground">Family</h4>
                <p className="text-2xl font-bold text-primary">80%</p>
                <p className="text-sm text-muted-foreground">Spouse & Children</p>
              </div>
              <div className="text-center p-4 bg-accent rounded-lg">
                <h4 className="font-semibold text-foreground">Emergency</h4>
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Emergency Care</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Network */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Approved Medical Network</h2>
          <div className="grid gap-6">
            {medicalProviders.map((provider, index) => (
              <Card key={index} className="bg-gradient-card shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{provider.name}</h3>
                      <Badge variant="outline" className="mt-1">{provider.type}</Badge>
                    </div>
                    <Badge 
                      variant={provider.coverage === "Full Coverage" ? "success" : "warning"}
                      className="ml-2"
                    >
                      {provider.coverage}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{provider.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <span>{provider.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{provider.workingHours}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-1">
                        {provider.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Building className="w-4 h-4 mr-2" />
                      View Location
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Policies & Documents */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Medical Policies & Documents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {policies.map((policy, index) => (
              <Card key={index} className="bg-gradient-card shadow-card border-0 hover:shadow-hover transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                      <policy.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{policy.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{policy.description}</p>
                      <Badge variant="outline" className="text-xs mb-3">{policy.type}</Badge>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Online
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="bg-destructive text-destructive-foreground border-0">
          <CardContent className="p-6">
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Medical Emergency</h3>
              <p className="mb-4">For immediate medical assistance, contact our 24/7 emergency hotline</p>
              <Button variant="secondary" size="lg" className="text-lg">
                <Phone className="w-5 h-5 mr-2" />
                19806 (Emergency Hotline)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MedicalGuide;