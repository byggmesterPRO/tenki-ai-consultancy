import { NavItem, Service, Testimonial } from '@/types';
import { Network, Cpu, LineChart, ShieldCheck } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Services', href: '/services' },
  { label: 'Approach', href: '/approach' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'Workflow Architecture',
    description: 'We map your existing processes to identify friction points where AI can introduce fluidity and speed without disrupting your core culture.',
    icon: Network,
  },
  {
    title: 'Custom AI Agents',
    description: 'Bespoke large language models tuned to your internal data, creating tireless assistants for customer support, legal analysis, or creative drafting.',
    icon: Cpu,
  },
  {
    title: 'Data Intelligence',
    description: 'Turning dormant data into decision-making power. We build predictive pipelines that give your leadership team a view around the corner.',
    icon: LineChart,
  },
  {
    title: 'Governance & Security',
    description: 'Innovation without risk. We implement rigid security protocols and ethical guidelines to ensure your AI adoption is safe, compliant, and sustainable.',
    icon: ShieldCheck,
  },
];

export const TESTIMONIAL: Testimonial = {
  quote: "Tenki didn't just sell us a tool. They redesigned how our teams communicate, removing the drudgery and leaving us with the work that actually matters.",
  author: "Elena Visser",
  role: "Chief Operating Officer",
  company: "Nordic Logistics Group",
};
