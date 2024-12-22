"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 mt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Understanding our terms and conditions of service
          </p>
          <Button 
            size="lg"
            className="bg-white text-cyan-600 hover:bg-gray-100"
            onClick={() => document.getElementById('terms-content')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Read Our Terms
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16" id="terms-content">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Introduction
                  </h2>
                  <p className="text-gray-600">
                    These Terms of Service ("Terms") govern your use of the website and services provided by Reliance Staffing Ltd ("we," "our," or "us"). By accessing our website or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Definitions
                  </h2>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>"Client" refers to healthcare organizations seeking staffing services</li>
                    <li>"Candidate" refers to healthcare professionals seeking employment opportunities</li>
                    <li>"Services" refers to our staffing and recruitment services</li>
                    <li>"Website" refers to our online platform and related services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Service Terms
                  </h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">For Healthcare Professionals</h3>
                    <p className="text-gray-600">
                      By registering with us, you agree to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Provide accurate and up-to-date information about your qualifications and experience</li>
                      <li>Maintain current professional registration and required certifications</li>
                      <li>Comply with all relevant healthcare regulations and standards</li>
                      <li>Inform us promptly of any changes to your availability or circumstances</li>
                      <li>Adhere to client workplace policies and procedures</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6">For Healthcare Organizations</h3>
                    <p className="text-gray-600">
                      By engaging our services, you agree to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Provide accurate details of staffing requirements</li>
                      <li>Maintain a safe working environment</li>
                      <li>Comply with all relevant employment laws and regulations</li>
                      <li>Process payments according to agreed terms</li>
                      <li>Provide necessary orientation and support to placed staff</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Professional Standards
                  </h2>
                  <p className="text-gray-600">
                    All healthcare professionals placed through our service must maintain high professional standards, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Current registration with relevant professional bodies</li>
                    <li>Up-to-date mandatory training</li>
                    <li>Compliance with NHS and CQC standards</li>
                    <li>Adherence to professional codes of conduct</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Payments and Fees
                  </h2>
                  <p className="text-gray-600">
                    Our payment terms and fee structure will be clearly communicated in separate service agreements. All parties agree to honor the financial terms specified in these agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Liability and Insurance
                  </h2>
                  <p className="text-gray-600">
                    We maintain appropriate professional and public liability insurance. However, healthcare organizations remain responsible for their workplace environment and direct supervision of placed staff.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Confidentiality
                  </h2>
                  <p className="text-gray-600">
                    All parties must maintain confidentiality regarding sensitive information, including patient data, business information, and personal details, in accordance with relevant data protection laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Termination
                  </h2>
                  <p className="text-gray-600">
                    We reserve the right to terminate services if any party breaches these terms or acts in a manner that could harm our reputation or business interests. Notice periods and specific termination conditions will be outlined in individual service agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Contact Information
                  </h2>
                  <p className="text-gray-600">
                    For any questions regarding these Terms, please contact us at:<br /><br />
                    Reliance Staffing Ltd<br />
                    23-25 Rutland House<br />
                    Friar Lane<br />
                    Leicester<br />
                    LE1 5QQ<br />
                    United Kingdom<br />
                    (Operating in Devon and Midlands)<br /><br />
                    Email: info@reliancestaffing.co.uk<br />
                    Phone: 07788 237277
                  </p>
                </section>

                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">
                    These Terms of Service were last updated in December 2024. We reserve the right to modify these terms at any time. Continued use of our services following any changes constitutes acceptance of those changes.
                  </p>
                  <p className="text-sm text-gray-600">
                    © 2024 Reliance Staffing Ltd. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}