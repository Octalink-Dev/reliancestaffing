// app/page.tsx
import { Hero } from "@/sections/Hero";
import { WorkWithUs } from "@/sections/WorkWithUs";
import { Locations } from "@/sections/Locations";
import { Reviews } from "@/sections/Reviews";
import { About } from "@/sections/About";
import { ScrollToTop } from "@/sections/ScrollToTop";
import { JobCard } from "@/components/JobCard";
import { jobs } from "@/data/JobData";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { OurPromise } from "@/sections/OurPromise";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkWithUs />
      <OurPromise/>
      <Reviews />
      <About />
        {/* Featured Jobs Section */}
        <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our team of healthcare professionals
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.slice(0, 3).map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild className="bg-cyan-500 hover:opacity-90">
              <Link href="/jobs">
                View All Jobs
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </main>
  );
}