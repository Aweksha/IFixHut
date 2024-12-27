import { services } from '../../data/services';
import ServiceLayout from '../../components/services/ServiceLayout';
import Consultation from '../../components/Consultation';


export default function NetworkSetup() {
  const service = services.find(s => s.id === 'network-setup')!;
  return (
    <>
      <ServiceLayout service={service} />
      <Consultation/>
    </>
  );

}