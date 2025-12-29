import React from 'react';
import Section from '../components/Section';
import { Target, Eye, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-20 border-b border-slate-800 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-primary-500 font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Driving the Electric Future
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed font-light"
          >
            VoltSource is dedicated to strengthening the EV ecosystem by providing reliable, high-grade spare parts and charging infrastructure solutions.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} className="relative">
             <div className="absolute inset-0 bg-primary-500 rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
              alt="Our Team" 
              className="relative rounded-2xl shadow-2xl border border-slate-800 z-10 grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-white">Who We Are</h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
              <p>
                Established with a passion for sustainable mobility, VoltSource has grown into a trusted partner for EV manufacturers, service centers, and fleet operators. We understand the critical role that quality components play in the performance and safety of electric vehicles.
              </p>
              <p>
                Our business approach focuses entirely on supporting the EV ecosystem. We bridge the gap between advanced technology manufacturing and the end-user by ensuring a steady supply of compatible, high-performance parts.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <motion.div 
                whileHover={{ y: -5, backgroundColor: "rgba(30, 41, 59, 0.5)" }}
                className="p-6 bg-slate-900 rounded-xl cursor-default border border-slate-800"
              >
                <Users className="text-primary-500 mb-3" size={32} />
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-slate-500 font-medium">B2B Partners</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5, backgroundColor: "rgba(30, 41, 59, 0.5)" }}
                className="p-6 bg-slate-900 rounded-xl cursor-default border border-slate-800"
              >
                <TrendingUp className="text-primary-500 mb-3" size={32} />
                <div className="text-3xl font-bold text-white mb-1">10k+</div>
                <div className="text-sm text-slate-500 font-medium">Parts Delivered</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-slate-900 p-12 rounded-3xl relative overflow-hidden shadow-2xl border border-slate-800 group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target size={150} className="text-white" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary-900/30 rounded-2xl flex items-center justify-center mb-8 border border-primary-500/20">
                <Target size={28} className="text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To accelerate the adoption of electric vehicles by ensuring the availability of affordable, high-quality spare parts and charging solutions, thereby reducing vehicle downtime and enhancing user confidence.
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-slate-900 p-12 rounded-3xl relative overflow-hidden shadow-2xl border border-slate-800 group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={150} className="text-white" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700">
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To become the most reliable global hub for EV components, setting industry standards for quality, compatibility, and customer service in the electric mobility sector.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default About;