import { services } from '../../data/services';
import ServiceLayout from '../../components/services/ServiceLayout';
import Consultation from '../../components/Consultation';

export default function IPadRepair() {
  const service = services.find(s => s.id === 'ipad-repair')!;
  return (
    <>
      <ServiceLayout service={service} />;
      <Consultation/>
    </>
  );

}