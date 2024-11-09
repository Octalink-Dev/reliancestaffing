// components/sections/Locations.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const regions = [
  "Leicester",
  "Birmingham",
  "Torquay",
  "Exeter",
  "Dartmouth",
  "London",
  "Plymouth",
  "Melton Mowbray"
] as const;

export function Locations() {
  return (
    <section className="py-16" id="locations">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Nationwide Healthcare Staffing – We’re Where You Need Us
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="text-cyan-500" />
            <span className="text-xl text-gray-600">Our locations: </span>
          </div>
          <p className="text-gray-600 mb-8">
           Our reach extends across the nation, ensuring healthcare facilities have access to the skilled professionals they need, anytime, anywhere
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {regions.map((region) => (
              <div 
                key={region}
                className="p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-cyan-50 transition-colors"
              >
                {region}
              </div>
            ))}
          </div>
          <Button asChild className="bg-cyan-500 hover:bg-cyan-600">
            <Link href="/locations">View All Locations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}