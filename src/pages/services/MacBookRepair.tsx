import ServicePage from '../../components/ServicePage';

export default function MacBookRepair() {
  return (
    <ServicePage
      title="MacBook Repair & Upgrade"
      description="Professional MacBook repair and upgrade services"
      image="https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80"
      features={[
        "Screen replacement and repair",
        "Battery replacement",
        "Logic board repair",
        "RAM and SSD upgrades",
        "Keyboard replacement",
        "Water damage repair",
        "macOS optimization",
        "Data recovery"
      ]}
    />
  );
}