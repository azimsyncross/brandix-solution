import { motion } from "framer-motion";

export default function AboutStorySection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse mix-blend-soft-light" />
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-violet-600/20 rounded-full blur-2xl mix-blend-multiply" />

      <div className="relative container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left Column: Our Story */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <h2 className="text-5xl font-extrabold text-foreground mb-8 leading-tight drop-shadow-md">
              Our Story
            </h2>
            <article className="space-y-7 text-muted-foreground prose prose-invert lg:prose-xl max-w-none">
              <p>
                BRANDIX SOLUTIONS was established with the vision of making
                sophisticated digital marketing strategies accessible to
                businesses across all sectors. We identified the increasing
                demand for outcome-focused marketing solutions that deliver
                authentic business transformation.
              </p>
              <p>
                Our journey started through comprehensive research into digital
                marketplace challenges. We’ve concentrated on creating strategic
                frameworks and innovative solutions that tackle these
                complexities through validated methodologies and
                success-oriented principles.
              </p>
              <p>
                Today, we function as reliable marketing partners who comprehend
                your business objectives and develop customized solutions that
                accelerate expansion and establish market leadership in the
                digital realm.
              </p>
            </article>
          </motion.div>

          {/* Right Column: Vision & Goal Card */}
          <motion.div
            className="bg-background/70 border border-border rounded-2xl p-10 shadow-lg space-y-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
          >
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4 border-b border-primary/30 pb-2">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To supply businesses with transformative digital marketing
                solutions that are strategically robust, outcome-focused, and
                engineered to scale with business expansion and market
                evolution.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4 border-b border-primary/30 pb-2">
                Our Goal
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the premier digital marketing agency for businesses
                pursuing professional excellence, innovative solutions, and
                quantifiable results that drive significant business growth.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
