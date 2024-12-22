import { Smartphone, Laptop, Monitor, Cpu, HardDrive, Wifi, Battery, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Smartphone Repair",
    description: "Screen replacement, battery replacement, charging port repair, water damage recovery"
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Laptop Repair",
    description: "Screen repair, keyboard replacement, hardware upgrades, virus removal"
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Desktop Repair",
    description: "Hardware troubleshooting, component replacement, performance optimization"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Custom PC Building",
    description: "Custom gaming PCs, workstations, and servers built to your specifications"
  },
  {
    icon: <HardDrive className="w-8 h-8" />,
    title: "Data Recovery",
    description: "Recovery of lost data from hard drives, SSDs, and mobile devices"
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Network Solutions",
    description: "Network setup, troubleshooting, and security implementation"
  },
  {
    icon: <Battery className="w-8 h-8" />,
    title: "Battery Service",
    description: "Battery replacement for laptops, phones, and tablets"
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Maintenance",
    description: "Regular maintenance and cleaning services for all devices"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive repair and maintenance services for all your technology needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}