import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// --- Reusable EnrollmentCTA Component (included directly to resolve import error) ---
const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);

const EnrollmentCTA = ({
  title = "Secure your seat in the next batch!",
  description = "Get in touch with our admissions team to discuss the upcoming batches and answer all your questions.",
  buttonText = "Join Upcoming Batch",
  linkTo = "/contact"
}) => {
    const [isFloatingVisible, setFloatingVisible] = useState(false);
    const ctaRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ctaRef.current) {
                const topPosition = ctaRef.current.getBoundingClientRect().top;
                if (topPosition < 0) {
                    setFloatingVisible(true);
                } else {
                    setFloatingVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* The ref is now on a wrapper div to avoid ref conflicts on a functional component */}
            <div ref={ctaRef}>
                <section id="enroll" className="enrollment-cta-section">
                    <div className="cta-content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="cta-action">
                       <Link to={linkTo} className="cta-link-btn">
                            {buttonText} <SendIcon />
                       </Link>
                    </div>
                </section>
            </div>

            <div className={`floating-cta ${isFloatingVisible ? 'visible' : ''}`}>
                <Link to={linkTo} className="cta-link-btn">
                    {buttonText} <SendIcon />
                </Link>
            </div>
        </>
    );
};


// --- Icons for the page ---
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#0056b3', marginRight: '10px'}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const BarChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>;

// --- Main ELP Classes Page Component ---
const ELPClassesPage = () => {
    const levels = [
        { level: "ICAO Level 4", desc: "Operational (minimum requirement)" },
        { level: "ICAO Level 5", desc: "Extended proficiency" },
        { level: "ICAO Level 6", desc: "Expert proficiency" }
    ];
    const methodology = [
        "Listening & comprehension exercises",
        "Aviation phraseology & real-time communication",
        "Mock tests based on ICAO exam patterns",
        "Personalized feedback & improvement plans"
    ];

    return (
        <>
            <style>{`
                /* General Class Page Styles */
                .class-page { font-family: 'Inter', sans-serif; color: #333; }
                .page-section { max-width: 1100px; margin: 80px auto; padding: 0 20px; }
                .section-title { font-size: 2.8rem; color: #001f3f; text-align: center; margin-bottom: 50px; }
                
                /* Hero Section */
                .hero {
                    padding: 100px 20px; text-align: center; color: white;
                    background-size: cover; background-position: center;
                }
                .hero h1 { font-size: 3.5rem; font-weight: 800; margin-bottom: 15px; }
                .hero p { font-size: 1.25rem; max-width: 700px; margin: 0 auto 30px; opacity: 0.9; }
                .hero-cta-btn {
                    background-color: #fff; color: #001f3f; padding: 14px 30px;
                    text-decoration: none; border-radius: 8px; font-weight: bold;
                    transition: all 0.3s ease;
                }
                .hero-cta-btn:hover { background-color: #e6f7ff; transform: translateY(-2px); }
                
                /* Other Sections */
                .overview-text { text-align: center; font-size: 1.15rem; color: #555; max-width: 800px; margin: 0 auto; line-height: 1.7; }
                .feature-list { list-style: none; padding: 0; }
                .feature-list li { font-size: 1.1rem; margin-bottom: 20px; display: flex; align-items: center; }

                /* CTA Component Styles */
                .enrollment-cta-section {
                    background-color: #f0f8ff; padding: 60px 20px; border-radius: 16px;
                    max-width: 1100px; margin: 80px auto; display: grid;
                    grid-template-columns: 2fr 1fr; gap: 50px; align-items: center;
                    border: 1px solid #e6f2ff;
                }
                .cta-content h3 { font-size: 2.5rem; color: #001f3f; margin-top: 0; line-height: 1.2; }
                .cta-content p { font-size: 1.1rem; color: #555; }
                .cta-action { display: flex; justify-content: center; align-items: center; }
                .cta-link-btn {
                    padding: 15px 30px; background-color: #0056b3; color: white;
                    border-radius: 8px; font-size: 1.1rem; font-weight: bold;
                    transition: all 0.3s ease; display: inline-flex;
                    align-items: center; gap: 10px; text-decoration: none;
                }
                .cta-link-btn:hover { 
                    background-color: #003d82; transform: translateY(-3px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }
                .floating-cta {
                    position: fixed; bottom: 30px; right: 30px; z-index: 1000;
                    opacity: 0; transform: translateY(20px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                    pointer-events: none;
                }
                .floating-cta.visible { opacity: 1; transform: translateY(0); pointer-events: auto; }

                @media (max-width: 768px) {
                    .enrollment-cta-section { grid-template-columns: 1fr; text-align: center; }
                }
            `}</style>
            <div className="class-page">
                <section className="hero" style={{backgroundImage: "linear-gradient(rgba(0, 31, 63, 0.7), rgba(0, 31, 63, 0.7)), url('https://placehold.co/1200x500/001f3f/ffffff?text=Pilot+in+Cockpit')"}}>
                    <h1>Speak Aviation. Fly Global.</h1>
                    <p>English Language Proficiency (ELP) Training to meet ICAO standards and ensure your success in a global career.</p>
                    <a href="#enroll" className="hero-cta-btn">Book Your ELP Training</a>
                </section>

                <section className="page-section">
                     <p className="overview-text">The International Civil Aviation Organization (ICAO) mandates that pilots demonstrate a minimum of Level 4 English proficiency to operate flights internationally. Our ELP Training Classes prepare students to excel in listening, speaking, comprehension, and aviation communication – ensuring safety and compliance.</p>
                </section>
                
                <section className="page-section">
                    <h2 className="section-title">ICAO Proficiency Levels</h2>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px'}}>
                        {levels.map(item => (
                            <div key={item.level} style={{background: '#f0f8ff', border: '1px solid #e6f2ff', padding: '25px', borderRadius: '8px', textAlign: 'center'}}>
                                <BarChartIcon/>
                                <h4 style={{fontSize: '1.3rem', color: '#001f3f', margin: '10px 0 5px'}}>{item.level}</h4>
                                <p style={{color: '#555', margin: 0}}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="page-section">
                    <h2 className="section-title">Our Training Methodology</h2>
                    <div style={{maxWidth: '700px', margin: '0 auto'}}>
                        <ul className="feature-list">
                            {methodology.map(point => <li key={point}><CheckCircleIcon/> {point}</li>)}
                        </ul>
                    </div>
                </section>
                
                <EnrollmentCTA 
                    title="Book your English Language Proficiency training today!"
                    description="Excel in your ICAO assessment and secure your license to fly globally. Our certified trainers are here to help you succeed."
                    buttonText="Book Your Slot"
                    linkTo="/contact"
                />
            </div>
        </>
    );
};

export default ELPClassesPage;