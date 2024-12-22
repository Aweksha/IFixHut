import { Cpu, CircuitBoard, HardDrive, Fan } from 'lucide-react';

export const pcBuilds = [
  {
    title: "Gaming PC",
    description: "High-performance gaming rigs built for maximum FPS",
    features: [
      { icon: Cpu, text: "Latest gaming processors" },
      { icon: CircuitBoard, text: "High-speed RAM" },
      { icon: HardDrive, text: "Fast storage solutions" },
      { icon: Fan, text: "Advanced cooling systems" }
    ]
  },
  {
    title: "Workstation",
    description: "Professional workstations for content creation",
    features: [
      { icon: Cpu, text: "Multi-core processors" },
      { icon: CircuitBoard, text: "ECC memory options" },
      { icon: HardDrive, text: "Large storage arrays" },
      { icon: Fan, text: "Quiet cooling solutions" }
    ]
  },
  {
    title: "Home/Office PC",
    description: "Reliable computers for everyday use",
    features: [
      { icon: Cpu, text: "Efficient processors" },
      { icon: CircuitBoard, text: "Balanced RAM config" },
      { icon: HardDrive, text: "SSD storage" },
      { icon: Fan, text: "Standard cooling" }
    ]
  }
];