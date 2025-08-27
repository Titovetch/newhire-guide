import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  Users, 
  CreditCard, 
  Calendar, 
  Building, 
  UserPlus,
  Check
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CreateNewStaffProps {
  onClose: () => void;
  onStaffCreated: (staff: any) => void;
}

const CreateNewStaff = ({ onClose, onStaffCreated }: CreateNewStaffProps) => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    businessPartnerId: "",
    name: "",
    nationalId: "",
    startDate: "",
    function: "",
    department: "",
    title: "",
    equipment: {
      pc: false,
      laptop: false,
      mobile: false,
      car: false,
      closedOffice: false
    }
  });

  const businessPartners = [
    { id: "BP001", name: "Ahmed Mohamed Hassan", role: "Senior Manager" },
    { id: "BP002", name: "Fatma Ali Mahmoud", role: "Department Head" },
    { id: "BP003", name: "Omar Khaled Saeed", role: "Team Lead" },
    { id: "BP004", name: "Nour Essam Ibrahim", role: "Regional Manager" },
    { id: "BP005", name: "Hesham Tarek Fawzy", role: "Operations Manager" }
  ];

  const departments = [
    "Investment Banking",
    "Risk Management", 
    "IT",
    "Legal & Compliance",
    "Human Resources",
    "Finance & Accounting",
    "Customer Service",
    "Operations",
    "Marketing",
    "Credit Analysis"
  ];

  const functions = [
    "Financial Analysis",
    "Risk Assessment",
    "Software Development",
    "Compliance Monitoring",
    "HR Operations",
    "Accounting",
    "Customer Relations",
    "Business Operations",
    "Marketing Strategy",
    "Credit Evaluation"
  ];

  const validateNationalId = (id: string) => {
    const cleanId = id.replace(/[\s-]/g, '');
    return /^\d{14}$/.test(cleanId);
  };

  const handleBusinessPartnerChange = (partnerId: string) => {
    const partner = businessPartners.find(p => p.id === partnerId);
    setFormData({
      ...formData,
      businessPartnerId: partnerId,
      name: partner ? partner.name : ""
    });
  };

  const handleEquipmentChange = (equipment: string, checked: boolean) => {
    setFormData({
      ...formData,
      equipment: {
        ...formData.equipment,
        [equipment]: checked
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!validateNationalId(formData.nationalId)) {
      toast({
        title: "Invalid National ID",
        description: "National ID must be exactly 14 digits",
        variant: "destructive",
      });
      return;
    }

    if (!formData.businessPartnerId || !formData.startDate || !formData.function || 
        !formData.department || !formData.title) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Create new staff member
    const newStaff = {
      id: `NH${Date.now()}`,
      name: formData.name,
      nationalId: formData.nationalId,
      position: formData.title,
      department: formData.department,
      function: formData.function,
      startDate: new Date(formData.startDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      businessPartner: businessPartners.find(p => p.id === formData.businessPartnerId)?.name || "",
      avatar: "/api/placeholder/40/40",
      tasksCompleted: 0,
      totalTasks: 8,
      equipmentStatus: "pending",
      buddyAssigned: false,
      status: "on-track",
      equipment: formData.equipment
    };

    onStaffCreated(newStaff);
    
    toast({
      title: "Staff Member Created",
      description: `${formData.name} has been successfully added to the system`,
    });

    onClose();
  };

  const selectedEquipment = Object.entries(formData.equipment)
    .filter(([_, selected]) => selected)
    .map(([equipment, _]) => equipment);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-primary" />
              Create New Staff Member
            </CardTitle>
            <CardDescription>
              Add a new employee to the onboarding system
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            {/* Business Partner Selection */}
            <div className="space-y-2">
              <Label htmlFor="businessPartner" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Business Partner *
              </Label>
              <Select value={formData.businessPartnerId} onValueChange={handleBusinessPartnerChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select business partner" />
                </SelectTrigger>
                <SelectContent>
                  {businessPartners.map((partner) => (
                    <SelectItem key={partner.id} value={partner.id}>
                      <div>
                        <div className="font-medium">{partner.name}</div>
                        <div className="text-sm text-muted-foreground">{partner.role}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Auto-filled Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Full Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                readOnly
                className="bg-muted"
                placeholder="Will be auto-filled when business partner is selected"
              />
            </div>

            {/* National ID */}
            <div className="space-y-2">
              <Label htmlFor="nationalId" className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                National ID *
              </Label>
              <Input
                id="nationalId"
                type="text"
                value={formData.nationalId}
                onChange={(e) => setFormData({
                  ...formData,
                  nationalId: e.target.value.replace(/\D/g, '').slice(0, 14)
                })}
                placeholder="Enter 14-digit National ID"
                maxLength={14}
                required
              />
            </div>

            {/* Start Date */}
            <div className="space-y-2">
              <Label htmlFor="startDate" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Start Date *
              </Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
              />
            </div>

            {/* Function and Department Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="function" className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Function *
                </Label>
                <Select value={formData.function} onValueChange={(value) => setFormData({ ...formData, function: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select function" />
                  </SelectTrigger>
                  <SelectContent>
                    {functions.map((func) => (
                      <SelectItem key={func} value={func}>
                        {func}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="department" className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Department *
                </Label>
                <Select value={formData.department} onValueChange={(value) => setFormData({ ...formData, department: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">
                Job Title *
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter job title"
                required
              />
            </div>

            {/* Equipment Checkboxes */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Equipment Requirements</Label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { key: 'pc', label: 'Desktop PC' },
                  { key: 'laptop', label: 'Laptop' },
                  { key: 'mobile', label: 'Mobile Phone' },
                  { key: 'car', label: 'Company Car' },
                  { key: 'closedOffice', label: 'Closed Office' }
                ].map((item) => (
                  <div key={item.key} className="flex items-center space-x-2">
                    <Checkbox
                      id={item.key}
                      checked={formData.equipment[item.key as keyof typeof formData.equipment]}
                      onCheckedChange={(checked) => handleEquipmentChange(item.key, checked === true)}
                    />
                    <Label htmlFor={item.key} className="text-sm font-normal">
                      {item.label}
                    </Label>
                  </div>
                ))}
              </div>
              
              {selectedEquipment.length > 0 && (
                <div className="mt-3">
                  <Label className="text-sm text-muted-foreground">Selected Equipment:</Label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedEquipment.map((equipment) => (
                      <Badge key={equipment} variant="outline" className="text-xs">
                        {equipment === 'pc' ? 'Desktop PC' : 
                         equipment === 'closedOffice' ? 'Closed Office' :
                         equipment.charAt(0).toUpperCase() + equipment.slice(1)}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Create Staff Member
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default CreateNewStaff;