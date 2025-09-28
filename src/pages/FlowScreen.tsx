import { WelcomeCard } from "@/components/WelcomeCard";
import { useNavigate } from "react-router-dom";

const FlowScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-primary bg-clip-text text-transparent">
              <h1 className="text-4xl md:text-5xl font-bold">HR Onboarding Platform</h1>
            </div>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive HR platform for employee onboarding and recruitment at Attijariwafa Bank Egypt.
            Choose your access level to begin your journey.
          </p>
        </div>

        {/* Welcome Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <WelcomeCard
            title="New Employee Login"
            description="Access your personalized onboarding dashboard, track your progress, and connect with your assigned buddy."
            icon="user"
            onClick={() => navigate('/login')}
          />
          
          <WelcomeCard
            title="HR Dashboard"
            description="Monitor onboarding progress across all new hires, manage tasks, and track equipment delivery status."
            icon="hr"
            onClick={() => navigate('/hr-dashboard')}
          />
          
          <WelcomeCard
            title="Join Attijariwafa Bank"
            description="Explore exciting career opportunities and apply for positions at Egypt's leading banking institution."
            icon="jobs"
            onClick={() => navigate('/jobs')}
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm">
            Need help? Contact HR at{" "}
            <a href="mailto:HR@attijariwafabank.com.eg" className="text-primary hover:underline">
              HR@attijariwafabank.com.eg
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlowScreen;