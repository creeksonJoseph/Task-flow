import { useState } from "react";
import { Send, Paperclip, Smile, Search, Phone, Video, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState("general");
  const [message, setMessage] = useState("");

  const channels = [
    { id: "general", name: "General", type: "channel", unread: 3, lastMessage: "Let's sync up tomorrow" },
    { id: "design", name: "Design Team", type: "channel", unread: 0, lastMessage: "New mockups uploaded" },
    { id: "dev", name: "Development", type: "channel", unread: 7, lastMessage: "Deployment successful 🎉" },
    { id: "marketing", name: "Marketing", type: "channel", unread: 1, lastMessage: "Campaign metrics look great" }
  ];

  const directMessages = [
    { id: "sarah", name: "Sarah Connor", avatar: "SC", online: true, unread: 2, lastMessage: "The designs are ready for review" },
    { id: "john", name: "John Doe", avatar: "JD", online: true, unread: 0, lastMessage: "Thanks for the update!" },
    { id: "mike", name: "Mike Ross", avatar: "MR", online: false, unread: 1, lastMessage: "Can we schedule a call?" },
    { id: "rachel", name: "Rachel Green", avatar: "RG", online: true, unread: 0, lastMessage: "Perfect, let's proceed" }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah Connor",
      avatar: "SC",
      message: "Hey team! I've just uploaded the new dashboard designs to Figma. Would love to get your feedback on the user flow.",
      timestamp: "10:30 AM",
      isOwn: false
    },
    {
      id: 2,
      sender: "You",
      avatar: "YO",
      message: "Great work Sarah! The navigation looks much cleaner now. I especially like the new sidebar layout.",
      timestamp: "10:35 AM",
      isOwn: true
    },
    {
      id: 3,
      sender: "John Doe",
      avatar: "JD",
      message: "Agreed! The color scheme is much more professional. How's the mobile responsive version coming along?",
      timestamp: "10:37 AM",
      isOwn: false
    },
    {
      id: 4,
      sender: "Sarah Connor",
      avatar: "SC",
      message: "Working on the mobile version now. Should have it ready by end of day. Will share prototypes for testing tomorrow.",
      timestamp: "10:40 AM",
      isOwn: false
    },
    {
      id: 5,
      sender: "You",
      avatar: "YO",
      message: "Perfect timing! The development team is ready to start implementation once we finalize the designs.",
      timestamp: "10:42 AM",
      isOwn: true
    }
  ];

  const teamMembers = [
    { name: "Sarah Connor", avatar: "SC", online: true, role: "Design Lead" },
    { name: "John Doe", avatar: "JD", online: true, role: "Frontend Dev" },
    { name: "Mike Ross", avatar: "MR", online: false, role: "Backend Dev" },
    { name: "Rachel Green", avatar: "RG", online: true, role: "Product Manager" },
    { name: "Alex Turner", avatar: "AT", online: false, role: "QA Engineer" },
    { name: "Emma Stone", avatar: "ES", online: true, role: "UX Designer" }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage("");
    }
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-6 animate-fade-in">
      {/* Sidebar */}
      <div className="w-80 flex flex-col gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search messages..." className="pl-10" />
        </div>

        {/* Channels */}
        <Card className="flex-1">
          <CardHeader className="pb-3">
            <h3 className="font-semibold text-foreground">Channels</h3>
          </CardHeader>
          <CardContent className="space-y-1">
            {channels.map((channel) => (
              <div
                key={channel.id}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedChat === channel.id ? "bg-primary/20 text-primary" : "hover:bg-muted/50"
                }`}
                onClick={() => setSelectedChat(channel.id)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">#</span>
                  <div>
                    <p className="font-medium text-sm">{channel.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{channel.lastMessage}</p>
                  </div>
                </div>
                {channel.unread > 0 && (
                  <Badge className="bg-primary text-primary-foreground text-xs">
                    {channel.unread}
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Direct Messages */}
        <Card className="flex-1">
          <CardHeader className="pb-3">
            <h3 className="font-semibold text-foreground">Direct Messages</h3>
          </CardHeader>
          <CardContent className="space-y-1">
            {directMessages.map((dm) => (
              <div
                key={dm.id}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedChat === dm.id ? "bg-primary/20 text-primary" : "hover:bg-muted/50"
                }`}
                onClick={() => setSelectedChat(dm.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs bg-secondary">
                        {dm.avatar}
                      </AvatarFallback>
                    </Avatar>
                    {dm.online && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{dm.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{dm.lastMessage}</p>
                  </div>
                </div>
                {dm.unread > 0 && (
                  <Badge className="bg-primary text-primary-foreground text-xs">
                    {dm.unread}
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <Card className="flex-1 flex flex-col">
          {/* Chat Header */}
          <CardHeader className="border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">#</span>
                <div>
                  <h2 className="font-semibold text-foreground">General</h2>
                  <p className="text-sm text-muted-foreground">12 members</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.isOwn ? "flex-row-reverse" : ""}`}
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs bg-secondary">
                    {msg.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className={`flex-1 ${msg.isOwn ? "text-right" : ""}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm text-foreground">
                      {msg.sender}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {msg.timestamp}
                    </span>
                  </div>
                  <div
                    className={`p-3 rounded-lg max-w-xs lg:max-w-md ${
                      msg.isOwn
                        ? "bg-primary text-primary-foreground ml-auto"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>

          {/* Message Input */}
          <div className="p-4 border-t border-border">
            <div className="flex items-end gap-3">
              <div className="flex-1">
                <Textarea
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[44px] resize-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button onClick={handleSendMessage} className="bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Team Members Sidebar */}
      <div className="w-64">
        <Card className="h-full">
          <CardHeader className="pb-3">
            <h3 className="font-semibold text-foreground">Team Members</h3>
          </CardHeader>
          <CardContent className="space-y-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs bg-secondary">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <span
                    className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background ${
                      member.online ? "bg-green-500" : "bg-gray-400"
                    }`}
                  ></span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}