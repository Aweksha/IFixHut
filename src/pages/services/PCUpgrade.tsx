import { services } from '../../data/services';
import ServiceLayout from '../../components/services/ServiceLayout';
import Consultation from '../../components/Consultation';


export default function PCUpgrade() {
  const service = services.find(s => s.id === 'pc-upgrade')!;
  return (
    <>
      <ServiceLayout service={service} />
      <Consultation/>
    </>
  );

}