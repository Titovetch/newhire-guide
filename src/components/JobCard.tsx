import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock, DollarSign } from "lucide-react";
import { Job } from "@/data/jobs";

interface JobCardProps {
  job: Job;
  onApply: (jobId: string) => void;
}

export const JobCard = ({ job, onApply }: JobCardProps) => {
  return (
    <Card className="group cursor-pointer bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-0">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {job.title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {job.location}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {job.type}
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="whitespace-nowrap">
            {job.department}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {job.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <DollarSign className="w-4 h-4" />
              <span className="font-medium text-foreground">{job.salary}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Experience: {job.experience}</span>
            </div>
          </div>
          
          <Button 
            onClick={() => onApply(job.id)}
            variant="gradient"
            size="sm"
            className="shrink-0"
          >
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};