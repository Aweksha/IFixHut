import { services } from '../../data/services';
import ServiceLayout from '../../components/services/ServiceLayout';
import Consultation from '../../components/Consultation';

export default function CellphoneRepair() {
  const service = services.find(s => s.id === 'cellphone-repair')!;
  return (
    <>
      <ServiceLayout service={service} />
      <Consultation/>
    </>
  );

}