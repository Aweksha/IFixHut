import { services } from '../../data/services';
import ServiceLayout from '../../components/services/ServiceLayout';
import Consultation from '../../components/Consultation';


export default function DeviceTuneup() {
  const service = services.find(s => s.id === 'device-tuneup')!;
  return (
    <>
      <ServiceLayout service={service} />;
      <Consultation/>
    </>
  );

}