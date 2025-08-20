import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("loading");
    await new Promise((res) => setTimeout(res, 2000)); // Simulated API delay
    setFormState("success");
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background overflow-hidden">
      {/* Decorative blurred background dot */}
      <div className="absolute -top-16 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-600/5 rounded-full blur-2xl z-0" />

      <div className="relative z-10 container mx-auto max-w-3xl px-4 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-primary/10 rounded-full p-4 shadow-lg">
            <Mail className="h-10 w-10 text-primary" />
          </div>
        </div>

        <h2 className="text-4xl font-extrabold text-foreground">Stay Ahead of the Curve</h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Subscribe to our newsletter for the latest digital marketing insights, tips, and trends.
        </p>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-2 text-lg font-semibold text-green-500"
              >
                <CheckCircle className="w-6 h-6" />
                <span>Thanks for subscribing!</span>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={formState === "loading"}
                  className="w-full flex-grow px-4 py-3 rounded-md bg-background/70 border border-border focus:outline-none focus:ring-2 focus:ring-primary/60 shadow-md transition-all duration-200 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary/90 transition-all disabled:cursor-not-allowed disabled:bg-primary/50"
                >
                  {formState === "loading" ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
