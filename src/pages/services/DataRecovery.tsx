import ServicePage from '../../components/ServicePage';

export default function DataRecovery() {
  return (
    <ServicePage
      title="Data Recovery"
      description="Professional data recovery services for all storage devices"
      image="https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80"
      features={[
        "Hard drive data recovery",
        "SSD data recovery",
        "RAID recovery",
        "USB drive recovery",
        "Memory card recovery",
        "Deleted file recovery",
        "Corrupted drive recovery",
        "Emergency data recovery"
      ]}
    />
  );
}