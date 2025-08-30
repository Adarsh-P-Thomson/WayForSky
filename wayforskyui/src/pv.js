import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-4">Privacy Policy</h1>
          <p className="text-xl text-center text-blue-100">WayforSky – Global Aviation Pathway</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white space-y-12">
          
          {/* Introduction */}
          <section>
            <p className="text-black leading-relaxed text-lg">
              At WayforSky – Global Aviation Pathway, your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our services, whether online (via our website www.wayforsky.com) or offline.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-3xl font-bold text-black mb-6">1. Information We Collect</h2>
            <p className="text-black mb-6 text-lg">We may collect the following information:</p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-black mb-3">Personal Information:</h3>
                <p className="text-black leading-relaxed">
                  Name, email address, phone number, date of birth, address, passport details (for visa/academy applications), and academic qualifications.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-black mb-3">Financial Information:</h3>
                <p className="text-black leading-relaxed">
                  Payment details, educational loan documents, and related financial records when you apply for our services.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-black mb-3">Technical Information:</h3>
                <p className="text-black leading-relaxed">
                  IP address, browser type, device details, and website usage data.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-black mb-3">Other Information:</h3>
                <p className="text-black leading-relaxed">
                  Feedback, queries, or communication with our support team.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-3xl font-bold text-black mb-6">2. How We Use Your Information</h2>
            <p className="text-black mb-6 text-lg">Your information is used for:</p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <span className="text-black leading-relaxed">Processing student applications for international aviation training.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <span className="text-black leading-relaxed">Providing counselling, guidance, and visa/document assistance.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <span className="text-black leading-relaxed">Coordinating with international aviation academies, financial institutions, and travel partners.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <span className="text-black leading-relaxed">Sending updates, promotional material, and important notifications about your training journey.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <span className="text-black leading-relaxed">Improving our services, website functionality, and user experience.</span>
              </li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-3xl font-bold text-black mb-6">3. Information Sharing</h2>
            <p className="text-black mb-6 text-lg">We do not sell your personal data. However, we may share information with:</p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <span className="text-black leading-relaxed">Partner international aviation academies for admission purposes.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <span className="text-black leading-relaxed">DGCA-approved doctors for medicals.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <span className="text-black leading-relaxed">Financial institutions or education loan assistance.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <span className="text-black leading-relaxed">Travel and accommodation partners for ticketing, money exchange, and stay arrangements.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <span className="text-black leading-relaxed">Legal or regulatory authorities if required by law.</span>
              </li>
            </ul>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-3xl font-bold text-black mb-6">4. Data Protection</h2>
            <p className="text-black leading-relaxed text-lg">
              We implement strict security measures to protect your personal data from unauthorised access, misuse, or disclosure. All information is stored securely, and only authorised personnel have access.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-3xl font-bold text-black mb-6">5. Your Rights</h2>
            <p className="text-black mb-6 text-lg">As a user, you have the right to:</p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <span className="text-black leading-relaxed">Access the personal information we hold about you.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <span className="text-black leading-relaxed">Request correction or deletion of your data.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <span className="text-black leading-relaxed">Withdraw consent for promotional communication.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <span className="text-black leading-relaxed">Raise concerns about data handling practices.</span>
              </li>
            </ul>

            <p className="text-black mt-6 text-lg">
              To exercise your rights, please contact us at{' '}
              <a href="mailto:info@wayforsky.com" className="text-blue-600 hover:text-blue-800 underline">
                info@wayforsky.com
              </a>
            </p>
          </section>

          {/* Cookies & Website Usage */}
          <section>
            <h2 className="text-3xl font-bold text-black mb-6">6. Cookies & Website Usage</h2>
            <p className="text-black leading-relaxed text-lg">
              Our website may use cookies to improve user experience, analyse site traffic, and personalise content. You can control or disable cookies through your browser settings.
            </p>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-3xl font-bold text-black mb-6">7. Policy Updates</h2>
            <p className="text-black leading-relaxed text-lg">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The latest version will always be available on our website.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <p className="text-black mb-6 text-lg">
                If you have any questions about this Privacy Policy or our data practices, please contact:
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">WayforSky – Global Aviation Pathway</h3>
                
                <div className="space-y-2">
                  <p className="text-black">
                    <span className="font-semibold">Address:</span> Bowring Hospital Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka, 560001
                  </p>
                  
                  <p className="text-black">
                    <span className="font-semibold">Phone:</span>{' '}
                    <a href="tel:+917019903800" className="text-blue-600 hover:text-blue-800 underline">
                      +91 7019903800
                    </a>
                  </p>
                  
                  <p className="text-black">
                    <span className="font-semibold">Email:</span>{' '}
                    <a href="mailto:info@wayforsky.com" className="text-blue-600 hover:text-blue-800 underline">
                      info@wayforsky.com
                    </a>
                  </p>
                  
                  <p className="text-black">
                    <span className="font-semibold">Website:</span>{' '}
                    <a href="https://www.wayforsky.com" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                      www.wayforsky.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;