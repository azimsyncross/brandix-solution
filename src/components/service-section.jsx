import { motion } from "framer-motion";
import {
  Search,
  Megaphone,
  BarChart2,
  Users,
  Mail,
  PencilRuler,
  Check,
} from "lucide-react";
import SectionHeader from "./section-header";

const servicesData = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost visibility and rank #1 on Google.",
    points: ["Keyword Research", "On/Off-Page SEO", "Technical Audits"],
    price: "499",
  },
  {
    icon: Megaphone,
    title: "PPC Advertising",
    description: "Target the right audience with precision.",
    points: ["Google Ads", "Social Ads", "Conversion Tracking"],
    price: "799",
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Grow engagement and reach millions.",
    points: ["Content Strategy", "Community Growth", "Influencer Outreach"],
    price: "649",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Convert leads with smart funnels.",
    points: ["Automation", "Newsletter Design", "A/B Testing"],
    price: "399",
  },
  {
    icon: PencilRuler,
    title: "Content Creation",
    description: "Persuasive content that drives action.",
    points: ["Articles", "Video Scripts", "Infographics"],
    price: "599",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    description: "Decisions backed by insights.",
    points: ["Dashboards", "ROI Reports", "Monthly Insights"],
    price: "349",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader
          tagline="Our Services"
          title="Tailored for Growth"
          description="Experience premium digital solutions that scale your brand to new heights."
        />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative p-6 bg-card border border-border rounded-2xl backdrop-blur-xl hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>

              {/* Feature Points */}
              <ul className="space-y-2 text-sm mb-6">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-primary mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-muted-foreground text-sm">
                  Starts at{" "}
                  <span className="text-card-foreground font-semibold">
                    ${service.price}
                  </span>
                  /mo
                </span>
                <a
                  href="/contact-us"
                  className="text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background blur or pattern (optional matching glow) */}
      <div className="absolute -top-20 -left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
    </section>
  );
}
