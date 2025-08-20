import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import SectionHeader from "./section-header";

const storiesData = [
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200",
    category: "E-commerce",
    title: "250% Increase in Organic Traffic for 'Urban Kicks'",
    description:
      "A comprehensive SEO and content strategy catapulted this online sneaker store to the top of search results.",
    results: [
      "Doubled conversion rate",
      "Ranked #1 for 15+ keywords",
      "Reduced ad spend by 40%",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200",
    category: "SaaS",
    title: "Generated 5,000+ MQLs for 'InnovateAI'",
    description:
      "Through targeted PPC and LinkedIn campaigns, we fueled the sales pipeline for a leading AI startup.",
    results: [
      "30% lower cost-per-lead",
      "Expanded into 3 new markets",
      "Achieved a 5x ROAS",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200",
    category: "Local Business",
    title: "Local SEO Dominance for 'The Corner Cafe'",
    description:
      "We put a beloved local cafe on the map, driving a 70% increase in foot traffic through local SEO.",
    results: [
      "Top 3 in Google Maps Pack",
      "5-star reviews increased by 150%",
      "Website bookings up by 200%",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function SuccessStoriesSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader
          tagline="Proven Results"
          title="Our Success Stories"
          description="We don't just talk the talk. See how we've transformed businesses like yours."
        />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {storiesData.map((story) => (
            <motion.div
              key={story.title}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card backdrop-blur-xl shadow-md hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Image with overlay */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={story.image}
                  alt={story.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {story.category}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-card-foreground">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {story.description}
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-card-foreground/80 mb-2">
                    Key Wins:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {story.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <Zap className="h-4 w-4 text-primary mt-0.5" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Glowing Background Blobs */}
      <div className="absolute -top-24 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-300" />
    </section>
  );
}
