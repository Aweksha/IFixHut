import { services } from '../../data/services';
import ServiceLayout from '../../components/services/ServiceLayout';
import Consultation from '../../components/Consultation';

export default function CustomGamingPC() {
  const service = services.find(s => s.id === 'custom-gaming-pc')!;
  return (
    <>
      <ServiceLayout service={service} />
      <Consultation/>
    </>
  );
}