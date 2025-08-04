import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Mail, Plus, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Team() {
  const { toast } = useToast();
  const [memberForm, setMemberForm] = useState({
    name: "",
    email: "",
    role: "",
    department: ""
  });

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Connor",
      email: "sarah.connor@teamgrid.com",
      role: "Product Manager",
      department: "Product",
      avatar: "",
      status: "online",
      joinDate: "Jan 2024"
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@teamgrid.com",
      role: "Senior Developer",
      department: "Engineering",
      avatar: "",
      status: "online",
      joinDate: "Feb 2024"
    },
    {
      id: 3,
      name: "Mike Ross",
      email: "mike.ross@teamgrid.com",
      role: "UI/UX Designer",
      department: "Design",
      avatar: "",
      status: "away",
      joinDate: "Mar 2024"
    },
    {
      id: 4,
      name: "Rachel Green",
      email: "rachel.green@teamgrid.com",
      role: "Marketing Lead",
      department: "Marketing",
      avatar: "",
      status: "online",
      joinDate: "Jan 2024"
    },
    {
      id: 5,
      name: "Alex Turner",
      email: "alex.turner@teamgrid.com",
      role: "Data Analyst",
      department: "Analytics",
      avatar: "",
      status: "offline",
      joinDate: "Apr 2024"
    },
    {
      id: 6,
      name: "Emma Watson",
      email: "emma.watson@teamgrid.com",
      role: "DevOps Engineer",
      department: "Engineering",
      avatar: "",
      status: "online",
      joinDate: "Feb 2024"
    }
  ];

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Team member added!",
      duration: 3000,
    });
    setMemberForm({ name: "", email: "", role: "", department: "" });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "away": return "bg-yellow-500";
      case "offline": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getRoleColor = (role: string) => {
    if (role.includes("Manager") || role.includes("Lead")) return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    if (role.includes("Developer") || role.includes("Engineer")) return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    if (role.includes("Designer")) return "bg-pink-500/20 text-pink-400 border-pink-500/30";
    return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Team</h1>
          <p className="text-muted-foreground mt-2">
            Manage your team members and their roles
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Member
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-foreground">Add Team Member</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddMember} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="memberName" className="text-foreground">Full Name</Label>
                <Input
                  id="memberName"
                  value={memberForm.name}
                  onChange={(e) => setMemberForm({...memberForm, name: e.target.value})}
                  placeholder="Enter full name"
                  required
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="memberEmail" className="text-foreground">Email</Label>
                <Input
                  id="memberEmail"
                  type="email"
                  value={memberForm.email}
                  onChange={(e) => setMemberForm({...memberForm, email: e.target.value})}
                  placeholder="email@company.com"
                  required
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="memberRole" className="text-foreground">Role</Label>
                <Select onValueChange={(value) => setMemberForm({...memberForm, role: value})}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="manager">Project Manager</SelectItem>
                    <SelectItem value="analyst">Data Analyst</SelectItem>
                    <SelectItem value="marketing">Marketing Specialist</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="memberDepartment" className="text-foreground">Department</Label>
                <Select onValueChange={(value) => setMemberForm({...memberForm, department: value})}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="product">Product</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="analytics">Analytics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Add Member
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{teamMembers.length}</p>
            <p className="text-sm text-muted-foreground">Total Members</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-2xl font-bold text-foreground">
              {teamMembers.filter(m => m.status === "online").length}
            </p>
            <p className="text-sm text-muted-foreground">Online Now</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">5</p>
            <p className="text-sm text-muted-foreground">Departments</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">98%</p>
            <p className="text-sm text-muted-foreground">Response Rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={member.id} className="animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(member.status)} rounded-full border-2 border-background`}></div>
                </div>
                <Badge 
                  variant="outline" 
                  className={getRoleColor(member.role)}
                >
                  {member.role}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.department}</p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  {member.email}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Joined {member.joinDate}</span>
                  <span className={`capitalize text-xs px-2 py-1 rounded-full ${
                    member.status === "online" ? "bg-green-500/20 text-green-400" :
                    member.status === "away" ? "bg-yellow-500/20 text-yellow-400" :
                    "bg-gray-500/20 text-gray-400"
                  }`}>
                    {member.status}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Mail className="h-3 w-3 mr-1" />
                  Message
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Phone className="h-3 w-3 mr-1" />
                  Call
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}