// components/sections/About.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award, Heart } from "lucide-react";

interface Stat {
  icon: typeof Clock | typeof Users | typeof Award | typeof Heart;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: Clock,
    value: "24/7",
    label: "Support"
  },
  {
    icon: Users,
    value: "100+",
    label: "Healthcare Professionals"
  },
  {
    icon: Award,
    value: "3+",
    label: "Years Experience"
  },
  {
    icon: Heart,
    value: "100%",
    label: "Client Satisfaction"
  }
];

export function About() {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            About Reliance Staffing
          </h2>
          <p className="text-gray-600 mb-8">
           At Reliance Staffing, we understand that healthcare is about more than staffing—it’s about delivering skilled, compassionate support for every resident. With a dedication to training, flexibility, and individualized care, we bring the highest standards to healthcare facilities across the UK.
          </p>
          <Button asChild className="bg-cyan-500 hover:bg-cyan-600">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}