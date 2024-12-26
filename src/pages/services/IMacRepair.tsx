import ServicePage from '../../components/ServicePage';

export default function IMacRepair() {
  return (
    <ServicePage
      title="iMac Repair & Upgrade"
      description="Expert iMac repair and performance upgrades"
      image="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80"
      features={[
        "Screen repair and replacement",
        "Hard drive upgrades to SSD",
        "RAM upgrades",
        "Graphics card issues",
        "Power supply replacement",
        "Cooling system repair",
        "Software optimization",
        "Hardware diagnostics"
      ]}
    />
  );
}