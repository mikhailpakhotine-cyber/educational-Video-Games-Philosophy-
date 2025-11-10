import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/concepts', label: 'Concepts' },
    { path: '/frameworks', label: 'Frameworks' },
    { path: '/games', label: 'Games' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/course', label: 'Course' },
    { path: '/resources', label: 'Resources' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-cyberpunk-dark/95 backdrop-blur-sm border-b border-cyberpunk-blue/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Title */}
          <Link to="/" className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-cyberpunk-blue neon-glow">
              VIDEO GAMES
            </h1>
            <p className="text-xs md:text-sm font-mono text-cyberpunk-text-dim">
              as Philosophical Texts
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-heading text-sm uppercase tracking-wider transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-cyberpunk-blue neon-glow'
                    : 'text-cyberpunk-text-dim hover:text-cyberpunk-blue'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-cyberpunk-blue p-2 hover:bg-cyberpunk-darker rounded"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 flex flex-col gap-3 border-t border-cyberpunk-blue/30 pt-4"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-heading text-sm uppercase tracking-wider py-2 transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-cyberpunk-blue neon-glow'
                      : 'text-cyberpunk-text-dim hover:text-cyberpunk-blue'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
