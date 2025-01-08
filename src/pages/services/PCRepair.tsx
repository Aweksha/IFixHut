import { services } from '../../data/services';
import ServiceLayout from '../../components/services/ServiceLayout';
import Consultation from '../../components/Consultation';


export default function GamingPCRepair() {
  const service = services.find(s => s.id === 'gaming-pc-repair')!;
  return (
    <>
      <ServiceLayout service={service} />
      <Consultation/>
    </>
  );
}