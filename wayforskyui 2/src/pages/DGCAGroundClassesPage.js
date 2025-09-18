import React, { useState } from 'react';

// --- Reusable EnrollmentCTA Component (Previously in a separate file) ---
// Note: This component is now included here to resolve the import error.

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);

const EnrollmentCTA = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enquiry Submitted:", formData);
        setIsSubmitted(true);
        // Here you would typically send the data to your backend
    };

    return (
        <>
            <style>{`
                .enrollment-cta-section {
                    background-color: #f9f9f9;
                    padding: 60px 20px;
                    border-radius: 12px;
                    max-width: 1100px;
                    margin: 80px auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 50px;
                    align-items: center;
                }
                .cta-content h3 {
                    font-size: 2.5rem;
                    color: #001f3f;
                    margin-top: 0;
                    line-height: 1.2;
                }
                .cta-content p {
                    font-size: 1.1rem;
                    color: #555;
                }
                .cta-form {
                    background: #fff;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
                }
                .form-group { margin-bottom: 20px; }
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 600;
                }
                .form-group .input-field {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    font-size: 1rem;
                }
                .submit-btn {
                    width: 100%;
                    padding: 15px;
                    background-color: #0056b3;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 1.1rem;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                }
                .submit-btn:hover { background-color: #003d82; }
                .thank-you-message {
                    text-align: center;
                    font-size: 1.2rem;
                    color: #006622;
                    padding: 40px 20px;
                }

                @media (max-width: 768px) {
                    .enrollment-cta-section {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
            <section id="enroll" className="enrollment-cta-section">
                <div className="cta-content">
                    <h3>Secure your seat in the next DGCA Ground Class batch today!</h3>
                    <p>Fill out the form, and our team will get in touch with you to discuss the upcoming batches and answer all your questions.</p>
                </div>
                <div className="cta-form">
                    {isSubmitted ? (
                        <div className="thank-you-message">
                            <h4>Thank You!</h4>
                            <p>We've received your enquiry and will contact you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" className="input-field" value={formData.name} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" className="input-field" value={formData.email} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" className="input-field" value={formData.phone} onChange={handleInputChange} required />
                            </div>
                            <button type="submit" className="submit-btn">
                                Join Upcoming Batch <SendIcon />
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </>
    );
};


// --- Main DGCA Page Component ---

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#28a745', marginRight: '10px'}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);
const BookOpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
);

const DGCAGroundClassesPage = () => {
    const modules = [
        "Air Navigation – Principles, charts, and problem-solving",
        "Aviation Meteorology – Weather systems, interpretation, and forecasting",
        "Air Regulations – Indian and International aviation laws",
        "Technical General – Aircraft systems, engines, and performance",
        "RTR Preparation (Optional) – Radio Telephony"
    ];
    const whyChooseUsPoints = [
        "Experienced instructors with aviation backgrounds",
        "High pass percentage across all DGCA exams",
        "Study material & mock test series included",
        "Flexible batch timings – Online & Offline"
    ];
    const testimonials = [
        { name: "Rohan S.", quote: "The mock tests were a game-changer. Cleared my technical exam on the first try thanks to the excellent faculty here." },
        { name: "Priya K.", quote: "I was struggling with Air Navigation, but the simplified teaching style at WayForSky made all the difference. Highly recommended!" },
    ];

    return (
        <>
            <style>{`
                .dgca-page { font-family: 'Inter', sans-serif; color: #333; }
                .page-section { max-width: 1100px; margin: 80px auto; padding: 0 20px; }
                .section-title { font-size: 2.8rem; color: #001f3f; text-align: center; margin-bottom: 50px; }

                .dgca-hero {
                    padding: 100px 20px;
                    text-align: center;
                    background: linear-gradient(rgba(0, 31, 63, 0.75), rgba(0, 31, 63, 0.75)), url('https://placehold.co/1200x500/001f3f/ffffff?text=Aviation+Classroom') no-repeat center center/cover;
                    color: white;
                }
                .dgca-hero h1 { font-size: 3.5rem; font-weight: 800; margin-bottom: 15px; }
                .dgca-hero p { font-size: 1.25rem; max-width: 700px; margin: 0 auto 30px; opacity: 0.9; }
                .hero-cta-btn {
                    background-color: #fff; color: #001f3f; padding: 14px 30px;
                    text-decoration: none; border-radius: 8px; font-weight: bold;
                    transition: all 0.3s ease;
                }
                .hero-cta-btn:hover { background-color: #e6f7ff; transform: translateY(-2px); }

                .overview-text { text-align: center; font-size: 1.15rem; color: #555; max-width: 800px; margin: 0 auto; line-height: 1.7; }

                .modules-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 40px; }
                .module-card { display: flex; align-items: center; gap: 20px; background: #f9f9f9; padding: 25px; border-radius: 12px; }
                .module-card .icon { color: #0056b3; }
                .module-card p { margin: 0; font-size: 1.1rem; }

                .why-us-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
                .why-us-list li { list-style: none; font-size: 1.1rem; margin-bottom: 20px; display: flex; align-items: center; }
                .why-us-image { width: 100%; border-radius: 12px; }

                .batch-details-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; }
                .detail-card { background: #001f3f; color: white; padding: 25px; border-radius: 8px; text-align: center; }
                .detail-card h4 { font-size: 1.3rem; margin: 0 0 10px; }
                .detail-card p { font-size: 1.1rem; margin: 0; opacity: 0.9; }

                .testimonials-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
                .testimonial-card { background: #e6f7ff; border-left: 5px solid #0056b3; padding: 25px; border-radius: 8px; }
                .testimonial-card p { font-style: italic; margin: 0 0 15px; }
                .testimonial-card h5 { text-align: right; margin: 0; color: #003d82; }

                @media (max-width: 768px) {
                    .dgca-hero h1 { font-size: 2.5rem; }
                    .why-us-grid, .testimonials-grid { grid-template-columns: 1fr; }
                }
            `}</style>
            <div className="dgca-page">
                <section className="dgca-hero">
                    <h1>Clear Your DGCA Exams With Confidence</h1>
                    <p>Comprehensive ground training for aspiring pilots – covering all DGCA subjects with expert instructors and proven success rates.</p>
                    <a href="#enroll" className="hero-cta-btn">Enroll Now</a>
                </section>

                <section className="page-section">
                    <p className="overview-text">The DGCA (Directorate General of Civil Aviation) examinations are the foundation for every aspiring pilot in India. Our ground classes provide structured training, simplified explanations, and practice sessions to help students clear the exams on their first attempt.</p>
                </section>

                <section className="page-section">
                    <h2 className="section-title">Course Modules</h2>
                    <div className="modules-grid">
                        {modules.map(mod => <div key={mod} className="module-card"><div className="icon"><BookOpenIcon/></div><p>{mod}</p></div>)}
                    </div>
                </section>

                <section className="page-section">
                    <div className="why-us-grid">
                        <div>
                            <h2 style={{textAlign: 'left'}}>Why Choose Our Ground Classes?</h2>
                            <ul style={{padding: 0}}>
                                {whyChooseUsPoints.map(point => <li key={point}><CheckCircleIcon/> {point}</li>)}
                            </ul>
                        </div>
                        <img src="https://placehold.co/500x350/e6f7ff/001f3f?text=Expert+Faculty" alt="Faculty teaching students" className="why-us-image"/>
                    </div>
                </section>

                <section className="page-section">
                    <h2 className="section-title">Batch Details</h2>
                    <div className="batch-details-grid">
                        <div className="detail-card"><h4>Duration</h4><p>3–4 months</p></div>
                        <div className="detail-card"><h4>Mode</h4><p>Classroom & Online</p></div>
                        <div className="detail-card"><h4>Frequency</h4><p>Morning & Evening</p></div>
                    </div>
                </section>

                <section className="page-section">
                    <h2 className="section-title">Success Stories from Our Students</h2>
                    <div className="testimonials-grid">
                        {testimonials.map(t => <div key={t.name} className="testimonial-card"><p>"{t.quote}"</p><h5>- {t.name}</h5></div>)}
                    </div>
                </section>
                
                {/* Reusable CTA Form Component */}
                <EnrollmentCTA />
            </div>
        </>
    );
};

export default DGCAGroundClassesPage;

