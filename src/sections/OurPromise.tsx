// components/sections/OurPromise.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const promisePoints = [
  "Selectively hire highest qualified caregivers",
  "Extensive recruiting process",
  "Ongoing training & development",
  "Credentialed and experienced registered nurses",
  "All of our staff have undergone full DBS and background check"
];

export function OurPromise() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-[#E6427A] text-sm font-bold uppercase tracking-wider">
                OUR PROMISE TO YOU
              </h2>
              <h3 className="text-4xl font-bold text-[#1AA3B7]">
                The Reliance Standard
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Throughout our company, Reliance Staffing is committed to upholding the highest standards of healthcare recruitment. Whenever we interview a prospective healthcare professional, our team asks: 
                <span className="block mt-4 text-xl text-[#1AA3B7] font-semibold italic">
                &ldquo;Is this someone I would trust to care for my own family?&rdquo;
                </span>
              </p>
              
              <p className="text-gray-600 text-lg">
                If we can answer yes with absolute confidence, the candidate will be invited to join our Reliance Staffing family. We are dedicated to maintaining this high standard of selection, and we have created a culture within our company to develop that criteria throughout the entire recruiting process.
              </p>
            </div>

            {/* Promise Points */}
            <div className="space-y-4">
              {promisePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1AA3B7] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <Button 
              asChild
              className="bg-[#1AA3B7] hover:opacity-90 mt-6"
            >
              <Link href="/about">
                MORE ABOUT RELIANCE
              </Link>
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/healthcare-team.png"
                alt="Healthcare professionals at Reliance Staffing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Decorative Element */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1AA3B7]/20 to-transparent" />
            </div>
            {/* Decorative Background Element */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full bg-[#E6427A]/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}