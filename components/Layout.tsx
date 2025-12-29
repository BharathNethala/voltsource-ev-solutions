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
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-[60]"
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
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white">
                <Zap size={24} fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white leading-none">
                  VOLT<span className="text-primary-400">SOURCE</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase font-semibold">
                  EV Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    to={link.path}
                    className={`text-sm font-medium px-2 py-1 ${
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
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary-500"
                    />
                  )}
                </div>
              ))}
              <button
                onClick={handleRequestQuote}
                className="bg-white text-slate-950 px-5 py-2.5 rounded-full text-sm font-bold"
              >
                Request a Quote
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-slate-900 border-t border-slate-800"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-slate-400 hover:bg-slate-800 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={handleRequestQuote}
                  className="w-full mt-4 bg-primary-600 text-white px-4 py-3 rounded-lg"
                >
                  Request a Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <p className="text-sm text-slate-400">
                Powering the electric revolution with high-performance EV components and infrastructure.
              </p>
              <div className="flex space-x-4 mt-4 text-slate-500">
                <Facebook size={20} />
                <Twitter size={20} />
                <Linkedin size={20} />
                <Instagram size={20} />
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-slate-400 hover:text-primary-400">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Batteries</li>
                <li>Chargers</li>
                <li>Controllers</li>
                <li>Accessories</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2"><MapPin size={16} /> 9-8 Industrial Park road, Block C</li>
                <li className="flex items-center gap-2"><Phone size={16} /> +91 9989662212</li>
                <li className="flex items-center gap-2"><Mail size={16} /> info@voltsource.com</li>
              </ul>
            </div>
          </div>

          {/* INDUSTRY-LEVEL ATTRIBUTION */}
          <div className="mt-20 border-t border-slate-800 pt-10">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <p className="text-sm uppercase tracking-widest text-slate-500">
                Website Design & Development Partner
              </p>
              <p className="text-xl font-semibold text-slate-200">
                Designed & Engineered by{' '}
                <a
                  href="https://onyx-77118.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Onyx
                </a>
              </p>
            </div>

            <div className="mt-10 text-center text-sm text-slate-600">
              <p>&copy; {new Date().getFullYear()} VoltSource EV Solutions. All rights reserved.</p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Layout;
