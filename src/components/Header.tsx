"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import logoSvg from '@/assets/images/logo.svg';

const NAV_LINKS = [
  { label: 'Filosofi', href: '/philosophy' },
  { label: 'Tjenester', href: '/services' },
  { label: 'Prosjekter', href: '/projects' },
  { label: 'Blogg', href: '/blog' },
  { label: 'Kontakt', href: '/contact' },
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
            <Image
              src={logoSvg}
              alt="Tenki logo"
              width={48}
              height={48}
              priority
              className="object-contain transition-transform duration-300 group-hover:scale-105"
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
            aria-label={mobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-[55] bg-tenki-bg md:hidden flex flex-col justify-center items-center transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Top bar: close button */}
        <div className="absolute top-0 left-0 right-0 px-6 py-6 flex justify-end items-center">
          <button onClick={() => setMobileMenuOpen(false)} aria-label="Lukk meny" className="text-tenki-text">
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((item, i) => (
            <div
              key={item.label}
              style={{
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.4s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.06}s, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.06}s`,
              }}
            >
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-serif tracking-wide text-tenki-text hover:text-tenki-accent transition-colors duration-300"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <p
          style={{
            opacity: mobileMenuOpen ? 1 : 0,
            transition: 'opacity 0.5s ease 0.5s',
          }}
          className="absolute bottom-12 text-xs uppercase tracking-widest text-tenki-muted"
        >
          Tenki &middot; Unlocking intelligence
        </p>
      </div>
    </>
  );
};

export default Header;
