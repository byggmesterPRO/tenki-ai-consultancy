"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-tenki-bg/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4 group">
            <img
              src="/images/logo.svg"
              alt="Tenki logo"
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-ogg text-4xl tracking-tight font-bold text-tenki-text">
              tenki
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-widest text-tenki-text hover:text-tenki-accent transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-tenki-text relative z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            className="fixed inset-0 z-[55] bg-tenki-bg md:hidden flex flex-col justify-center items-center"
          >
            {/* Top bar: close button */}
            <div className="absolute top-0 left-0 right-0 px-6 py-6 flex justify-end items-center">
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="text-tenki-text">
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-serif tracking-wide text-tenki-text hover:text-tenki-accent transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-12 text-xs uppercase tracking-widest text-tenki-muted"
            >
              Tenki &middot; Unlocking intelligence
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
