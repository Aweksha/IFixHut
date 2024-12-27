import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer/Footer';

// Lazy load main pages
const Home = lazy(() => import('./pages/Home'));
const CustomPC = lazy(() => import('./pages/CustomPC'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load service pages
const MacBookRepair = lazy(() => import('./pages/services/MacBookRepair'));
const IMacRepair = lazy(() => import('./pages/services/IMacRepair'));
const LaptopRepair = lazy(() => import('./pages/services/LaptopRepair'));
const VirusRemoval = lazy(() => import('./pages/services/VirusRemoval'));
const PCUpgrade = lazy(() => import('./pages/services/PCUpgrade'));
const DataRecovery = lazy(() => import('./pages/services/DataRecovery'));
const DeviceTuneup = lazy(() => import('./pages/services/DeviceTuneup'));
const IPhoneRepair = lazy(() => import('./pages/services/IPhoneRepair'));
const CellphoneRepair = lazy(() => import('./pages/services/CellphoneRepair'));
const IPadRepair = lazy(() => import('./pages/services/IPadRepair'));
const GamingPCRepair = lazy(() => import('./pages/services/GamingPCRepair'));
const CustomGamingPC = lazy(() => import('./pages/services/CustomGamingPC'));
const NetworkSetup = lazy(() => import('./pages/services/NetworkSetup'));

export default function App() {
  return (
    <Router>
      {/* Apply the fixed background image */}
      <div className='bg-slate-950 scroll-smooth'>
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/custom-pc" element={<CustomPC />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Service Routes */}
              <Route path="/services/macbook-repair" element={<MacBookRepair />} />
              <Route path="/services/imac-repair" element={<IMacRepair />} />
              <Route path="/services/laptop-repair" element={<LaptopRepair />} />
              <Route path="/services/virus-removal" element={<VirusRemoval />} />
              <Route path="/services/pc-upgrade" element={<PCUpgrade />} />
              <Route path="/services/data-recovery" element={<DataRecovery />} />
              <Route path="/services/device-tuneup" element={<DeviceTuneup />} />
              <Route path="/services/iphone-repair" element={<IPhoneRepair />} />
              <Route path="/services/cellphone-repair" element={<CellphoneRepair />} />
              <Route path="/services/ipad-repair" element={<IPadRepair />} />
              <Route path="/services/gaming-pc-repair" element={<GamingPCRepair />} />
              <Route path="/services/custom-gaming-pc" element={<CustomGamingPC />} />
              <Route path="/services/network-setup" element={<NetworkSetup />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}