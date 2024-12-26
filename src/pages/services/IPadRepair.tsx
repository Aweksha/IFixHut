import ServicePage from '../../components/ServicePage';

export default function IPadRepair() {
  return (
    <ServicePage
      title="iPad Repair"
      description="Professional iPad repair and maintenance services"
      image="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80"
      features={[
        "Screen replacement",
        "Battery service",
        "Charging problems",
        "Button repairs",
        "Camera issues",
        "Audio problems",
        "Water damage treatment",
        "Software troubleshooting"
      ]}
    />
  );
}