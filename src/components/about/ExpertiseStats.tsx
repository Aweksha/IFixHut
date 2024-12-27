import { AnimatedCounter } from './AnimatedCounter';

interface StatItemProps {
    value: number;
    label: string;
    suffix?: string;
    }

    function StatItem({ value, label, suffix = '' }: StatItemProps) {
    return (
        <div>
        <AnimatedCounter end={value} suffix={suffix} />
        <div className="text-gray-600">{label}</div>
        </div>
    );
    }

    export function ExpertiseStats() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Expertise</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
            <StatItem value={10} label="Years Experience" suffix="+" />
            <StatItem value={30000} label="Repairs Completed" suffix="+" />
            <StatItem value={500} label="Custom PCs Built" suffix="+" />
            <StatItem value={99} label="Satisfied Customers" suffix="%" />
        </div>
        </div>
    );
}