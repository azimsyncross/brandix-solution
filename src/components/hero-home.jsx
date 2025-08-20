import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  TrendingUp,
  Target,
  Zap,
  Star,
  ChevronRight,
  Play,
  Sparkles,
} from "lucide-react";

export default function HomeHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const statsData = [
    { number: "500+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-secondary/10 to-background overflow-hidden flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Grid Pattern Overlay (Fixed) */}
        <div
          className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-50`}
        />

        <div className="container mx-auto max-w-7xl px-6 py-28 relative z-10">
          <motion.div
            className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column */}
            <div className="text-center lg:text-left">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary/70 text-sm font-medium mb-6"
              >
                <Star className="h-4 w-4 text-primary" />
                <span>Trusted by 500+ Companies</span>
                <Sparkles className="h-4 w-4 text-primary" />
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              >
                <span className="block text-foreground">Transform Your</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Digital Empire
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Skyrocket your revenue with data-driven marketing strategies that
                deliver{" "}
                <span className="text-primary font-semibold">10x ROI</span> and
                measurable growth in just 90 days.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
              >
                <motion.a
                  href="/contact-us"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-bold text-foreground transition-all duration-300 hover:from-primary/90 hover:to-accent/90 hover:shadow-2xl hover:shadow-primary/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity"></div>
                  <Zap className="mr-3 h-5 w-5 relative z-10" />
                  <span className="relative z-10">Start Growing Today</span>
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
                </motion.a>

                <motion.a
                  href="/service"
                  whileHover={{ scale: 1.02 }}
                  className="group inline-flex items-center justify-center rounded-2xl border-2 border-border bg-card/50 px-8 py-4 text-lg font-semibold text-muted-foreground transition-all hover:border-primary/50 hover:bg-card hover:text-foreground backdrop-blur-sm"
                >
                  <Play className="mr-3 h-5 w-5" />
                  Services
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-center"
              >
                {statsData.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="relative flex items-center justify-center">
              <motion.div
                className="absolute w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 20,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="relative grid grid-cols-2 gap-6 z-10"
                variants={containerVariants}
              >
                {/* Cards */}
                {[
                  {
                    icon: <BarChart className="h-8 w-8 text-primary" />,
                    title: "SEO Mastery",
                    desc: "Rank #1 on Google",
                    badge: "+250% Traffic",
                    bg: "from-primary/20 to-accent/20",
                    badgeBg: "bg-primary/10 text-primary/70",
                  },
                  {
                    icon: <TrendingUp className="h-8 w-8 text-accent" />,
                    title: "PPC Campaigns",
                    desc: "Maximum Conversions",
                    badge: "5x ROI Guaranteed",
                    bg: "from-accent/20 to-secondary/20",
                    badgeBg: "bg-accent/10 text-accent/70",
                  },
                  {
                    icon: <Target className="h-8 w-8 text-secondary" />,
                    title: "Social Media",
                    desc: "Viral Growth Strategy",
                    badge: "1M+ Reach",
                    bg: "from-secondary/20 to-primary/20",
                    badgeBg: "bg-secondary/10 text-secondary/70",
                  },
                  {
                    icon: <Sparkles className="h-8 w-8 text-muted-foreground" />,
                    title: "Full-Stack",
                    desc: "Complete Solution",
                    badge: "All-in-One",
                    bg: "from-muted-foreground/20 to-muted-foreground/10",
                    badgeBg: "bg-muted-foreground/20 text-muted-foreground/60",
                    premium: true,
                  },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    variants={floatingVariants}
                    whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 5 : -5 }}
                    className="group p-6 bg-card border border-border rounded-2xl backdrop-blur-xl transition-all duration-300 cursor-pointer relative overflow-hidden hover:shadow-lg hover:shadow-primary/20"
                  >
                    {card.premium && (
                      <div className="absolute top-2 right-2">
                        <div className="px-2 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold">
                          PREMIUM
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${card.bg} mb-4 group-hover:from-opacity-30 group-hover:to-opacity-30 transition-all`}
                      >
                        {card.icon}
                      </div>
                      <h3 className="font-bold text-foreground text-lg mb-2">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{card.desc}</p>
                      <div
                        className={`mt-3 px-3 py-1 rounded-full ${card.badgeBg} text-xs font-medium`}
                      >
                        {card.badge}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating Effects */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl"
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-secondary/20 to-muted-foreground/20 rounded-full blur-xl"
                animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: 2,
                }}
              />
            </div>
          </motion.div>

          {/* CTA Bottom Strip */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-card/50 backdrop-blur-xl border border-border">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-card"
                  ></div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-foreground font-semibold">
                  Join 500+ Growing Businesses
                </div>
                <div className="text-muted-foreground text-sm">
                  Start your transformation today
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
