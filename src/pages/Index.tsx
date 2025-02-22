
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Sparkles, Video, BarChart3, Clock, Command, Wand2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-background/95 backdrop-blur-3xl text-foreground py-24 md:py-32 px-4">
        <div className="mx-auto max-w-[1200px] flex flex-col gap-12 pt-16">
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Badge */}
            <Badge variant="outline" className="animate-appear gap-2 bg-background/50 backdrop-blur-md">
              <Command className="h-3 w-3" />
              <span className="text-muted-foreground">AI-Powered Content Creation</span>
            </Badge>

            {/* Title */}
            <h1 className="relative z-10 font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              <span className="text-gradient">Content creation</span>
              <br />
              at the speed of thought
            </h1>

            {/* Description */}
            <p className="text-md max-w-[600px] text-muted-foreground text-lg sm:text-xl">
              Generate high-quality content in seconds. Scripts, videos, and optimization,
              all powered by advanced AI technology.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button size="lg" className="min-w-[200px] h-12 text-base">
                Start creating
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px] h-12 text-base">
                Watch demo
              </Button>
            </div>

            {/* Image with Glow */}
            <div className="relative w-full max-w-6xl mx-auto mt-16">
              <MockupFrame className="animate-appear opacity-0 delay-700" size="small">
                <Mockup type="responsive">
                  <div className="aspect-video w-full bg-gradient-to-br from-primary/10 via-secondary/10 to-background rounded-lg overflow-hidden border border-white/10">
                    <div className="w-full h-full bg-card/30 backdrop-blur-sm p-8">
                      <div className="h-full w-full rounded-lg bg-gradient-to-br from-background to-muted/10 border border-white/5" />
                    </div>
                  </div>
                </Mockup>
              </MockupFrame>
              <Glow variant="top" className="animate-appear-zoom opacity-0 delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Everything you need to create
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our AI-powered platform streamlines your content creation workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card p-8 transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-gradient-to-b from-background/95 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-medium tracking-tight mb-4">Simple pricing</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start for free, upgrade as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card p-8 transition-all hover:shadow-2xl ${
                  plan.popular ? "border border-primary/20 shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-5 right-5">
                    <Badge variant="default" className="bg-primary/20 text-primary hover:bg-primary/30">
                      Popular
                    </Badge>
                  </div>
                )}
                <div className="space-y-6">
                  <h3 className="text-2xl font-medium">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-medium">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <Separator className="bg-muted/20" />
                  <ul className="space-y-4 min-h-[280px]">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full h-12"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get started
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-4">
          <div className="max-w-[900px] mx-auto text-center space-y-8">
            <h2 className="text-4xl font-medium tracking-tight">
              Transform your content creation today
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of creators using our AI-powered platform
            </p>
            <div className="flex justify-center gap-4 pt-8">
              <Button size="lg" className="min-w-[200px] h-12">
                Start for free
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: Sparkles,
    title: "AI Script Generation",
    description: "Create engaging scripts in seconds with our advanced AI assistance.",
  },
  {
    icon: Video,
    title: "Smart Video Editing",
    description: "Professional-grade video editing with AI-powered enhancements.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Get detailed performance metrics and AI-driven recommendations.",
  },
  {
    icon: Clock,
    title: "Scheduled Publishing",
    description: "Schedule content across platforms at optimal times.",
  },
  {
    icon: Command,
    title: "Command Center",
    description: "Manage all your content from a single, powerful interface.",
  },
  {
    icon: Wand2,
    title: "AI Optimization",
    description: "Auto-optimize your content for maximum engagement.",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    features: [
      "5 AI-generated videos per month",
      "Basic script generation",
      "720p video quality",
      "Community support",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    price: "49",
    popular: true,
    features: [
      "Unlimited AI-generated videos",
      "Advanced script generation",
      "4K video quality",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
      "Custom branding",
    ],
  },
  {
    name: "Enterprise",
    price: "99",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "API access",
      "24/7 phone support",
      "Custom AI model training",
      "Advanced security features",
      "SLA guarantees",
    ],
  },
];

export default Index;
