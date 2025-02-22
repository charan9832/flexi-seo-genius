
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Github, Sparkles, Video, BarChart3, Clock, Youtube, Instagram, YoutubeIcon, Wand2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-background text-foreground py-12 sm:py-24 md:py-32 px-4 fade-bottom overflow-hidden pb-0"
      >
        <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            {/* Badge */}
            <Badge variant="outline" className="animate-appear gap-2">
              <span className="text-muted-foreground">Special Launch Offer</span>
              <a href="#pricing" className="flex items-center gap-1">
                Save 50% Today
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>

            {/* Title */}
            <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Create Content with AI-Powered Magic
            </h1>

            {/* Description */}
            <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
              Generate high-quality scripts, edit videos, and optimize your content with
              advanced AI technology. Perfect for creators on any platform.
            </p>

            {/* Actions */}
            <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
              <Button size="lg" variant="default" asChild>
                <a href="/dashboard" className="min-w-[160px]">
                  Start Free Trial
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#demo" className="min-w-[160px]">
                  Watch Demo
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">
                TRUSTED BY CONTENT CREATORS FROM
              </p>
              <div className="flex justify-center items-center gap-8 text-muted-foreground">
                <Youtube className="h-8 w-8" />
                <Instagram className="h-8 w-8" />
                <YoutubeIcon className="h-8 w-8" />
              </div>
            </div>

            {/* Image with Glow */}
            <div className="relative pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup type="responsive">
                  <div className="aspect-video w-full max-w-3xl bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                    {/* Placeholder for app screenshot */}
                  </div>
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Everything You Need to Create
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform provides all the tools you need to create
              engaging content that stands out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 space-y-4 hover-scale"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start with our free plan and upgrade as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`glass-card p-8 space-y-6 ${
                  plan.popular ? "border-primary" : ""
                }`}
              >
                {plan.popular && (
                  <span className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Separator />
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Wand2 className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Content?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using our AI-powered platform
            to create amazing content.
          </p>
          <Button size="lg" className="min-w-[200px]">
            Start Creating Now
          </Button>
        </div>
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
  {
    icon: Youtube,
    title: "Multi-Platform Support",
    description: "Create and publish content for YouTube, Instagram, and TikTok.",
  },
  {
    icon: Wand2,
    title: "SEO Optimization",
    description: "Get AI-powered suggestions to improve your content's reach.",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    features: [
      "5 AI-generated videos",
      "Basic script generation",
      "Standard video quality",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "49",
    popular: true,
    features: [
      "Unlimited videos",
      "Advanced AI editing",
      "4K video quality",
      "Priority support",
      "Analytics dashboard",
    ],
  },
  {
    name: "Enterprise",
    price: "99",
    features: [
      "Custom branding",
      "Team collaboration",
      "API access",
      "24/7 support",
      "Advanced analytics",
      "Custom integrations",
    ],
  },
];

export default Index;
