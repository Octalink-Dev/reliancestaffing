// components/sections/WorkWithUs.tsx
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, Heart } from "lucide-react";

interface ServiceCard {
  icon: typeof Users | typeof Building2 | typeof Heart;
  title: string;
  description: string;
  href: string;
}

const services: ServiceCard[] = [
  {
    icon: Users,
    title: "Job Opportunities",
    description: "Discover fulfilling careers tailored to your skills and schedule, empowering you to make a difference in healthcare",
    href: "/jobs"
  },
  {
    icon: Building2,
    title: "Agency Staffing",
    description: "Flexible, tailored staffing solutions crafted for the unique needs of healthcare facilities, ensuring top-quality care for every resident",
    href: "/agency-staffing"
  },
  {
    icon: Heart,
    title: "Why Reliance",
    description: "We’re driven by a commitment to quality, competitive rates, and exceptional support for both clients and professionals",
    href: "/why-us"
  }
];

export function WorkWithUs() {
  return (
    <section className="py-16 bg-gray-50" id="work-with-us">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Join Us in Delivering Excellence in Healthcare Staffing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.title} href={service.href}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <service.icon className="text-cyan-500" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}