import ServicePage from '../../components/ServicePage';

export default function DeviceTuneup() {
  return (
    <ServicePage
      title="Device Tune-up"
      description="Comprehensive device optimization and maintenance services"
      image="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80"
      features={[
        "System optimization",
        "Startup program management",
        "Disk cleanup and defragmentation",
        "Driver updates",
        "Software updates",
        "Registry cleaning",
        "Performance monitoring",
        "Preventive maintenance"
      ]}
    />
  );
}