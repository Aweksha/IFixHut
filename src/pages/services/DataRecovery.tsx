import { services } from '../../data/services';
import ServiceLayout from '../../components/services/ServiceLayout';
import Consultation from '../../components/Consultation';

export default function DataRecovery() {
  const service = services.find(s => s.id === 'data-recovery')!;
  return (
    <>
      <ServiceLayout service={service} />;
      <Consultation/>
    </>
  );

}