import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  MapPin, 
  Calendar, 
  ArrowDown, 
  Check, 
  Store, 
  Mic, 
  Briefcase, 
  Award, 
  ArrowRight, 
  Globe, 
  Mail, 
  CalendarCheck,
  Users,
  Lightbulb,
  TrendingUp,
  Network,
  Mic2,
  Crown
} from 'lucide-react';

// --- COMPONENTS ---

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#2E0249]/90 backdrop-blur-md border-b border-white/10 top-0 left-0 overflow-visible">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <img src="/WITEX-logo-white.png" alt="WITEX Logo" className="h-24 md:h-32 lg:h-36 w-auto -my-4 md:-my-6 lg:-my-8" />
          <div className="hidden lg:block border-l border-white/20 pl-3 ml-3">
            <p className="text-xs text-[#D4AF37] tracking-widest uppercase mb-1">Organised by</p>
            <img src="/MATA-logo-white.png" alt="MATA Logo" className="h-10 w-auto opacity-90" />
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {['About', 'Why Exhibit', 'Programme', 'WCAF', 'Summit'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-white hover:text-[#D4AF37] transition no-underline"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-[#D4AF37] hover:bg-[#C5A028] text-[#2E0249] font-bold rounded-sm transition no-underline">
            Contact Us
          </a>
        </div>

        <button 
          className="md:hidden text-white bg-transparent border-none p-0 cursor-pointer" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#2E0249] border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl">
          {['About', 'Why Exhibit', 'Programme', 'WCAF', 'Summit'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-white no-underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target date: August 21, 2026, 09:00:00
    const targetDate = new Date("2026-08-21T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E0249]/70 to-[#1a0029]/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070&auto=format&fit=crop" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#2E0249]/50 backdrop-blur-md mb-8">
          <MapPin className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-sm font-medium text-gray-200">World Trade Center (WTC), Kuala Lumpur</span>
          <span className="w-px h-4 bg-white/20"></span>
          <Calendar className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-sm font-medium text-gray-200">21 - 23 August 2026</span>
        </div>

        <h2 className="text-[#D4AF37] tracking-[0.3em] text-sm md:text-base font-bold uppercase mb-4 animate-pulse">
          4th Edition
        </h2>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white">
          WITEX 2026 <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7EF8A] via-[#D4AF37] to-[#B8860B] italic text-2xl md:text-4xl lg:text-5xl block mt-4 tracking-wide">
            Exploring Opportunities In Islamic Tourism Industry
          </span>
        </h1>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-3 md:p-4 bg-white/5 backdrop-blur-md rounded-lg border border-[#D4AF37]/30 min-w-[80px] md:min-w-[100px]">
              <span className="text-2xl md:text-4xl font-bold font-serif text-[#D4AF37]">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-300 mt-1">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Where tradition meets innovation. Join the premier global platform dedicated to advancing Islamic tourism and trade.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <a href="#exhibit" className="px-8 py-4 bg-[#D4AF37] hover:bg-[#C5A028] text-[#2E0249] font-bold text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.4)] transition transform hover:-translate-y-1 no-underline inline-block">
            Book Exhibition Space
          </a>
          <a href="#visit" className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold text-sm uppercase tracking-widest backdrop-blur-sm transition no-underline inline-block">
            Register as Visitor
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-[#D4AF37] w-6 h-6" />
      </div>
    </header>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#F3E5F5] text-[#1a0029] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <img 
            src="/Landing-1.webp" 
            alt="WITEX 2026" 
            className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition duration-700 w-full h-auto"
          />
          <div className="mt-6 flex gap-4">
            <div className="bg-white p-4 shadow-md rounded-sm border-l-4 border-[#D4AF37] flex-1">
              <h4 className="font-bold text-xl text-[#2E0249] mb-1">40.2%</h4>
              <p className="text-xs text-gray-500 uppercase mb-0">Exhibitor Growth</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-sm border-l-4 border-[#2E0249] flex-1">
              <h4 className="font-bold text-xl text-[#2E0249] mb-1">60.0%</h4>
              <p className="text-xs text-gray-500 uppercase mb-0">Visitor Growth</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-[#B8860B] font-bold tracking-widest text-sm mb-2 uppercase">About The Event</h4>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#2E0249]">Shaping the Future of <br/>Islamic Economy</h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            The <strong>World Islamic Tourism & Trade Expo (WITEX 2026)</strong> returns for its 4th Edition. Organised by the <strong>Malaysia Tourism Agency Association (MATA)</strong>, it is positioned at the heart of the Islamic economy, bringing together government leaders, industry pioneers, and international stakeholders.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            This landmark event goes beyond exhibitions—it is a hub for innovation featuring world-class showcases of:
          </p>

          <ul className="space-y-3 mb-8 pl-0 list-none">
            {[
              "Halal Trade Products & Services",
              "Immersive Cultural Tourism Experiences",
              "High-Impact Business Matching"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Check className="text-[#C5A028] w-5 h-5" />
                <span className="text-[#1a0029] font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <a href="#" className="text-[#2E0249] font-bold border-b-2 border-[#2E0249] pb-1 hover:text-[#B8860B] hover:border-[#B8860B] transition no-underline">
            DOWNLOAD BROCHURE
          </a>
        </div>
      </div>
    </section>
  );
};

const WhyExhibit = () => {
  const reasons = [
    { icon: Users, title: "Global Connections", desc: "Meet local and international market suppliers, forging connections that span across borders." },
    { icon: Lightbulb, title: "Innovation Hub", desc: "Discover innovative ideas in the development of both hardware and software solutions for tourism." },
    { icon: TrendingUp, title: "Business Growth", desc: "Create a platform of business to spread and promote a culture of quality and excellence." },
    { icon: Network, title: "Strategic Alliances", desc: "Unlock opportunities from local and international participants to form lasting strategic alliances." }
  ];

  return (
    <section id="why-exhibit" className="py-24 bg-[#2E0249] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Why Exhibit?</h2>
          <p className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm">Expand Your Reach in the Islamic Economy</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] transition duration-300 group">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#2E0249] transition">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  return (
    <section id="programme" className="py-24 bg-[#1a0029] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <CalendarCheck className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <h2 className="font-serif text-4xl text-white mb-4">Event Programme Roadmap</h2>
          <p className="text-gray-400">Your 4-Day Journey at WITEX 2026</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"></div>

          <div className="space-y-12 md:space-y-24">
            
            {/* Item 1 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 text-center md:text-right mb-8 md:mb-0">
                <h3 className="text-3xl font-serif text-white mb-2">Grand Opening & Conference</h3>
                <div className="inline-block px-3 py-1 bg-[#2E0249] border border-[#D4AF37] rounded-full text-[#D4AF37] text-xs font-bold mb-4">Friday, 21 Aug 2026</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong>09:00 AM:</strong> WITEX & WCAF 2026 Opening Ceremony.<br/>
                  <strong>02:30 PM:</strong> Conference Track 1 & 2.<br/>
                  "Strengthening the Islamic Tourism Value Chain" & "Global Halal Trends".
                </p>
              </div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#2E0249] border-2 border-[#D4AF37] rounded-full z-10"></div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg hover:bg-white/10 transition border-l-4 border-[#D4AF37]">
                  <Mic2 className="w-8 h-8 text-[#D4AF37] mb-4" />
                  <h4 className="text-white font-bold mb-2">Key Highlights</h4>
                  <ul className="text-xs text-gray-300 space-y-2 pl-4">
                    <li>• Hall Visit by VIPs</li>
                    <li>• Keynote: Tourism in the Age of Experience Economy</li>
                    <li>• Panel: Halal Lifestyle to Experiential Travel</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-12 text-center md:text-left mb-8 md:mb-0">
                <h3 className="text-3xl font-serif text-white mb-2">Knowledge Exchange</h3>
                <div className="inline-block px-3 py-1 bg-[#2E0249] border border-[#D4AF37] rounded-full text-[#D4AF37] text-xs font-bold mb-4">Saturday, 22 Aug 2026</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong>10:00 AM - 06:30 PM:</strong> Full Day Conference (Tracks 3-7).<br/>
                  Focus on Culture, Green Tourism, Community, and Innovation (AI).
                </p>
              </div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#2E0249] border-2 border-[#D4AF37] rounded-full z-10"></div>
              <div className="md:w-1/2 md:pr-12">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg hover:bg-white/10 transition border-r-4 border-[#D4AF37] text-right">
                  <Lightbulb className="w-8 h-8 text-[#D4AF37] mb-4 ml-auto" />
                  <h4 className="text-white font-bold mb-2">Key Tracks</h4>
                  <ul className="text-xs text-gray-300 space-y-2 list-none p-0">
                    <li>Preserving Islamic Cultural Heritage •</li>
                    <li>Sustainability & Ethical Values •</li>
                    <li>AI & Smart Destinations •</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 text-center md:text-right mb-8 md:mb-0">
                <h3 className="text-3xl font-serif text-white mb-2">The Global Summit</h3>
                <div className="inline-block px-3 py-1 bg-[#2E0249] border border-[#D4AF37] rounded-full text-[#D4AF37] text-xs font-bold mb-4">Sunday, 23 Aug 2026</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong>Ministers & CEOs Summit.</strong><br/>
                  Theme: "The Future of the Global Islamic Tourism & Trade Ecosystem 2030".
                </p>
              </div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#2E0249] border-2 border-[#D4AF37] rounded-full z-10"></div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg hover:bg-white/10 transition border-l-4 border-[#D4AF37]">
                  <Briefcase className="w-8 h-8 text-[#D4AF37] mb-4" />
                  <h4 className="text-white font-bold mb-2">Plenary Sessions</h4>
                  <ul className="text-xs text-gray-300 space-y-2 pl-4">
                    <li>• Digital & Data-Driven Muslim-Friendly Travel</li>
                    <li>• Integrating Halal Trade & Tourism Supply-Chain</li>
                    <li>• Summit Declaration Launch</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-12 text-center md:text-left mb-8 md:mb-0">
                <h3 className="text-3xl font-serif text-white mb-2">WITA Awards Gala</h3>
                <div className="inline-block px-3 py-1 bg-[#2E0249] border border-[#D4AF37] rounded-full text-[#D4AF37] text-xs font-bold mb-4">Monday, 24 Aug 2026</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong>07:00 PM:</strong> World Islamic Tourism & Trade Awards Gala Dinner.<br/>
                  Honoring excellence at Dewan Merdeka (Level 4).
                </p>
              </div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#2E0249] border-2 border-[#D4AF37] rounded-full z-10"></div>
              <div className="md:w-1/2 md:pr-12">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg hover:bg-white/10 transition border-r-4 border-[#D4AF37] text-right">
                  <Crown className="w-8 h-8 text-[#D4AF37] mb-4 ml-auto" />
                  <h4 className="text-white font-bold mb-2">The Celebration</h4>
                  <ul className="text-xs text-gray-300 space-y-2 list-none p-0">
                    <li>Red Carpet Arrival •</li>
                    <li>Cultural Performances •</li>
                    <li>Prestigious Awards Ceremony •</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const WCAF = () => {
  return (
    <section id="wcaf" className="py-24 bg-gradient-to-r from-[#2E0249] to-[#4a148c] relative">
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}></div>
       
       <div className="container mx-auto px-6 relative z-10 flex flex-col gap-16">
         
         {/* Card 1: WCAF (Text Left, Image Right) */}
         <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/2">
             <div className="inline-block px-3 py-1 bg-pink-600 text-white text-xs font-bold uppercase tracking-widest mb-4 rounded-full">Concurrent Event</div>
             <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">WCAF 2026 <br/><span className="text-2xl opacity-80">World Cultural & Arts Festival</span></h2>
             <p className="text-xl text-gray-200 italic mb-6">"Uniting the World Through Culture and Art"</p>
             <p className="text-gray-300 leading-relaxed mb-8">
               In conjunction with <strong>Visit Malaysia 2026</strong>, WCAF is a dynamic platform for cultural exchange. Featuring international troupes, culinary pavilions, fashion shows, and art exhibitions under one roof at WTC KL.
             </p>
             <a href="#" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#D4AF37] transition no-underline mb-6">
               Explore Festival Schedule <ArrowRight className="w-5 h-5" />
             </a>
             <div className="mt-6">
                <img src="/WCAF-logo-white.png" alt="WCAF Logo" className="h-24 md:h-32 w-auto object-contain" />
             </div>
           </div>
           <div className="md:w-1/2">
             <img src="/Landing-2.webp" className="rounded-lg shadow-lg w-full h-auto" alt="WCAF 2026" />
           </div>
         </div>
         {/* Card 2: WITA Awards (Image Left, Text Right) */}
         <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img 
                  src="/Landing-3.webp" 
                  alt="WITA Awards Gala" 
                  className="rounded-lg shadow-2xl w-full h-full object-cover min-h-[400px]" 
                />
            </div>
            
            <div className="md:w-1/2">
                 <div className="inline-block px-3 py-1 bg-[#D4AF37] text-[#2E0249] text-xs font-bold uppercase tracking-widest mb-4 rounded-full">Gala Night Celebration</div>
                 <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">WITA 2026 <br/><span className="text-2xl opacity-80">World Islamic Tourism & Trade Awards</span></h2>
                 <p className="text-xl text-gray-200 italic mb-6">"Honoring Excellence, Innovation & Leadership"</p>
                 <p className="text-gray-300 leading-relaxed mb-6">
                   The <strong>WITA Gala Dinner</strong> is the premier celebration honoring outstanding contributions in the global Islamic tourism industry. Join industry trailblazers and government leaders for a prestigious evening of recognition.
                 </p>
                 <div className="mb-8">
                    <p className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest mb-3">Distinguished Categories Include:</p>
                    <ul className="text-gray-300 text-sm space-y-2 list-disc pl-5">
                        <li>Best Halal-Friendly Accommodation</li>
                        <li>Best Halal Food Destination</li>
                        <li>Best Islamic Tourism Destination</li>
                        <li>Best Islamic Travel Agency</li>
                    </ul>
                 </div>
                 <a href="#awards" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#D4AF37] transition no-underline mb-6">
                   View Nomination Categories <ArrowRight className="w-5 h-5" />
                 </a>
                 <div className="mt-6">
                    <img src="/WITA-logo-white.png" alt="WITA Logo" className="h-24 md:h-32 w-auto object-contain" />
                 </div>
            </div>
         </div>
       </div>
    </section>
  );
};

const Summit = () => {
  return (
    <section id="summit" className="py-24 bg-white text-[#1a0029]">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <Globe className="w-16 h-16 text-[#2E0249] mx-auto mb-6" />
        <h4 className="text-gray-500 font-bold uppercase tracking-[0.2em] mb-4">23 August 2026 • By Invitation Only</h4>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E0249] mb-8">
          The Ministers & CEOs Summit
        </h2>
        <p className="text-xl font-medium text-[#B8860B] mb-6 italic">
          Theme: "The Future of the Global Islamic Tourism & Trade Ecosystem 2030"
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          A high-level strategic forum examining how AI, Big Data, and digital platforms can personalize Halal travel. Plenary sessions will cover "Regenerative Destination Development" and "Integrating Halal Trade & Tourism Supply Chains".
        </p>
        <a href="#" className="px-8 py-4 bg-[#2E0249] text-white font-bold uppercase tracking-widest hover:bg-[#4a148c] transition shadow-lg no-underline inline-block">
          Request Invitation
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1a0029] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <img src="/WITEX-logo-white.png" alt="WITEX Logo" className="h-16 w-auto mb-6 opacity-80" />
            <p className="text-gray-400 text-sm mb-2">Organised by:</p>
            <img src="/MATA-logo-white.png" alt="MATA Logo" className="h-12 w-auto mb-4 opacity-90" />
            <p className="text-gray-500 text-xs leading-relaxed">
              Malaysia Tourism Agency Association.<br/>
              Positioned at the heart of the Islamic economy.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold uppercase tracking-wider mb-6">Contact</h5>
            <ul className="space-y-3 text-gray-400 text-sm list-none pl-0">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] mt-1" />
                <a href="mailto:marketing@witex.my" className="hover:text-white text-gray-400 no-underline">marketing@witex.my</a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-[#D4AF37] mt-1" />
                <a href="https://www.witex.my" className="hover:text-white text-gray-400 no-underline">www.witex.my</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-wider mb-6">Venue</h5>
            <p className="text-gray-400 text-sm leading-relaxed">
              World Trade Center (WTC)<br/>
              41, Jalan Tun Ismail, Chow Kit,<br/>
              50480 Kuala Lumpur,<br/>
              Malaysia
            </p>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h5>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="#" className="hover:text-[#D4AF37] text-gray-400 no-underline">Visitor Registration</a>
              <a href="#" className="hover:text-[#D4AF37] text-gray-400 no-underline">Exhibitor Enquiry</a>
              <a href="#" className="hover:text-[#D4AF37] text-gray-400 no-underline">Download Floor Plan</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; 2026 WITEX. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white text-gray-600 no-underline">Privacy Policy</a>
            <a href="#" className="hover:text-white text-gray-600 no-underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP ---

const App = () => {
  return (
    <div className="bg-[#1a0029] text-gray-100 font-sans selection:bg-[#D4AF37] selection:text-[#2E0249] w-full min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyExhibit />
      <Roadmap />
      <WCAF />
      <Summit />
      <Footer />
    </div>
  );
};

export default App;

