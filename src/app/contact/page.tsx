// app/contact/page.tsx
"use client";

import { useState } from "react";
import { Phone, Mail, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 mt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We're Here to Support You
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Our dedicated team is ready to assist you with any questions or needs you may have
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-cyan-600 transition-colors"
              asChild
            >
              <a href="https://calendar.app.google/xWn8Km8PcPZVs7nd6" target="_blank" rel="noopener noreferrer">
                Book a Call
                <Calendar className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-2 bg-gray-50 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <a 
                        href="tel:0800 123 4567" 
                        className="flex items-center text-gray-600 hover:text-cyan-500 transition-colors"
                      >
                        <Phone className="h-5 w-5 mr-3" />
                        0800 123 4567
                      </a>
                      <a 
                        href="mailto:info@reliancestaffing.co.uk" 
                        className="flex items-center text-gray-600 hover:text-cyan-500 transition-colors"
                      >
                        <Mail className="h-5 w-5 mr-3" />
                        info@reliancestaffing.co.uk
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Office Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Emergency Contact
                    </h3>
                    <p className="text-gray-600">
                      24/7 On-Call Support:<br />
                      0800 999 8888
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-3 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-cyan-500"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}