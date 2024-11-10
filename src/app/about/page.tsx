// app/about/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail, CheckCircle } from "lucide-react";

interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const services: ServiceDetail[] = [
  {
    title: "Care Assistants",
    description: "Our healthcare assistants have undergone rigorous training and possess extensive experience in providing care to individuals in various healthcare settings.",
    features: [
      "Experienced Professionals",
      "Compassionate Care",
      "Reliable Support",
      "Personal Care",
      "Communication Skills",
      "Observation and Reporting",
      "Enhanced Care Quality",
      "Staffing Flexibility"
    ],
    image: "/images/care-assistant.png"
  },
  {
    title: "Registered Nurses",
    description: "Our experienced nurses provide professional medical care with compassion and expertise, ensuring the highest standards of clinical excellence.",
    features: [
      "Clinical Expertise",
      "Patient Assessment and Monitoring",
      "Care Planning and Coordination",
      "Empathetic Communication",
      "Enhanced Clinical Care",
      "Comprehensive Support",
      "Continuity of Care"
    ],
    image: "/images/registered-nurse.png"
  },
  {
    title: "Senior Carers",
    description: "Our team of highly trained senior carers are dedicated to raising the bar in elderly care and enhancing the quality of life for residents under your care.",
    features: [
      "Clinical Competence",
      "Medication Management",
      "Emergency Preparedness",
      "Person-centered Care",
      "Leadership Skills",
      "Quality Assurance"
    ],
    image: "/images/senior-carer.png"
  },
  {
    title: "Carehome Cooks",
    description: "Our carehome cooks understand the importance of providing nutritious and delicious meals to your residents.",
    features: [
      "50+ Care Home Cooked Meals",
      "Food Safety Trained",
      "Allergy Awareness",
      "Dysphagia / IDDSFI Training",
      "Menu Planning",
      "Dietary Requirements Management"
    ],
    image: "/images/cook2.png"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1AA3B7] to-[#E6427A] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Exceptional Staffing Solutions for Your Healthcare Needs
            </h1>
            <p className="text-xl opacity-90">
              At Reliance Staffing, we understand the importance of providing skilled and compassionate healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              Our unwavering commitment to excellence ensures that residents in care homes and supported living accommodations receive the highest quality of care. We believe in treating each resident with dignity, respect, and empathy, ensuring their physical, emotional, and social needs are met with sensitivity and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-[#1AA3B7]">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="text-[#E6427A]">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                            <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-3xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={95}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-[#1AA3B7]">
              Get in Touch
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <a 
                href="tel:07788237277"
                className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#1AA3B7]"
              >
                <Phone className="w-5 h-5" />
                07788 237277
              </a>
              <a 
                href="mailto:info@reliancestaffing.co.uk"
                className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#1AA3B7]"
              >
                <Mail className="w-5 h-5" />
                info@reliancestaffing.co.uk
              </a>
            </div>
            <Button 
              asChild
              className="bg-gradient-to-r from-[#1AA3B7] to-[#E6427A] hover:opacity-90"
            >
              <a href="https://calendar.app.google/xWn8Km8PcPZVs7nd6">
                Request Staff Today
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}