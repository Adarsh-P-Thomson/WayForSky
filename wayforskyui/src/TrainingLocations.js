import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// All component styles, including base styles, hover effects, and media queries, are defined here.
const componentStyles = `
  /* Base Styles */
.training-locations-section {
  padding: 80px clamp(16px, 5vw, 1.5cm); /* responsive padding */
  background-color: #ffffff;
  min-height: 70vh;
  box-sizing: border-box;
  overflow-x: hidden; /* prevent side scroll inside section */
}

  .training-locations-container {
    /* REMOVED: max-width and margin to allow content to fill up to the 1.5cm padding */
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 80px;
    align-items: start;
    width: 100%;
  }

  /* Left Column */
  .training-locations-left-column {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-top: 0px;
  }
  .training-locations-intro-text {
    font-size: 18px;
    line-height: 1.7;
    color: #374151;
    margin: 0;
    max-width: 480px;
  }

  /* CTA Button */
  .training-locations-cta-button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background-color: #000000;
    color: #ffffff;
    border: none;
    padding: 18px 36px;
    border-radius: 50px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    align-self: flex-start;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  .cta-text, .cta-icon {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .training-locations-cta-button:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    background-color: #1a1a1a;
    border-radius: 60px;
  }
  .training-locations-cta-button:hover .cta-icon {
    transform: translateX(8px) rotate(15deg) scale(1.1);
  }
  .training-locations-cta-button:hover .cta-text {
    transform: translateX(-2px);
    letter-spacing: 0.5px;
  }

  /* Right Column */
  .training-locations-right-column {
    display: flex;
    flex-direction: column;
    gap: 56px;
  }
  .training-locations-headline {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.1;
    color: #000000;
    margin: 0;
  }
  .training-locations-headline-light {
    color: #9CA3AF;
  }
  .training-locations-headline-left {
    font-size: 48px; /* Slightly smaller than the main 52px headline */
    white-space: nowrap; /* Ensures it stays on a single line */
  }
  
  /* Cards Grid */
  .training-locations-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    width: 100%;
  }
  
  /* Card Styles */
  .training-locations-card {
    background-color: #F7F9FA;
    border-radius: 28px;
    padding: 40px;
    position: relative;
    display: grid;
    grid-template-areas: 
      "top-left . top-right"
      ". center ."
      "bottom-left . bottom-right";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr auto;
    min-height: 376px;
    width: 100%;
    aspect-ratio: 1 / 1.1;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(229, 231, 235, 0.5);
  }
  .training-locations-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
    background-color: #F0F4F8;
  }
  .training-locations-card-image {
    grid-area: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .training-locations-card-img {
    width: 155px; /* Increased from 140px */
    height: 155px; /* Increased from 140px */
    object-fit: cover;
    border-radius: 20px;
    filter: grayscale(100%) contrast(1.2);
    opacity: 0.85;
  }
  .training-locations-card-number {
    width: 56px;
    height: 56px;
    border: 2px solid #E5E7EB;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    font-weight: 700;
    color: #374151;
    background-color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
  .training-locations-card-text {
    font-size: 14px;
    font-weight: 900;
    color: #000;
    /* CHANGED: Increased line-height for cleaner, more readable text alignment */
    line-height: 1; 
    max-width: 160px;
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

  /* --- Responsive Design Media Queries --- */

  /* Tablet View */
  @media (max-width: 1024px) {
    .training-locations-section {
      /* Adjusted padding for smaller screens while respecting 1.5cm goal */
      padding: 60px 1.5cm;
    }
    .training-locations-container {
      grid-template-columns: 1fr; /* Stack columns */
      gap: 60px;
    }
    .training-locations-headline {
      font-size: 44px;
    }
    .training-locations-cards-grid {
      grid-template-columns: repeat(2, 1fr); /* 2 cards per row */
    }
  }

  /* Mobile View */
  @media (max-width: 768px) {
    .training-locations-section {
      padding: 50px 1.5cm;
    }
    .training-locations-container {
      gap: 48px;
    }
    .training-locations-left-column {
      align-items: center; /* Center intro text and button */
      text-align: center;
    }
    .training-locations-headline {
      font-size: 38px;
      text-align: center;
    }
    .training-locations-cards-grid {
      grid-template-columns: 1fr; /* 1 card per row */
      gap: 24px;
    }
    .training-locations-card {
      min-height: 320px;
      padding: 36px;
      aspect-ratio: unset;
    }
    .training-locations-card-img {
      width: 120px;
      height: 120px;
    }
    .training-locations-card-number {
      width: 48px;
      height: 48px;
      font-size: 17px;
    }
    .training-locations-card-text {
      font-size: 15px;
      max-width: 140px;
    }
  }

  /* Small Mobile View */
  @media (max-width: 480px) {
    .training-locations-section {
      padding: 40px 1.5cm;
    }
    .training-locations-headline {
      font-size: 32px;
    }
    .training-locations-intro-text {
      font-size: 16px;
    }
    .training-locations-cta-button {
      padding: 16px 32px;
      font-size: 16px;
    }
    .training-locations-card {
      min-height: auto;
      padding: 32px;
    }
  }
`;

const TrainingLocations = () => {
  // Array of feature card data
  const featureCards = [
    {
      id: 1,
      number: "01",
      title: "South Africa 🇿🇦",
      imageUrl: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
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

  // This useEffect hook injects the styles into the document's head
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = componentStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section className="training-locations-section">
      <div className="training-locations-container">
        {/* Left Column - Intro and CTA */}
        <div className="training-locations-left-column">
          <h2 className="training-locations-headline training-locations-headline-left">
            Training Locations
          </h2>
          <p className="training-locations-intro-text">
Our premier training locations in South Africa, Hungary, and India provide specialized aviation programs for aspiring pilots. Our curriculum is robust, efficient, and optimized for global licensing standards. We understand the complexities of pilot development and offer comprehensive, tailored guidance.
          </p>
          
          <button className="training-locations-cta-button">
            <span className="cta-text">Let's Talk</span>
            <ArrowRight className="cta-icon" />
          </button>
        </div>

        {/* Right Column - Headline and Cards */}
        <div className="training-locations-right-column">
          <h1 className="training-locations-headline">
            Where <span className="training-locations-headline-light">You Can</span> Train
          </h1>
          
          <div className="training-locations-cards-grid">
            {featureCards.map((card) => (
              <div key={card.id} className="training-locations-card">
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
        </div>
      </div>
    </section>
  );
};

export default TrainingLocations;