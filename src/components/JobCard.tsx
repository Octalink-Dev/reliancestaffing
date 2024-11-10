// components/JobCard.tsx
import { MapPin, Clock } from "lucide-react";

export interface Job {
    title: string;
    description: string;
    location: string;
    type: string[];
    applyLink: string;
}

export function JobCard({ job }: { job: Job }) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        {job.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                        {job.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex items-center text-gray-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                        </div>
                        {job.type.map((type, typeIndex) => (
                            <span
                                key={typeIndex}
                                className="inline-flex items-center text-sm rounded-full px-3 py-1 bg-cyan-50 text-cyan-700"
                            >
                                <Clock className="w-4 h-4 mr-1" />
                                {type}
                            </span>
                        ))}
                    </div>
                </div>
                <a
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-500 hover:opacity-90 transition-opacity"
                >
                    Apply
                </a>
            </div>
        </div>
    );
}