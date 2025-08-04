import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Zap, Shield, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // any width < 1024px = mobile
    };
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile warning screen
  if (isMobile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
        <h1 className="text-3xl font-bold text-foreground mb-4 animate-pulse">
          Mobile Version Not Available
        </h1>
        <p className="text-muted-foreground mb-6 max-w-sm">
          Task-Flow is currently optimized for desktop. <br />
          Please switch to a larger screen for the best experience.
        </p>
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-bounce">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
      </div>
    );
  }

  //  Desktop content
  const features = [
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Bring your team together with real-time collaboration tools",
    },
    {
      icon: Zap,
      title: "Boost Productivity",
      description: "Streamline workflows and get more done in less time",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
    },
  ];

  const benefits = [
    "Real-time team collaboration",
    "Advanced project tracking",
    "Integrated communication tools",
    "Customizable workflows",
    "Detailed analytics & reporting",
    "Mobile app access",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Task-Flow
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/login")}
                className="text-foreground hover:text-black"
              >
                Log In
              </Button>
              <Button
                onClick={() => navigate("/signup")}
                className="bg-primary text-primary-foreground hover:text-white hover:bg-primary/90"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Enhance Your Team's Productivity –{" "}
              <span className="text-primary">All in One Place</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Streamline project management, boost team collaboration, and
              deliver exceptional results with our comprehensive platform
              designed for modern teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => navigate("/signup")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/login")}
                className="text-lg px-8 py-3 border-border hover:bg-muted"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-0">
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        Team Dashboard
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Centralized workspace for all team activities
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        Task Management
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Kanban boards and task tracking
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        Real-time Collaboration
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Instant communication and updates
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help teams collaborate effectively
              and deliver outstanding results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow bg-background/80"
              >
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Why teams choose TeamGrid
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8 bg-card/50">
              <CardContent className="text-center space-y-6">
                <h4 className="text-2xl font-bold text-foreground">
                  Ready to get started?
                </h4>
                <p className="text-muted-foreground">
                  Join thousands of teams already using TeamGrid to enhance
                  their productivity.
                </p>
                <Button
                  size="lg"
                  onClick={() => navigate("/signup")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Start Your Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Card className="p-12 bg-primary/10 border-primary/20">
            <CardContent className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Register your team to get started
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform how your team works together. Start your journey with
                TeamGrid today.
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/signup")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3"
              >
                Create Your Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">Task-Flow</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 Task-Flow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
