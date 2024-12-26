import ServicePage from '../../components/ServicePage';

export default function CellphoneRepair() {
  return (
    <ServicePage
      title="Cellphone Repair"
      description="Professional repair services for all smartphone brands"
      image="https://images.unsplash.com/photo-1585828922344-85c9daa264b0?auto=format&fit=crop&q=80"
      features={[
        "Screen repairs",
        "Battery replacement",
        "Charging port repair",
        "Camera replacement",
        "Water damage recovery",
        "Software issues",
        "Data transfer",
        "Motherboard repair"
      ]}
    />
  );
}