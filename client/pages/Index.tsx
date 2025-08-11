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
  Globe,
  Shield,
  Star,
  Menu,
  X,
  MessageCircle,
  Clock,
  FileText,
  Award,
  Building2,
  Phone,
} from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentVariation, setCurrentVariation] = useState(1);

  const variations = [
    { id: 1, name: "Modern Hero", path: "/" },
    { id: 2, name: "Split Screen", path: "/variation-2" },
    { id: 3, name: "Gradient Cards", path: "/variation-3" },
    { id: 4, name: "Dark Professional", path: "/variation-4" },
  ];

  const partners = [
    { name: "Emirates NBD", logo: "🏦" },
    { name: "ADCB", logo: "🏛️" },
    { name: "RAKBANK", logo: "🏢" },
    { name: "HSBC", logo: "🏪" },
    { name: "IFZA", logo: "🏭" },
  ];

  const trustIndicators = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "DED Approved",
      description: "Authorized by Dubai Department of Economic Development",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Legal Compliance",
      description: "Full government approval and registration",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "5-Star Rated",
      description: "Trusted by 10,000+ successful entrepreneurs",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "7-Day Setup",
      description: "Fastest business registration in UAE",
    },
  ];

  const jurisdictions = [
    {
      title: "Dubai Free Zones",
      description: "100% foreign ownership, zero tax",
      features: ["DMCC", "JAFZA", "DAFZA", "IFZA"],
      price: "From AED 8,500",
      popular: true,
    },
    {
      title: "Dubai Mainland",
      description: "Trade anywhere in UAE & GCC",
      features: [
        "Local Partner Required",
        "Wider Business Scope",
        "Government Contracts",
      ],
      price: "From AED 15,000",
      popular: false,
    },
    {
      title: "Abu Dhabi Global Market",
      description: "International financial center",
      features: ["Financial Services", "Asset Management", "FinTech"],
      price: "From AED 12,000",
      popular: false,
    },
  ];

  const setupTimeline = [
    {
      step: "1",
      title: "Free Consultation",
      description: "Discuss your business goals and requirements",
      duration: "30 minutes",
    },
    {
      step: "2",
      title: "Document Preparation",
      description: "Prepare and notarize all required documents",
      duration: "1-2 days",
    },
    {
      step: "3",
      title: "License Application",
      description: "Submit application to relevant authorities",
      duration: "3-5 days",
    },
    {
      step: "4",
      title: "Approvals & Setup",
      description: "Receive approvals and complete registration",
      duration: "2-3 days",
    },
    {
      step: "5",
      title: "Bank Account & Visa",
      description: "Open bank account and process visas",
      duration: "5-7 days",
    },
  ];

  const documentChecklist = [
    "Passport copies of shareholders/directors",
    "No objection certificate (if employed)",
    "Educational certificates (attested)",
    "Proof of address (utility bill)",
    "Business plan and activity description",
    "Initial approval certificate",
    "Memorandum of Association",
    "Lease agreement (if applicable)",
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

  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "100% Foreign Ownership",
      description:
        "Own your business completely without local partnership requirements",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Tax-Free Environment",
      description:
        "Zero corporate and personal income tax in designated free zones",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Strategic Location",
      description: "Gateway to Middle East, Africa, and Asia markets",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-neutral-100">
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
                href="#pricing"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
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
          <div className="md:hidden border-t border-neutral-100 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-neutral-600"
              >
                Home
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-sm font-medium text-neutral-600"
              >
                Pricing
              </a>
              <a
                href="#"
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

      {/* Hero Section */}
      <section className="relative bg-white text-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-brand-50/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-8 bg-brand-50 text-brand-700 border-brand-200 px-4 py-2">
                ✨ Trusted by 10,000+ Businesses
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                The Road to
                <br />
                <span className="text-brand-600">Scalability</span>
                <br />
                <span className="text-neutral-500 font-normal">
                  Starts Today
                </span>
              </h1>

              <p className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-lg">
                Affordable UAE business setup packages tailored for freelancers, startups, and growing enterprises.
                Start your business in the UAE with the confidence to succeed.
              </p>

              <div className="space-y-3 mb-10">
                {[
                  "Free consultation & business planning",
                  "100% government-approved processes",
                  "Fast 7-14 day setup completion",
                  "Ongoing business support & compliance",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-500 mr-3 flex-shrink-0" />
                    <span className="text-neutral-600 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-full"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Consultation
                </Button>
              </div>

              <div className="mt-8 text-sm text-neutral-500">
                🔒 No hidden fees • 💯 Money-back guarantee • ⚡ Setup in 7 days
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:pl-8">
              <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-2xl">
                <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
                  Get Your Free Quote
                </h3>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-3">
                      Full Name *
                    </label>
                    <Input
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border-neutral-200 focus:border-brand-500 focus:ring-brand-500/20 py-3"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-3">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl border-neutral-200 focus:border-brand-500 focus:ring-brand-500/20 py-3"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-3">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      placeholder="+971 50 123 4567"
                      className="w-full rounded-xl border-neutral-200 focus:border-brand-500 focus:ring-brand-500/20 py-3"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-3">
                      Business Type
                    </label>
                    <select className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500">
                      <option>Select business type</option>
                      <option>Trading</option>
                      <option>Consulting</option>
                      <option>Technology</option>
                      <option>Manufacturing</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white py-4 rounded-xl font-medium">
                    Get Free Consultation
                  </Button>

                  <p className="text-xs text-neutral-500 text-center">
                    By submitting, you agree to our Terms & Privacy Policy
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Trusted & Authorized Business Setup Partner
            </h2>
            <p className="text-neutral-600">
              Licensed and approved by UAE government authorities
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
                  {indicator.icon}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {indicator.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {indicator.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-neutral-600 mb-8">
            Our Channel Partners
          </h2>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center space-x-2 text-2xl">
                <span>{partner.logo}</span>
                <span className="font-medium text-neutral-700">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE Jurisdictions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Choose Your UAE Business Jurisdiction
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Different business setup options to match your specific needs and
              industry requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {jurisdictions.map((jurisdiction, index) => (
              <Card
                key={index}
                className={`relative p-8 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all ${jurisdiction.popular ? "ring-2 ring-brand-500 bg-brand-50/30" : "bg-white"}`}
              >
                {jurisdiction.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-600 text-white rounded-full px-4 py-1">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {jurisdiction.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {jurisdiction.description}
                  </p>
                  <div className="text-2xl font-bold text-brand-600">
                    {jurisdiction.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {jurisdiction.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-brand-500 mr-3 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-xl py-3 font-medium ${jurisdiction.popular ? "bg-brand-600 hover:bg-brand-700 text-white" : "bg-white border-2 border-neutral-200 text-neutral-700 hover:bg-neutral-50"}`}
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Timeline Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Your Business Setup Journey
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Simple 5-step process to get your UAE business up and running in
              just 7-14 days
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-brand-300 to-brand-500"></div>

            <div className="grid md:grid-cols-5 gap-8">
              {setupTimeline.map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-2">
                    {item.description}
                  </p>
                  <Badge className="bg-brand-100 text-brand-700 text-xs">
                    {item.duration}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Checklist Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Required Documents Checklist
            </h2>
            <p className="text-xl text-neutral-600">
              Prepare these documents to speed up your business setup process
            </p>
          </div>

          <Card className="p-8 bg-neutral-50 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              {documentChecklist.map((document, index) => (
                <div key={index} className="flex items-start">
                  <FileText className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{document}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-xl">
                Download Complete Checklist
              </Button>
            </div>
          </Card>
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
              <Card
                key={index}
                className={`relative p-8 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all ${plan.isPopular ? "ring-2 ring-brand-500 bg-brand-50/30" : "bg-white"}`}
              >
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
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-600/20 text-brand-400">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Trusted by 10,000+ Successful Entrepreneurs
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              See how we've helped businesses like yours establish and thrive in
              the UAE
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 bg-neutral-800/50 border-neutral-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MR
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Mohammed Rahman
                  </div>
                  <div className="text-sm text-neutral-400">
                    Tech Solutions DMCC
                  </div>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed italic mb-4">
                "UAE Business Setup made our company formation incredibly
                smooth. We were operational in Dubai within 8 days, and their
                team handled everything from licensing to bank account opening."
              </p>
              <div className="text-brand-400 text-sm">
                ⭐⭐⭐⭐⭐ Setup completed in 8 days
              </div>
            </Card>

            <Card className="p-8 bg-neutral-800/50 border-neutral-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SJ
                </div>
                <div>
                  <div className="font-semibold text-white">Sarah Johnson</div>
                  <div className="text-sm text-neutral-400">
                    Global Trading LLC
                  </div>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed italic mb-4">
                "Professional service from start to finish. They guided us
                through mainland setup, helped with local partner arrangements,
                and we're now trading across the entire GCC region."
              </p>
              <div className="text-brand-400 text-sm">
                ⭐⭐⭐⭐⭐ AED 2.5M annual revenue
              </div>
            </Card>

            <Card className="p-8 bg-neutral-800/50 border-neutral-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  DK
                </div>
                <div>
                  <div className="font-semibold text-white">David Kim</div>
                  <div className="text-sm text-neutral-400">
                    FinTech Innovations
                  </div>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed italic mb-4">
                "Exceptional support for our ADGM license. Their expertise in
                financial services regulations saved us months of back-and-forth
                with authorities. Highly recommended!"
              </p>
              <div className="text-brand-400 text-sm">
                ⭐⭐⭐⭐⭐ ADGM License approved
              </div>
            </Card>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-600/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-neutral-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Business in the Emirates?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who chose UAE as their
            business destination. Get expert guidance from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-brand-600 hover:bg-neutral-100 px-8 py-4 rounded-xl"
            >
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Now
            </Button>
          </div>
          <div className="text-brand-100 text-sm">
            📞 +971 4 123 4567 • 📧 hello@uaebusiness.ae • ⏰ Available 24/7
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
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
