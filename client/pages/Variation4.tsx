import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Menu,
  X,
  Building,
  Briefcase,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

export default function Variation4() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentVariation, setCurrentVariation] = useState(4);

  const variations = [
    { id: 1, name: "Modern Hero", path: "/" },
    { id: 2, name: "Split Screen", path: "/variation-2" },
    { id: 3, name: "Gradient Cards", path: "/variation-3" },
    { id: 4, name: "Dark Professional", path: "/variation-4" },
  ];

  const achievements = [
    {
      number: "15,000+",
      label: "Companies Established",
      icon: <Building className="w-6 h-6" />,
    },
    {
      number: "99.2%",
      label: "Success Rate",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "50+",
      label: "Expert Consultants",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "24/7",
      label: "Premium Support",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const services = [
    {
      icon: <Building className="w-12 h-12" />,
      title: "Company Formation",
      description:
        "Complete business registration and licensing across all UAE jurisdictions including mainland and free zones.",
      features: [
        "Trade License",
        "Memorandum of Association",
        "Share Certificates",
        "Company Seal",
      ],
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Corporate Banking",
      description:
        "Establish banking relationships with top-tier financial institutions for seamless business operations.",
      features: [
        "Account Opening",
        "Multi-currency Support",
        "Online Banking",
        "Credit Facilities",
      ],
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Visa Services",
      description:
        "Comprehensive visa processing for business owners, employees, and family members.",
      features: [
        "Investor Visa",
        "Employment Visa",
        "Family Visa",
        "Golden Visa",
      ],
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Business Advisory",
      description:
        "Strategic consulting and ongoing compliance support to ensure long-term business success.",
      features: [
        "Tax Planning",
        "Legal Compliance",
        "Audit Support",
        "Business Growth",
      ],
    },
  ];

  const industries = [
    "Technology & Software",
    "Trading & Commerce",
    "Financial Services",
    "Healthcare & Medical",
    "Real Estate",
    "Manufacturing",
    "Consulting Services",
    "E-commerce & Retail",
  ];

  const testimonials = [
    {
      name: "Alexander Rodriguez",
      title: "CEO, TechVentures DMCC",
      content:
        "The professionalism and expertise demonstrated throughout our company setup was exceptional. We were operational within 8 days.",
      image: "👨‍💼",
    },
    {
      name: "Dr. Fatima Al-Zahra",
      title: "Founder, MedConsult FZ",
      content:
        "Outstanding service quality and attention to detail. The team handled every aspect of our healthcare business licensing seamlessly.",
      image: "👩‍⚕️",
    },
    {
      name: "James Chen",
      title: "Director, Global Trade LLC",
      content:
        "Their deep understanding of UAE business regulations and proactive approach made our expansion into MENA markets effortless.",
      image: "👨‍💻",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Navigation */}
      <nav className="bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-white">
                <span className="text-white">🏢</span> UAE Business
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Jurisdictions
              </a>
              <a
                href="#"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                FAQ
              </a>
              <Button className="bg-brand-600 hover:bg-brand-700 text-white border-0 px-6 py-2 text-sm font-medium rounded-full">
                Get Started
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-300 hover:text-white p-2"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-800 bg-neutral-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-neutral-300"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-neutral-300"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-neutral-300"
              >
                Services
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-neutral-300"
              >
                Jurisdictions
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-neutral-300"
              >
                FAQ
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white border-0 rounded-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Variation Selector */}
      <div className="bg-neutral-800 border-b border-neutral-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-400">Landing Page Variations:</p>
            <div className="flex space-x-2">
              {variations.map((variation) => (
                <Link
                  key={variation.id}
                  to={variation.path}
                  className={`px-3 py-1 rounded-md text-sm transition-colors ${
                    variation.id === currentVariation
                      ? "bg-brand-600 text-white"
                      : "bg-neutral-700 text-neutral-300 hover:bg-neutral-600"
                  }`}
                >
                  {variation.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className={
              'bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] w-full h-full'
            }
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-6 bg-brand-600/20 text-brand-400 border-brand-600/30">
                🏆 Premium Business Setup Solutions
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The Road to
                <br />
                <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                  Scalability
                </span>
                <br />
                Starts Today
              </h1>

              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                Affordable UAE business setup packages tailored for freelancers, startups, and growing enterprises.
                Start your business in the UAE with the confidence to succeed.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-600/20 rounded-lg flex items-center justify-center text-brand-400">
                      {achievement.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-neutral-400">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 text-lg"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 px-8 py-4 text-lg"
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            {/* Right Form */}
            <div>
              <Card className="p-8 bg-neutral-800/50 backdrop-blur-sm border-neutral-700">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Executive Consultation Request
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        First Name *
                      </label>
                      <Input
                        placeholder="John"
                        className="bg-neutral-700/50 border-neutral-600 text-white placeholder-neutral-400 focus:border-brand-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Last Name *
                      </label>
                      <Input
                        placeholder="Smith"
                        className="bg-neutral-700/50 border-neutral-600 text-white placeholder-neutral-400 focus:border-brand-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Corporate Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="john.smith@company.com"
                      className="bg-neutral-700/50 border-neutral-600 text-white placeholder-neutral-400 focus:border-brand-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      placeholder="+971 50 123 4567"
                      className="bg-neutral-700/50 border-neutral-600 text-white placeholder-neutral-400 focus:border-brand-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Company Name
                    </label>
                    <Input
                      placeholder="Your Company Ltd."
                      className="bg-neutral-700/50 border-neutral-600 text-white placeholder-neutral-400 focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Industry Sector
                    </label>
                    <select className="w-full px-3 py-2 bg-neutral-700/50 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent">
                      <option>Select your industry</option>
                      <option>Technology & Software</option>
                      <option>Financial Services</option>
                      <option>Trading & Commerce</option>
                      <option>Healthcare & Medical</option>
                      <option>Manufacturing</option>
                      <option>Consulting Services</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white py-3">
                    Request Executive Consultation
                  </Button>

                  <p className="text-xs text-neutral-400 text-center">
                    Confidential consultation. No spam. Unsubscribe anytime.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              End-to-end corporate services designed to establish and grow your
              business in the UAE's dynamic economic landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-neutral-900/50 border-neutral-700 hover:border-brand-600/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-brand-600/20 rounded-xl flex items-center justify-center text-brand-400 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-brand-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-neutral-400">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Specialized expertise across diverse industry sectors with
              tailored solutions for each business vertical.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="p-6 bg-neutral-800/50 border-neutral-700 hover:bg-neutral-800 hover:border-brand-600/50 transition-all duration-300 text-center"
              >
                <h3 className="font-medium text-white">{industry}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-neutral-300">
              Trusted by industry leaders and innovative entrepreneurs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-neutral-900/50 border-neutral-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-400">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-brand-600 to-brand-700"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Establish Your UAE Presence?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Connect with our senior consultants to discuss your business
            objectives and explore the optimal setup strategy for your UAE
            venture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-600 hover:bg-neutral-100 px-8 py-4 text-lg font-semibold"
            >
              Schedule Executive Meeting
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-600 px-8 py-4 text-lg font-semibold"
            >
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-white mb-4">
                UAE<span className="text-brand-500">Business</span>
              </div>
              <p className="text-neutral-400 mb-6 max-w-md">
                The UAE's premier business setup consultancy, providing
                comprehensive corporate services with unmatched expertise and
                dedication.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white cursor-pointer">
                  📧
                </div>
                <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white cursor-pointer">
                  📱
                </div>
                <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white cursor-pointer">
                  🌐
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Company Formation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Banking Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Visa Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Legal Advisory
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-neutral-400">
                <li>Dubai, UAE</li>
                <li>+971 4 123 4567</li>
                <li>contact@uaebusiness.ae</li>
                <li>24/7 Support Available</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 UAEBusiness. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-neutral-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
