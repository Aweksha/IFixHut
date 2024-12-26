import ServicePage from '../../components/ServicePage';

export default function VirusRemoval() {
  return (
    <ServicePage
      title="Virus/Malware Removal"
      description="Professional virus and malware removal services"
      image="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80"
      features={[
        "Virus and malware scanning",
        "Spyware removal",
        "Ransomware removal",
        "System cleanup",
        "Security software installation",
        "Firewall configuration",
        "Browser security setup",
        "Security best practices training"
      ]}
    />
  );
}