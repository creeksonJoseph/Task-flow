import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Plus, Calendar, Users, CheckCircle, Clock, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function ProjectDetails() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [milestoneForm, setMilestoneForm] = useState({
    title: "",
    description: "",
    dueDate: ""
  });

  const project = {
    id: 1,
    name: "Landing Page Redesign",
    description: "Complete redesign of the marketing landing page to improve conversion rates and user experience.",
    status: "In Progress",
    progress: 75,
    startDate: "Nov 15, 2024",
    dueDate: "Dec 20, 2024",
    budget: "$25,000",
    team: [
      { name: "Sarah Connor", role: "Project Manager", avatar: "SC" },
      { name: "Mike Ross", role: "UI/UX Designer", avatar: "MR" },
      { name: "John Doe", role: "Frontend Developer", avatar: "JD" },
      { name: "Emma Watson", role: "Developer", avatar: "EW" }
    ]
  };

  const milestones = [
    {
      id: 1,
      title: "Research & Analysis",
      description: "User research, competitor analysis, and requirements gathering",
      dueDate: "Nov 25, 2024",
      status: "completed",
      completedDate: "Nov 23, 2024"
    },
    {
      id: 2,
      title: "Wireframes & Prototypes",
      description: "Create wireframes and interactive prototypes",
      dueDate: "Dec 5, 2024",
      status: "completed",
      completedDate: "Dec 3, 2024"
    },
    {
      id: 3,
      title: "Visual Design",
      description: "High-fidelity mockups and design system",
      dueDate: "Dec 12, 2024",
      status: "in-progress"
    },
    {
      id: 4,
      title: "Development",
      description: "Frontend development and implementation",
      dueDate: "Dec 18, 2024",
      status: "pending"
    },
    {
      id: 5,
      title: "Testing & Launch",
      description: "QA testing and production deployment",
      dueDate: "Dec 20, 2024",
      status: "pending"
    }
  ];

  const activities = [
    {
      id: 1,
      user: "Mike Ross",
      action: "uploaded design mockups",
      time: "2 hours ago",
      type: "upload"
    },
    {
      id: 2,
      user: "Sarah Connor",
      action: "marked milestone 'Wireframes' as complete",
      time: "1 day ago",
      type: "milestone"
    },
    {
      id: 3,
      user: "John Doe",
      action: "commented on task 'Header Component'",
      time: "2 days ago",
      type: "comment"
    },
    {
      id: 4,
      user: "Emma Watson",
      action: "joined the project",
      time: "3 days ago",
      type: "join"
    },
    {
      id: 5,
      user: "Sarah Connor",
      action: "updated project timeline",
      time: "4 days ago",
      type: "update"
    }
  ];

  const handleAddMilestone = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Milestone added!",
      duration: 3000,
    });
    setMilestoneForm({ title: "", description: "", dueDate: "" });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "in-progress": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "pending": return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "milestone": return CheckCircle;
      case "upload": return Plus;
      case "comment": return Users;
      default: return Clock;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/projects')}
          className="text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-foreground">{project.name}</h1>
          <p className="text-muted-foreground mt-2">{project.description}</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Milestone
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-foreground">Add New Milestone</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddMilestone} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="milestoneTitle" className="text-foreground">Milestone Title</Label>
                <Input
                  id="milestoneTitle"
                  value={milestoneForm.title}
                  onChange={(e) => setMilestoneForm({...milestoneForm, title: e.target.value})}
                  placeholder="Enter milestone title"
                  required
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="milestoneDescription" className="text-foreground">Description</Label>
                <Textarea
                  id="milestoneDescription"
                  value={milestoneForm.description}
                  onChange={(e) => setMilestoneForm({...milestoneForm, description: e.target.value})}
                  placeholder="Milestone description"
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="milestoneDueDate" className="text-foreground">Due Date</Label>
                <Input
                  id="milestoneDueDate"
                  type="date"
                  value={milestoneForm.dueDate}
                  onChange={(e) => setMilestoneForm({...milestoneForm, dueDate: e.target.value})}
                  className="bg-background border-border"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Add Milestone
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Project Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <Target className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">{project.progress}%</p>
                <p className="text-sm text-muted-foreground">Complete</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">25</p>
                <p className="text-sm text-muted-foreground">Days Left</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">{project.team.length}</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <CheckCircle className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">
                  {milestones.filter(m => m.status === 'completed').length}
                </p>
                <p className="text-sm text-muted-foreground">Milestones</p>
              </CardContent>
            </Card>
          </div>

          {/* Milestones Timeline */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Target className="h-5 w-5 text-primary" />
                Project Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={milestone.id} className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      milestone.status === 'completed' ? 'bg-green-500' :
                      milestone.status === 'in-progress' ? 'bg-orange-500' :
                      'bg-gray-500'
                    }`}>
                      {milestone.status === 'completed' ? (
                        <CheckCircle className="h-4 w-4 text-white" />
                      ) : (
                        <span className="text-white text-sm">{index + 1}</span>
                      )}
                    </div>
                    
                    <div className="flex-1 pb-8">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                        <Badge variant="outline" className={getStatusColor(milestone.status)}>
                          {milestone.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{milestone.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Due: {milestone.dueDate}</span>
                        {milestone.completedDate && (
                          <span className="text-green-400">Completed: {milestone.completedDate}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Project Details */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-muted-foreground">Status</Label>
                <Badge className="ml-2 bg-orange-500/20 text-orange-400 border-orange-500/30">
                  {project.status}
                </Badge>
              </div>
              
              <div>
                <Label className="text-muted-foreground">Progress</Label>
                <div className="mt-2">
                  <Progress value={project.progress} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-1">{project.progress}% complete</p>
                </div>
              </div>
              
              <div>
                <Label className="text-muted-foreground">Timeline</Label>
                <p className="text-sm text-foreground">{project.startDate} - {project.dueDate}</p>
              </div>
              
              <div>
                <Label className="text-muted-foreground">Budget</Label>
                <p className="text-sm text-foreground">{project.budget}</p>
              </div>
            </CardContent>
          </Card>

          {/* Team Members */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Team Members</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {project.team.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/20 text-primary text-xs">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Activity Log */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {activities.map((activity) => {
                const ActivityIcon = getActivityIcon(activity.type);
                return (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <ActivityIcon className="h-3 w-3 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">
                        <span className="font-medium">{activity.user}</span>
                        {' '}{activity.action}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}