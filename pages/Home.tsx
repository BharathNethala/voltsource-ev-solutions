// Home.tsx (or Home.jsx) - Replace your existing file with this content
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Headphones, Cpu, Battery, Zap, Settings } from 'lucide-react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <ShieldCheck size={32} />, title: "Wide Range of Parts", desc: "Comprehensive catalog for all EV types." },
    { icon: <CheckCircle size={32} />, title: "Quality Certified", desc: "Rigorous testing for durability and safety." },
    { icon: <Settings size={32} />, title: "High Compatibility", desc: "Parts designed for multiple EV models." },
    { icon: <Headphones size={32} />, title: "Expert Support", desc: "Technical guidance for installation and issues." },
  ];

  const categories = [
    { title: "EV Batteries", icon: <Battery size={32} />, img: "https://images.unsplash.com/photo-1605191737662-98ba90cb953e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Charging Stations", icon: <Zap size={32} />, img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop" },
    { title: "Controllers", icon: <Cpu size={32} />, img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
    { title: "Accessories", icon: <Settings size={32} />, img: "https://unsplash.com/photos/a-close-up-of-an-electronic-device-with-a-cord-G3Px9n4O3gA" },
  ];

  // choose a foreground hero image (keeps your existing background image intact)
  const heroForegroundImg = categories[0].img;

  return (
    <div className="overflow-hidden bg-slate-950">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center">
        {/* Background Image with Overlay (kept intact) */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600&auto=format&fit=crop"
            alt="Futuristic EV Concept"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* Foreground content: text (left) + visible image (right on md+) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
            {/* LEFT: Text column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-7"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-900/30 border border-primary-500/30 text-primary-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm"
              >
                
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-white">
                Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">EV Components</span> & Solutions
              </h1>

              <p className="text-lg md:text-xl text-slate-400 mb-8 font-light max-w-2xl leading-relaxed">
                Engineering the next generation of electric transport with high-performance spare parts and charging infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                
              </div>
            </motion.div>

            {/* RIGHT: Visible hero image (foreground) */}
            <div className="md:col-span-5 relative w-full">
              {/* Image container - sits above background and to the right on larger screens */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full flex items-center justify-center"
              >
               
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Highlights */}
      <Section className="bg-slate-950 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, backgroundColor: "rgba(30, 41, 59, 0.5)" }}
              className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 transition-all duration-300 cursor-default group backdrop-blur-sm"
            >
              <div className="text-primary-500 mb-6 group-hover:text-primary-400 transition-colors p-3 bg-primary-900/20 rounded-xl inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Product Categories */}
      <Section className="bg-slate-900">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Engineered for Performance</h2>
          <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <Link to="/products" key={idx} className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer shadow-2xl border border-slate-800">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                src={cat.img}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-primary-400 mb-4 border border-white/10"
                >
                  {cat.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                <span className="text-slate-400 text-sm flex items-center gap-2 group-hover:text-white transition-colors font-medium">
                  View Catalog <ArrowRight size={16} className="text-primary-500" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Industries Served */}
      <Section className="bg-slate-950">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-primary-500 font-bold tracking-wider uppercase text-sm mb-2 block">Applications</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              Powering Every Sector<br />of <span className="text-slate-500">E-Mobility</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              From personal transportation to heavy-duty commercial logistics, our components are built to withstand the rigorous demands of modern electric vehicles.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Two-Wheelers', 'Electric Cars', 'Three-Wheelers', 'Commercial Fleets'].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, x: 5, backgroundColor: "rgba(20, 184, 166, 0.1)" }}
                  className="flex items-center space-x-3 p-4 bg-slate-900 rounded-xl border border-slate-800 transition-all cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(20,184,166,0.8)]"></div>
                  <span className="font-semibold text-slate-200">{item}</span>
                </motion.div>
              ))}
            </div>
            <Link to="/industries" className="inline-flex items-center text-primary-400 font-bold mt-10 hover:text-white transition-colors group">
              View Industry Solutions <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary-600 rounded-3xl blur-[100px] opacity-20"></div>
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=1200&auto=format&fit=crop"
              alt="Electric Vehicle Charging"
              className="relative rounded-3xl shadow-2xl border border-slate-800 z-10"
            />
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-slate-900">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Why Industry Leaders Choose Us</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Reliability is not just a feature; it's our core engineering principle.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Technical Expertise", desc: "Deep understanding of EV architecture and component integration." },
            { title: "Global Standards", desc: "All components meet international safety and efficiency ISO standards." },
            { title: "Supply Chain", desc: "Robust logistics ensuring on-time delivery for manufacturing lines." },
            { title: "Scalability", desc: "Solutions that grow with your production needs from prototype to mass market." },
            { title: "Cost Efficiency", desc: "Competitive pricing structures without compromising on component quality." },
            { title: "After-Sales Support", desc: "Dedicated engineering team for lifecycle support and warranty claims." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, borderColor: '#14b8a6' }}
              className="bg-slate-950 p-10 rounded-2xl border border-slate-800 transition-all cursor-default group hover:shadow-[0_10px_40px_-10px_rgba(20,184,166,0.1)]"
            >
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-slate-950 !py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-slate-900/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready to electrify your fleet?</h2>
          <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto font-light">
            Request our comprehensive catalog or speak with a technical consultant today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-white text-slate-950 hover:bg-slate-200 px-12 py-5 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all"
          >
            Get a Quote
          </motion.button>
        </div>
      </Section>
    </div>
  );
};

export default Home;
