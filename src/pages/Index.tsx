
import { Button } from "@/components/ui/button";
import { Video, Sparkles, BarChart3, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-20 animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold">
          Create Content with <span className="text-gradient">AI Power</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Generate high-quality scripts, edit videos, and optimize your content
          with advanced AI technology.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button size="lg">Start Creating</Button>
          <Button variant="outline" size="lg">Watch Demo</Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="glass-card p-6 space-y-4 hover-scale"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

const features = [
  {
    icon: Sparkles,
    title: "AI Script Generation",
    description: "Create engaging scripts for any platform with advanced AI assistance.",
  },
  {
    icon: Video,
    title: "Smart Video Editing",
    description: "Edit videos with AI-powered tools and automated enhancements.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Track performance and get AI-driven recommendations.",
  },
  {
    icon: Clock,
    title: "Scheduled Publishing",
    description: "Automate content posting at optimal times across platforms.",
  },
];

export default Index;
