import { services } from '../../data/services';
import ServiceLayout from '../../components/services/ServiceLayout';
import Consultation from '../../components/Consultation';


export default function VirusRemoval() {
  const service = services.find(s => s.id === 'virus-removal')!;
  return (
    <>
      <ServiceLayout service={service} />;
      <Consultation/>
    </>
  );

}