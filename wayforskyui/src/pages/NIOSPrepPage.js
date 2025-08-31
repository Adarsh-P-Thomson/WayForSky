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
            <div ref={ctaRef}> {/* The ref is now on a wrapper div */}
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


// --- Icons for the NIOS page ---
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#0056b3', marginRight: '10px'}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const BookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>;

// --- Main NIOS Page Component ---
const NIOSPrepPage = () => {
    const subjects = ["Physics", "Chemistry", "Mathematics", "English", "Additional optional subjects"];
    const approachPoints = [
        "Focused teaching aligned with NIOS syllabus",
        "Regular mock tests & assignments",
        "Guidance for board registration and exam form filling",
        "Flexible learning schedule (online/offline)"
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
                .overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
                .overview-text p { font-size: 1.1rem; color: #555; line-height: 1.7; }
                .overview-image { width: 100%; border-radius: 12px; }
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
                    .overview-grid, .enrollment-cta-section { grid-template-columns: 1fr; text-align: center; }
                }
            `}</style>
            <div className="class-page">
                <section className="hero" style={{backgroundImage: "linear-gradient(rgba(0, 31, 63, 0.7), rgba(0, 31, 63, 0.7)), url('https://placehold.co/1200x500/e6f2ff/001f3f?text=Students+Studying')"}}>
                    <h1>Your Gateway to Academic Eligibility</h1>
                    <p>Our NIOS Prep Classes are tailored to help you excel, ensuring smooth progression toward your CPL training.</p>
                    <a href="#enroll" className="hero-cta-btn">Start Your NIOS Journey</a>
                </section>

                <section className="page-section">
                    <div className="overview-grid">
                        <div className="overview-text">
                            <h2 style={{fontSize: '2rem'}}>Why NIOS is Your Pathway to the Cockpit</h2>
                            <p>For many aspiring pilots, eligibility in Physics, Chemistry, and Mathematics (PCM) is mandatory. If you haven’t taken these subjects or need to improve your academic standing, the National Institute of Open Schooling (NIOS) provides the perfect pathway.</p>
                        </div>
                        <img src="https://placehold.co/500x350/ffffff/001f3f?text=NIOS+Pathway" alt="Pathway illustration" className="overview-image"/>
                    </div>
                </section>

                <section className="page-section">
                    <h2 className="section-title">Subjects & Curriculum</h2>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
                        {subjects.map(subject => (
                            <div key={subject} style={{background: '#f9f9f9', padding: '20px', borderRadius: '8px', textAlign: 'center'}}>
                                <BookIcon />
                                <h4 style={{marginTop: '10px'}}>{subject}</h4>
                            </div>
                        ))}
                    </div>
                </section>

                 <section className="page-section">
                    <h2 className="section-title">Our Approach & Support System</h2>
                     <div className="overview-grid">
                         <ul className="feature-list">
                            {approachPoints.map(point => <li key={point}><CheckCircleIcon/> {point}</li>)}
                        </ul>
                        <div className="overview-text">
                             <h3 style={{fontSize: '1.5rem'}}>More Than Just Teaching</h3>
                             <p>We don’t just teach – we mentor students through the entire NIOS journey, from subject selection to final exams, ensuring complete academic eligibility for your aviation career.</p>
                        </div>
                     </div>
                </section>
                
                <EnrollmentCTA 
                    title="Get academically ready for your CPL journey!"
                    description="Join our NIOS Prep Classes and build the strong academic foundation you need to succeed."
                    buttonText="Apply Now"
                    linkTo="/contact"
                />
            </div>
        </>
    );
};

export default NIOSPrepPage;