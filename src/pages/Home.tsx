import {services} from "../data/servicetiles"
import { lazy, Suspense } from 'react';
import Hero from "../components/Hero";
import ServiceCard from "../components/services/ServiceCard";
import { FadeIn } from "../components/animations/FadeIn";

import hero from '../assets/hero.webp'
import consult from '../assets/consult.webp'
import Consultation from "../components/Consultation";
import LoadingSpinner from "../components/LoadingSpinner";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Lazy load components that are below the fold
const RepairProcess = lazy(() => import("../components/RepairProcess"));
const ReviewsSection = lazy(() => import('../components/reviews/GoogleReviewsSection'));
const TechniciansSection = lazy(() => import("../components/TechniciansSection"));

export default function Home() {

  return (
    <div className="min-h-screen bg-cover bg-gray-100">
      <Hero
        title="All Tech Solution"
        subtitle="We fix what's broken and help you build your dream tech"
        backgroundImage={hero}
        ctaText="Get Started"
        ctaLink="/contact"
      />
      <TechniciansSection />
      <div
      className=""
      style={{
        backgroundImage : `url(${consult})`,
        backgroundPosition : `center`,
        backgroundSize : `cover`,
      }}
      >
      <div className="flex flex-col justify-center items-center bg-slate-950/70 max-w-full mx-auto py-16 px-2 lg:px-20">
        <FadeIn>
          <h2 className="text-white text-3xl font-bold text-center mb-12 border-b-2 border-slate-500/30 rounded-lg">Our Services</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <motion.button
          whileHover={{scale : 1.1 }}
          whileTap={{scale : .8}}
          className="text-white mt-16 bg-slate-500/30 text-lg md:text-xl font-semibold py-4 px-8 rounded-lg shadow-xl shadow-slate-600/20 hover:bg-white hover:text-black"
          >
                <Link to="/services">
                  See all Services
                </Link>
          </motion.button>
        </FadeIn>
      </div>
      </div>
      <Suspense fallback={<div className="h-96 flex items-center justify-center"><LoadingSpinner/></div>}>
        <RepairProcess />
        <Consultation/>
        <ReviewsSection />
      </Suspense>

    </div>
  );
}