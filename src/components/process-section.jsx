import { motion } from "framer-motion";
import { ScanSearch, Puzzle, Rocket, TrendingUp } from "lucide-react";
import SectionHeader from "./section-header";

const processSteps = [
  {
    icon: ScanSearch,
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business, goals, and audience to build a tailored, data-backed strategy.",
  },
  {
    icon: Puzzle,
    title: "Implementation",
    description:
      "Our experts execute the plan, from setting up campaigns and optimizing your site to creating compelling content.",
  },
  {
    icon: Rocket,
    title: "Launch & Monitor",
    description:
      "We launch the campaigns and continuously monitor performance, making real-time adjustments for maximum impact.",
  },
  {
    icon: TrendingUp,
    title: "Analysis & Growth",
    description:
      "We analyze the data, provide transparent reports, and refine our strategy to drive continuous, sustainable growth.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProcessSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionHeader
          tagline="Our Method"
          title="Our Strategic Process"
          description="A proven, transparent process designed to deliver exceptional results every time."
        />

        <div className="relative mt-16">
          {/* Animated vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 to-transparent"
            aria-hidden="true"
          />

          <motion.div
            className="space-y-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start gap-6"
                >
                  {/* Numbered Glow Dot */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-card border-2 border-primary shadow-lg shadow-primary/10">
                    <span className="text-primary font-semibold text-lg">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="bg-card border border-border backdrop-blur-md p-6 rounded-xl w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Glowing Blobs for background flair */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-200" />
    </section>
  );
}
