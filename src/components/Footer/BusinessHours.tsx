import { Clock } from 'lucide-react';

const hours = [
  { day: "Monday", hours: "10:00 AM - 6:00 PM" },
  { day: "Tuesday", hours: "10:00 AM - 6:00 PM" },
  { day: "Wednesday", hours: "10:00 AM - 6:00 PM" },
  { day: "Thursday", hours: "10:00 AM - 6:00 PM" },
  { day: "Friday", hours: "10:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "Appointments Only" }
];

export default function BusinessHours() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-blue-600">
        <Clock className="w-5 h-5" />
        <h3 className="font-bold text-lg">Business Hours</h3>
      </div>
      <div className="grid gap-2">
        {hours.map((schedule) => (
          <div key={schedule.day} className="flex justify-between text-sm">
            <span className="font-medium">{schedule.day}</span>
            <span className="text-gray-600">{schedule.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
}