/**
 * IMPORTANT: This is a template for a Terms and Conditions page.
 * It is NOT legal advice. You should consult with a qualified legal professional
 * to ensure that your Terms and Conditions are complete, accurate, and compliant
 * with all applicable laws and regulations, including GDPR, for your specific
 * situation and jurisdiction.
 */

import React from 'react';

const TermsAndConditions = () => {
  // Basic styling for readability. Consider using a CSS file for more complex styling.
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
    },
    h1: {
      color: '#111',
      borderBottom: '2px solid #eee',
      paddingBottom: '10px',
    },
    h2: {
      color: '#222',
      marginTop: '30px',
    },
    section: {
      marginBottom: '20px',
    },
    lastUpdated: {
      fontSize: '0.9em',
      color: '#666',
      marginBottom: '20px',
    },
    list: {
      paddingLeft: '20px',
    },
    strong: {
      color: '#000',
    }
  };

  const companyName = '[Your Company Name]';
  const websiteUrl = '[Your Website URL]';
  const contactEmail = '[your-contact-email@example.com]';
  const effectiveDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Terms and Conditions</h1>
      <p style={styles.lastUpdated}>Last updated: {effectiveDate}</p>

      <section style={styles.section}>
        <h2 style={styles.h2}>1. Introduction</h2>
        <p>
          Welcome to {companyName}! These Terms and Conditions ("Terms") govern your use of our website located at {websiteUrl} (the "Service") and form a binding contractual agreement between you, the user of the Service, and us, {companyName}.
        </p>
        <p>
          By using the Service, you acknowledge that you have read and understood these Terms and agree to be bound by them. If you do not agree to the Terms, please do not use the Service.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>2. User Accounts</h2>
        <p>
          When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>
        <p>
          You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>3. Data Privacy and GDPR Compliance</h2>
        <p>
          Our commitment to your privacy is paramount. This section outlines how we collect, store, and process your personal data in compliance with the General Data Protection Regulation (GDPR).
        </p>

        <h3>3.1. Data We Collect</h3>
        <p>We may collect and process the following data about you:</p>
        <ul style={styles.list}>
          <li><strong style={styles.strong}>Personal Identification Information:</strong> Name, email address, and other contact details you provide when you register for an account or contact us.</li>
          <li><strong style={styles.strong}>Usage Data:</strong> Information on how the Service is accessed and used, such as your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, and other diagnostic data.</li>
          <li><strong style={styles.strong}>User-Generated Data:</strong> Any data or content you create, share, or post on our Service.</li>
        </ul>

        <h3>3.2. How We Use Your Data</h3>
        <p>Your data is used for the following purposes:</p>
        <ul style={styles.list}>
          <li>To provide, maintain, and improve our Service.</li>
          <li>To manage your account and provide you with customer support.</li>
          <li>To communicate with you about updates, security alerts, and support messages.</li>
          <li>To monitor the usage of our Service and detect, prevent, and address technical issues.</li>
          <li>To fulfill our legal obligations.</li>
        </ul>

        <h3>3.3. Legal Basis for Processing</h3>
        <p>We process your personal data based on the following legal grounds:</p>
        <ul style={styles.list}>
          <li><strong style={styles.strong}>Your Consent:</strong> Where you have given clear consent for us to process your personal data for a specific purpose.</li>
          <li><strong style={styles.strong}>Contractual Necessity:</strong> Where the processing is necessary for a contract we have with you (e.g., to provide the Service you have registered for).</li>
          <li><strong style={styles.strong}>Legitimate Interests:</strong> Where the processing is necessary for our legitimate interests, such as for service improvement and fraud prevention, provided these interests are not overridden by your rights.</li>
        </ul>

        <h3>3.4. Data Storage, Security, and Retention</h3>
        <p>
          <strong style={styles.strong}>Storage and Security:</strong> Your personal data is stored on secure servers, potentially located outside of your country of residence. We take all reasonable technical and organizational measures to protect your data from unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and secure data storage protocols.
        </p>
        <p>
          <strong style={styles.strong}>Retention:</strong> We will retain your personal data only for as long as is necessary for the purposes set out in these Terms. We will retain and use your data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
        </p>

        <h3>3.5. Your Rights Under GDPR</h3>
        <p>
          If you are a resident of the European Economic Area (EEA), you have certain data protection rights. {companyName} aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
        </p>
        <p>Your rights include:</p>
        <ul style={styles.list}>
          <li><strong style={styles.strong}>The right to access:</strong> You can request copies of your personal data.</li>
          <li><strong style={styles.strong}>The right to rectification:</strong> You can request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
          <li><strong style={styles.strong}>The right to erasure (right to be forgotten):</strong> You can request that we erase your personal data, under certain conditions.</li>
          <li><strong style={styles.strong}>The right to restrict processing:</strong> You can request that we restrict the processing of your personal data, under certain conditions.</li>
          <li><strong style={styles.strong}>The right to data portability:</strong> You can request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          <li><strong style={styles.strong}>The right to object to processing:</strong> You can object to our processing of your personal data, under certain conditions.</li>
        </ul>

        <h3>3.6. Exercising Your Rights</h3>
        <p>
          If you wish to exercise any of these rights, please contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. We will respond to your request within one month. You also have the right to complain to a Data Protection Authority about our collection and use of your Personal Data.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>4. Prohibited Activities</h2>
        <p>
          You are prohibited from using the Service to engage in any activity that is illegal, harmful, or infringes on the rights of others. This includes, but is not limited to:
        </p>
        <ul style={styles.list}>
            <li>Violating any international, federal, provincial or state regulations, rules, laws, or local ordinances.</li>
            <li>Uploading or transmitting viruses or any other type of malicious code.</li>
            <li>Attempting to gain unauthorized access to the Service or its related systems or networks.</li>
            <li>Infringing upon or violating our intellectual property rights or the intellectual property rights of others.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>5. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property of {companyName} and its licensors. The Service is protected by copyright, trademark, and other laws of both [Your Country] and foreign countries.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>6. Termination</h2>
        <p>
          We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
        </p>
        <p>
          If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>7. Limitation of Liability</h2>
        <p>
          In no event shall {companyName}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>8. Disclaimer</h2>
        <p>
          Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>9. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>10. Changes to These Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        <p>
          By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>11. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;

