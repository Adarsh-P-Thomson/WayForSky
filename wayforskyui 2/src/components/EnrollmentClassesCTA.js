import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// --- SVG Icon ---
const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);

// --- Main Reusable Component ---
const EnrollmentCTA = ({
  title = "Secure your seat in the next batch!", // Default title
  description = "Get in touch with our admissions team to discuss the upcoming batches and answer all your questions.", // Default description
  buttonText = "Join Upcoming Batch", // Default button text
  linkTo = "/contact" // Default link
}) => {
    const [isFloatingVisible, setFloatingVisible] = useState(false);
    const ctaRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ctaRef.current) {
                // Show the floating button once the user has scrolled past the main CTA section
                const topPosition = ctaRef.current.getBoundingClientRect().top;
                if (topPosition < 0) {
                    setFloatingVisible(true);
                } else {
                    setFloatingVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <style>{`
                /* Main CTA Section */
                .enrollment-cta-section {
                    background-color: #f0f8ff; /* Light Alice Blue */
                    padding: 60px 20px;
                    border-radius: 16px;
                    max-width: 1100px;
                    margin: 80px auto;
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 50px;
                    align-items: center;
                    border: 1px solid #e6f2ff;
                }
                .cta-content h3 {
                    font-size: 2.5rem;
                    color: #001f3f; /* Dark Navy */
                    margin-top: 0;
                    line-height: 1.2;
                }
                .cta-content p {
                    font-size: 1.1rem;
                    color: #555;
                }
                .cta-action {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .cta-link-btn {
                    padding: 15px 30px;
                    background-color: #0056b3; /* Primary Blue */
                    color: white;
                    border-radius: 8px;
                    font-size: 1.1rem;
                    font-weight: bold;
                    transition: all 0.3s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    text-decoration: none;
                }
                .cta-link-btn:hover { 
                    background-color: #003d82; /* Darker Blue */
                    transform: translateY(-3px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }

                /* Floating CTA Button */
                .floating-cta {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    z-index: 1000;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                    pointer-events: none;
                }
                .floating-cta.visible {
                    opacity: 1;
                    transform: translateY(0);
                    pointer-events: auto;
                }

                @media (max-width: 768px) {
                    .enrollment-cta-section {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                }
            `}</style>
            
            {/* Main CTA Section */}
            <section ref={ctaRef} id="enroll" className="enrollment-cta-section">
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

            {/* Floating CTA Button that appears on scroll */}
            <div className={`floating-cta ${isFloatingVisible ? 'visible' : ''}`}>
                <Link to={linkTo} className="cta-link-btn">
                    {buttonText} <SendIcon />
                </Link>
            </div>
        </>
    );
};

export default EnrollmentCTA;
