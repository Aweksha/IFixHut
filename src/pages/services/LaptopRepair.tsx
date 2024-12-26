import ServicePage from '../../components/ServicePage';

export default function LaptopRepair() {
  return (
    <ServicePage
      title="Laptop Repair & Upgrade"
      description="Comprehensive laptop repair and upgrade solutions"
      image="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80"
      features={[
        "Screen replacement",
        "Keyboard and touchpad repair",
        "Battery replacement",
        "RAM and storage upgrades",
        "Motherboard repair",
        "DC jack repair",
        "Hinge repair",
        "Performance optimization"
      ]}
    />
  );
}