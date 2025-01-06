import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import consult from '../assets/consult.webp'
import { ReducedMotion } from "./animations/ReducedMotion";


export default function Consultation() {
    return(

        <ReducedMotion>
        {/* New Call-to-Action Section */}
            <div className="relative bg-gray-900 text-white py-24 md:py-32 shadow-xl">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0"
            >
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-6 max-w-lg">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Get Professional Services for All Your Devices
                </h2>
                <p className="text-lg md:text-xl leading-relaxed">
                Trust us for expert repairs on smartphones, tablets, laptops, desktops,
                and more. Schedule today for top-tier service!
                </p>
            </div>

            {/* React Router Link as Button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{duration: .2}} className="z-[1]">
                <Link
                to="/book-appointment"
                className="bg-red-500 text-white text-lg md:text-xl font-semibold py-4 px-8 rounded-lg shadow-lg transition-all  hover:bg-white hover:text-black"
                >
                Free Consultation
                </Link>
            </motion.div>
            </motion.div>

            {/* Background Image */}
            <div className="absolute inset-0 opacity-25">
            <img
                src={consult}
                alt="Repair Background"
                className="w-full h-full object-cover"
            />
            </div>
            </div>
        </ReducedMotion>
    );

}



