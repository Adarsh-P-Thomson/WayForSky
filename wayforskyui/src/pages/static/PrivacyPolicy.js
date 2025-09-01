/**
 * IMPORTANT: This is a template for a Privacy Policy page.
 * It is NOT legal advice. You should consult with a qualified legal professional
 * to ensure that your Privacy Policy is complete, accurate, and compliant
 * with all applicable laws and regulations for your specific
 * situation and jurisdiction.
 */

export default function PrivacyPolicy() {
  const effectiveDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <main className="font-sans">
      {/* Header */}
      <header className="px-6 pt-10 pb-6 bg-background">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-foreground">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: {effectiveDate}</p>
          <div className="mt-6 h-px w-full bg-border" />
        </div>
      </header>

      {/* Content */}
      <section className="px-6 pb-12 bg-background">
        <div className="mx-auto max-w-3xl space-y-8 text-foreground leading-relaxed">
          <p className="text-pretty text-muted-foreground">
            At WayForSky – Global Aviation Pathway, your privacy is of utmost importance to us. This Privacy Policy
            explains how we collect, use, and protect your personal information when you interact with our services,
            whether online (via our website{" "}
            <a
              href="https://www.wayforsky.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 transition-opacity hover:opacity-90"
              aria-label="Visit www.wayforsky.com (opens in a new tab)"
            >
              www.wayforsky.com
            </a>
            ) or offline.
          </p>

          {/* 1. Information We Collect */}
          <section aria-labelledby="info-we-collect" className="space-y-4">
            <h2 id="info-we-collect" className="text-2xl font-semibold text-foreground">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground">We may collect the following information:</p>

            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-foreground">Personal Information</h3>
                <p className="text-muted-foreground">
                  Name, email address, phone number, date of birth, address, passport details (for visa/academy
                  applications), and academic qualifications.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground">Financial Information</h3>
                <p className="text-muted-foreground">
                  Payment details, educational loan documents, and related financial records when you apply for our
                  services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground">Technical Information</h3>
                <p className="text-muted-foreground">
                  IP address, browser type, device details, and website usage data.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground">Other Information</h3>
                <p className="text-muted-foreground">Feedback, queries, or communication with our support team.</p>
              </div>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section aria-labelledby="how-we-use" className="space-y-3">
            <h2 id="how-we-use" className="text-2xl font-semibold text-foreground">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground">Your information is used for:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Processing student applications for international aviation training.</li>
              <li>Providing counselling, guidance, and visa/document assistance.</li>
              <li>Coordinating with international aviation academies, financial institutions, and travel partners.</li>
              <li>Sending updates, promotional material, and important notifications about your training journey.</li>
              <li>Improving our services, website functionality, and user experience.</li>
            </ul>
          </section>

          {/* 3. Information Sharing */}
          <section aria-labelledby="info-sharing" className="space-y-3">
            <h2 id="info-sharing" className="text-2xl font-semibold text-foreground">
              3. Information Sharing
            </h2>
            <p className="text-muted-foreground">
              We do not sell your personal data. However, we may share information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Partner international aviation academies for admission purposes.</li>
              <li>DGCA-approved doctors for medicals.</li>
              <li>Financial institutions or education loan assistance.</li>
              <li>Travel and accommodation partners for ticketing, money exchange, and stay arrangements.</li>
              <li>Legal or regulatory authorities if required by law.</li>
            </ul>
          </section>

          {/* 4. Data Protection */}
          <section aria-labelledby="data-protection" className="space-y-3">
            <h2 id="data-protection" className="text-2xl font-semibold text-foreground">
              4. Data Protection
            </h2>
            <p className="text-muted-foreground">
              We implement strict security measures to protect your personal data from unauthorised access, misuse, or
              disclosure. All information is stored securely, and only authorised personnel have access.
            </p>
          </section>

          {/* 5. Your Rights */}
          <section aria-labelledby="your-rights" className="space-y-3">
            <h2 id="your-rights" className="text-2xl font-semibold text-foreground">
              5. Your Rights
            </h2>
            <p className="text-muted-foreground">As a user, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Withdraw consent for promotional communication.</li>
              <li>Raise concerns about data handling practices.</li>
            </ul>
            <p className="text-muted-foreground">
              To exercise your rights, please contact us at{" "}
              <a
                href="mailto:info@wayforsky.com"
                className="text-primary underline underline-offset-4 transition-opacity hover:opacity-90"
              >
                info@wayforsky.com
              </a>
              .
            </p>
          </section>

          {/* 6. Cookies & Website Usage */}
          <section aria-labelledby="cookies" className="space-y-3">
            <h2 id="cookies" className="text-2xl font-semibold text-foreground">
              6. Cookies &amp; Website Usage
            </h2>
            <p className="text-muted-foreground">
              Our website may use cookies to improve user experience, analyse site traffic, and personalise content. You
              can control or disable cookies through your browser settings.
            </p>
          </section>

          {/* 7. Policy Updates */}
          <section aria-labelledby="policy-updates" className="space-y-3">
            <h2 id="policy-updates" className="text-2xl font-semibold text-foreground">
              7. Policy Updates
            </h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal
              reasons. The latest version will always be available on our website.
            </p>
          </section>

          {/* Contact */}
          <section aria-labelledby="contact" className="space-y-3">
            <h2 id="contact" className="text-2xl font-semibold text-foreground">
              Contact Us
            </h2>
            <address className="not-italic text-muted-foreground">
              <div>WayForSky – Global Aviation Pathway</div>
              <div>Bowring Hospital Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka, 560001</div>
              <div className="mt-2">
                <span className="block">
                  Phone:{" "}
                  <a href="tel:+917019903800" className="text-primary underline underline-offset-4 transition-opacity hover:opacity-90">
                    +91 70199 03800
                  </a>
                </span>
                <span className="block">
                  Email:{" "}
                  <a
                    href="mailto:info@wayforsky.com"
                    className="text-primary underline underline-offset-4 transition-opacity hover:opacity-90"
                  >
                    info@wayforsky.com
                  </a>
                </span>
                <span className="block">
                  Website:{" "}
                  <a
                    href="https://www.wayforsky.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4 transition-opacity hover:opacity-90"
                    aria-label="Visit www.wayforsky.com (opens in a new tab)"
                  >
                    www.wayforsky.com
                  </a>
                </span>
              </div>
            </address>
          </section>

          {/* Notice */}
          <section aria-labelledby="notice" className="pt-2">
            <div className="rounded-md border border-border bg-secondary/50 p-4">
              <p className="text-sm text-foreground">
                By using our services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
