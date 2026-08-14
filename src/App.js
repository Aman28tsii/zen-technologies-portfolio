import { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Star, Phone, Mail, ChevronDown,
  Globe, ShoppingBag, Smartphone, Layout, Coffee, 
  Users, BarChart, Shield, ExternalLink
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Globe, title: 'Website Development', desc: 'Custom, high-performance websites that convert visitors into customers.' },
    { icon: ShoppingBag, title: 'Restaurant POS Systems', desc: 'Seamless, integrated POS solutions for modern hospitality.' },
    { icon: Smartphone, title: 'Mobile App Development', desc: 'Native & cross-platform apps that deliver exceptional UX.' },
    { icon: Layout, title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces that users love.' },
    { icon: Coffee, title: 'Branding', desc: 'Distinctive brand identities that stand out in any market.' },
    { icon: Users, title: 'Social Media Management', desc: 'Strategic content & engagement to grow your audience.' },
    { icon: BarChart, title: 'SEO Optimization', desc: 'Data-driven SEO to dominate search rankings.' },
    { icon: Shield, title: 'Hosting & Maintenance', desc: 'Enterprise-grade hosting with proactive security.' },
  ];

  const projects = [
    { 
      title: 'EthioPOS - Restaurant Management', 
      category: 'Restaurant POS System', 
      tags: ['POS System', 'React', 'Node.js'], 
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format',
      liveLink: 'https://restaurant-pos-frontend-j7gd.onrender.com',
      description: 'Complete restaurant management system with inventory, orders, and real-time analytics.'
    },
    { 
      title: 'PharmaTrace Ethiopia', 
      category: 'Pharmaceutical Traceability', 
      tags: ['Healthcare', 'Blockchain', 'EFDA Compliant'], 
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format',
      liveLink: 'https://fili-pharma-traceability-ethiopia.onrender.com',
      description: 'EFDA compliant pharmaceutical tracking system from manufacturer to patient.'
    },
    { 
      title: 'Coffee Traceability System', 
      category: 'Farm to Export Tracking', 
      tags: ['Agriculture', 'Supply Chain', 'Traceability'], 
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format',
      liveLink: 'https://fili-coffee-traceability-frontend.onrender.com',
      description: 'End-to-end coffee traceability from Ethiopian farms to international buyers.'
    },
  ];

  const clientLogos = [
    { name: 'Zen Technologies', file: 'client-logo.png', hasImage: true },
    { name: 'EthioPOS', emoji: '🍽️', hasImage: false },
    { name: 'PharmaTrace', emoji: '💊', hasImage: false },
    { name: 'Coffee Trace', emoji: '🌱', hasImage: false },
    { name: 'FILI Trading', emoji: '🏢', hasImage: false },
  ];

  const testimonials = [
  { 
    name: 'Amanuel Gebre', 
    role: 'Owner', 
    company: 'Addis Ababa Restaurant Group', 
    content: 'Zen Technologies built our complete POS system. Now we manage 5 restaurants from one dashboard. Sales increased by 45%!', 
    rating: 5, 
    image: `https://ui-avatars.com/api/?name=Amanuel+Gebre&background=F97316&color=fff&size=100&rounded=true&bold=true`
  },
  { 
    name: 'Tigist Haile', 
    role: 'Operations Manager', 
    company: 'Pharma Ethiopia PLC', 
    content: 'The pharmaceutical traceability system is EFDA compliant and saved us countless hours. Highly professional team!', 
    rating: 5, 
    image: `https://ui-avatars.com/api/?name=Tigist+Haile&background=F97316&color=fff&size=100&rounded=true&bold=true`
  },
  { 
    name: 'Dawit Mekonnen', 
    role: 'Export Manager', 
    company: 'FILI Coffee Exporters', 
    content: 'From farm to export, our coffee is now fully traceable. International buyers love the transparency!', 
    rating: 5, 
    image: `https://ui-avatars.com/api/?name=Dawit+Mekonnen&background=F97316&color=fff&size=100&rounded=true&bold=true`
  },
];
  const stats = [
    { value: '15+', label: 'Projects Completed', suffix: '' },
    { value: '100%', label: 'Client Satisfaction', suffix: '' },
    { value: '5+', label: 'Active Systems', suffix: '' },
    { value: '24/7', label: 'Technical Support', suffix: '' },
  ];

  const faqs = [
    { q: 'How long does a typical project take?', a: 'Most websites take 3-5 weeks. Restaurant POS systems take 6-8 weeks. Traceability systems take 8-12 weeks depending on complexity.' },
    { q: 'Do you offer maintenance after launch?', a: 'Yes! We offer monthly maintenance plans including hosting, security updates, backups, and 24/7 support.' },
    { q: 'Can you integrate with Ethiopian regulations?', a: 'Absolutely. We specialize in EFDA compliance, tax systems, and local business requirements.' },
    { q: 'What is your payment structure?', a: 'We typically require 40% upfront, 30% at milestone, and 30% upon completion. Special terms for enterprise clients.' },
  ];

  const scrollToProjects = () => {
    document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 py-2 md:py-3' : 'bg-transparent py-3 md:py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <img 
  src="/images/client-logo.png" 
  alt="Zen Technologies Logo" 
  className="h-8 md:h-10 w-auto object-contain flex-shrink-0 bg-black/50 rounded-lg p-1"
  onError={(e) => {
    e.target.src = ""; // Prevents infinite error loop
    e.target.style.display = 'none';
    // Look for the fallback div and show it
    const fallback = e.target.nextSibling;
    if(fallback) fallback.style.display = 'flex';
  }}
/>
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20 hidden">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent truncate">Zen Technologies</span>
          </div>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {['Work', 'Services', 'Pricing'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white/80 hover:text-white transition-colors text-sm font-medium">{item}</a>
            ))}
            <button 
              onClick={() => window.open('https://t.me/anamyoha', '_blank')}
              className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 lg:px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              Book Consult
            </button>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-1 -mr-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-4 flex flex-col items-center gap-4">
            <a href="#work" className="text-white/80 hover:text-white text-lg" onClick={() => setIsMenuOpen(false)}>Work</a>
            <a href="#services" className="text-white/80 hover:text-white text-lg" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#pricing" className="text-white/80 hover:text-white text-lg" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <button 
              onClick={() => window.open('https://t.me/anamyoha', '_blank')}
              className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-full"
            >
              Book Consult
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-black"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[500px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 border border-white/10 mb-4 md:mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-xs sm:text-sm text-white/90 font-medium">Ethiopian Tech Agency</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                Digital Solutions <br className="hidden sm:block" />for Ethiopian Business
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 font-medium">
                We build restaurant POS systems, pharmaceutical traceability platforms, and complete digital ecosystems that drive real revenue.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => window.open('https://t.me/anamyoha', '_blank')}
                  className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base lg:text-lg flex items-center gap-2 hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Book a Free Consultation <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
                <button 
                  onClick={scrollToProjects}
                  className="border border-white/30 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-white/10 transition-colors"
                >
                  View Projects
                </button>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 p-3 sm:p-4 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format" alt="Dashboard Mock" className="rounded-xl border border-white/10 shadow-2xl w-full h-auto" />
              </div>
              <div className="absolute -top-6 -right-4 sm:-top-10 sm:-right-10 bg-black/80 backdrop-blur-md rounded-xl p-2 sm:p-3 border border-white/20 hidden sm:block">
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div><span className="text-xs text-white font-medium">+45% Sales Growth</span></div>
              </div>
              <div className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 bg-black/80 backdrop-blur-md rounded-xl p-2 sm:p-3 border border-white/20 hidden sm:block">
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div><span className="text-xs text-white font-medium">100% EFDA Compliant</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section with Client Logos */}
      <section className="py-10 md:py-16 border-y border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-white/60 text-xs sm:text-sm uppercase tracking-wider mb-6 md:mb-8 font-medium">Trusted by Ethiopian businesses</p>
          
          {/* Client Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex flex-col items-center gap-1 sm:gap-2 group cursor-pointer">
                {logo.hasImage ? (
                  <img 
                    src={`/images/${logo.file}`} 
                    alt={logo.name} 
                    className="h-10 sm:h-12 md:h-16 w-auto opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    <span className="text-xl sm:text-2xl">{logo.emoji}</span>
                  </div>
                )}
                <span className="text-white/60 text-[10px] sm:text-xs group-hover:text-white/90 transition font-medium">{logo.name}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-10 md:mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-white/60 text-[10px] sm:text-xs md:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Comprehensive Digital Solutions</h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto px-4 font-medium">Everything you need to dominate your market, from restaurant POS to pharmaceutical traceability.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {services.map((service, i) => (
              <div key={i} className="group bg-white/[0.03] border border-white/15 rounded-2xl p-4 sm:p-5 md:p-6 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-orange-500/15 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 transition-transform">
                  <service.icon className="text-orange-400" size={20} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">{service.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-16 md:py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Featured Projects</h2>
            <p className="text-white/70 text-sm sm:text-base font-medium">Live systems deployed for Ethiopian businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden bg-white/[0.03] border border-white/15 hover:border-orange-500/50 transition-all duration-500 flex flex-col">
                <div className="aspect-video overflow-hidden flex-shrink-0">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    {project.tags.map(tag => <span key={tag} className="text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full bg-orange-500/15 text-orange-300 font-medium">{tag}</span>)}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1">{project.title}</h3>
                  <p className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4 font-medium">{project.category}</p>
                  <p className="text-white/50 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 flex-grow leading-relaxed">{project.description}</p>
                  <button 
                    onClick={() => window.open(project.liveLink, '_blank')}
                    className="text-orange-400 hover:text-orange-300 flex items-center gap-1 text-xs sm:text-sm transition-colors mt-auto font-medium"
                  >
                    Live Demo <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Why Ethiopian businesses choose Zen Technologies</h2>
              <p className="text-white/70 text-sm sm:text-base mb-6 md:mb-8 font-medium">We understand local regulations, business needs, and deliver solutions that work in Ethiopia.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {['EFDA Compliant', '24/7 Local Support', 'Clean Code', 'Scalable Systems'].map((feat, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4 items-start">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-orange-500/15 flex items-center justify-center flex-shrink-0 text-orange-400 text-base sm:text-lg md:text-xl mt-0.5 font-bold">✓</div>
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base">{feat}</h3>
                      <p className="text-white/50 text-xs sm:text-sm font-medium">Enterprise-grade quality</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative bg-white/[0.03] border border-white/15 rounded-2xl p-6 sm:p-8">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {['Discovery', 'Strategy', 'Design', 'Development', 'Launch', 'Support'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs sm:text-sm">{i+1}</div>
                    <div className="h-px flex-1 bg-white/15"></div>
                    <div className="text-white font-semibold text-sm sm:text-base">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Trusted by Ethiopian industry leaders</h2>
            <p className="text-white/70 text-sm sm:text-base font-medium">What our clients say about their digital transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/15 rounded-2xl p-5 sm:p-6 hover:border-orange-500/40 transition-all flex flex-col">
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} className="fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-white/80 text-sm sm:text-base mb-4 sm:mb-6 italic flex-grow leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <img src={t.image} alt={t.name} className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover border border-white/20 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-semibold text-white text-sm sm:text-base truncate">{t.name}</div>
                    <div className="text-white/50 text-[10px] sm:text-xs truncate font-medium">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Invest in your digital future</h2>
            <p className="text-white/70 text-sm sm:text-base font-medium">Transparent pricing, customized for Ethiopian businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white/[0.03] border border-white/15 rounded-2xl p-6 sm:p-8 hover:-translate-y-2 transition-all">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Starter</h3>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">$2,900</div>
              <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6 font-medium">Perfect for new businesses & startups.</p>
              <button 
                onClick={() => window.open('https://t.me/anamyoha', '_blank')}
                className="w-full py-2.5 sm:py-3 rounded-full border border-white/30 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-all"
              >
                Start Project
              </button>
            </div>
            <div className="relative bg-gradient-to-b from-orange-500/10 to-black border-orange-500/50 border rounded-2xl p-6 sm:p-8 hover:-translate-y-2 transition-all shadow-xl shadow-orange-500/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap">Most Popular</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Professional</h3>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">$7,900</div>
              <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6 font-medium">For growing brands & restaurants.</p>
              <button 
                onClick={() => window.open('https://t.me/anamyoha', '_blank')}
                className="w-full py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-orange-500/25"
              >
                Get Professional
              </button>
            </div>
            <div className="bg-white/[0.03] border border-white/15 rounded-2xl p-6 sm:p-8 hover:-translate-y-2 transition-all">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Enterprise</h3>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">Custom</div>
              <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6 font-medium">Tailored solutions for large operations.</p>
              <button 
                onClick={() => window.open('https://t.me/anamyoha', '_blank')}
                className="w-full py-2.5 sm:py-3 rounded-full border border-white/30 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-all"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-black/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/15 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-4 sm:p-5 md:p-6 text-left font-semibold text-white hover:text-orange-400 transition-colors text-sm sm:text-base">
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} size={18} />
                </button>
                <div className={`px-4 sm:px-5 md:px-6 overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-40 pb-4 sm:pb-5 md:pb-6' : 'max-h-0'}`}>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-amber-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Ready to transform your business?</h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 md:mb-10 px-4 font-medium">Let's build your digital solution together.</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button 
              onClick={() => window.location.href = 'tel:+251911936923'}
              className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg flex items-center gap-2 hover:shadow-2xl transition-all"
            >
              <Phone size={16} /> <span className="hidden xs:inline">Call:</span> +251 911 936 923
            </button>
            <button 
              onClick={() => window.location.href = 'mailto:info@zentech.com'}
              className="border border-white/30 text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <Mail size={16} /> <span className="hidden xs:inline">info@zentech.com</span>
            </button>
            <button 
              onClick={() => window.open('https://t.me/anamyoha', '_blank')}
              className="bg-[#26A5E4] text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg flex items-center gap-2 hover:bg-[#1e8cbf] transition-all"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.569-.347zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/></svg>
              Telegram
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 md:py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <img 
  src="/images/client-logo.png" 
  alt="Zen Technologies Logo" 
  className="h-8 md:h-10 w-auto object-contain flex-shrink-0 bg-black/50 rounded-lg p-1"
  onError={(e) => {
    e.target.src = ""; // Prevents infinite error loop
    e.target.style.display = 'none';
    // Look for the fallback div and show it
    const fallback = e.target.nextSibling;
    if(fallback) fallback.style.display = 'flex';
  }}
/>
              <span className="font-bold text-white text-sm sm:text-base">Zen Technologies</span>
              <span className="text-white/50 text-[10px] sm:text-xs">© 2025 Ethiopia. All rights reserved.</span>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <a href="https://www.instagram.com/anamyoha" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-orange-400 transition-colors text-xs sm:text-sm font-medium">Instagram</a>
              <a href="https://www.linkedin.com/in/amanuel-yohannes-2453981aa/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-orange-400 transition-colors text-xs sm:text-sm font-medium">LinkedIn</a>
              <a href="https://t.me/anamyoha" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-orange-400 transition-colors text-xs sm:text-sm font-medium">Telegram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;