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
  Clock,
  Star,
  Menu,
  X,
  Building2,
  Globe,
  Shield,
} from "lucide-react";

export default function Variation2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentVariation, setCurrentVariation] = useState(2);

  const variations = [
    { id: 1, name: "Modern Hero", path: "/" },
    { id: 2, name: "Split Screen", path: "/variation-2" },
    { id: 3, name: "Gradient Cards", path: "/variation-3" },
    { id: 4, name: "Dark Professional", path: "/variation-4" },
  ];

  const stats = [
    { number: "10,000+", label: "Businesses Launched" },
    { number: "98%", label: "Success Rate" },
    { number: "7-14", label: "Days Setup Time" },
    { number: "24/7", label: "Expert Support" },
  ];

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Business License",
      description:
        "Get your trade license approved through our streamlined process",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Free Zone Setup",
      description: "Access 100% foreign ownership in UAE free zones",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank Account",
      description: "Open corporate bank accounts with major UAE banks",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      company: "Tech Solutions FZ",
      content:
        "The entire process was seamless. Our business was up and running in just 10 days!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Global Trading LLC",
      content:
        "Exceptional service and support. Highly recommend for business setup in UAE.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Creative Agency",
      content:
        "Professional team that handled everything from A to Z. Very satisfied!",
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: "E-Commerce Freezone Starter",
      price: "AED 5,760",
      description: "Most Affordable Free Zone Company Setup",
      features: [
        "Freezone Business License",
        "Incorporation Certificate & Company Stamp",
        "Trade Name Reservation",
        "Lease Agreement (Virtual/Shared Office)",
        "Professional Business Consultancy",
        "(Government fees may apply)",
      ],
      isPopular: false,
    },
    {
      name: "Ajman Value License",
      price: "AED 10,800",
      description: "Best Value for Multiple UAE Residency Visas",
      features: [
        "Ajman Freezone License + 10 Activities",
        "2 UAE Residency Visas Included",
        "Establishment Cards x2 + Emirates ID/Medical x2",
        "Unlimited Shareholders",
        "Professional Business Consultancy",
        "Free Virtual Office for 6 Months (Limited Offer)",
      ],
      isPopular: true,
    },
    {
      name: "RAKEZ Growth License",
      price: "AED 14,020",
      description: "Maximum Flexibility for Partnerships in UAE Free Zones",
      features: [
        "RAKEZ Business License + 10 Activities",
        "Accepts up to 50 Shareholders",
        "100% Foreign Ownership",
        "1 UAE Residency Visa + Medical/Emirates ID",
        "Professional Business Consultancy",
        "(All-inclusive pricing)",
      ],
      isPopular: false,
    },
    {
      name: "Dubai Mainland Market Access",
      price: "AED 23,000",
      description: "Zero Market Restrictions + Corporate Tax Registration",
      features: [
        "Dubai Mainland License (Service/Professional)",
        "1 Investor Visa + Local Service Agent",
        "Corporate Tax Registration UAE",
        "1-Year Virtual Office Ejari",
        "Memorandum of Association + Company Stamp",
        "Priority Government Liaison",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-neutral-100 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-neutral-900">
                <span className="text-neutral-900">🏢</span> UAE Business
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Jurisdictions
              </a>
              <a
                href="#"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                FAQ
              </a>
              <Button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 text-sm font-medium rounded-full">
                Get Started
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-600 hover:text-neutral-900 p-2"
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
          <div className="md:hidden border-t border-neutral-100 bg-white/95 backdrop-blur-md absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-neutral-600"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-neutral-600"
              >
                Pricing
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-sm font-medium text-neutral-600"
              >
                Services
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-neutral-600"
              >
                Jurisdictions
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-neutral-600"
              >
                FAQ
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white rounded-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Variation Selector */}
      <div className="bg-neutral-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-600">Landing Page Variations:</p>
            <div className="flex space-x-2">
              {variations.map((variation) => (
                <Link
                  key={variation.id}
                  to={variation.path}
                  className={`px-3 py-1 rounded-md text-sm transition-colors ${
                    variation.id === currentVariation
                      ? "bg-brand-600 text-white"
                      : "bg-white text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {variation.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Split Screen */}
      <section className="min-h-screen flex">
        {/* Left Side - Content */}
        <div className="flex-1 relative bg-white flex items-center justify-center px-8 lg:px-16">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{backgroundImage: 'url(https://alarabiyagroup.ae/wp-content/uploads/2025/06/CoverSlide4Dubai.png)'}}></div>
          <div className="absolute inset-0 bg-white/85"></div>
          <div className="max-w-xl">
            <Badge className="mb-6 bg-brand-100 text-brand-700 border-brand-200">
              🚀 Launch Your Business Fast
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              The Road to
              <br />
              <span className="text-brand-600">Scalability</span>
              <br />
              Starts Today
            </h1>

            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Affordable UAE business setup packages tailored for freelancers, startups, and growing enterprises.
              Start your business in the UAE with the confidence to succeed.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-brand-600">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-600 hover:bg-brand-700 text-white px-8"
              >
                Start Your Business
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-neutral-300 text-neutral-700 hover:bg-neutral-50"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 bg-gradient-to-br from-brand-600 to-brand-700 flex items-center justify-center px-8 lg:px-16 text-white">
          <div className="max-w-md w-full">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
              <p className="text-brand-100">
                Fill out the form below and our experts will contact you within
                24 hours
              </p>
            </div>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <Input
                    placeholder="Enter your full name"
                    className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+971 50 123 4567"
                    className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Business Type
                  </label>
                  <select className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option className="text-neutral-900">
                      Select business type
                    </option>
                    <option className="text-neutral-900">Trading</option>
                    <option className="text-neutral-900">Consulting</option>
                    <option className="text-neutral-900">Technology</option>
                    <option className="text-neutral-900">Manufacturing</option>
                    <option className="text-neutral-900">Other</option>
                  </select>
                </div>

                <Button className="w-full bg-white text-brand-600 hover:bg-neutral-100 py-3 font-semibold">
                  Get Free Consultation
                </Button>

                <p className="text-xs text-white/70 text-center">
                  By submitting, you agree to our Terms & Privacy Policy
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Complete Business Setup Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Everything you need to establish and grow your business in the
              UAE, handled by our team of experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-shadow bg-white"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-brand-100 text-brand-700">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Unlock the Perks of UAE Residency
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Establishing your business in the UAE opens doors to numerous
                benefits and opportunities for growth in one of the world's most
                business-friendly environments.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Zero Personal Income Tax",
                    description:
                      "Keep more of what you earn with UAE's tax-free personal income policy",
                  },
                  {
                    title: "100% Foreign Ownership",
                    description:
                      "Own your business completely without requiring local partners",
                  },
                  {
                    title: "Strategic Location",
                    description:
                      "Gateway between East and West with world-class infrastructure",
                  },
                  {
                    title: "Fast-Track Residency",
                    description:
                      "Get UAE residency visa as a business owner with your family",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-brand-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-neutral-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-100 to-brand-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏙️</div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    Dubai Skyline
                  </h3>
                  <p className="text-neutral-600">
                    Your business in the heart of innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Find the Perfect Plan for Your Business
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Affordable UAE business setup packages with transparent pricing.
              Choose the right jurisdiction and license type for your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative p-8 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all ${plan.isPopular ? 'ring-2 ring-brand-500 bg-brand-50/30' : 'bg-white'}`}>
                {plan.isPopular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-600 text-white rounded-full px-4 py-1">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-4">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-neutral-900 mb-3">
                    {plan.price}
                  </div>
                  <p className="text-neutral-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-brand-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-neutral-700 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-xl py-3 font-medium ${plan.isPopular ? "bg-brand-600 hover:bg-brand-700 text-white" : "bg-white border-2 border-neutral-200 text-neutral-700 hover:bg-neutral-50"}`}
                >
                  Enquire Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Launch Your UAE Business?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards business success in the UAE. Our experts
            are ready to guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4"
            >
              Start Your Business Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-4"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              UAE<span className="text-brand-500">Business</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Your trusted partner for business setup in the UAE
            </p>
            <div className="flex justify-center space-x-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
