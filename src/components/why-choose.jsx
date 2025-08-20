import { motion } from "framer-motion";
import { BarChartHorizontal, ShieldCheck, Users } from "lucide-react";
import SectionHeader from "./section-header";

const reasonsData = [
  {
    icon: BarChartHorizontal,
    title: "Data-Driven Strategies",
    description:
      "Every decision is backed by data. We analyze, iterate, and optimize for maximum ROI, ensuring your marketing budget works harder.",
  },
  {
    icon: Users,
    title: "A Team of Experts",
    description:
      "Our team consists of certified professionals and industry veterans who are passionate about digital marketing and dedicated to your success.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Reporting",
    description:
      "No black boxes. You get clear, comprehensive reports that show you exactly where your money is going and the results we're achieving.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionHeader
          tagline="Our Advantage"
          title="Why Choose BRANDIX SOLUTIONS?"
          description="We're more than just a marketing agency; we're your dedicated growth partner."
        />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {reasonsData.map((reason) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                variants={cardVariants}
                className="group relative p-8 rounded-xl border border-border bg-card backdrop-blur-md shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 border border-primary/30 shadow-lg mb-6 mx-auto">
                  <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground text-center">
                  {reason.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-sm text-center">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Background accent blobs */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-200" />
    </section>
  );
}
