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
    <section className="min-h-[calc(100vh-4rem)] pt-20 md:pt-32 pb-8 md:pb-16 relative bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#1AA3B7] leading-tight">
                Connecting Healthcare
                <span className="block">Professionals with Excellence</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
                Your trusted partner in healthcare staffing, delivering exceptional talent across England.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
              <Button 
                asChild
                size="lg"
                className="bg-[#1AA3B7] hover:opacity-90 text-base md:text-lg w-full lg:w-auto lg:px-8"
              >
                <Link href="https://calendar.app.google/xWn8Km8PcPZVs7nd6">
                  REQUEST STAFF
                </Link>
              </Button>
              
              {/* Call section - hidden on mobile */}
              <div className="hidden lg:flex items-center gap-2 text-gray-600">
                <span className="text-sm font-medium">Or give us a call:</span>
                <a 
                  href="tel:07788237277" 
                  className="text-[#1AA3B7] font-semibold hover:opacity-90 transition-opacity flex items-center text-sm"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  07788 237277
                </a>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="pt-6 md:pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6">
                <span className="font-medium text-gray-600 text-sm">
                  Follow our journey:
                </span>
                <div className="flex items-center gap-6">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#1AA3B7] transition-colors group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl max-w-2xl mx-auto">
              <Image
                src="/images/hero-care.png"
                alt="Caring healthcare professional with patient"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
              />
              {/* Play Button Overlay with Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="group relative bg-white/90 p-4 sm:p-6 md:p-8 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-105"
                  aria-label="Watch testimonial"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                    <Image
                      src="/images/logo-.png"
                      alt="Reliance Staffing"
                      width={80}
                      height={80}
                      className="relative z-10 w-full h-full"
                    />
                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-0 h-0 border-t-6 sm:border-t-8 border-t-transparent border-l-8 sm:border-l-12 border-l-[#E6427A] border-b-6 sm:border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}