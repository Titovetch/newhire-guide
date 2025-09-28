import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlowScreen from "./pages/FlowScreen";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Equipment from "./pages/Equipment";
import Buddy from "./pages/Buddy";
import HRDashboard from "./pages/HRDashboard";
import MedicalGuide from "./pages/MedicalGuide";
import LeaverProcess from "./pages/LeaverProcess";
import WelcomeIntroduction from "./pages/WelcomeIntroduction";
import PersonalInformation from "./components/PersonalInformation";
import JobDetails from "./components/JobDetails";
import TrainingOrientation from "./components/TrainingOrientation";
import ProfileSettings from "./components/ProfileSettings";
import Jobs from "./pages/Jobs";
import JobApplication from "./pages/JobApplication";
import ApplicationSuccess from "./pages/ApplicationSuccess";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlowScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/buddy" element={<Buddy />} />
          <Route path="/hr-dashboard" element={<HRDashboard />} />
          <Route path="/medical-guide" element={<MedicalGuide />} />
          <Route path="/leaver-process" element={<LeaverProcess />} />
          <Route path="/welcome-introduction" element={<WelcomeIntroduction />} />
          <Route path="/personal-info" element={<PersonalInformation />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/training-orientation" element={<TrainingOrientation />} />
          <Route path="/settings" element={<ProfileSettings />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:jobId/apply" element={<JobApplication />} />
          <Route path="/application-success" element={<ApplicationSuccess />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
