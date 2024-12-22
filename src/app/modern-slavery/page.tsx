"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModernSlaveryStatement() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 mt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Modern Slavery Statement
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Our commitment to preventing modern slavery and human trafficking in our operations
          </p>
          <Button 
            size="lg"
            className="bg-white text-cyan-600 hover:bg-gray-100"
            onClick={() => document.getElementById('statement-content')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Read Our Statement
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16" id="statement-content">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Commitment
                  </h2>
                  <p className="text-gray-600">
                    Reliance Staffing Ltd is committed to preventing modern slavery and human trafficking in our business operations and supply chain. We uphold fundamental human rights and view the prevention of modern slavery as a core value of our organization.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Organizational Structure
                  </h2>
                  <p className="text-gray-600">
                    As a healthcare staffing provider operating across the UK, we work with healthcare professionals, medical facilities, and various suppliers. We recognize our responsibility to be alert to the risks of modern slavery in our business and wider supply chain.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Policies
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We have implemented robust policies and procedures to ensure we:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Identify and assess potential risk areas in our supply chains</li>
                    <li>Mitigate the risk of slavery and human trafficking occurring</li>
                    <li>Monitor potential risk areas in our supply chains</li>
                    <li>Protect whistleblowers through our confidential reporting system</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Due Diligence Processes
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We have in place systems to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Thoroughly verify the identity of all healthcare professionals we work with</li>
                    <li>Conduct rigorous background checks on all staff and contractors</li>
                    <li>Ensure all staff members receive appropriate compensation</li>
                    <li>Regularly audit our recruitment practices</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Training
                  </h2>
                  <p className="text-gray-600">
                    We provide training to our staff to ensure a high level of understanding of the risks of modern slavery and human trafficking in our supply chains and our business. All our employees are expected to report concerns, and management is expected to act upon them.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Effectiveness
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We use the following key performance indicators to measure how effective we have been:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Completion rates of staff training on modern slavery</li>
                    <li>Actions taken to strengthen supply chain auditing and verification</li>
                    <li>Steps taken to upskill high-risk suppliers</li>
                    <li>Investigations undertaken into reports and remedial actions taken</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Reporting Concerns
                  </h2>
                  <p className="text-gray-600">
                    We encourage any concerns about modern slavery to be raised using our confidential reporting line. All reports will be fully investigated and appropriate remedial actions taken.
                  </p>
                </section>

                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">
                    This statement is made pursuant to section 54(1) of the Modern Slavery Act 2015 and constitutes our slavery and human trafficking statement for the current financial year.
                  </p>
                  <p className="text-sm text-gray-600">
                    Last updated: December 2024
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