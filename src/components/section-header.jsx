import { motion } from "framer-motion";

export default function SectionHeader({ tagline, title, description }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative text-center max-w-3xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Optional glowing background behind title */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      </div>

      {tagline && (
        <motion.p
          variants={itemVariants}
          className="relative z-10 text-sm font-semibold tracking-wider uppercase text-primary"
        >
          {tagline}
        </motion.p>
      )}

      <motion.h2
        variants={itemVariants}
        className="relative z-10 mt-2 text-4xl sm:text-5xl font-extrabold text-foreground leading-tight"
      >
        {title}
        {/* Animated underline */}
        <motion.span
          className="block h-1 w-20 mx-auto mt-3 bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ transformOrigin: "center" }}
        />
      </motion.h2>

      {description && (
        <motion.p
          variants={itemVariants}
          className="relative z-10 mt-5 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
