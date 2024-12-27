import { ReducedMotion } from "./animations/ReducedMotion";
import techinican1 from '../assets/technician1.webp'
import techinican2 from '../assets/technician2.webp'
import OptimizedImage from "./OptimizedImage";


export default function TechniciansSection() {
    return (
        <ReducedMotion>
            <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
                <div className="grid grid-cols-2 gap-4 lg:w-1/2">
                <OptimizedImage
                    src={techinican1}
                    alt="Technician repairing a device"
                    className="w-full rounded-lg"
                />
                <OptimizedImage
                    src={techinican2}
                    alt="Technician soldering a component"
                    className="w-full rounded-lg"
                />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-4">Meet Our Skilled Technicians</h2>
                <p className="text-gray-600 mb-8">
                    Experienced, certified professionals dedicated to bringing your
                    devices back to life with precision and care.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                    <span className="text-red-500 text-xl">✔</span>
                    <div>
                        <h3 className="font-bold">Efficient Troubleshooting</h3>
                        <p className="text-gray-600">
                        Whether it’s virus removal, malware removal, or system
                        upgrades, our team can quickly identify and fix the issue.
                        </p>
                    </div>
                    </li>
                    <li className="flex items-start gap-4">
                    <span className="text-red-500 text-xl">✔</span>
                    <div>
                        <h3 className="font-bold">Device Compatibility</h3>
                        <p className="text-gray-600">
                        We specialize in smartphone repair, tablet repair, and laptop
                        repair, ensuring all your devices work like new.
                        </p>
                    </div>
                    </li>
                    <li className="flex items-start gap-4">
                    <span className="text-red-500 text-xl">✔</span>
                    <div>
                        <h3 className="font-bold">Repair Assurance</h3>
                        <p className="text-gray-600">
                        Our technicians offer expert repair services for personal and
                        business devices.
                        </p>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </section>
        </ReducedMotion>
    );
}
