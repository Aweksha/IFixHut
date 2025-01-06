import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from 'lucide-react';
import ServiceSelection from './steps/ServiceSelection';
import DeviceDetails from './steps/DeviceDetails';
import IssueDetails from './steps/IssueDetails';
import ContactInfo from './steps/ContactInfo';
import ProgressBar from './ProgressBar';
import { type FormData, type ServiceCategory } from './types';
import hero  from '../../assets/hero.webp';

const INITIAL_FORM_DATA: FormData = {
  serviceCategory: '',
  deviceModel: '',
  issueType: '',
  issueDescription: '',
  urgentService: false,
  name: '',
  email: '',
  phone: '',
  preferredDate: '',
  preferredTime: '',
  attachments: [], // Store files as File[] here
};

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const fileArray = Array.from(files);
    updateFormData({ attachments: fileArray });
  };

  const handleNext = () => {
    if (step === 1 && !formData.serviceCategory) {
      setErrorMessage('Please select a service category to proceed.');
      return;
    }
    if (step < 4) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const validateForm = () => {
    const requiredFields = [
      'serviceCategory',
      'deviceModel',
      'issueType',
      'issueDescription',
      'name',
      'email',
      'phone',
      'preferredDate',
    ];

    for (const field of requiredFields) {
      if (!formData[field as keyof FormData]) {
        setErrorMessage(`Please fill in all the fields before submitting.`);
        return false;
      }
    }

    setErrorMessage(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const attachmentsBase64 = await Promise.all(
        formData.attachments.map((file) => {
          return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        })
      );

      await emailjs.send(
        'service_5crof55',
        'template_vdllamg',
        {
          service_category: formData.serviceCategory,
          device_model: formData.deviceModel,
          issue_type: formData.issueType,
          issue_description: formData.issueDescription,
          urgent_service: formData.urgentService ? 'Yes' : 'No',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          preferred_date: formData.preferredDate,
          preferred_time: formData.preferredTime,
          attachments: attachmentsBase64.join(','),
        },
        'IX5QJwJRlnMDITeB-'
      );

      setSubmitStatus('success');
      setFormData(INITIAL_FORM_DATA);
      setStep(1);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send your booking request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-200">
      <div className="max-w-2xl mx-auto p-6">
        <ProgressBar currentStep={step} totalSteps={4} />

        <form onSubmit={handleSubmit} className="mt-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <ServiceSelection
                  selectedService={formData.serviceCategory}
                  onSelect={(category) => updateFormData({ serviceCategory: category })}
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <DeviceDetails
                  category={formData.serviceCategory as ServiceCategory}
                  formData={formData}
                  updateFormData={updateFormData}
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <IssueDetails
                  category={formData.serviceCategory as ServiceCategory}
                  formData={formData}
                  updateFormData={updateFormData}
                />
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <ContactInfo
                  formData={formData}
                  updateFormData={updateFormData}
                  onFileUpload={handleFileUpload}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {errorMessage && step === 1 && (
            <div className="mt-4 text-red-600">{errorMessage}</div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Back
              </button>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!formData.serviceCategory} // Disable if no service selected
                className={`ml-auto flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ${
                  !formData.serviceCategory ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Book Appointment'}
              </button>
            )}
          </div>
        </form>

        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
            Your appointment has been booked successfully! We'll contact you shortly.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {errorMessage || 'There was an error booking your appointment. Please try again.'}
          </div>
        )}
      </div>

      <div className=""
      style={{
        backgroundImage : `url(${hero})`,
        backgroundPosition : `center`,
        backgroundSize : `cover`,
      }}
      >
      <div className='bg-black/70 flex items-center flex-col rounded-lg shadow-lg py-14 text-white'>
      <h2 className="text-2xl text-slate-200 font-bold mb-6">Contact Information</h2>
            <motion.div
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            transition={{
              duration: .5,
            }}
            className="max-full flex flex-col lg:flex-row  justify-between items-center gap-10">
              <div className="flex items-center bg-slate-200/10 px-8 py-5">
                <Mail className="w-8 h-8 text-red-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-slate-300">info@ifixhut.com</p>
                </div>
              </div>
              <div className="flex items-center bg-slate-200/10 px-8 py-5">
                <MapPin className="w-8 h-8 text-red-600 mr-4" />
                <div className=''>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-slate-300">2310 Virginia Pkwy, McKinney, TX 75071</p>
                </div>
              </div>
              <div className="flex items-center bg-slate-200/10 px-10 py-5">
                <Phone className="w-8 h-8 text-red-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Telephone</h3>
                  <p className="text-slate-300">469 300 3936</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
    </div>
  );
}

