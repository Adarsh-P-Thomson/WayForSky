import React, { useState, useEffect } from 'react';

// Component's CSS Styles - Scoped with 'wfs-' prefix
const WhywayforskyStyles = () => (
  <style>{`
    .wfs-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #c084fc 0%, #bfdbfe 50%, #c084fc 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 4rem 2.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    }
    .wfs-mainHeading {
      font-size: clamp(2.25rem, 5vw, 3rem);
      font-weight: 600;
      color: #F5F5F5;
      text-align: left;
      margin-bottom: 3rem;
    }
    .wfs-wrapper {
      position: relative;
      width: 100%;
      max-width: 75rem;
      margin: 0 auto;
    }
    .wfs-navigationContainer {
      position: absolute;
      top: -4.5rem;
      right: 0;
      display: flex;
      gap: 0.5rem;
      z-index: 10;
    }
    .wfs-navButton {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .wfs-navButton:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      transform: scale(1.05);
    }
    .wfs-cardContainer {
      overflow: hidden;
      border-radius: 1rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    .wfs-card {
      height: 15cm;
      background-color: #fefefe;
      display: flex;
      flex-direction: row;
    }
    .wfs-imageContainer {
      width: 50%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
    .wfs-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .wfs-contentContainer {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 3rem;
      background: linear-gradient(135deg, #fefefe 0%, #fdfcf4 100%);
    }
    .wfs-header {
      margin-bottom: 2rem;
    }
    .wfs-title {
      font-size: 2.25rem;
      font-weight: 300;
      color: #1f2937;
      margin-bottom: 1rem;
      letter-spacing: 0.025em;
    }
    .wfs-description {
      color: #4b5563;
      line-height: 1.625;
      font-size: 1rem;
      margin-bottom: 2rem;
    }
    .wfs-bottomSection {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .wfs-subtitle {
      font-size: 0.875rem;
      font-weight: 500;
      color: #374151;
      font-style: italic;
    }
    .wfs-button {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      background-color: #a3e635;
      color: #1f2937;
      font-weight: 500;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      width: fit-content;
    }
    .wfs-button:hover {
      background-color: #84cc16;
      transform: scale(1.05);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    .wfs-dotsContainer {
      display: flex;
      justify-content: center;
      margin-top: 1.5rem;
      gap: 0.5rem;
    }
    .wfs-dot {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    .wfs-dot-active {
      background-color: white;
    }
    .wfs-dot-inactive {
      background-color: rgba(255, 255, 255, 0.4);
    }
    .wfs-arrow {
      width: 1.5rem;
      height: 1.5rem;
      color: #4b5563;
    }
    .wfs-icon-arrow {
        width: 1rem;
        height: 1rem;
    }

    /* Responsive Styles for Mobile */
    @media (max-width: 767px) {
      .wfs-container {
        padding: 4rem 1rem;
      }
      .wfs-card {
        flex-direction: column;
        height: auto;
      }
      .wfs-imageContainer {
        width: 100%;
        height: 300px;
      }
      .wfs-contentContainer {
        width: 100%;
        padding: 2rem 1.5rem;
      }
      .wfs-title {
        font-size: 1.75rem;
      }
    }
  `}</style>
);

const Whywayforsky = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardData = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Pilot-Led Counselling",
      description: "Gain invaluable insights and clear your doubts by speaking directly with seasoned airline pilots before you even begin your training. Get firsthand knowledge about the life of a pilot and what it takes to succeed.",
      subtitle: "Start your journey with confidence. Your questions, answered by professionals who've flown the path.",
      buttonText: "Speak to a Pilot"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Global Training Options",
      description: "Choose from our premier flight schools located in diverse and exciting locations. We offer comprehensive training programs in South Africa, Hungary, and India to suit your preferences and career goals.",
      subtitle: "Your cockpit has a global view. Train in the skies of your choice.",
      buttonText: "Explore Locations"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/7947707/pexels-photo-7947707.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Complete Support System",
      description: "We're with you every step of the way. Our dedicated support system covers everything from the initial admission process and documentation to preparing you for your very first airline interview.",
      subtitle: "From day one to the flight deck. We're your co-pilot for your entire career journey.",
      buttonText: "Learn About Support"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Transparent Guidance",
      description: "No hidden surprises. We believe in complete transparency, providing you with clear fee structures, a detailed student contract, realistic timelines, and a full understanding of what to expect from your training.",
      subtitle: "Clarity from the ground up. Know exactly where you're headed and what it takes to get there.",
      buttonText: "View Fee Structure"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Trusted Partnerships",
      description: "Train with the best in the industry. Our strong partnerships with renowned flight schools like Accolade Flying Wings & PharmaFlight ensure you receive world-class training and recognized certifications.",
      subtitle: "Powered by excellence. Our collaborations are your gateway to top-tier aviation education.",
      buttonText: "Our Partners"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Career-Driven Approach",
      description: "Our focus extends beyond just getting you a pilot's license. We are committed to preparing you for a long and successful career in aviation, equipping you with the skills and confidence needed to excel.",
      subtitle: "We don't just create pilots; we build future airline captains. Your career take-off starts here.",
      buttonText: "Launch Your Career"
    }
  ];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cardData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };
  
  const ChevronLeft = () => (
    <svg className="wfs-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );

  const ChevronRight = () => (
    <svg className="wfs-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  const ArrowRight = () => (
    <svg className="wfs-icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <>
      <WhywayforskyStyles />
      <div className="wfs-container">
        <h1 className="wfs-mainHeading">Why WayForSky?</h1>
        <div className="wfs-wrapper">
          {/* Navigation Arrows */}
          <div className="wfs-navigationContainer">
            <button onClick={prevCard} className="wfs-navButton">
              <ChevronLeft />
            </button>
            <button onClick={nextCard} className="wfs-navButton">
              <ChevronRight />
            </button>
          </div>

          {/* Card Container */}
          <div className="wfs-cardContainer">
            <div className="wfs-card">
              {/* Left Side - Image Container */}
              <div className="wfs-imageContainer">
                <img 
                  src={cardData[currentIndex].image}
                  alt={cardData[currentIndex].title}
                  className="wfs-image"
                />
              </div>

              {/* Right Side - Content */}
              <div className="wfs-contentContainer">
                <div className="wfs-header">
                  <h1 className="wfs-title">
                    {cardData[currentIndex].title}
                  </h1>
                  <p className="wfs-description">
                    {cardData[currentIndex].description}
                  </p>
                </div>
                <div className="wfs-bottomSection">
                  <div>
                    <p className="wfs-subtitle">
                      {cardData[currentIndex].subtitle}
                    </p>
                  </div>
                  <button className="wfs-button">
                    <span>{cardData[currentIndex].buttonText}</span>
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="wfs-dotsContainer">
            {cardData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`wfs-dot ${index === currentIndex ? 'wfs-dot-active' : 'wfs-dot-inactive'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Whywayforsky;