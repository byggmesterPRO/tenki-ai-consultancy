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

const CookiePolicyPage: React.FC = () => {
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
          Cookie Policy
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
              title: '1. What Are Cookies',
              content: 'Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and supply information to the website owners. Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you close your browser, while session cookies are deleted when you close your browser.',
            },
            {
              title: '2. How We Use Cookies',
              content: 'Tenki uses cookies on tenki.no to enhance your browsing experience, understand how visitors interact with our website, and improve our services. We use cookies to remember your preferences, analyze website traffic and performance, and ensure the security of our platform. We do not use cookies to identify you personally or track your activities across other websites without your explicit consent.',
            },
            {
              title: '3. Types of Cookies We Use',
              content: 'We use several categories of cookies on our website. Essential cookies are necessary for the website to function properly and cannot be disabled. These include cookies that enable you to navigate the site and use its features. Analytics cookies help us understand how visitors use our website by collecting anonymous information about pages visited, time spent on the site, and any errors encountered. Preference cookies remember your settings and choices to provide a more personalized experience on future visits.',
            },
            {
              title: '4. Essential Cookies',
              content: 'Essential cookies are strictly necessary to provide you with services available through our website and to use some of its features. These cookies enable core functionality such as security, network management, and accessibility. Without these cookies, services you have requested cannot be provided. Essential cookies do not require your consent and are automatically placed when you visit our site.',
            },
            {
              title: '5. Analytics Cookies',
              content: 'With your consent, we use analytics cookies to collect information about how visitors use tenki.no. These cookies collect anonymous data such as the number of visitors, where visitors have come from, and the pages they visit. We use this information to improve our website, understand user behavior, and measure the effectiveness of our content. Analytics cookies do not collect personal information that directly identifies you.',
            },
            {
              title: '6. Preference Cookies',
              content: 'Preference cookies, also known as functionality cookies, allow our website to remember choices you make and provide enhanced, more personalized features. These may include your language preference, region, or display settings. The information these cookies collect may be anonymized, and they cannot track your browsing activity on other websites. These cookies require your consent before being placed on your device.',
            },
            {
              title: '7. Third-Party Cookies',
              content: 'Some cookies on tenki.no may be set by third-party services that appear on our pages. These third-party cookies are subject to the respective privacy and cookie policies of those external services. We carefully select our third-party providers and ensure they comply with applicable data protection regulations, including GDPR. We do not control these third-party cookies and recommend reviewing the privacy policies of these services.',
            },
            {
              title: '8. How to Manage Cookies',
              content: 'Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. Please note that if you disable essential cookies, some features of tenki.no may not function properly. Browser settings typically allow you to see what cookies are stored, delete them individually or all at once, and block cookies from specific or all websites. Consult your browser\'s help documentation for specific instructions.',
            },
            {
              title: '9. Cookie Consent',
              content: 'When you first visit tenki.no, you will be presented with a cookie consent banner explaining our use of cookies. You can choose to accept or decline non-essential cookies. You may withdraw or modify your consent at any time through the cookie settings available on our website. Your consent choices are stored in a cookie so we can remember your preferences on future visits.',
            },
            {
              title: '10. Contact Us',
              content: 'If you have any questions about our use of cookies or this Cookie Policy, please contact us at hei@tenki.no. We are committed to transparency and will be happy to provide additional information about how we use cookies on our website. For general privacy inquiries, please refer to our Privacy Policy or reach out to us directly.',
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

export default CookiePolicyPage;
