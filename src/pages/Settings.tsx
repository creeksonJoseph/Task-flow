import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Settings as SettingsIcon, User, Bell, Shield, Palette, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { toast } = useToast();
  const [accountSettings, setAccountSettings] = useState({
    teamName: "TeamGrid Inc.",
    adminEmail: "admin@teamgrid.com",
    timezone: "UTC-08:00",
    language: "en"
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    taskUpdates: true,
    teamMentions: true,
    projectDeadlines: true,
    weeklyDigest: false
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: "24",
    passwordExpiry: "90"
  });

  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: "dark",
    sidebarCollapsed: false,
    compactMode: false
  });

  const handleSaveChanges = () => {
    toast({
      title: "Success!",
      description: "Settings saved!",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account and team preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="space-y-4">
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4">
              <nav className="space-y-2">
                <a href="#account" className="flex items-center gap-3 p-2 rounded-lg bg-primary/20 text-primary">
                  <User className="h-4 w-4" />
                  Account Settings
                </a>
                <a href="#notifications" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 text-foreground">
                  <Bell className="h-4 w-4" />
                  Notifications
                </a>
                <a href="#security" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 text-foreground">
                  <Shield className="h-4 w-4" />
                  Security
                </a>
                <a href="#appearance" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 text-foreground">
                  <Palette className="h-4 w-4" />
                  Appearance
                </a>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Account Settings */}
          <Card id="account" className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <User className="h-5 w-5 text-primary" />
                Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary/20 text-primary text-lg">
                    TG
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-foreground">{accountSettings.teamName}</h3>
                  <p className="text-sm text-muted-foreground">{accountSettings.adminEmail}</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Change Avatar
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="teamName" className="text-foreground">Team Name</Label>
                  <Input
                    id="teamName"
                    value={accountSettings.teamName}
                    onChange={(e) => setAccountSettings({...accountSettings, teamName: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="adminEmail" className="text-foreground">Admin Email</Label>
                  <Input
                    id="adminEmail"
                    type="email"
                    value={accountSettings.adminEmail}
                    onChange={(e) => setAccountSettings({...accountSettings, adminEmail: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone" className="text-foreground">Timezone</Label>
                  <Select onValueChange={(value) => setAccountSettings({...accountSettings, timezone: value})}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder={accountSettings.timezone} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC-08:00">Pacific Time (UTC-8)</SelectItem>
                      <SelectItem value="UTC-05:00">Eastern Time (UTC-5)</SelectItem>
                      <SelectItem value="UTC+00:00">UTC</SelectItem>
                      <SelectItem value="UTC+01:00">Central European Time (UTC+1)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language" className="text-foreground">Language</Label>
                  <Select onValueChange={(value) => setAccountSettings({...accountSettings, language: value})}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="English" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card id="notifications" className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Bell className="h-5 w-5 text-primary" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-foreground">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch
                    checked={notificationSettings.emailNotifications}
                    onCheckedChange={(checked) => 
                      setNotificationSettings({...notificationSettings, emailNotifications: checked})}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-foreground">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive browser push notifications</p>
                  </div>
                  <Switch
                    checked={notificationSettings.pushNotifications}
                    onCheckedChange={(checked) => 
                      setNotificationSettings({...notificationSettings, pushNotifications: checked})}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-foreground">Task Updates</Label>
                    <p className="text-sm text-muted-foreground">Get notified when tasks are updated</p>
                  </div>
                  <Switch
                    checked={notificationSettings.taskUpdates}
                    onCheckedChange={(checked) => 
                      setNotificationSettings({...notificationSettings, taskUpdates: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-foreground">Team Mentions</Label>
                    <p className="text-sm text-muted-foreground">Get notified when mentioned in chat</p>
                  </div>
                  <Switch
                    checked={notificationSettings.teamMentions}
                    onCheckedChange={(checked) => 
                      setNotificationSettings({...notificationSettings, teamMentions: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-foreground">Project Deadlines</Label>
                    <p className="text-sm text-muted-foreground">Reminders for approaching deadlines</p>
                  </div>
                  <Switch
                    checked={notificationSettings.projectDeadlines}
                    onCheckedChange={(checked) => 
                      setNotificationSettings({...notificationSettings, projectDeadlines: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-foreground">Weekly Digest</Label>
                    <p className="text-sm text-muted-foreground">Weekly summary of team activity</p>
                  </div>
                  <Switch
                    checked={notificationSettings.weeklyDigest}
                    onCheckedChange={(checked) => 
                      setNotificationSettings({...notificationSettings, weeklyDigest: checked})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card id="security" className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Shield className="h-5 w-5 text-primary" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-foreground">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Switch
                  checked={securitySettings.twoFactorAuth}
                  onCheckedChange={(checked) => 
                    setSecuritySettings({...securitySettings, twoFactorAuth: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout" className="text-foreground">Session Timeout (hours)</Label>
                  <Select onValueChange={(value) => setSecuritySettings({...securitySettings, sessionTimeout: value})}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder={securitySettings.sessionTimeout} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 hour</SelectItem>
                      <SelectItem value="8">8 hours</SelectItem>
                      <SelectItem value="24">24 hours</SelectItem>
                      <SelectItem value="168">1 week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passwordExpiry" className="text-foreground">Password Expiry (days)</Label>
                  <Select onValueChange={(value) => setSecuritySettings({...securitySettings, passwordExpiry: value})}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder={securitySettings.passwordExpiry} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button variant="outline" className="mt-4">
                Change Password
              </Button>
            </CardContent>
          </Card>

          {/* Appearance Settings */}
          <Card id="appearance" className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Palette className="h-5 w-5 text-primary" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="theme" className="text-foreground">Theme</Label>
                  <Select onValueChange={(value) => setAppearanceSettings({...appearanceSettings, theme: value})}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Dark" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-foreground">Sidebar Collapsed by Default</Label>
                    <p className="text-sm text-muted-foreground">Start with a collapsed sidebar</p>
                  </div>
                  <Switch
                    checked={appearanceSettings.sidebarCollapsed}
                    onCheckedChange={(checked) => 
                      setAppearanceSettings({...appearanceSettings, sidebarCollapsed: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-foreground">Compact Mode</Label>
                    <p className="text-sm text-muted-foreground">Reduce spacing for more content</p>
                  </div>
                  <Switch
                    checked={appearanceSettings.compactMode}
                    onCheckedChange={(checked) => 
                      setAppearanceSettings({...appearanceSettings, compactMode: checked})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="p-6 text-center">
              <Button 
                onClick={handleSaveChanges}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              >
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}