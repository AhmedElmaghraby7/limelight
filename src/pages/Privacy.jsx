import React from "react";
export default function() {
  return (
    <section className="max-w-4xl mx-auto px-4 flex-1 flex flex-col justify-center py-16 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-[#D7263D] mb-6 text-center">
        Privacy Policy
      </h1>

      <p className="mb-4">
        At <strong>Limelight</strong>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data.
      </p>

      <h2 className="text-2xl font-semibold text-[#D7263D] mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, and phone number when you use our services or contact our support team.
      </p>

      <h2 className="text-2xl font-semibold text-[#D7263D] mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide and improve our customer support</li>
        <li>To notify you about updates or offers</li>
        <li>To process transactions securely</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#D7263D] mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">
        We use standard security measures to protect your personal data. However, no method of transmission over the Internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold text-[#D7263D] mt-6 mb-2">4. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal information to third parties. We may share data with trusted partners who help us operate our website or services.
      </p>

      <h2 className="text-2xl font-semibold text-[#D7263D] mt-6 mb-2">5. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this policy from time to time. Any changes will be posted on this page with an updated revision date.
      </p>

      <p className="mt-6">
        If you have any questions about this policy, please contact us at{" "}
        <a href="mailto:support@limelight.com" className="text-[#D7263D] underline">
          support@limelight.com
        </a>.
      </p>
    </section>
  );
};


