import ServicePage from '../../components/ServicePage';

export default function IPhoneRepair() {
  return (
    <ServicePage
      title="iPhone Repair"
      description="Expert iPhone repair services for all models"
      image="https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80"
      features={[
        "Screen replacement",
        "Battery replacement",
        "Camera repair",
        "Charging port repair",
        "Water damage treatment",
        "Button replacement",
        "Speaker repair",
        "iOS troubleshooting"
      ]}
    />
  );
}