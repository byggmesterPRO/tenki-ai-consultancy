"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import logoSvg from '@/assets/images/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tenki-text text-stone-400 font-sans">
      {/* Main Footer */}
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src={logoSvg}
                alt="Tenki logo"
                width={32}
                height={32}
                className="object-contain invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="font-ogg text-2xl font-bold text-stone-100">tenki</span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-xs">
              Unlocking intelligence. Vi hjelper fremtidsrettede selskaper med å bygge motstandsdyktighet gjennom praktisk AI-integrasjon.
            </p>
            <p className="text-stone-500 text-xs">Etablert 2025</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-stone-200 font-medium text-sm uppercase tracking-widest mb-6">Navigasjon</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/philosophy" className="hover:text-tenki-accent transition-colors">Filosofi</Link></li>
              <li><Link href="/services" className="hover:text-tenki-accent transition-colors">Tjenester</Link></li>
              <li><Link href="/approach" className="hover:text-tenki-accent transition-colors">Vår tilnærming</Link></li>
              <li><Link href="/projects" className="hover:text-tenki-accent transition-colors">Prosjekter</Link></li>
              <li><Link href="/blog" className="hover:text-tenki-accent transition-colors">Blogg</Link></li>
              <li><Link href="/contact" className="hover:text-tenki-accent transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-stone-200 font-medium text-sm uppercase tracking-widest mb-6">Juridisk</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="hover:text-tenki-accent transition-colors">Personvernerklæring</Link></li>
              <li><Link href="/terms" className="hover:text-tenki-accent transition-colors">Vilkår for bruk</Link></li>
              <li><Link href="/cookies" className="hover:text-tenki-accent transition-colors">Informasjonskapsler</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-stone-200 font-medium text-sm uppercase tracking-widest mb-6">Ta kontakt</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="mailto:hei@tenki.no" className="flex items-center gap-3 hover:text-tenki-accent transition-colors">
                  <Mail size={16} strokeWidth={1.5} />
                  hei@tenki.no
                </a>
              </li>
              <li>
                <a href="tel:+4746135537" className="flex items-center gap-3 hover:text-tenki-accent transition-colors">
                  <Phone size={16} strokeWidth={1.5} />
                  +47 461 35 537
                </a>
              </li>
              <li>
                <a href="https://tenki.no" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-tenki-accent transition-colors">
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                  tenki.no
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="container mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Tenki. Alle rettigheter forbeholdt.</p>
          <div className="flex items-center gap-4">
            <p>Norge</p>
            <Link href="/admin/login" className="hover:text-stone-400 transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
