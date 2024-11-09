// components/sections/Hero.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-cyan-500 to-pink-400 py-20 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
          Where Compassion Meets Professionalism – Your Healthcare Staffing Solution Across the UK
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
           Connecting exceptional healthcare professionals with top-tier facilities. Experience staffing solutions built on quality, compassion, and reliability.          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100"
            >
              <Link href="/hire-staff">
               Hire Healthcare Staff
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-pink-500 hover:bg-pink-600"
            >
              <Link href="/join-team">
               Join Our Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}