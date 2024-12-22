"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 mt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
          <Button 
            size="lg"
            className="bg-white text-cyan-600 hover:bg-gray-100"
            onClick={() => document.getElementById('policy-content')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Read Our Policy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16" id="policy-content">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Introduction
                  </h2>
                  <p className="text-gray-600">
                    Reliance Staffing Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our services, website, and mobile application.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                    <p className="text-gray-600">We may collect:</p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Name, email address, and contact details</li>
                      <li>Professional qualifications and experience</li>
                      <li>Employment history and references</li>
                      <li>Right to work documentation</li>
                      <li>Professional registration numbers</li>
                      <li>Banking and payment information</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We use the collected information for:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Processing job applications and placements</li>
                    <li>Managing your account and providing customer support</li>
                    <li>Sending relevant job opportunities and updates</li>
                    <li>Processing payments and maintaining records</li>
                    <li>Complying with legal and regulatory requirements</li>
                    <li>Improving our services and user experience</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Data Protection
                  </h2>
                  <p className="text-gray-600">
                    We implement appropriate technical and organizational measures to maintain the security of your personal information, including encryption, access controls, and regular security assessments. We comply with all applicable data protection laws, including the UK GDPR and Data Protection Act 2018.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Information Sharing
                  </h2>
                  <p className="text-gray-600">
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Healthcare organizations seeking staff</li>
                    <li>Reference checking services</li>
                    <li>Professional registration bodies</li>
                    <li>Legal and regulatory authorities when required</li>
                    <li>Third-party service providers who assist in our operations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Your Rights
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Under data protection law, you have rights including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>The right to access your personal data</li>
                    <li>The right to rectification of inaccurate data</li>
                    <li>The right to erasure of your data</li>
                    <li>The right to restrict processing</li>
                    <li>The right to data portability</li>
                    <li>The right to object to processing</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Cookies and Tracking
                  </h2>
                  <p className="text-gray-600">
                    Our website uses cookies and similar tracking technologies to improve your browsing experience. You can control cookie settings through your browser preferences. For detailed information about the cookies we use, please refer to our Cookie Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Contact Us
                  </h2>
                  <p className="text-gray-600">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:<br />
                    Email: info@reliancestaffing.co.uk<br />
                    Phone: 07788 237277<br />
                    Address: 23-25 Rutland House
                    Friar Lane
                    Leicester
                    LE1 5QQ
                    United Kingdom
                    (Operating in Devon and Midlands)
                  </p>
                </section>

                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">
                    This Privacy Policy was last updated on December 2024 and may be updated periodically. We will notify you of any material changes by posting the new Privacy Policy on this page.
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