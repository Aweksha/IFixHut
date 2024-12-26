import ServicePage from '../../components/ServicePage';

export default function NetworkSetup() {
  return (
    <ServicePage
      title="Network & Workstation Setup"
      description="Professional network and workstation configuration services"
      image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80"
      features={[
        "Network design and setup",
        "Wireless network configuration",
        "Network security implementation",
        "Workstation deployment",
        "Server setup",
        "VPN configuration",
        "Network monitoring",
        "Remote access setup"
      ]}
    />
  );
}