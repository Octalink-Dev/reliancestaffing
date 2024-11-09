'use client';

import React, { useEffect, useState } from "react";
import { setCookie, getCookie } from 'cookies-next';

const CookieConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = getCookie("cookieConsent");
    if (consentCookie === undefined) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    setShowBanner(false);
    setCookie("cookieConsent", consent ? "accepted" : "rejected", { maxAge: 60 * 60 * 24 * 365 }); // 1 year
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm mb-2 sm:mb-0 sm:mr-4">
          This website uses cookies to improve your browsing experience. 
          We don&apos;t collect any personal data.
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => handleConsent(true)}
            className="bg-white text-black px-4 py-2 rounded text-sm font-semibold hover:bg-gray-200 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => handleConsent(false)}
            className="bg-gray-700 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-gray-600 transition-colors"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;