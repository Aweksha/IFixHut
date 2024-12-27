import { pcBuilds } from '../data/pcBuilds';
import Hero from '../components/Hero';
import PCBuildCard from '../components/PCBuildCard';
import Consultation from '../components/Consultation';

export default function CustomPC() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title="Custom PC Building"
        subtitle="Your dream computer, built by experts"
        backgroundImage="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Build Type</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pcBuilds.map((build, index) => (
            <PCBuildCard key={index} {...build} />
          ))}
        </div>
      </div>
      <Consultation/>
    </div>
  );
}