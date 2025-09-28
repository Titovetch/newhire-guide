import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Lock, CreditCard, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const Login = () => {
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const validateNationalId = (id: string) => {
    // Remove any spaces or dashes
    const cleanId = id.replace(/[\s-]/g, '');
    // Check if it's exactly 14 digits
    return /^\d{14}$/.test(cleanId);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateNationalId(nationalId)) {
      toast({
        title: "Invalid National ID",
        description: "National ID must be exactly 14 digits",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Mock authentication - hardcoded credentials
    if (nationalId === "12345678901234" && password === "welcome123") {
      setTimeout(() => {
        toast({
          title: "Welcome to HR Platform!",
          description: "Successfully logged in to Attijariwafa Bank Egypt onboarding",
        });
        navigate("/dashboard");
      }, 1000);
    } else {
      setTimeout(() => {
        toast({
          title: "Login failed",
          description: "Invalid credentials. Use National ID: 12345678901234 / Password: welcome123",
          variant: "destructive",
        });
        setIsLoading(false);
      }, 1000);
    }
  };

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gradient-warm flex flex-col">
        {/* Mobile App Header */}
        <div className="safe-area-top px-6 pt-4 pb-2">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="p-2 h-auto text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Branding Section */}
        <div className="px-6 pt-8 pb-12 text-center">
          <div className="mx-auto mb-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/ar/b/bb/Attijariwafa_bank_logo.png"
              alt="Attijariwafa Bank Egypt" 
              className="h-20 w-auto object-contain mx-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground text-lg">
            Attijariwafa Bank Egypt Onboarding
          </p>
        </div>

        {/* Mobile Form */}
        <div className="flex-1 px-6">
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-4">
              <Label htmlFor="nationalId" className="text-base font-medium text-foreground">
                National ID
              </Label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                <Input
                  id="nationalId"
                  type="text"
                  placeholder="Enter 14-digit National ID"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value.replace(/\D/g, '').slice(0, 14))}
                  className="pl-12 h-14 text-base bg-background border-2 border-border focus:border-primary"
                  required
                  maxLength={14}
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="password" className="text-base font-medium text-foreground">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 h-14 text-base bg-background border-2 border-border focus:border-primary"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="gradient"
              className="w-full h-14 text-lg font-semibold mt-8"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Demo Credentials for Mobile */}
          <div className="mt-8 p-6 bg-accent/50 rounded-2xl">
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              <strong className="text-foreground">Demo Credentials:</strong><br />
              National ID: 12345678901234<br />
              Password: welcome123
            </p>
          </div>

          <div className="h-8" />
        </div>
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gradient-card shadow-card rounded-lg border-0 p-8">
        {/* Desktop Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Desktop Header */}
        <div className="text-center space-y-4 mb-8">
              <img 
                src="https://upload.wikimedia.org/wikipedia/ar/b/bb/Attijariwafa_bank_logo.png"
            alt="Attijariwafa Bank Egypt" 
            className="h-16 w-auto object-contain mx-auto"
          />
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Welcome Back</h1>
            <p className="text-muted-foreground">
              Attijariwafa Bank Egypt Onboarding
            </p>
          </div>
        </div>

        {/* Desktop Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nationalId" className="text-sm font-medium">
              National ID
            </Label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="nationalId"
                type="text"
                placeholder="Enter 14-digit National ID"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value.replace(/\D/g, '').slice(0, 14))}
                className="pl-10"
                required
                maxLength={14}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="gradient"
            size="lg"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-accent rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Demo Credentials:</strong><br />
            National ID: 12345678901234<br />
            Password: welcome123
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;