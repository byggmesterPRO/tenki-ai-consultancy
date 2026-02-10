"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Services', href: '/services' },
  { label: 'Approach', href: '/approach' },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-tenki-bg/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/assets/images/logo.png"
            alt="Tenki logo"
            className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-ogg text-2xl tracking-tight font-bold text-tenki-text">
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
          className="md:hidden text-tenki-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-tenki-bg shadow-lg border-t border-gray-100 flex flex-col items-center py-8 space-y-6 md:hidden">
             {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-tenki-text hover:text-tenki-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
