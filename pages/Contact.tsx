import React, { useState } from 'react';
import Section from '../components/Section';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    // Simulate API call with micro-interaction duration
    setTimeout(() => {
        setIsPending(false);
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-20 border-b border-slate-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl font-display font-bold text-white mb-4"
          >
            Get in Touch
          </motion.h1>
          <p className="text-slate-400 text-lg font-light">We are here to help with your EV component needs.</p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary-500 pl-4">Contact Information</h2>
              <div className="space-y-6">
                {[
                    { icon: MapPin, title: "Head Office", content: <> 9-8 Industrial Park road, Block C,<br />Tech City, Electronic City II,560099</> },
                    { icon: Phone, title: "Phone", content: <>+91 9989662211<br />+91 9989662212</> },
                    { icon: Mail, title: "Email", content: <>info@voltsource.com<br />sales@voltsource.com</> },
                    { icon: Clock, title: "Business Hours", content: <>Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</> }
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ x: 5, backgroundColor: "rgba(30, 41, 59, 0.3)" }}
                        className="flex items-start space-x-5 p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-primary-500/30 transition-all cursor-default"
                    >
                        <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shadow-lg text-primary-500 flex-shrink-0">
                            <item.icon size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg">{item.title}</h3>
                            <p className="text-slate-400 mt-1 text-sm leading-relaxed">{item.content}</p>
                        </div>
                    </motion.div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-64 bg-slate-900 rounded-2xl overflow-hidden relative shadow-2xl border border-slate-800 cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50 group hover:bg-slate-800 transition-colors">
                <div className="text-center text-slate-500 group-hover:text-primary-400 transition-colors">
                  <MapPin size={40} className="mx-auto mb-3 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  <span className="font-bold tracking-wide text-sm uppercase">Locate on Maps</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-800 relative overflow-hidden">
            <AnimatePresence mode='wait'>
                {!isSubmitted ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-2">Send Enquiry</h2>
                        <p className="text-slate-400 mb-10 text-sm">Fill out the form below and our team will respond within 24 hours.</p>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                            <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                disabled={isPending}
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-5 py-4 bg-slate-950 rounded-xl border border-slate-800 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-700 disabled:opacity-50"
                                placeholder="Gowtham"
                            />
                            </div>
                            <div>
                            <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                disabled={isPending}
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-5 py-4 bg-slate-950 rounded-xl border border-slate-800 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-700 disabled:opacity-50"
                                placeholder="+91 9989662212"
                            />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            disabled={isPending}
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-slate-950 rounded-xl border border-slate-800 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-700 disabled:opacity-50"
                            placeholder="Gowtham@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                            <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            disabled={isPending}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-slate-950 rounded-xl border border-slate-800 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none placeholder-slate-700 disabled:opacity-50"
                            placeholder="Describe your requirements..."
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={!isPending ? { scale: 1.02, boxShadow: "0 0 20px rgba(20,184,166,0.3)" } : {}}
                            whileTap={!isPending ? { scale: 0.98 } : {}}
                            type="submit"
                            disabled={isPending}
                            className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-5 rounded-xl shadow-lg shadow-primary-900/20 transition-all flex items-center justify-center gap-3 group mt-4 relative overflow-hidden"
                        >
                            <AnimatePresence mode="wait">
                                {isPending ? (
                                    <motion.div 
                                        key="pending"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2"
                                    >
                                        <Loader2 size={20} className="animate-spin" />
                                        Processing Request...
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="default"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2"
                                    >
                                        Submit Request <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center h-full text-center py-20"
                    >
                        <motion.div 
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            className="w-24 h-24 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-500 mb-8 border border-primary-500/50 shadow-[0_0_20px_rgba(20,184,166,0.2)]"
                        >
                            <CheckCircle2 size={48} />
                        </motion.div>
                        <h3 className="text-3xl font-bold text-white mb-3">Enquiry Received</h3>
                        <p className="text-slate-400 mb-10 max-w-sm mx-auto">Thank you for contacting VoltSource. Our engineering team will review your project needs and respond shortly.</p>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsSubmitted(false)}
                            className="text-primary-400 font-bold hover:text-white transition-colors border-b border-primary-500/50 hover:border-white pb-1"
                        >
                            Submit another request
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default Contact;