import { services } from '../../data/services';
import ServiceLayout from '../../components/services/ServiceLayout';
import Consultation from '../../components/Consultation';


export default function LaptopRepair() {
  const service = services.find(s => s.id === 'laptop-repair')!;
  return (
    <>
      <ServiceLayout service={service} />;
      <Consultation/>
    </>
  );

}