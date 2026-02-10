"use client";

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tenki-text py-12 text-stone-400 font-sans text-sm">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="flex items-center gap-2 justify-center md:justify-start mb-2 group">
            <img
              src="/assets/images/logo.png"
              alt="Tenki logo"
              className="h-6 w-6 object-contain invert opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <span className="font-ogg text-xl font-bold text-stone-100">tenki</span>
          </Link>
          <p>&copy; {new Date().getFullYear()} Tenki Consulting. All rights reserved.</p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="hover:text-tenki-accent transition-colors">LinkedIn</a>
          <Link href="/privacy" className="hover:text-tenki-accent transition-colors">Privacy Policy</Link>
          <Link href="/impressum" className="hover:text-tenki-accent transition-colors">Impressum</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
