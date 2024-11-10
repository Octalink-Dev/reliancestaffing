// components/sections/WorkWithUs.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCard {
  title: string;
  image: string;
  href: string;
}

const services: ServiceCard[] = [
  {
    title: "Healthcare Assistants",
    image: "/images/healthcare-assistant.jpeg",
    href: "/jobs"
  },
  {
    title: "Registered Nurses",
    image: "/images/registered-nurses.png",
    href: "/jobs"
  },
  {
    title: "Team Leaders",
    image: "/images/team-leader.jpeg",
    href: "/jobs"
  },
  {
    title: "Cooks",
    image: "/images/cook.png",
    href: "/jobs"
  }
];

export function WorkWithUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-[#E6427A] text-sm font-bold uppercase tracking-wider mb-4">
            WHAT WE DO
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#1AA3B7] mb-6">
            Reliance Staffing Services
          </h3>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link 
              href={service.href}
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-square relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-xl font-semibold">
                      {service.title}
                    </h3>
                    <ArrowRight className="text-white opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}