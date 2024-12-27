import { services } from '../../data/services';
import ServiceLayout from '../../components/services/ServiceLayout';
import Consultation from '../../components/Consultation';


export default function IPhoneRepair() {
  const service = services.find(s => s.id === 'iphone-repair')!;
  return (
    <>
      <ServiceLayout service={service} />
      <Consultation/>
    </>
  );

}