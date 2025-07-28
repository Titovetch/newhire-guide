import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Lock, Mail, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock authentication - hardcoded credentials
    if (email === "john.doe@bank.com" && password === "welcome123") {
      setTimeout(() => {
        toast({
          title: "Welcome aboard!",
          description: "Successfully logged in. Redirecting to your dashboard...",
        });
        navigate("/dashboard");
      }, 1000);
    } else {
      setTimeout(() => {
        toast({
          title: "Login failed",
          description: "Invalid credentials. Use john.doe@bank.com / welcome123",
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
          <div className="mx-auto w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
            <Building2 className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground text-lg">
            Sign in to access your onboarding dashboard
          </p>
        </div>

        {/* Mobile Form */}
        <div className="flex-1 px-6">
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-4">
              <Label htmlFor="email" className="text-base font-medium text-foreground">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@bank.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 text-base bg-background border-2 border-border focus:border-primary"
                  required
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
              Email: john.doe@bank.com<br />
              Password: welcome123
            </p>
          </div>

          <div className="h-8" />
        </div>
      </div>
    );
  }

  // Desktop Layout (Mobile App Frame Design)
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

      {/* Mobile App Branding Section */}
      <div className="px-6 pt-8 pb-12 text-center">
        <div className="mx-auto w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
          <Building2 className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
        <p className="text-muted-foreground text-lg">
          Sign in to access your onboarding dashboard
        </p>
      </div>

      {/* Mobile App Form */}
      <div className="flex-1 px-6">
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-4">
            <Label htmlFor="email" className="text-base font-medium text-foreground">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="john.doe@bank.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 h-14 text-base bg-background border-2 border-border focus:border-primary"
                required
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

        {/* Demo Credentials */}
        <div className="mt-8 p-6 bg-accent/50 rounded-2xl">
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            <strong className="text-foreground">Demo Credentials:</strong><br />
            Email: john.doe@bank.com<br />
            Password: welcome123
          </p>
        </div>

        <div className="h-8" />
      </div>
    </div>
  );
};

export default Login;