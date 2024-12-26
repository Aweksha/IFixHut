import ServicePage from '../../components/ServicePage'

export default function CustomGamingPC() {
  return (
    <ServicePage
      title="Custom Gaming PC Builds"
      description="Professional custom gaming computer building services"
      image="https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80"
      features={[
        "Custom build consultation",
        "High-end gaming components",
        "Liquid cooling setup",
        "RGB lighting design",
        "Cable management",
        "Overclocking setup",
        "Benchmark testing",
        "Windows optimization"
      ]}
    />
  );
}