import React, { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import img41 from '../../../assets/Traininglocation/4.1.JPG'; // Assuming this path is correct or will be moved to a central assets folder. If moved, this will need updating.



// All component styles, including base styles, hover effects, and media queries, are defined here.
const componentStyles = `
  /* Base Styles */
.training-locations-section {
  padding: clamp(40px, 8vh, 80px) clamp(16px, 5vw, 1.5cm); /* fluid vertical padding */
  background-color: #ffffff;
  min-height: 70vh;
  box-sizing: border-box;
  overflow-x: hidden; /* prevent side scroll inside section */
}

  .training-locations-container {
    max-width: none;
    margin: 0;
    padding-left: 1.5cm;
    padding-right: 1.5cm;
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: clamp(40px, 8vw, 80px); /* fluid gap */
    align-items: start;
    width: 100%;
  }

  /* Left Column */
  .training-locations-left-column {
    display: flex;
    flex-direction: column;
    gap: clamp(16px, 3vw, 24px); /* fluid gap for headings */
    padding-top: 0px;
  }
  .training-locations-intro-text {
    font-size: clamp(16px, 2.2vw, 18px); /* fluid font size */
    line-height: 1.7;
    color: #374151;
    margin: 0;
    max-width: clamp(300px, 60vw, 480px); /* fluid max width */
  }

  /* CTA Button */
  .training-locations-cta-button {
    display: inline-flex;
    align-items: center;
    gap: clamp(8px, 1.5vw, 12px); /* fluid gap */
    background-color: #000000;
    color: #ffffff;
    border: none;
    padding: clamp(14px, 2.2vw, 18px) clamp(24px, 4.5vw, 36px); /* fluid padding */
    border-radius: 50px;
    font-size: clamp(15px, 2vw, 17px); /* fluid font size */
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 clamp(4px, 1vw, 8px) clamp(15px, 3vw, 25px) rgba(0, 0, 0, 0.15); /* fluid shadow */
    white-space: nowrap; /* Prevent button text from wrapping */
    min-width: fit-content; /* ensure button doesn't shrink too much */
  }
  .cta-text, .cta-icon {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .training-locations-cta-button:hover {
    transform: translateY(clamp(-2px, -0.5vw, -4px)) scale(1.02); /* fluid hover transform */
    box-shadow: 0 clamp(12px, 2.5vw, 20px) clamp(25px, 5vw, 40px) rgba(0, 0, 0, 0.25); /* fluid hover shadow */
    background-color: #1a1a1a;
    border-radius: 60px;
  }
  .training-locations-cta-button:hover .cta-icon {
    transform: translateX(clamp(4px, 1vw, 8px)) rotate(15deg) scale(1.1); /* fluid icon movement */
  }
  .training-locations-cta-button:hover .cta-text {
    transform: translateX(clamp(-1px, -0.25vw, -2px)); /* fluid text movement */
    letter-spacing: clamp(0.25px, 0.06vw, 0.5px); /* fluid letter spacing */
  }

  /* Right Column */
  .training-locations-right-column {
    display: flex;
    flex-direction: column;
    gap: clamp(32px, 7vw, 56px); /* fluid gap */
  }
  /* Container for the headline and button */
  .training-locations-header-container {
    display: flex;
    justify-content: flex-end; /* CHANGED: Aligns single button to the right */
    align-items: flex-start; /* Aligns items to the top */
    gap: clamp(16px, 2.5vw, 20px); /* fluid gap */
  }
  .training-locations-headline {
    font-size: clamp(28px, 5vw, 40px); /* fluid font size */
    font-weight: 700;
    line-height: 1.1;
    color: #000000;
    margin: 0;
  }
  .training-locations-headline-light {
    color: #9CA3AF;
  }
  .training-locations-headline-left {
    font-size: clamp(32px, 6vw, 48px); /* fluid font size */
    white-space: nowrap; /* Ensures it stays on a single line in desktop */
  }
  /* NEW: Style for the sub-headline */
  .training-locations-sub-headline {
    padding-left: 0; /* Remove extra padding since container now has 1.5cm */
    margin-top: clamp(16px, 4vw, 1cm); /* fluid top margin */
    white-space: nowrap; /* Keep in single line for desktop */
  }
  
  /* Cards Grid */
  .training-locations-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(24px, 6vw, 50px); /* fluid gap */
    width: max-content;
    margin: clamp(40px, 10vw, 80px) auto 0 auto; /* fluid top margin */
  }
  
  /* Card Styles */
  .training-locations-card {
    background-color: #F7F9FA;
    border-radius: clamp(20px, 3.5vw, 28px); /* fluid border radius */
    padding: clamp(24px, 5vw, 40px); /* fluid padding */
    position: relative;
    display: grid;
    grid-template-areas: 
      "top-left . top-right"
      ". center ."
      "bottom-left . bottom-right";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr auto;
    min-height: clamp(280px, 45vw, calc(376px + 1cm)); /* fluid min height */
    width: 100%;
    min-width: clamp(240px, 40vw, calc(342px + 1cm)); /* fluid min width */
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 clamp(6px, 1.2vw, 10px) clamp(18px, 3.5vw, 30px) rgba(0, 0, 0, 0.08); /* fluid shadow */
    border: 1px solid rgba(229, 231, 235, 0.5);
    cursor: pointer;
  }
  .training-locations-card:hover {
    transform: translateY(clamp(-4px, -1vw, -8px)) scale(1.02); /* fluid hover transform */
    box-shadow: 0 clamp(15px, 3vw, 25px) clamp(35px, 7vw, 60px) rgba(0, 0, 0, 0.15); /* fluid hover shadow */
    background-color: #F0F4F8;
  }
  .training-locations-card-image {
    grid-area: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.training-locations-card-img {
  width: clamp(140px, 20vw, 200px); 
  height: clamp(140px, 20vw, 200px);
  object-fit: cover;
  border-radius: clamp(12px, 2.5vw, 20px);
  filter: none;   /* remove black/grey effect */
  opacity: 1;     /* make image fully visible */
}

  .training-locations-card-number {
    width: clamp(40px, 7vw, 56px);
    height: clamp(40px, 7vw, 56px);
    border: 2px solid #E5E7EB;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(14px, 2.2vw, 19px);
    font-weight: 700;
    color: #374151;
    background-color: #ffffff;
    box-shadow: 0 clamp(2px, 0.5vw, 4px) clamp(8px, 1.5vw, 12px) rgba(0, 0, 0, 0.05);
  }
  /* UPDATED: Increased location name font size by 2px */
  .training-locations-card-text {
    font-size: clamp(14px, 1.8vw, 16px);
    font-weight: 900;
    color: #000;
    line-height: 1; 
    max-width: clamp(120px, 20vw, 160px);
  }

  /* Card Element Positioning */
  .card-number-top-left { grid-area: top-left; align-self: start; justify-self: start; }
  .card-number-top-right { grid-area: top-right; align-self: start; justify-self: end; }
  .card-number-bottom-left { grid-area: bottom-left; align-self: end; justify-self: start; }
  .card-number-bottom-right { grid-area: bottom-right; align-self: end; justify-self: end; }
  .card-text-top-left { grid-area: top-left; align-self: start; justify-self: start; text-align: left; }
  .card-text-top-right { grid-area: top-right; align-self: start; justify-self: end; text-align: right; }
  .card-text-bottom-left { grid-area: bottom-left; align-self: end; justify-self: start; text-align: left; }
  .card-text-bottom-right { grid-area: bottom-right; align-self: end; justify-self: end; text-align: right; }

  /* Modal Styles */
  .training-locations-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    animation: fadeIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .training-locations-modal {
    background: white;
    border-radius: 24px;
    padding: 40px;
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
    animation: slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .training-locations-modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #f3f4f6;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #6b7280;
  }

  .training-locations-modal-close:hover {
    background: #e5e7eb;
    color: #374151;
    transform: scale(1.1);
  }

  .training-locations-modal-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom: 2px solid #f3f4f6;
  }

  .training-locations-modal-flag {
    font-size: 48px;
    line-height: 1;
  }

  .training-locations-modal-title {
    font-size: 32px;
    font-weight: 700;
    color: #111827;
    margin: 0;
    line-height: 1.2;
  }

  .training-locations-modal-subtitle {
    font-size: 16px;
    color: #6b7280;
    margin: 4px 0 0 0;
    font-weight: 500;
  }

  .training-locations-modal-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .training-locations-modal-feature {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 0;
  }

  .training-locations-modal-feature-icon {
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    border-radius: 50%;
    margin-top: 8px;
    flex-shrink: 0;
  }

  .training-locations-modal-feature-text {
    font-size: 16px;
    line-height: 1.6;
    color: #374151;
    margin: 0;
    font-weight: 500;
  }

  /* --- Enhanced Responsive Design Media Queries --- */

  @media (min-width: 1440px) {
    .training-locations-section {
      padding: clamp(80px, 6vh, 100px) 0;
    }
    .training-locations-container {
      gap: clamp(80px, 8vw, 120px);
    }
    .training-locations-headline {
      font-size: clamp(40px, 4vw, 52px);
    }
    .training-locations-headline-left {
      font-size: clamp(48px, 5vw, 60px);
    }
    .training-locations-cards-grid {
      gap: clamp(50px, 5vw, 70px);
      margin: clamp(80px, 8vw, 120px) auto 0 auto;
    }
    .training-locations-card {
      min-height: clamp(calc(376px + 1cm), 50vh, calc(420px + 1cm));
      min-width: clamp(calc(342px + 1cm), 25vw, calc(380px + 1cm));
    }
  }

  @media (max-width: 1439px) and (min-width: 1200px) {
    .training-locations-container {
      gap: clamp(60px, 7vw, 80px);
    }
    .training-locations-cards-grid {
      gap: clamp(40px, 5vw, 50px);
    }
  }

  @media (max-width: 1199px) and (min-width: 1025px) {
    .training-locations-container {
      grid-template-columns: 1fr;
      gap: clamp(40px, 6vw, 60px);
    }
    .training-locations-headline-left {
      font-size: clamp(40px, 5.5vw, 48px);
    }
    .training-locations-cards-grid {
      grid-template-columns: repeat(2, 1fr);
      margin: clamp(50px, 8vw, 70px) auto 0 auto;
    }
    .training-locations-card {
      min-height: clamp(300px, 35vw, 350px);
      min-width: clamp(280px, 30vw, 320px);
    }
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    .training-locations-container {
      grid-template-columns: 1fr;
    }
    .training-locations-cards-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .training-locations-card {
      min-height: clamp(280px, 32vw, 320px);
      min-width: clamp(260px, 28vw, 300px);
    }
  }

  /* --- MOBILE VIEW (BELOW 768px) --- */
  @media (max-width: 768px) {
    .training-locations-section {
      padding-top: clamp(35px, 5vh, 50px);
      padding-bottom: clamp(35px, 5vh, 50px);
    }
    /* UPDATED: Added 0.5cm gap on left and right */
    .training-locations-container {
      gap: clamp(28px, 5vw, 40px);
      padding-left: 0.5cm;
      padding-right: 0.5cm;
    }
    .training-locations-left-column {
      align-items: center;
      text-align: center;
    }
    .training-locations-header-container {
        flex-direction: column;
        align-items: center;
    }
    .training-locations-sub-headline {
      padding-left: 0 !important;
    }
    
    .training-locations-cards-grid {
      grid-template-columns: 1fr;
      gap: clamp(24px, 5vw, 36px);
      margin: clamp(40px, 8vw, 60px) auto 0 auto;
      width: 100%;
    }

    .training-locations-card {
      width: 100%;
      aspect-ratio: 4 / 3;
      padding: clamp(24px, 6vw, 40px);
      min-height: unset;
      min-width: unset;
    }

    .training-locations-card-img {
      width: clamp(120px, 35vw, 180px);
      height: clamp(120px, 35vw, 180px);
      border-radius: clamp(16px, 3vw, 24px);
    }

    .training-locations-card-number {
      width: clamp(40px, 8vw, 52px);
      height: clamp(40px, 8vw, 52px);
      font-size: clamp(14px, 3vw, 18px);
    }

    /* UPDATED: Increased location name font size by 2px */
    .training-locations-card-text {
      font-size: clamp(15px, 2.8vw, 18px);
      max-width: unset;
    }

    /* Mobile Modal Styles */
    .training-locations-modal {
      padding: 32px 24px;
      margin: 20px;
      max-height: 85vh;
    }

    .training-locations-modal-title {
      font-size: 28px;
    }

    .training-locations-modal-flag {
      font-size: 40px;
    }
  }
`;

const TrainingLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
const navigate = useNavigate();

  // Array of feature card data
  const featureCards = [
  {
    id: 1,
    number: "01",
    title: "South Africa 🇿🇦",
    imageUrl: img41,
    cornerPosition: { number: "top-left", text: "bottom-left" }
  },
    {
      id: 2,
      number: "02",
      title: "Hungary 🇭🇺",
      imageUrl: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
      cornerPosition: { text: "top-left", number: "bottom-left" }
    },
    {
      id: 3,
      number: "03",
      title: "India 🇮🇳",
      imageUrl: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
      cornerPosition: { number: "top-right", text: "bottom-right" }
    }
  ];

  // Modal content data
  const locationData = {
    1: {
      country: "South Africa",
      flag: "🇿🇦",
      features: [
        "300+ flying days per year, clear weather conditions",
        "Globally recognized licenses & fast training timelines",
        "Affordable, high-quality flight training environment"
      ]
    },
    2: {
      country: "Hungary",
      flag: "🇭🇺",
      features: [
        "European-standard aviation training under EASA framework",
        "Opportunity to train & live in the EU",
        "Access to PharmaFlight's advanced simulators & aviation technology"
      ]
    },
    3: {
      country: "India",
      flag: "🇮🇳",
      subtitle: "Ground Training & Preparations",
      features: [
        "Pre-training guidance and ground classes for aspiring pilots before departure",
        "Local counselling and support with documentation, personality development classes, visas, and airline preparation"
      ]
    }
  };

  // This useEffect hook injects the styles into the document's head
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = componentStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Modal functions
  const openModal = (card) => {
    setSelectedLocation(locationData[card.id]);
  };

  const closeModal = () => {
    setSelectedLocation(null);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedLocation) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedLocation]);

  return (
    <section className="training-locations-section">
      <div className="training-locations-container">
        {/* Left Column - Intro and CTA */}
        <div className="training-locations-left-column">
          <h1 className="training-locations-headline training-locations-sub-headline">
            Where <span className="training-locations-headline-light">You Can</span> Train
          </h1>
        </div>

        {/* Right Column - Button */}
        <div className="training-locations-right-column">
          {/* Container now only holds the button, and CSS is adjusted to align it right */}
          <div className="training-locations-header-container">
<button 
  className="training-locations-cta-button"
  onClick={() => navigate("/contactus")}
>
  <span className="cta-text">Let's Talk</span>
  <ArrowRight className="cta-icon" />
</button>
          </div>
        </div>
      </div>
      
      {/* The cards grid is now outside the two-column layout and has more top margin */}
      <div className="training-locations-cards-grid">
        {featureCards.map((card) => (
          <div 
            key={card.id} 
            className="training-locations-card"
            onClick={() => openModal(card)}
          >
            <div className="training-locations-card-image">
              <img 
                src={card.imageUrl} 
                alt={`Feature ${card.number}`}
                className="training-locations-card-img"
              />
            </div>
            
            <div className={`training-locations-card-number card-number-${card.cornerPosition.number}`}>
              {card.number}
            </div>
            <div className={`training-locations-card-text card-text-${card.cornerPosition.text}`}>
              {card.title}
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal */}
      {selectedLocation && (
        <div 
          className="training-locations-modal-overlay"
          onClick={closeModal}
        >
          <div 
            className="training-locations-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="training-locations-modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <div className="training-locations-modal-header">
              <span className="training-locations-modal-flag">
                {selectedLocation.flag}
              </span>
              <div>
                <h2 className="training-locations-modal-title">
                  {selectedLocation.country}
                </h2>
                {selectedLocation.subtitle && (
                  <p className="training-locations-modal-subtitle">
                    {selectedLocation.subtitle}
                  </p>
                )}
              </div>
            </div>
            
            <div className="training-locations-modal-content">
              {selectedLocation.features.map((feature, index) => (
                <div key={index} className="training-locations-modal-feature">
                  <div className="training-locations-modal-feature-icon"></div>
                  <p className="training-locations-modal-feature-text">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrainingLocations;