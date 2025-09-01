import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './HeroSection.css';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero-container">
      <div className="hero-overlay">
        <div className="hero-content">
          {/* Top Section */}
          <div className="top-section">
            <div className="headline-container">
              <h1 className="main-headline">
                Your Dream.<br />
                Your Wings.<br />
                Your Sky.
              </h1>
            </div>
            <div className="image-focal-point">{/* background focal point */}</div>
          </div>

          {/* Divider */}
          <div className="section-divider"></div>

          {/* Bottom Section */}
          <div className="bottom-section">
            <div className="mission-label-container">
              <span className="mission-label">Our Mission</span>
            </div>
            <div className="content-container">
              <p className="subheadline">
                At WayForSky, we guide aspiring pilots from their first counselling session to their very first solo flight—and beyond. With trusted training academies in South Africa, Hungary, and India, we make your pilot career not just a dream, but a reality.
              </p>

              <div className="cta-buttons">
                {/* ✅ Navigate to /contactus */}
                <button
                  className="secondary-cta"
                  onClick={() => navigate("/contactus")}
                >
                  Book Free Counselling Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
