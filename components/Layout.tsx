import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Zap, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleRequestQuote = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-300">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-[60] shadow-[0_0_10px_rgba(20,184,166,0.5)]"
        style={{ scaleX }}
      />

      {/* Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-2' 
            : 'bg-transparent border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div 
                whileHover={{ rotate: 180, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40"
              >
                <Zap size={24} fill="currentColor" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white leading-none tracking-tight">VOLT<span className="text-primary-400">SOURCE</span></span>
                <span className="text-[10px] text-slate-400 tracking-widest font-semibold uppercase">EV Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors duration-300 relative z-10 px-2 py-1 ${
                      isActive(link.path)
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              ))}
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRequestQuote}
                className="bg-white text-slate-950 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg transition-all"
              >
                Request a Quote
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden shadow-2xl"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-3 py-3 rounded-md text-base font-medium ${
                      isActive(link.path)
                        ? 'bg-slate-800 text-primary-400'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <motion.button 
                    whileTap={{ scale: 0.98 }}
                    onClick={handleRequestQuote}
                    className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg text-base font-medium shadow-lg shadow-primary-900/50"
                  >
                    Request a Quote
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center text-white">
                  <Zap size={20} fill="currentColor" />
                </div>
                <span className="font-display font-bold text-lg text-white">VOLT<span className="text-primary-500">SOURCE</span></span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Powering the electric revolution with high-performance components and infrastructure solutions.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    href="#" 
                    whileHover={{ y: -5, color: "#22d3ee", scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-slate-500 hover:text-white transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Explore</h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                   <li key={link.name}>
                     <Link to={link.path} className="text-slate-400 hover:text-primary-400 transition-colors text-sm flex items-center group">
                       <motion.span 
                         initial={{ width: 0 }}
                         whileHover={{ width: 8 }}
                         className="h-0.5 bg-primary-500 mr-2 transition-all duration-300"
                       ></motion.span>
                       {link.name}
                     </Link>
                   </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Products</h3>
              <ul className="space-y-4">
                {['Batteries', 'Chargers', 'Controllers', 'Accessories'].map((item) => (
                  <li key={item}>
                    <Link to="/products" className="text-slate-400 hover:text-primary-400 transition-colors text-sm flex items-center group">
                      <motion.span 
                         initial={{ width: 0 }}
                         whileHover={{ width: 8 }}
                         className="h-0.5 bg-primary-500 mr-2 transition-all duration-300"
                      ></motion.span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Contact</h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <motion.li whileHover={{ x: 5 }} className="flex items-start space-x-3 cursor-default">
                  <MapPin size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                  <span>123 Industrial Park, Tech City</span>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 cursor-default">
                  <Phone size={18} className="text-primary-500 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 cursor-default">
                  <Mail size={18} className="text-primary-500 flex-shrink-0" />
                  <span>info@voltsource.com</span>
                </motion.li>
              </ul>
            </div>

          </div>
          <div className="border-t border-slate-900 mt-16 pt-8 text-center text-sm text-slate-600">
            <p>&copy; {new Date().getFullYear()} VoltSource EV Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;