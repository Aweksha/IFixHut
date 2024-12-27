import { memo } from 'react';
import { type CommonIssue } from '../../data/services';
import { AlertCircle } from 'lucide-react';

interface CommonIssuesProps {
    issues: CommonIssue[];
}

    export default memo(function CommonIssues({ issues }: CommonIssuesProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2">
        {issues.map((issue, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                <h3 className="font-medium text-gray-900">{issue.problem}</h3>
                <p className="text-gray-600 text-sm">{issue.solution}</p>
                </div>
            </div>
            </div>
        ))}
        </div>
    );
});