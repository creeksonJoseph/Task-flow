import { useState } from "react";
import { Calendar, CheckCircle, Clock, Users, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const { toast } = useToast();
  const [projectForm, setProjectForm] = useState({
    name: "",
    description: "",
    deadline: ""
  });

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Project added!",
      duration: 3000,
    });
    setProjectForm({ name: "", description: "", deadline: "" });
  };

  const stats = [
    { title: "Total Projects", value: "12", icon: CheckCircle, change: "+2 this week" },
    { title: "Active Tasks", value: "48", icon: Clock, change: "15 completed today" },
    { title: "Team Members", value: "16", icon: Users, change: "+3 this month" },
    { title: "Deadlines", value: "5", icon: Calendar, change: "2 this week" }
  ];

  const projects = [
    {
      name: "Website Redesign",
      progress: 75,
      status: "In Progress",
      team: ["AB", "CD", "EF"],
      dueDate: "Dec 15"
    },
    {
      name: "Mobile App Beta",
      progress: 40,
      status: "In Progress",
      team: ["GH", "IJ"],
      dueDate: "Dec 22"
    },
    {
      name: "API Documentation",
      progress: 90,
      status: "Review",
      team: ["KL", "MN", "OP"],
      dueDate: "Dec 10"
    }
  ];

  const activities = [
    { user: "Sarah Connor", action: "completed task", target: "User Authentication", time: "2 minutes ago" },
    { user: "John Doe", action: "created project", target: "Q1 Marketing Campaign", time: "15 minutes ago" },
    { user: "Mike Ross", action: "commented on", target: "Database Migration", time: "1 hour ago" },
    { user: "Rachel Green", action: "moved task", target: "Bug Fixes", time: "2 hours ago" },
    { user: "Alex Turner", action: "assigned task", target: "Code Review", time: "3 hours ago" }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's what's happening with your projects today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <div className="p-3 bg-primary/20 rounded-lg">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Projects */}
        <div className="lg:col-span-2">
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Active Projects
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Plus className="h-4 w-4 mr-2" />
                      Quick Add Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-card border-border">
                    <DialogHeader>
                      <DialogTitle className="text-foreground">Add New Project</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleAddProject} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="projectName" className="text-foreground">Project Name</Label>
                        <Input
                          id="projectName"
                          value={projectForm.name}
                          onChange={(e) => setProjectForm({...projectForm, name: e.target.value})}
                          placeholder="Enter project name"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectDescription" className="text-foreground">Description</Label>
                        <Textarea
                          id="projectDescription"
                          value={projectForm.description}
                          onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                          placeholder="Project description"
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectDeadline" className="text-foreground">Deadline</Label>
                        <Input
                          id="projectDeadline"
                          type="date"
                          value={projectForm.deadline}
                          onChange={(e) => setProjectForm({...projectForm, deadline: e.target.value})}
                          className="bg-background border-border"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Add Project
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.map((project, index) => (
                <div 
                  key={project.name} 
                  className="p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{project.name}</h3>
                    <Badge 
                      variant="outline" 
                      className={project.status === "Review" ? "status-completed" : "status-progress"}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {project.team.map((member, i) => (
                        <Avatar key={i} className="h-6 w-6 border-2 border-background">
                          <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                            {member}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">Due {project.dueDate}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Activity Feed */}
        <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs bg-secondary">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">
                    <span className="font-medium">{activity.user}</span>
                    {' '}{activity.action}{' '}
                    <span className="font-medium text-primary">{activity.target}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}