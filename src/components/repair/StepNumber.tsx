import { memo } from 'react';

interface StepNumberProps {
    number: number;
    }

export const StepNumber = memo(function StepNumber({ number }: StepNumberProps) {
    return (
        <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-blue-500 text-white text-lg font-bold rounded-full mx-6">
        {number}
        </div>
    );
});