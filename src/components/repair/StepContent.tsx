import { memo } from 'react';
import type { RepairStep } from '../../data/repairSteps';

interface StepContentProps {
     step: RepairStep;
}

export const StepContent = memo(function StepContent({ step }: StepContentProps) {
    return (
        <div className="bg-white shadow-xl p-6 rounded-lg max-w-md w-full bg-blue-900/5 backdrop-blur-sm">
        <h3 className="text-xl font-bold border-blue-200 border-b-2 py-1">
            {step.title}
        </h3>
        <p className="mt-2 text-gray-600">{step.description}</p>
        </div>
    );
});