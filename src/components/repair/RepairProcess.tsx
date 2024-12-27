import { memo } from 'react';
import { repairSteps } from '../../data/repairSteps';
import { RepairStep } from './RepairStep';

export const RepairProcess = memo(function RepairProcess() {
    return (
        <section className="relative py-16 bg-inherit border-b-2 border-slate-300">
        <h2 className="text-4xl font-bold text-center mb-12">Repair Process</h2>
        <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute sm:hidden lg:flex z-10 left-1/2 transform -translate-x-1/2 top-0 h-full w-2 rounded-2xl bg-slate-500" />

            {/* Steps */}
            <div className="space-y-16">
            {repairSteps.map((step, index) => (
                <RepairStep
                key={step.id}
                step={step}
                index={index}
                />
            ))}
            </div>
        </div>
        </section>
    );
});