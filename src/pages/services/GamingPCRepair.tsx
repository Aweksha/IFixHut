import ServicePage from '../../components/ServicePage';

export default function GamingPCRepair() {
  return (
    <ServicePage
      title="Gaming PC Repair"
      description="Specialized repair services for gaming computers"
      image="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80"
      features={[
        "GPU troubleshooting",
        "Cooling system optimization",
        "Power supply issues",
        "Performance tuning",
        "RGB lighting repair",
        "Overclocking assistance",
        "Game optimization",
        "Hardware upgrades"
      ]}
    />
  );
}