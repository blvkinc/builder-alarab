import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Zap,
  Trophy,
  Heart,
  ArrowUp,
} from "lucide-react";
import gsap from "gsap";

export default function Variation3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentVariation, setCurrentVariation] = useState(3);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const variations = [
    { id: 1, name: "Modern Hero", path: "/" },
    { id: 2, name: "Split Screen", path: "/variation-2" },
    { id: 3, name: "Gradient Cards", path: "/variation-3" },
    { id: 4, name: "Dark Professional", path: "/variation-4" },
  ];

  const steps = [
    {
      step: "01",
      title: "100% Business Ownership",
      description: "Enjoy full control of your company with 100% foreign ownership in the UAE.",
    },
    {
      step: "02",
      title: "No Physical Presence Required",
      description: "Set up your company remotely — no need to be physically present in the UAE.",
    },
    {
      step: "03",
      title: "Low Corporate Tax",
      description: "Corporate tax is capped at just 9% on profits above AED 375,000, with smaller enterprises benefiting from a 0% rate.",
    },
    {
      step: "04",
      title: "Launch in Just 3 Days",
      description: "Get your business up and running in as little as 72 hours.",
    },
  ];

  const packages = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "E-Commerce Freezone Starter",
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
      color: "from-blue-500 to-cyan-500",
      popular: false,
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Ajman Value License",
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
      color: "from-brand-500 to-yellow-500",
      popular: true,
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "RAKEZ Growth License",
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
      color: "from-purple-500 to-pink-500",
      popular: false,
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Dubai Mainland Market Access",
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
      color: "from-green-500 to-teal-500",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "How long does it take to register a company in Dubai?",
      answer: "Most businesses can be registered within 1 to 3 weeks. Our process and understanding of the local regulations let us expedite the setup process; meaning your business can start operating as soon as possible.",
    },
    {
      question: "How much does it cost to set up a business in Dubai?",
      answer: "Generally costs can range from AED 15,000 to AED 50,000. We’ll give you tailored packages to your budget and business needs; all transparent to a tee.",
    },
    {
      question: "Do I need a local sponsor to start a business in the UAE?",
      answer: "Recent changes now allow 100% ownership of mainland businesses in many instances.",
    },
    {
      question: "What are the benefits of setting up a business in a Free Zone?",
      answer: "In addition to the ownership and tax perks, the UAE gives you specialized facilities and infrastructure tailored to your business activities. We help you identify exactly which Free Zone best aligns with your business vision.",
    },
  ];

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-neutral-100 fixed w-full z-50">
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
                href="#faq"
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
                href="#"
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
                href="#faq"
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
      <div className="bg-neutral-50 border-b mt-16">
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
      <section id="hero" className="relative pt-20 pb-32 overflow-hidden" ref={heroRef}>
        {/* Dubai Skyline Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/dubai-skyline.jpg)",
          }}
        ></div>
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/70 via-orange-50/60 to-yellow-50/70"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-orange-200/30 rounded-full blur-xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-brand-600/10 text-brand-700 border-brand-200">
              ⚡ Fastest Business Setup in UAE
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
              Start Your Business in the UAE with Confidence
            </h1>

            <p className="text-xl lg:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Trade License in UAE · Lease Agreement · Up to 5 Business Activities · Up to 5 Shareholders · LLC Structure with 100% Ownership
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 text-lg shadow-lg"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-8 py-4 text-lg"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Call Us</h3>
                  <p className="text-neutral-600">+971 4 123 4567</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Email Us</h3>
                  <p className="text-neutral-600">hello@uaebusiness.ae</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Visit Us</h3>
                  <p className="text-neutral-600">Dubai, UAE</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We've streamlined the business setup process to get you started
              quickly and efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-300 to-orange-300 transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section
        id="packages"
        className="py-20 bg-gradient-to-br from-neutral-50 to-brand-50/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Tailored solutions for every business size and requirement. All
              packages include expert support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${pkg.popular ? "ring-2 ring-brand-500" : ""}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-600 text-white">
                    Most Popular
                  </Badge>
                )}

                <div
                  className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-xl flex items-center justify-center mx-auto mb-6 text-white`}
                >
                  {pkg.icon}
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {pkg.title}
                  </h3>
                  <div className="text-3xl font-bold text-neutral-900 mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-neutral-600">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${pkg.popular ? "bg-brand-600 hover:bg-brand-700 text-white" : "bg-white border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50"}`}
                >
                  Choose Package
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Form Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Get Your Free Quote in 30 Seconds
            </h2>
            <p className="text-xl text-brand-100">
              No hidden fees, no commitments. Just honest pricing for your
              business setup.
            </p>
          </div>

          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <form className="grid md:grid-cols-4 gap-4">
              <Input
                placeholder="Your Name"
                className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30"
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30"
              />
              <select className="px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                <option className="text-neutral-900">Business Type</option>
                <option className="text-neutral-900">Trading</option>
                <option className="text-neutral-900">Consulting</option>
                <option className="text-neutral-900">Technology</option>
                <option className="text-neutral-900">Other</option>
              </select>
              <Button className="bg-white text-brand-600 hover:bg-neutral-100 font-semibold">
                Get Quote
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Questions & Answers
            </h2>
            <p className="text-xl text-neutral-600">
              Get answers to the most common questions about UAE business setup
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="p-6 border border-neutral-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Business in the Emirates?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            At every step, we provide clear and expert guidance, making sure your path to success is as smooth as possible. No jargon, no confusion—just results.
          </p>
          <Button
            size="lg"
            className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 text-lg"
          >
            Start Your Journey Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Floating Scroll-to-Hero Arrow Button */}
      {showScrollTop && (
        <button
          onClick={scrollToHero}
          className="fixed bottom-6 right-6 z-50 bg-brand-600 hover:bg-brand-700 text-white w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to Hero"
        >
          <ArrowUp className="w-7 h-7" />
        </button>
      )}

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

      {/* Partners Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-neutral-600 mb-8">
            Our Channel Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <img src="/partners/Ajman-Free-Zone@4x.png" alt="Ajman Free Zone" className="h-16 object-contain" />
            <img src="/partners/dubai-economy-new-seeklogo.png" alt="Dubai Economy" className="h-16 object-contain" />
            <img src="/partners/IFZA-min-1024x250-1.webp" alt="IFZA" className="h-16 object-contain" />
            <img src="/partners/Meydan_updated-min-1024x250-1.webp" alt="Meydan" className="h-16 object-contain" />
            <img src="/partners/SPC_new-min-1024x250-1.webp" alt="SPC" className="h-16 object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
