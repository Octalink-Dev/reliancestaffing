"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 mt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Understanding how we use cookies on our website
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
                    This Cookie Policy explains how Reliance Staffing Ltd ("we," "our," or "us") uses cookies and similar technologies on our website. We use only essential cookies to ensure the basic functionality of our website. We do not store any personal information through cookies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    What Are Cookies?
                  </h2>
                  <p className="text-gray-600">
                    Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide basic functionality such as remembering your preferences.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    How We Use Cookies
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We use only essential cookies that are necessary for the proper functioning of our website. These cookies do not collect any personal information and are used solely for:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Maintaining basic website functionality</li>
                    <li>Ensuring secure navigation throughout the site</li>
                    <li>Remembering your cookie preferences</li>
                    <li>Managing user sessions for essential features</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Types of Cookies We Use
                  </h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Essential Cookies</h3>
                    <p className="text-gray-600">
                      These cookies are strictly necessary for the operation of our website. They enable core functionality such as security and form validation. The website cannot function properly without these cookies.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    No Personal Data Collection
                  </h2>
                  <p className="text-gray-600">
                    We want to emphasize that our website does not collect or retain any personal data through cookies. We have specifically designed our website to minimize data collection and ensure user privacy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Managing Cookies
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Most web browsers allow you to control cookies through their settings preferences. However, please note that disabling certain cookies may limit your ability to use some features of our website.
                  </p>
                  <p className="text-gray-600">
                    You can manage or delete cookies based on your preferences through your browser settings. Click the relevant link below to learn more about cookie management in your browser:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                    <li>Google Chrome</li>
                    <li>Mozilla Firefox</li>
                    <li>Safari</li>
                    <li>Microsoft Edge</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Contact Us
                  </h2>
                  <p className="text-gray-600">
                    If you have any questions about our Cookie Policy, please contact us at:<br /><br />
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
                    This Cookie Policy was last updated in December 2024. We may update this policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons.
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