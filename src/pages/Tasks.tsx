import { useState } from "react";
import { Plus, Filter, Search, MoreHorizontal, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Tasks() {
  const [filter, setFilter] = useState("all");

  const columns = [
    { id: "todo", title: "To Do", count: 12 },
    { id: "progress", title: "In Progress", count: 8 },
    { id: "completed", title: "Completed", count: 24 }
  ];

  const tasks = {
    todo: [
      {
        id: 1,
        title: "Design user dashboard mockups",
        description: "Create wireframes and high-fidelity designs for the user dashboard",
        priority: "High",
        assignee: "JD",
        dueDate: "Dec 15",
        tags: ["Design", "UI/UX"]
      },
      {
        id: 2,
        title: "Set up CI/CD pipeline",
        description: "Configure automated testing and deployment workflows",
        priority: "Medium",
        assignee: "AB",
        dueDate: "Dec 18",
        tags: ["DevOps", "Backend"]
      },
      {
        id: 3,
        title: "Write API documentation",
        description: "Document all REST endpoints and authentication flow",
        priority: "Low",
        assignee: "CD",
        dueDate: "Dec 20",
        tags: ["Documentation"]
      }
    ],
    progress: [
      {
        id: 4,
        title: "Implement user authentication",
        description: "Add login, registration, and password reset functionality",
        priority: "High",
        assignee: "EF",
        dueDate: "Dec 12",
        tags: ["Backend", "Security"]
      },
      {
        id: 5,
        title: "Mobile responsive design",
        description: "Ensure all pages work properly on mobile devices",
        priority: "Medium",
        assignee: "GH",
        dueDate: "Dec 16",
        tags: ["Frontend", "Mobile"]
      }
    ],
    completed: [
      {
        id: 6,
        title: "Database schema design",
        description: "Design and implement the initial database structure",
        priority: "High",
        assignee: "IJ",
        dueDate: "Dec 8",
        tags: ["Database", "Backend"]
      },
      {
        id: 7,
        title: "Project setup and configuration",
        description: "Initialize the project with necessary tools and dependencies",
        priority: "Medium",
        assignee: "KL",
        dueDate: "Dec 5",
        tags: ["Setup"]
      }
    ]
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "Medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Low": return "bg-green-500/20 text-green-400 border-green-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getColumnColor = (columnId: string) => {
    switch (columnId) {
      case "todo": return "status-todo";
      case "progress": return "status-progress";
      case "completed": return "status-completed";
      default: return "status-todo";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Task Board</h1>
          <p className="text-muted-foreground mt-2">
            Manage and track your team's tasks with our Kanban board
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search tasks..." className="pl-10" />
        </div>
        
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-48">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tasks</SelectItem>
            <SelectItem value="high">High Priority</SelectItem>
            <SelectItem value="my">My Tasks</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {columns.map((column, columnIndex) => (
          <Card key={column.id} className="animate-slide-up" style={{ animationDelay: `${columnIndex * 0.1}s` }}>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${getColumnColor(column.id)}`}></span>
                  {column.title}
                </div>
                <Badge variant="secondary" className="bg-muted">
                  {column.count}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {tasks[column.id as keyof typeof tasks].map((task, taskIndex) => (
                <div 
                  key={task.id}
                  className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-200 cursor-pointer group animate-scale-in"
                  style={{ animationDelay: `${(columnIndex * 0.1) + (taskIndex * 0.05)}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">
                      {task.title}
                    </h3>
                    <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {task.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {task.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(task.priority)} variant="outline">
                        {task.priority}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {task.dueDate}
                      </div>
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                          {task.assignee}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Add task button */}
              <Button 
                variant="ghost" 
                className="w-full border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add a task
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}