import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Phone, Mail, Building, Users, Target, Heart, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WelcomeIntroduction = () => {
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
          <h1 className="text-xl font-semibold text-foreground">Welcome & Introduction</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* CEO/HR Welcome Message */}
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Welcome Message from Leadership
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-background rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Message from CEO & HR</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Welcome to Attijariwafa Bank Egypt! We are delighted to have you join our dynamic team. 
                  As you begin this exciting journey with us, you'll discover that we're more than just a bank – 
                  we're a family committed to excellence, innovation, and making a positive impact in Egypt's financial sector.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Your skills and fresh perspective will contribute to our mission of providing exceptional financial services 
                  to our clients while fostering a culture of growth, integrity, and collaboration.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Company Overview */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide innovative and comprehensive financial solutions that empower individuals 
                  and businesses across Egypt, contributing to economic growth and prosperity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the leading financial institution in Egypt, recognized for our excellence, 
                  innovation, and commitment to sustainable development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Integrity & Ethics</li>
                  <li>• Customer Excellence</li>
                  <li>• Innovation & Growth</li>
                  <li>• Teamwork & Respect</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Office Locations */}
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Office Locations & Contacts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Head Office - Cairo</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Star Capital A1 Building, City Stars, Nasr City
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      +20 2 2480 5000
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      info@attijariwafa.com.eg
                    </p>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Branch Network</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Alexandria Branch</p>
                    <p>• Giza Branch</p>
                    <p>• Heliopolis Branch</p>
                    <p>• New Administrative Capital</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company Policies */}
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Company Policies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-background rounded-lg p-4 text-center">
                  <h3 className="font-semibold mb-2">Working Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Sunday - Thursday<br/>
                    9:00 AM - 5:00 PM
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 text-center">
                  <h3 className="font-semibold mb-2">Dress Code</h3>
                  <p className="text-sm text-muted-foreground">
                    Business Formal<br/>
                    Professional Attire
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 text-center">
                  <h3 className="font-semibold mb-2">Medical Policy</h3>
                  <p className="text-sm text-muted-foreground">
                    Full Coverage<br/>
                    Family Included
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 text-center">
                  <h3 className="font-semibold mb-2">Code of Conduct</h3>
                  <p className="text-sm text-muted-foreground">
                    Ethical Standards<br/>
                    Compliance Required
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Download Full Policy Manual
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WelcomeIntroduction;