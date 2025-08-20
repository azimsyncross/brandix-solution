import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import contactInfo from "../utils/contactInfo";

export default function Footer() {
  const companyLinks = [
    { to: "/about", label: "About Us" },
    { to: "/service", label: "Services" },
    { to: "/contact-us", label: "Contact" },
  ];

  const legalLinks = [
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/terms-conditions", label: "Terms & Conditions" },
    { to: "/refund-policy", label: "Refund Policy" },
  ];

  const contactEmail = contactInfo.email;
  const contactPhone = contactInfo.phone;
  const contactAddress = contactInfo.address;

  return (
    <footer className="relative bg-background text-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, var(--color-primary) 0%, transparent 50%), radial-gradient(circle at 75% 75%, var(--color-secondary) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="relative container mx-auto max-w-7xl px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center mb-6">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="BRANDIX SOLUTIONS Logo"
                  className="h-28 w-auto filter drop-shadow-lg"
                />
                <div className="absolute -inset-2 bg-primary rounded-lg opacity-20 blur"></div>
              </div>
              {/* <div className="ml-4">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  BRANDIX SOLUTIONS
                </div>
                <div className="text-sm text-muted-foreground">Marketing Excellence</div>
              </div> */}
            </div>

            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
              Transform your digital presence with our comprehensive marketing
              solutions. We craft strategic campaigns that drive growth,
              maximize ROI, and elevate your brand in the digital landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-xl text-foreground mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded"></div>
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    className="group flex items-center text-muted-foreground hover:text-foreground transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                    <span className="group-hover:translate-x-2 transition-transform">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-xl text-foreground mb-6 relative">
              Legal
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded"></div>
            </h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    className="group flex items-center text-muted-foreground hover:text-foreground transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                    <span className="group-hover:translate-x-2 transition-transform">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment */}
          <div className="lg:col-span-3">
            {/* Contact Info */}
            <h4 className="font-bold text-xl text-foreground mb-6 relative">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="text-muted-foreground text-sm leading-relaxed">
                  {contactAddress}
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <a
                  href="mailto:fisherandrewbgl120@hotmail.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {contactEmail}
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <a
                  href="tel:+17347671910"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {contactPhone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright with payment icons */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t-primary border-t mt-12 pt-6">
          <div className="text-muted-foreground text-sm">
            Copyright &copy; 2023 BRANDIX SOLUTIONS. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <div className="flex space-x-4">
              <div className="bg-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/visa.svg"
                  alt="Visa"
                  className="h-6 object-contain"
                />
              </div>
              <div className="bg-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/mastercard.svg"
                  alt="Mastercard"
                  className="h-6 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
