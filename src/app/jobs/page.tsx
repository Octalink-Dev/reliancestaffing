// app/jobs/page.tsx
import { JobCard } from "@/components/JobCard";
import { jobs } from "@/data/JobData";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 mt-16"> {/* Added mt-16 to account for fixed header */}
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Current Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our team of healthcare professionals and make a difference in people's lives
          </p>
        </div>

        {/* Jobs List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see the right position? Register your interest and we'll keep you updated on new opportunities.
          </p>
          <a
            href="https://reliancestaffing.20xapp.com/staff/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-cyan-500 to-pink-500 hover:opacity-90 transition-opacity"
          >
            Register Your Interest
          </a>
        </div>
      </div>
    </main>
  );
}