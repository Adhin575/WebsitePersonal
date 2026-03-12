import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Palette, Menu, X } from 'lucide-react';
import { useTheme, AccentColor } from '../context/ThemeContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Professional Experiences', href: '#professional-experiences' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const accents: { name: AccentColor; color: string }[] = [
  { name: 'red', color: 'bg-red-500' },
  { name: 'purple', color: 'bg-purple-500' },
  { name: 'orange', color: 'bg-orange-500' },
  { name: 'green', color: 'bg-green-500' },
  { name: 'blue', color: 'bg-blue-500' },
];

export const Navbar: React.FC = () => {
  const { mode, toggleMode, accent, setAccent } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccentMenuOpen, setIsAccentMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'glass py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-black tracking-tighter"
        >
          AVS<span className="text-accent">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-sm font-bold tracking-widest uppercase hover:text-accent transition-all relative group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsAccentMenuOpen(!isAccentMenuOpen)}
              className="p-2 rounded-full hover:bg-bg-sub transition-colors"
              aria-label="Select accent color"
            >
              <Palette size={20} />
            </button>
            <AnimatePresence>
              {isAccentMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute right-0 mt-2 p-2 glass rounded-2xl flex space-x-2"
                >
                  {accents.map((a) => (
                    <button
                      key={a.name}
                      onClick={() => {
                        setAccent(a.name);
                        setIsAccentMenuOpen(false);
                      }}
                      className={cn(
                        'w-6 h-6 rounded-full transition-transform hover:scale-110',
                        a.color,
                        accent === a.name && 'ring-2 ring-offset-2 ring-accent'
                      )}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={toggleMode}
            className="p-2 rounded-full hover:bg-bg-sub transition-colors"
            aria-label="Toggle theme"
          >
            {mode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            className="md:hidden p-2 rounded-full hover:bg-bg-sub transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-accent transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
