import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pcBuilds } from '../data/pcBuilds';
import Hero from '../components/Hero';
import PCBuildCard from '../components/PCBuildCard';
import CustomPCForm from '../components/customPC/CustomPCForm';
import WhyCustomPC from '../components/customPC/WhyCustomPC';
import CustomPCFAQ from '../components/customPC/CustomPCFAQ';
import ReviewSection from '../components/reviews/ReviewSection';
import HowItWorks from '../components/customPC/HowItWorks';
import Consultation from '../components/Consultation';
import { MapPin, Phone, Mail } from 'lucide-react';
import hero from '../assets/hero.webp'


export default function CustomPC() {
  const [selectedBuild, setSelectedBuild] = useState<string | null>(null);

  const handleBuildSelect = (buildType: string) => {
    setSelectedBuild(buildType);
  };

  return (
    <div className="min-h-screen bg-gray-50"
    >
      <Hero
        title="Custom PC Building"
        subtitle="Your dream computer, built by experts"
        backgroundImage="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto py-16 px-4 space-y-24" >
        {/* Build Type Selection */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Build Type</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pcBuilds.map((build, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PCBuildCard
                  {...build}
                  onClick={() => handleBuildSelect(build.title.toLowerCase())}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Custom PC Form */}
        <AnimatePresence mode="wait">
          {selectedBuild && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <CustomPCForm
                buildType={selectedBuild}
                onClose={() => setSelectedBuild(null)}
              />
            </motion.section>
          )}
        </AnimatePresence>
        <div className="rounded-lg"
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
                <div className="flex items-center bg-slate-200/10 px-8 py-5 rounded-lg">
                  <Mail className="w-8 h-8 text-red-600 mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-slate-300">info@ifixhut.com</p>
                  </div>
                </div>
                <div className="flex items-center bg-slate-200/10 px-8 py-5 rounded-lg">
                  <MapPin className="w-8 h-8 text-red-600 mr-4" />
                  <div className=''>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-slate-300">2310 Virginia Pkwy,<br className='flex lg:hidden'/> McKinney, TX 75071</p>
                  </div>
                </div>
                <div className="flex items-center bg-slate-200/10 px-10 py-5 rounded-lg">
                  <Phone className="w-8 h-8 text-red-600 mr-4" />
                  <div>
                    <h3 className="font-semibold">Telephone</h3>
                    <a href='tel:+14693003936' className="text-slate-300 underline hover:text-blue-400">+1 469 300 3936</a>
                  </div>
                </div>
              </motion.div>
          </div>
        </div>
        <hr className='border-2 border-slate-400 rounded-2xl'/>
        {/* Why Custom PC Section */}
        <WhyCustomPC />
        <hr className='border-2 border-slate-400 rounded-2xl'/>
        {/* How It Works */}
        <HowItWorks />
        <hr className='border-2 border-slate-400 rounded-2xl'/>
        {/* Testimonials */}
        <ReviewSection />
        <hr className='border-2 border-slate-400 rounded-2xl'/>
        {/* FAQ Section */}
        <CustomPCFAQ />
      </div>
      {/* Free Consulation Section */}
      <Consultation/>
    </div>
  );
}