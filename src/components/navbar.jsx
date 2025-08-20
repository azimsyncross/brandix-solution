import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/service", label: "Services" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-conditions", label: "Terms & Conditions" },
  { to: "/contact-us", label: "Contact Us" },
];

// Replace this with your actual logo import or URL
const logoSrc = "/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6 relative">
          <a href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 0, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-1 ">
                {/* Logo Image */}
                <img
                  src={logoSrc}
                  alt="Logo"
                  className="h-24 w-auto block rounded-xl"
                />
              </div>
            </motion.div>
            {/* <span className="font-bold text-xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              BRANDIX SOLUTIONS
            </span> */}
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <a
                  href={link.to}
                  onClick={() => setActiveLink(link.to)}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-primary group ${
                    activeLink === link.to
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="/contact-us"
                className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:from-primary/90 hover:to-accent/90 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <Sparkles className="mr-2 h-4 w-4 relative z-10" />
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
              </a>
            </motion.div>
          </div>

          <div className="lg:hidden">
            <motion.button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
              className="relative p-2 rounded-lg bg-card/50 border border-border text-muted-foreground hover:text-foreground hover:bg-card transition-all"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border z-40"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
            <div className="container mx-auto flex flex-col gap-6 p-6 relative">
              {navLinks.map((link) => (
                <motion.div key={link.to} variants={linkVariants}>
                  <a
                    href={link.to}
                    onClick={() => {
                      setActiveLink(link.to);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-base font-medium transition-colors hover:text-primary ${
                      activeLink === link.to
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              <motion.div variants={linkVariants}>
                <a
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="group mt-4 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-foreground hover:from-primary/90 hover:to-accent/90"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
