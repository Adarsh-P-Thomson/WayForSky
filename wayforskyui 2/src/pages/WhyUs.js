import React from 'react';

// --- SVG Icons for this page ---
const TieIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const PackageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
);
const UserCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
);
const UsersGroupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const FastForwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/></svg>
);
const FileTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
);
const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);


// --- Main Why Us Component ---
const WhyUs = () => {
    const whyPoints = [
        {
            icon: <TieIcon />,
            title: "Exclusive Academy Tie-Ups",
            description: "We only send students to academies where we hold exclusive rights, guaranteeing safety and quality."
        },
        {
            icon: <PackageIcon />,
            title: "End-to-End Services",
            description: "From medicals and visas to accommodation and ticketing, everything is handled under one roof."
        },
        {
            icon: <UserCheckIcon />,
            title: "Expert Guidance",
            description: "In-house DGCA doctors, CPL ground instructors, and real pilots mentor students."
        },
        {
            icon: <UsersGroupIcon />,
            title: "Parent Engagement",
            description: "Regular Parents-Instructor Meetings (PIMs) keep families informed and assured."
        },
        {
            icon: <FastForwardIcon />,
            title: "Fast-Track Training",
            description: "Special MOUs help students complete CPL in shorter durations without compromising quality."
        },
        {
            icon: <FileTextIcon />,
            title: "Transparent & Assured",
            description: "Every commitment is written, so there are no hidden conditions."
        },
        {
            icon: <BriefcaseIcon />,
            title: "Career Support",
            description: "Assistance with license conversion and job opportunities based on skills and performance."
        },
    ];

  return (
    <>
      <style>{`
        .why-us-page {
            font-family: 'Inter', sans-serif;
            color: #333;
        }

        .why-us-hero {
            text-align: center;
            padding: 80px 20px;
            background-color: #001f3f;
            color: white;
        }
        .why-us-hero h1 {
            font-size: 3.5rem;
            font-weight: 800;
        }
        .why-us-hero p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 10px auto 0;
            opacity: 0.9;
        }

        .why-us-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
            max-width: 1200px;
            margin: 80px auto;
            padding: 0 20px;
        }

        .why-card {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            background: #f9f9f9;
            padding: 30px;
            border-radius: 12px;
            border: 1px solid #eee;
        }
        
        .why-card .icon-container {
            color: #0056b3;
            flex-shrink: 0;
        }

        .why-card h3 {
            font-size: 1.4rem;
            margin: 0 0 8px;
            color: #001f3f;
        }

        .why-card p {
            margin: 0;
            color: #555;
            line-height: 1.6;
        }

        .closing-section {
            text-align: center;
            padding: 60px 20px;
            background-color: #e6f7ff;
        }
        .closing-section p {
            font-size: 1.3rem;
            max-width: 800px;
            margin: 0 auto 25px;
            color: #003d82;
            font-weight: 500;
        }
        .cta-button {
            background-color: #0056b3;
            color: #fff;
            padding: 14px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        .cta-button:hover {
            background-color: #003d82;
            transform: translateY(-2px);
        }
      `}</style>
      <div className="why-us-page">
        <section className="why-us-hero">
            <h1>The WayForSky Advantage</h1>
            <p>With WayForSky, both students and parents find confidence in a future that is safe, structured, and full of opportunities.</p>
        </section>

        <section className="why-us-grid">
            {whyPoints.map(point => (
                <div key={point.title} className="why-card">
                    <div className="icon-container">{point.icon}</div>
                    <div>
                        <h3>{point.title}</h3>
                        <p>{point.description}</p>
                    </div>
                </div>
            ))}
        </section>
        
        <section className="closing-section">
            <p>Ready to experience the difference?</p>
            <a href="/contact" className="cta-button">Consult with a Pilot Today</a>
        </section>

      </div>
    </>
  );
};

export default WhyUs;