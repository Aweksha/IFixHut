import { memo } from 'react';
import { motion } from 'framer-motion';
import type { RepairStep as RepairStepType } from '../../data/repairSteps';
import { StepContent } from './StepContent';
import { StepNumber } from './StepNumber';

interface RepairStepProps {
    step: RepairStepType;
    index: number;
    }

export const RepairStep = memo(function RepairStep({ step, index }: RepairStepProps) {
    return (
        <motion.div
        key={step.id}
        className={`flex items-center justify-center lg:justify-start ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}
        initial={{ transform: 'translateY(50px) scale(0.95)', opacity: 0 }}
        whileInView={{ transform: 'translateY(0) scale(1)', opacity: 1 }}
        transition={{
            duration: 0.3,
            delay: Math.min(index * 0.1, 0.3),
            ease: [0.21, 0.47, 0.32, 0.98]
        }}
        viewport={{ once: true, amount: 0.3 }}
        >
        <StepContent step={step} />
        <StepNumber number={step.id} />
        </motion.div>
    );
});