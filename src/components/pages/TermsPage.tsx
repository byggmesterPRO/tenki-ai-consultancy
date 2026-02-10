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

const TermsPage: React.FC = () => {
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
          Terms of Service
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
              title: '1. Acceptance of Terms',
              content: 'By accessing and using the services provided by Tenki ("we", "us", "our") through our website tenki.no, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and Tenki, established in 2025 and operating under Norwegian law.',
            },
            {
              title: '2. Services Description',
              content: 'Tenki provides AI consultancy services, including but not limited to strategic AI implementation guidance, technical consulting, training, and related professional services. The specific scope, deliverables, and timeline for each engagement will be defined in separate service agreements or statements of work. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.',
            },
            {
              title: '3. Intellectual Property',
              content: 'All content on tenki.no, including text, graphics, logos, designs, and software, is the property of Tenki or its licensors and is protected by Norwegian and international copyright, trademark, and other intellectual property laws. Any deliverables created specifically for clients under a service agreement will be governed by the terms of that agreement. You may not reproduce, distribute, or create derivative works from our website content without explicit written permission.',
            },
            {
              title: '4. User Responsibilities',
              content: 'You agree to provide accurate and complete information when engaging our services or communicating with us. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account. You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our systems or interfere with other users.',
            },
            {
              title: '5. Limitation of Liability',
              content: 'To the maximum extent permitted by Norwegian law, Tenki shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of our services or website. Our total liability for any claims arising from our services shall not exceed the fees paid by you for those specific services in the 12 months preceding the claim. Some jurisdictions do not allow limitations on implied warranties or liability, so some of these limitations may not apply to you.',
            },
            {
              title: '6. Confidentiality',
              content: 'Both parties agree to maintain the confidentiality of any proprietary or sensitive information disclosed during the course of our professional relationship. This obligation survives the termination of our services. Specific confidentiality terms for individual projects will be outlined in separate non-disclosure agreements or service contracts as appropriate.',
            },
            {
              title: '7. Governing Law and Disputes',
              content: 'These Terms of Service shall be governed by and construed in accordance with the laws of Norway, without regard to conflict of law provisions. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the Norwegian courts. We encourage clients to contact us first to resolve any concerns informally before pursuing formal legal action.',
            },
            {
              title: '8. Termination',
              content: 'Either party may terminate a service engagement according to the terms specified in the relevant service agreement. We reserve the right to refuse service or terminate our relationship with any client at our discretion, with or without cause. Upon termination, you must cease all use of our proprietary materials and confidential information. Provisions regarding confidentiality, intellectual property, and limitation of liability survive termination.',
            },
            {
              title: '9. Changes to Terms',
              content: 'We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website with an updated revision date. Your continued use of our services after such changes constitutes acceptance of the modified terms. For significant changes, we will make reasonable efforts to notify existing clients via email at hei@tenki.no.',
            },
            {
              title: '10. Contact Information',
              content: 'If you have any questions about these Terms of Service, please contact us at hei@tenki.no. For general inquiries about our services, you can reach us through our website at tenki.no or via email. We aim to respond to all inquiries within 2 business days.',
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

export default TermsPage;
