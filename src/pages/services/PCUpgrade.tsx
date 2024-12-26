import ServicePage from '../../components/ServicePage';

export default function PCUpgrade() {
  return (
    <ServicePage
      title="PC Upgrade"
      description="Professional PC upgrade services to enhance your computer's performance"
      image="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80"
      features={[
        "CPU upgrades",
        "RAM expansion",
        "Storage upgrades (HDD to SSD)",
        "Graphics card installation",
        "Power supply upgrades",
        "Cooling system improvements",
        "Case modifications",
        "Performance optimization"
      ]}
    />
  );
}