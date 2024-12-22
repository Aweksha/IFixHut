import { Laptop, Smartphone, Cpu, Wrench } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { FadeIn } from '../components/animations/FadeIn';
import RepairProcess from '../components/RepairProcess';

const services = [
  {
    icon: Smartphone,
    title: "Phone Repair",
    description: "Screen replacement, battery service, and more"
  },
  {
    icon: Laptop,
    title: "Laptop Repair",
    description: "Hardware fixes, upgrades, and maintenance"
  },
  {
    icon: Cpu,
    title: "Custom PC Builds",
    description: "Tailored gaming and workstation builds"
  },
  {
    icon: Wrench,
    title: "General Repairs",
    description: "Diagnostics and repairs for all tech"
  }
];


export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-gray-50">
      <Hero
        title="All Tech Solution"
        subtitle="We fix whats broken and help you build your dream tech"
        backgroundImage="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80"
        ctaText="Get Started"
        ctaLink="/contact"
      />

      <div className="max-w-7xl mx-auto py-16 px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.3}>
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
      </div>

      <RepairProcess />
    </div>
  );
}