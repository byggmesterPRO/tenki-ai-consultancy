"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 md:px-12 mb-16">
        <motion.p
          initial="hidden" animate="visible" custom={0} variants={fade}
          className="text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium"
        >
          Legal
        </motion.p>
        <motion.h1
          initial="hidden" animate="visible" custom={1} variants={fade}
          className="font-serif text-5xl md:text-7xl leading-[1.1] text-tenki-text mb-8"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial="hidden" animate="visible" custom={2} variants={fade}
          className="font-sans text-tenki-muted text-sm"
        >
          Last updated: January 2025
        </motion.p>
      </section>

      <section className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="prose prose-stone max-w-none space-y-12">
          {[
            {
              title: '1. Introduction',
              content: 'Tenki Consulting ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.',
            },
            {
              title: '2. Information We Collect',
              content: 'We may collect personal information that you voluntarily provide, including your name, email address, company name, phone number, and any details you include in your messages through our contact form. We also automatically collect certain technical data such as IP address, browser type, and pages visited.',
            },
            {
              title: '3. How We Use Your Information',
              content: 'We use collected information to respond to inquiries, provide our consulting services, improve our website, send relevant communications (with your consent), and comply with legal obligations. We do not sell your personal information to third parties.',
            },
            {
              title: '4. Data Storage & Security',
              content: 'Your data is stored on secure servers within the European Union. We employ industry-standard encryption, access controls, and monitoring to protect your information. Despite our efforts, no method of electronic transmission or storage is 100% secure.',
            },
            {
              title: '5. Cookies',
              content: 'Our website uses essential cookies to ensure proper functionality. We may also use analytics cookies (with your consent) to understand how visitors interact with our site. You can manage cookie preferences through your browser settings.',
            },
            {
              title: '6. Your Rights (GDPR)',
              content: 'Under the General Data Protection Regulation, you have the right to access, rectify, erase, restrict processing, and port your personal data. You also have the right to withdraw consent and lodge a complaint with a supervisory authority. To exercise these rights, contact us at privacy@tenki.ai.',
            },
            {
              title: '7. Third-Party Services',
              content: 'We may use third-party analytics and communication tools. These services have their own privacy policies governing the use of your information. We ensure all third-party processors comply with GDPR requirements.',
            },
            {
              title: '8. Data Retention',
              content: 'We retain personal data only as long as necessary for the purposes outlined in this policy, or as required by law. Contact form submissions are retained for 24 months unless you request earlier deletion.',
            },
            {
              title: '9. Changes to This Policy',
              content: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.',
            },
            {
              title: '10. Contact',
              content: 'For privacy-related inquiries, please contact our Data Protection Officer at privacy@tenki.ai or write to: Tenki Consulting, Friedrichstraße 12, 10117 Berlin, Germany.',
            },
          ].map((section, i) => (
            <Reveal key={section.title} delay={Math.min(i * 0.05, 0.3)}>
              <div>
                <h2 className="font-serif text-2xl text-tenki-text mb-4">{section.title}</h2>
                <p className="text-tenki-muted leading-relaxed">{section.content}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
