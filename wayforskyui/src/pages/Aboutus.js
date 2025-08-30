import React from 'react';

// --- SVG Icons for Values Section ---
// ... (Icons remain the same as the previous version)
const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);
const HandshakeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 17.5V14a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6"/><path d="M10 17.5V14a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6"/><path d="M4 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M16 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
);
const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>
);


// --- Main About Us Component ---
const AboutUs = () => {
  return (
    <>
      <style>{`
        /* ... (styles from previous version are kept the same) ... */
        .about-us-page {
          font-family: 'Inter', sans-serif;
          color: #333;
          line-height: 1.6;
        }

        .about-hero {
          text-align: center;
          padding: 80px 20px;
          background: linear-gradient(rgba(0, 31, 63, 0.7), rgba(0, 31, 63, 0.7)), url('https://placehold.co/1200x450/001f3f/ffffff?text=WayForSky') no-repeat center center/cover;
          color: white;
        }
        .about-hero h1 {
          font-size: 3.8rem;
          font-weight: 800;
          margin-bottom: 10px;
        }
        .about-hero p {
          font-size: 1.3rem;
          max-width: 700px;
          margin: 0 auto;
          opacity: 0.9;
        }

        .page-section {
          max-width: 1100px;
          margin: 80px auto;
          padding: 0 20px;
        }
        
        .section-title {
          font-size: 2.8rem;
          color: #001f3f;
          text-align: center;
          margin-bottom: 50px;
        }

        .intro-text p {
          font-size: 1.15rem;
          color: #555;
          text-align: center;
          max-width: 900px;
          margin: 0 auto 50px;
        }

        .story-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .story-content p {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 15px;
        }
        .mission-box {
          background-color: #e6f7ff;
          border-left: 5px solid #0056b3;
          padding: 30px;
          border-radius: 8px;
        }
        .mission-box h3 {
          font-size: 1.8rem;
          color: #001f3f;
          margin-top: 0;
        }
        .mission-box p {
          font-size: 1.1rem;
          color: #003d82;
        }
        
        .vision-text {
          text-align: center;
          font-size: 1.2rem;
          max-width: 800px;
          margin: -20px auto 50px;
          color: #555;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }
        .value-card {
          padding: 25px;
          text-align: center;
          background: #f9f9f9;
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        .value-card .icon {
          color: #0056b3;
          margin-bottom: 15px;
        }
        .value-card h4 {
          font-size: 1.3rem;
          color: #001f3f;
          margin-bottom: 10px;
        }
        .value-card p {
          font-size: 1rem;
          color: #666;
        }

        .partners-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        .partner-card {
            background: #fff;
            border: 1px solid #eee;
            border-radius: 12px;
            padding: 30px;
            text-align: center;
        }
        .partner-card .flag {
            font-size: 3rem;
            margin-bottom: 10px;
        }
        .partner-card h4 {
            font-size: 1.4rem;
            color: #001f3f;
            margin-bottom: 10px;
        }
        .partner-card p {
            font-size: 1rem;
            color: #555;
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
        }
        .team-member-card {
            background: #f9f9f9;
            padding: 25px;
            border-radius: 8px;
        }
        .team-member-card h5 {
            font-size: 1.2rem;
            color: #001f3f;
            margin: 0 0 5px;
        }
        .team-member-card p {
            font-size: 1rem;
            color: #555;
            margin: 0;
        }

        .support-steps {
          position: relative;
          margin-top: 40px;
        }
        .step {
          display: flex;
          align-items: flex-start;
          margin-bottom: 40px;
        }
        .step-number {
          font-size: 2rem;
          font-weight: bold;
          color: #0056b3;
          margin-right: 20px;
          line-height: 1;
        }
        .step-content h5 {
          font-size: 1.3rem;
          margin: 0 0 5px;
          color: #001f3f;
        }
        .step-content p {
          margin: 0;
          color: #555;
        }

        .closing-note {
            text-align: center;
            background: #001f3f;
            color: white;
            padding: 60px 20px;
            border-radius: 12px;
        }
        .closing-note p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto 25px;
            opacity: 0.9;
        }
        .cta-button {
            background-color: #fff;
            color: #001f3f;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        .cta-button:hover {
            background-color: #e6f7ff;
            transform: translateY(-2px);
        }

        @media (max-width: 768px) {
            .about-hero h1 { font-size: 2.8rem; }
            .story-mission-grid { grid-template-columns: 1fr; }
            .page-section { margin: 60px auto; }
        }
      `}</style>

      <div className="about-us-page">
        <section className="about-hero">
          <h1>Turning Dreams Into Reality</h1>
          <p>We are the bridge between your dream of flying and a successful career in the cockpit.</p>
        </section>
        
        {/* UPDATED SECTION */}
        <section id="our-story" className="page-section">
            <h2 className="section-title">About WayForSky</h2>
            <div className="intro-text">
                <p>WayForSky – Global Aviation Pathway is where dreams of flying turn into reality. We connect aspiring pilots with exclusive academies in South Africa and Hungary, ensuring world-class training, modern aircraft, and DGCA-compliant standards. Our role goes far beyond admissions – we provide complete end-to-end support.</p>
                <p>Parents trust us because of our written student agreements, regular Parents-Instructor Meetings (PIMs), and Indian representatives present inside the academies. Students love us because we make the journey simple, fast, and exciting – helping them focus only on becoming pilots.</p>
            </div>
        </section>

        {/* --- ALL SECTIONS BELOW REMAIN THE SAME --- */}

        <section id="values" className="page-section">
          <h2 className="section-title">Our Vision & Values</h2>
          {/* ... content remains the same ... */}
           <p className="vision-text">To be the most trusted aviation consultancy in the world, known for turning dreams into pilots and pilots into aviation leaders.</p>
          <div className="values-grid">
            <div className="value-card"><div className="icon"><ShieldCheckIcon /></div><h4>Integrity</h4><p>Transparent processes, honest guidance, no hidden agendas.</p></div>
            <div className="value-card"><div className="icon"><UsersIcon /></div><h4>Student-First Approach</h4><p>Every decision we make starts with, “What’s best for the student?”</p></div>
            <div className="value-card"><div className="icon"><GlobeIcon /></div><h4>Global Outlook</h4><p>Training opportunities in South Africa, Hungary, and India.</p></div>
            <div className="value-card"><div className="icon"><HandshakeIcon /></div><h4>Partnership & Trust</h4><p>We build long-term relationships with students, families, and institutions.</p></div>
            <div className="value-card"><div className="icon"><AwardIcon /></div><h4>Excellence in Aviation</h4><p>Striving for high standards that prepare students for competitive airline careers.</p></div>
          </div>
        </section>

        <section id="partners" className="page-section">
            <h2 className="section-title">Our Global Academy Partnerships</h2>
            {/* ... content remains the same ... */}
            <div className="partners-grid">
                <div className="partner-card"><div className="flag">🇿🇦</div><h4>Accolade Flying Wings</h4><p>A leading South African flight school with a large fleet, experienced instructors, and over 300 flying days a year.</p></div>
                <div className="partner-card"><div className="flag">🇭🇺</div><h4>PharmaFlight</h4><p>A state-of-the-art European training center with advanced simulators and EASA-standard flight programs in Hungary.</p></div>
                <div className="partner-card"><div className="flag">🇮🇳</div><h4>Pilot Preparation Academy</h4><p>Local ground schools and support centers in India to prepare aspiring pilots before they head abroad for training.</p></div>
            </div>
        </section>

        <section id="team" className="page-section">
          <h2 className="section-title">Meet the Leadership Team</h2>
          {/* ... content remains the same ... */}
          <div className="team-grid">
            <div className="team-member-card"><h5>Director</h5><p>A visionary entrepreneur shaping WayForSky as the bridge between students and global academies.</p></div>
            <div className="team-member-card"><h5>General Manager – Roshan Shaikh</h5><p>Oversees daily operations, ensuring every student receives personalized guidance and support.</p></div>
            <div className="team-member-card"><h5>Chief Finance & Strategy Officer</h5><p>Handles financial planning and the strategic sustainability of our operations.</p></div>
            <div className="team-member-card"><h5>Chief Operating Officer</h5><p>Ensures seamless execution of all student processes, from admissions to training support.</p></div>
            <div className="team-member-card"><h5>Team Coordinating Officer</h5><p>Manages internal teams to ensure smooth collaboration between all departments.</p></div>
            <div className="team-member-card"><h5>Chief Marketing Officer</h5><p>Builds awareness and maintains strong engagement with students, parents, and partners.</p></div>
            <div className="team-member-card"><h5>Chief Sales Officer</h5><p>Guides students in shortlisting the best academies and maintains confidence with parents.</p></div>
          </div>
        </section>

        <section id="support" className="page-section">
            <h2 className="section-title">Our Student-First Approach</h2>
             {/* ... content remains the same ... */}
            <div className="support-steps">
                <div className="step"><div className="step-number">01</div><div className="step-content"><h5>Personalised Counselling</h5><p>Every student speaks with professional counsellors and pilots to clear all their doubts.</p></div></div>
                <div className="step"><div className="step-number">02</div><div className="step-content"><h5>Panel Sessions with Pilots</h5><p>Students hear directly from experienced pilots who have been through the journey themselves.</p></div></div>
                <div className="step"><div className="step-number">03</div><div className="step-content"><h5>Academy Selection</h5><p>We help students find the right fit based on their goals, budget, and career plans.</p></div></div>
                <div className="step"><div className="step-number">04</div><div className="step-content"><h5>Admissions & Visa Assistance</h5><p>We provide complete, end-to-end support for documentation, applications, and approvals.</p></div></div>
                <div className="step"><div className="step-number">05</div><div className="step-content"><h5>Training Mentorship</h5><p>Our team stays connected, offering mentorship and support throughout their training abroad.</p></div></div>
                <div className="step"><div className="step-number">06</div><div className="step-content"><h5>Career Support</h5><p>We provide guidance for type ratings and airline entrance preparation for long-term success.</p></div></div>
            </div>
        </section>

        <section className="page-section">
            <div className="closing-note">
                <p>At WayForSky, you don’t just join a flying academy – you join a pathway that takes you from a dreamer to a professional pilot.</p>
                <a href="/contact" className="cta-button">Start Your Journey Today</a>
            </div>
        </section>

      </div>
    </>
  );
};

export default AboutUs;

