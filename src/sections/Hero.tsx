// components/sections/Hero.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://facebook.com/reliancestaffing",
      label: "Facebook"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/reliancestaffing",
      label: "Instagram"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/reliancestaffing",
      label: "LinkedIn"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/reliancestaffing",
      label: "Twitter"
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-16 relative bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1AA3B7] leading-tight">
                Connecting Healthcare
                <span className="block">Professionals with Excellence</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600">
                Your trusted partner in healthcare staffing, delivering exceptional talent across England.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-[#1AA3B7] hover:opacity-90 text-lg"
              >
                <Link href="https://calendar.app.google/xWn8Km8PcPZVs7nd6">
                  REQUEST STAFF
                </Link>
              </Button>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <span>Or give us a call:</span>
                <a 
                  href="tel:07788237277" 
                  className="text-[#1AA3B7] font-semibold hover:opacity-90 transition-opacity flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  07788 237277
                </a>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <span className="font-medium text-gray-600">
                  Follow our journey:
                </span>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#1AA3B7] transition-colors group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-care.png"
                alt="Caring healthcare professional with patient"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
              {/* Play Button Overlay with Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="group relative bg-white/90 p-8 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-105"
                  aria-label="Watch testimonial"
                >
                  <div className="w-20 h-20 flex items-center justify-center">
                    <Image
                      src="/images/logo-.png"
                      alt="Reliance Staffing"
                      width={80}
                      height={80}
                      className="relative z-10"
                    />
                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#E6427A] border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>
                </button>
              </div>
              {/* Watch Testimonial Label */}
              {/* <div className="absolute bottom-6 left-6">
                <span className="bg-white py-2 px-4 rounded-lg shadow-lg text-[#E6427A] font-medium inline-block">
                  WATCH TESTIMONIAL
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}