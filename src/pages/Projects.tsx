import { Calendar, Users, Clock, MoreHorizontal, Plus, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      description: "Complete overhaul of the company website with modern design and improved UX",
      progress: 75,
      status: "In Progress",
      priority: "High",
      startDate: "Nov 1, 2024",
      endDate: "Dec 15, 2024",
      team: [
        { name: "Sarah Connor", avatar: "SC" },
        { name: "John Doe", avatar: "JD" },
        { name: "Mike Ross", avatar: "MR" }
      ],
      tasks: { total: 24, completed: 18 },
      timeline: [
        { phase: "Discovery", status: "completed", date: "Nov 1-7" },
        { phase: "Design", status: "completed", date: "Nov 8-20" },
        { phase: "Development", status: "current", date: "Nov 21 - Dec 10" },
        { phase: "Testing", status: "upcoming", date: "Dec 11-15" }
      ]
    },
    {
      id: 2,
      name: "Mobile App Beta",
      description: "Development of the iOS and Android mobile application with core features",
      progress: 40,
      status: "In Progress",
      priority: "Medium",
      startDate: "Oct 15, 2024",
      endDate: "Dec 22, 2024",
      team: [
        { name: "Rachel Green", avatar: "RG" },
        { name: "Alex Turner", avatar: "AT" }
      ],
      tasks: { total: 32, completed: 13 },
      timeline: [
        { phase: "Planning", status: "completed", date: "Oct 15-22" },
        { phase: "Backend API", status: "completed", date: "Oct 23 - Nov 15" },
        { phase: "Mobile UI", status: "current", date: "Nov 16 - Dec 15" },
        { phase: "Testing & Launch", status: "upcoming", date: "Dec 16-22" }
      ]
    },
    {
      id: 3,
      name: "API Documentation",
      description: "Comprehensive documentation for all REST endpoints and SDK examples",
      progress: 90,
      status: "Review",
      priority: "Low",
      startDate: "Nov 10, 2024",
      endDate: "Dec 10, 2024",
      team: [
        { name: "Emma Stone", avatar: "ES" },
        { name: "David Wilson", avatar: "DW" },
        { name: "Lisa Wang", avatar: "LW" }
      ],
      tasks: { total: 16, completed: 14 },
      timeline: [
        { phase: "Content Writing", status: "completed", date: "Nov 10-25" },
        { phase: "Code Examples", status: "completed", date: "Nov 26 - Dec 5" },
        { phase: "Review & Polish", status: "current", date: "Dec 6-10" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "status-progress";
      case "Review": return "status-completed";
      case "Planning": return "status-todo";
      default: return "status-todo";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "Medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Low": return "bg-green-500/20 text-green-400 border-green-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getTimelineStatus = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500";
      case "current": return "bg-primary";
      case "upcoming": return "bg-muted";
      default: return "bg-muted";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground mt-2">
            Track progress and manage your team's projects
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Card key={project.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <Badge variant="outline" className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <Badge variant="outline" className={getPriorityColor(project.priority)}>
                      {project.priority}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Project Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{project.startDate}</p>
                    <p className="text-xs text-muted-foreground">Start Date</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{project.endDate}</p>
                    <p className="text-xs text-muted-foreground">Due Date</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{project.tasks.completed}/{project.tasks.total} tasks</p>
                    <p className="text-xs text-muted-foreground">Completed</p>
                  </div>
                </div>
              </div>

              {/* Team and Timeline */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Team Members */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Team Members</h4>
                  <div className="flex items-center gap-3">
                    {project.team.map((member, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                            {member.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-foreground">{member.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Timeline */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Timeline</h4>
                  <div className="space-y-3">
                    {project.timeline.map((phase, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${getTimelineStatus(phase.status)}`}></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">{phase.phase}</span>
                            <span className="text-xs text-muted-foreground">{phase.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}