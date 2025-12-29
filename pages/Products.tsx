import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

interface Product {
  id: number;
  category: string;
  name: string;
  desc: string;
  image: string;
}

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [requestingId, setRequestingId] = useState<number | null>(null);

  const products: Product[] = [
    // Batteries
    { id: 1, category: 'EV Batteries', name: 'Lithium-Ion Pack 48V', desc: 'High density energy storage for 2-wheelers.', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop' },
    { id: 2, category: 'EV Batteries', name: 'LFP Battery Module', desc: 'Long cycle life phosphate battery for e-rickshaws.', image: 'https://images.unsplash.com/photo-1591964006776-90b32e88f5ec?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, category: 'EV Batteries', name: 'Smart BMS Unit', desc: 'Intelligent battery management protection.', image: 'https://images.unsplash.com/photo-1637459338864-f0d803954e47?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    
    // Chargers
    { id: 4, category: 'EV Chargers', name: 'Portable AC Charger', desc: 'Compact 3.3kW charger for home use.', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop' },
    { id: 5, category: 'EV Chargers', name: 'DC Fast Charging Gun', desc: 'Industrial grade CCS2 connector.', image: 'https://images.unsplash.com/photo-1766507680497-9dda2731738c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, category: 'EV Chargers', name: 'On-Board Charger', desc: 'High efficiency OBC for electric cars.', image: 'https://images.unsplash.com/photo-1673433106882-c80d94df8b46?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    // Controllers
    { id: 7, category: 'Controllers', name: 'BLDC Motor Controller', desc: 'Vector control driver for smooth acceleration.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
    { id: 8, category: 'Controllers', name: 'DC-DC Converter', desc: 'Isolated converter for auxiliary systems.', image: 'https://images.unsplash.com/photo-1652715564391-38cc4475b7f5?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    // Accessories
    { id: 9, category: 'Accessories', name: 'Digital Instrument Cluster', desc: 'TFT display for vehicle metrics.', image: 'https://images.unsplash.com/photo-1706006996181-97c3feac30d0?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 10, category: 'Accessories', name: 'Throttle Assembly', desc: 'Hall-effect throttle for precise control.', image: 'https://images.unsplash.com/photo-1609872209699-3e55dc7d90b9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  const categories = ['All', 'EV Batteries', 'EV Chargers', 'Controllers', 'Accessories'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleEnquire = (id: number) => {
    setRequestingId(id);
    setTimeout(() => {
        navigate('/contact');
    }, 800);
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-900 border-b border-slate-800 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
          >
            Component <span className="text-primary-500">Catalog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl font-light"
          >
            Explore our premium selection of OEM-grade parts, meticulously engineered for reliability and performance.
          </motion.p>
        </div>
      </div>

      <Section>
        {/* Interactive Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-[0_0_20px_rgba(20,184,166,0.4)]'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Product Grid with Layout Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-primary-500/50 hover:shadow-[0_0_30px_-10px_rgba(20,184,166,0.2)] transition-all duration-300 group flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-primary-400 border border-slate-800">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                  <p className="text-slate-400 mb-8 flex-grow leading-relaxed">{product.desc}</p>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleEnquire(product.id)}
                    className={`w-full py-4 rounded-xl font-bold transition-all border flex items-center justify-center gap-2 ${
                        requestingId === product.id 
                        ? 'bg-primary-600 text-white border-transparent' 
                        : 'bg-slate-800 hover:bg-primary-600 text-white border-slate-700 hover:border-transparent'
                    }`}
                  >
                    {requestingId === product.id ? (
                        <>
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="flex items-center gap-2"
                            >
                                <Check size={20} /> Processing...
                            </motion.div>
                        </>
                    ) : (
                        "Request Pricing"
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
           <div className="text-center py-32">
             <p className="text-slate-500 text-lg">No products found in this category.</p>
           </div>
        )}
      </Section>
    </div>
  );
};

export default Products;