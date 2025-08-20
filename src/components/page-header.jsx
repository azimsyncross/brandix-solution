import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHeader({ title, description, breadcrumbs }) {
  return (
    <div className="relative bg-gradient-to-b from-primary/20 to-transparent py-20 sm:py-28 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-2xl"></div>

      <motion.div
        className="container mx-auto max-w-7xl px-4 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground drop-shadow-lg sm:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {description}
          </p>
        )}

        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="breadcrumb"
            className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground select-none"
          >
            <Link
              to="/"
              className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
            >
              Home
              <ChevronRight className="h-4 w-4" />
            </Link>

            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <span key={index} className="flex items-center gap-1">
                  {!isLast && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
                  {crumb.link && !isLast ? (
                    <Link
                      to={crumb.link}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      className={`${
                        isLast ? "text-primary font-semibold" : "text-muted-foreground"
                      }`}
                      aria-current={isLast ? "page" : undefined}
                    >
                      {crumb.label}
                    </span>
                  )}
                </span>
              );
            })}
          </nav>
        )}
      </motion.div>
    </div>
  );
}
