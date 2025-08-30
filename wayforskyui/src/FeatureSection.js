import React, { useState } from 'react';

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

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #c084fc 0%, #bfdbfe 50%, #c084fc 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '4rem 2.5rem', // Approx 1.5cm gap from sides
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    },
    mainHeading: {
        fontSize: 'clamp(2.25rem, 5vw, 3rem)',
        fontWeight: '600', // Matched font weight
        color: '#1a1a1a', // Matched font color
        textAlign: 'left',
        marginBottom: '3rem',
    },
    wrapper: {
      position: 'relative',
      width: '100%',
      maxWidth: '75rem',
      margin: '0 auto', // Center the card container
    },
    navigationContainer: {
      position: 'absolute',
      top: '-4.5rem', // Adjusted for spacing
      right: '0',
      display: 'flex',
      gap: '0.5rem',
      zIndex: 10
    },
    navButton: {
      width: '3rem',
      height: '3rem',
      borderRadius: '50%',
      backgroundColor: 'white',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      transform: 'scale(1)'
    },
    navButtonHover: {
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transform: 'scale(1.05)'
    },
    cardContainer: {
      overflow: 'hidden',
      borderRadius: '1rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    card: {
      height: '15cm',
      backgroundColor: '#fefefe',
      display: 'flex'
    },
    imageContainer: {
      width: '50%',
      position: 'relative',
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    contentContainer: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '3rem',
      background: 'linear-gradient(135deg, #fefefe 0%, #fdfcf4 100%)'
    },
    header: {
      marginBottom: '2rem'
    },
    title: {
      fontSize: '2.25rem',
      fontWeight: '300',
      color: '#1f2937',
      marginBottom: '1.5rem',
      letterSpacing: '0.025em'
    },
    description: {
      color: '#4b5563',
      lineHeight: '1.625',
      fontSize: '1rem',
      marginBottom: '2rem'
    },
    bottomSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    subtitle: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      fontStyle: 'italic'
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      backgroundColor: '#a3e635',
      color: '#1f2937',
      fontWeight: '500',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      transform: 'scale(1)',
      width: 'fit-content'
    },
    buttonHover: {
      backgroundColor: '#84cc16',
      transform: 'scale(1.05)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    },
    dotsContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '1.5rem',
      gap: '0.5rem'
    },
    dot: {
      width: '0.5rem',
      height: '0.5rem',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease'
    },
    dotActive: {
      backgroundColor: 'white'
    },
    dotInactive: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)'
    },
    arrow: {
      width: '1.5rem',
      height: '1.5rem',
      color: '#4b5563'
    }
  };

  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);

  const ChevronLeft = () => (
    <svg style={styles.arrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );

  const ChevronRight = () => (
    <svg style={styles.arrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  const ArrowRight = () => (
    <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeading}>Why WayForSky?</h1>
      <div style={styles.wrapper}>
        {/* Navigation Arrows */}
        <div style={styles.navigationContainer}>
          <button
            onClick={prevCard}
            style={{
              ...styles.navButton,
              ...(hoveredNav === 'prev' ? styles.navButtonHover : {})
            }}
            onMouseEnter={() => setHoveredNav('prev')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextCard}
            style={{
              ...styles.navButton,
              ...(hoveredNav === 'next' ? styles.navButtonHover : {})
            }}
            onMouseEnter={() => setHoveredNav('next')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            <ChevronRight />
          </button>
        </div>

        {/* Card Container */}
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            {/* Left Side - Image Container */}
            <div style={styles.imageContainer}>
              <img 
                src={cardData[currentIndex].image}
                alt={cardData[currentIndex].title}
                style={styles.image}
              />
            </div>

            {/* Right Side - Content */}
            <div style={styles.contentContainer}>
              {/* Header */}
              <div style={styles.header}>
                <h1 style={styles.title}>
                  {cardData[currentIndex].title}
                </h1>
                
                <p style={styles.description}>
                  {cardData[currentIndex].description}
                </p>
              </div>

              {/* Bottom Section */}
              <div style={styles.bottomSection}>
                <div>
                  <p style={styles.subtitle}>
                    {cardData[currentIndex].subtitle}
                  </p>
                </div>

                {/* CTA Button */}
                <button 
                  style={{
                    ...styles.button,
                    ...(hoveredButton ? styles.buttonHover : {})
                  }}
                  onMouseEnter={() => setHoveredButton(true)}
                  onMouseLeave={() => setHoveredButton(false)}
                >
                  <span>{cardData[currentIndex].buttonText}</span>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div style={styles.dotsContainer}>
          {cardData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                ...styles.dot,
                ...(index === currentIndex ? styles.dotActive : styles.dotInactive)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whywayforsky;