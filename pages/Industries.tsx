import React from 'react';
import Section from '../components/Section';
import { Bike, Car, Truck, Box, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Industries: React.FC = () => {
  const industries = [
    {
      title: "Electric Two-Wheelers",
      icon: <Bike size={48} />,
      desc: "Comprehensive solutions for e-scooters and electric motorcycles, focusing on range efficiency and durability.",
      components: ["Li-ion Battery Packs", "Hub Motors", "FOC Controllers", "Smart Chargers", "Throttles & Switches"],
      image: "https://images.unsplash.com/photo-1641205502134-07b24a41227d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Electric Three-Wheelers",
      icon: <Box size={48} />,
      desc: "Heavy-duty components for e-rickshaws and cargo loaders designed for high torque and load capacity.",
      components: ["LFP Battery Modules", "Differential Axles", "Heavy Duty Controllers", "DC-DC Converters", "Wiring Harnesses"],
      image: "https://images.unsplash.com/photo-1765962905194-855a973366fb?q=80&w=1208&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Electric Cars",
      icon: <Car size={48} />,
      desc: "High-performance parts ensuring safety and reliability for passenger electric vehicles.",
      components: ["High Voltage BMS", "On-Board Chargers (OBC)", "Thermal Management Systems", "Charging Inlets (CCS2)", "AC Compressors"],
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Commercial EVs",
      icon: <Truck size={48} />,
      desc: "Robust power systems for last-mile delivery vans and electric buses operating in demanding environments.",
      components: ["High Capacity Batteries", "Traction Motors", "PDU (Power Distribution Units)", "Fast Charging Systems", "Telematics"],
      image: "https://images.unsplash.com/photo-1762245752333-c1ef6315a30c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 border-b border-slate-800 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-600/5 skew-x-12 transform translate-x-12 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
          >
            Sectors We <span className="text-primary-500">Serve</span>
          </motion.h1>
          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl font-light"
          >
            Tailored engineering solutions for every segment of the electric vehicle ecosystem, from micro-mobility to heavy logistics.
          </motion.p>
        </div>
      </div>

      {/* Industries List */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}
            >
              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 text-primary-500 mb-8 shadow-2xl">
                  {industry.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">{industry.title}</h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed border-l-2 border-primary-500/30 pl-6">
                  {industry.desc}
                </p>
                
                <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 backdrop-blur-sm">
                  <h3 className="font-bold text-white mb-6 flex items-center tracking-wide text-sm uppercase">
                    <span className="w-1.5 h-1.5 bg-primary-500 mr-3 rounded-full animate-pulse"></span>
                    Key Components
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {industry.components.map((comp, i) => (
                      <motion.li 
                        key={i} 
                        whileHover={{ x: 5, color: '#2dd4bf' }}
                        className="flex items-center text-slate-400 cursor-default transition-colors text-sm font-medium"
                      >
                        <Check size={16} className="text-primary-600 mr-3 flex-shrink-0" />
                        {comp}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-slate-800">
                  <div className="absolute inset-0 bg-primary-500/10 mix-blend-overlay z-10"></div>
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1 }}
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full aspect-[4/3] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 p-8 z-20">
                    <div className="w-20 h-20 border-t-2 border-r-2 border-white/20 rounded-tr-3xl"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 z-20">
                    <div className="w-20 h-20 border-b-2 border-l-2 border-white/20 rounded-bl-3xl"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;