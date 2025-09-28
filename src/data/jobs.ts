export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  posted: string;
}

export const jobsData: Job[] = [
  {
    id: "branch-manager-cairo",
    title: "Branch Manager",
    department: "Retail Banking",
    location: "Cairo, Egypt",
    type: "Full-time",
    experience: "5-8 years",
    salary: "EGP 25,000 - 35,000",
    description: "Lead and manage all branch operations, ensuring exceptional customer service and business growth while maintaining compliance with banking regulations.",
    requirements: [
      "Bachelor's degree in Business, Finance, or related field",
      "5+ years of banking experience with 2+ years in management",
      "Strong leadership and team management skills",
      "Excellent communication skills in Arabic and English",
      "Knowledge of Egyptian banking regulations",
      "Proven track record in sales and customer relationship management"
    ],
    responsibilities: [
      "Oversee daily branch operations and staff management",
      "Drive business development and customer acquisition",
      "Ensure compliance with banking policies and regulations",
      "Manage branch budget and financial performance",
      "Handle escalated customer issues and complaints",
      "Develop and implement sales strategies"
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance for employee and family",
      "Annual performance bonus",
      "Professional development opportunities",
      "Transportation allowance",
      "25 days annual leave"
    ],
    posted: "2024-09-25"
  },
  {
    id: "customer-service-rep-alexandria",
    title: "Customer Service Representative",
    department: "Customer Relations",
    location: "Alexandria, Egypt",
    type: "Full-time",
    experience: "1-3 years",
    salary: "EGP 8,000 - 12,000",
    description: "Provide exceptional customer service across multiple channels, assist with account inquiries, and support customers with banking products and services.",
    requirements: [
      "High school diploma or equivalent (Bachelor's preferred)",
      "1-2 years of customer service experience",
      "Excellent communication skills in Arabic and English",
      "Basic computer literacy and banking system knowledge",
      "Patient and professional demeanor",
      "Ability to work in shifts"
    ],
    responsibilities: [
      "Handle customer inquiries via phone, email, and in-person",
      "Process account transactions and updates",
      "Provide information about banking products and services",
      "Resolve customer complaints and issues",
      "Maintain accurate customer records",
      "Cross-sell appropriate banking products"
    ],
    benefits: [
      "Comprehensive training program",
      "Health insurance coverage",
      "Performance-based incentives",
      "Career advancement opportunities",
      "Flexible working hours",
      "Staff discounts on banking services"
    ],
    posted: "2024-09-20"
  },
  {
    id: "credit-analyst-cairo",
    title: "Credit Analyst",
    department: "Risk Management",
    location: "Cairo, Egypt",
    type: "Full-time",
    experience: "2-4 years",
    salary: "EGP 15,000 - 22,000",
    description: "Analyze credit applications, assess risk factors, and make recommendations for loan approvals while ensuring compliance with credit policies.",
    requirements: [
      "Bachelor's degree in Finance, Economics, or Accounting",
      "2-3 years of credit analysis or banking experience",
      "Strong analytical and mathematical skills",
      "Knowledge of financial statements and credit assessment",
      "Proficiency in Excel and financial modeling",
      "Understanding of Egyptian credit regulations"
    ],
    responsibilities: [
      "Review and analyze credit applications",
      "Assess borrower creditworthiness and risk factors",
      "Prepare detailed credit reports and recommendations",
      "Monitor existing loan portfolios",
      "Ensure compliance with credit policies",
      "Collaborate with relationship managers and clients"
    ],
    benefits: [
      "Professional certification support",
      "Health and life insurance",
      "Annual bonus based on performance",
      "Training and development programs",
      "Modern office environment",
      "Employee loan facilities"
    ],
    posted: "2024-09-18"
  },
  {
    id: "digital-banking-specialist-giza",
    title: "Digital Banking Specialist",
    department: "Digital Innovation",
    location: "Giza, Egypt",
    type: "Full-time",
    experience: "3-5 years",
    salary: "EGP 18,000 - 25,000",
    description: "Drive digital transformation initiatives, enhance online banking platforms, and support customers in adopting digital banking solutions.",
    requirements: [
      "Bachelor's degree in IT, Computer Science, or Business",
      "3+ years of experience in digital banking or fintech",
      "Knowledge of mobile banking and digital payment systems",
      "Understanding of UX/UI principles",
      "Strong project management skills",
      "Familiarity with banking APIs and integrations"
    ],
    responsibilities: [
      "Develop and implement digital banking strategies",
      "Manage online banking platform enhancements",
      "Support digital product launches",
      "Train staff on digital banking tools",
      "Analyze digital banking metrics and user feedback",
      "Collaborate with IT and marketing teams"
    ],
    benefits: [
      "Technology training and certifications",
      "Competitive salary with digital bonuses",
      "Health insurance and wellness programs",
      "Innovation project participation",
      "Remote work flexibility",
      "Modern tech equipment"
    ],
    posted: "2024-09-15"
  },
  {
    id: "risk-analyst-cairo",
    title: "Risk Analyst",
    department: "Risk Management",
    location: "Cairo, Egypt",
    type: "Full-time",
    experience: "2-4 years",
    salary: "EGP 16,000 - 23,000",
    description: "Monitor and analyze various risk exposures, develop risk assessment models, and support the bank's risk management framework.",
    requirements: [
      "Bachelor's degree in Finance, Mathematics, or Statistics",
      "2-3 years of risk management or analytical experience",
      "Strong quantitative and statistical analysis skills",
      "Knowledge of Basel III and risk management principles",
      "Proficiency in risk management software and Excel",
      "Professional risk certification preferred"
    ],
    responsibilities: [
      "Conduct risk assessments and analysis",
      "Develop and maintain risk models",
      "Monitor risk exposure across portfolios",
      "Prepare risk reports for management",
      "Ensure regulatory compliance",
      "Support stress testing and scenario analysis"
    ],
    benefits: [
      "Professional risk certification sponsorship",
      "Comprehensive health benefits",
      "Performance-based salary increases",
      "Training in international risk standards",
      "Career progression opportunities",
      "Employee assistance programs"
    ],
    posted: "2024-09-12"
  },
  {
    id: "treasury-officer-cairo",
    title: "Treasury Officer",
    department: "Treasury & Markets",
    location: "Cairo, Egypt",
    type: "Full-time",
    experience: "3-6 years",
    salary: "EGP 20,000 - 28,000",
    description: "Manage bank's liquidity, execute treasury operations, and support trading activities while ensuring compliance with regulatory requirements.",
    requirements: [
      "Bachelor's degree in Finance, Economics, or related field",
      "3+ years of treasury or capital markets experience",
      "Strong understanding of money markets and FX operations",
      "Knowledge of treasury management systems",
      "Professional certification (CFA, FRM) preferred",
      "Excellent analytical and communication skills"
    ],
    responsibilities: [
      "Manage daily liquidity and cash flow",
      "Execute money market and FX transactions",
      "Monitor market conditions and interest rates",
      "Prepare treasury reports and analysis",
      "Ensure compliance with regulatory limits",
      "Support ALM and investment decisions"
    ],
    benefits: [
      "Competitive treasury compensation",
      "Professional certification support",
      "Health and life insurance",
      "Annual performance bonuses",
      "Market data and research access",
      "Networking opportunities"
    ],
    posted: "2024-09-10"
  }
];