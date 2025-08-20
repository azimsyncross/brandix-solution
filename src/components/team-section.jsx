import { motion } from "framer-motion";
import { Mail, MapPin, Phone, User } from "lucide-react";
import contactInfo from "../utils/contactInfo";
import SectionHeader from "./section-header";

const teamData = [
  {
    name: contactInfo.contactPerson,
    title: contactInfo.contactPersonRole,
    icon: User,
    bio: `With comprehensive expertise in digital marketing strategy, ${contactInfo.contactPerson} directs our company vision and client partnerships. A recognized authority in growth acceleration and business transformation, he established BRANDIX SOLUTIONS with the mission to enable businesses to achieve digital marketplace excellence.`,
    tags: ["Strategic Leadership", "Client Success", "Growth Expert"],
    contact: {
      email: contactInfo.email,
      phone: contactInfo.phone,
      location: contactInfo.address,
    },
  },
  // Add more members here as needed
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TeamSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader
          tagline="Our Leaders"
          title="Leadership Team"
          description="Guided by our visionary founder and backed by a committed team of marketing professionals who contribute expertise and enthusiasm to every project."
        />

        <div className="max-w-5xl mx-auto mt-12">
          <h3 className="text-center text-2xl font-semibold text-foreground mb-10">
            Company Leadership
          </h3>
          <div className="space-y-10">
            {teamData.map((member) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-secondary/20 border border-border rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {/* Left side: Bio */}
                  <div className="md:col-span-2 flex flex-col">
                    <member.icon
                      aria-label={`${member.name} icon`}
                      className="h-10 w-10 text-primary mb-4"
                    />
                    <h4 className="text-3xl font-bold text-foreground leading-tight">
                      {member.name}
                    </h4>
                    <p className="text-primary font-semibold text-lg mt-1">
                      {member.title}
                    </p>
                    <p className="mt-6 text-muted-foreground flex-grow leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right side: Contact Info */}
                  <div className="md:border-l md:border-border md:pl-10">
                    <h5 className="font-semibold text-foreground text-lg mb-6">
                      Contact Information
                    </h5>
                    <div className="space-y-6 text-sm text-muted-foreground">
                      <div className="flex items-start gap-4">
                        <Mail
                          aria-label="Email icon"
                          className="h-6 w-6 text-primary mt-1 flex-shrink-0"
                        />
                        <div>
                          <p className="text-foreground font-semibold">Email</p>
                          <p>{member.contact.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Phone
                          aria-label="Phone icon"
                          className="h-6 w-6 text-primary mt-1 flex-shrink-0"
                        />
                        <div>
                          <p className="text-foreground font-semibold">Phone</p>
                          <p>{member.contact.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <MapPin
                          aria-label="Location icon"
                          className="h-6 w-6 text-primary mt-1 flex-shrink-0"
                        />
                        <div>
                          <p className="text-foreground font-semibold">
                            Office Location
                          </p>
                          <p className="whitespace-pre-line">
                            {member.contact.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
