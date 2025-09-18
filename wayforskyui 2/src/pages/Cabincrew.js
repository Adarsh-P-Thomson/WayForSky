import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState({});
  const [counters, setCounters] = useState({ days: 0, placement: 0, graduates: 0, partners: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  const styles = {
    container: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif',
      color: '#000000',
      backgroundColor: '#FFFFFF',
      minHeight: '100vh',
      overflow: 'hidden',
      position: 'relative',
    },
    
    content: {
      position: 'relative',
      zIndex: 1,
    },
    
    hero: {
      textAlign: 'center',
      padding: '120px 20px 80px',
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(250, 250, 250, 1) 100%)',
      borderBottom: '1px solid rgba(124, 124, 124, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    
    heroImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.15,
      zIndex: 0,
      filter: 'grayscale(100%) contrast(1.2)',
    },
    
    heroTitle: {
      fontSize: 'clamp(3.5rem, 8vw, 6rem)',
      fontWeight: 300,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      margin: '0 0 20px 0',
      background: 'linear-gradient(135deg, #000000 0%, #7C7C7C 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: isVisible.hero ? 'slideInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' : 'none',
      opacity: isVisible.hero ? 1 : 0,
      transform: isVisible.hero ? 'translateY(0)' : 'translateY(50px)',
      position: 'relative',
      zIndex: 1,
    },
    
    heroSubtitle: {
      fontSize: '1.25rem',
      fontWeight: 400,
      color: '#7C7C7C',
      margin: 0,
      animation: isVisible.hero ? 'slideInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards' : 'none',
      opacity: isVisible.hero ? 1 : 0,
      transform: isVisible.hero ? 'translateY(0)' : 'translateY(30px)',
      position: 'relative',
      zIndex: 1,
    },
    
    section: {
      padding: '80px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    
    sectionTitle: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: 500,
      textAlign: 'center',
      margin: '0 0 60px 0',
      letterSpacing: '-0.01em',
    },
    
    programDetails: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      margin: '60px 0',
    },
    
    detailCard: {
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(124, 124, 124, 0.1)',
      borderRadius: '20px',
      padding: '40px 30px',
      textAlign: 'center',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    
    detailCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(0, 0, 0, 0.2)',
    },
    
    detailIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
      color: '#000000',
    },
    
    detailTitle: {
      fontSize: '1.5rem',
      fontWeight: 600,
      margin: '0 0 10px 0',
      color: '#000000',
    },
    
    detailText: {
      fontSize: '1.1rem',
      color: '#7C7C7C',
      margin: 0,
      lineHeight: 1.6,
    },
    
    overviewCard: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 248, 248, 0.9) 100%)',
      backdropFilter: 'blur(30px)',
      border: '1px solid rgba(124, 124, 124, 0.15)',
      borderRadius: '24px',
      padding: '60px 40px',
      margin: '40px 0',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      flexWrap: 'wrap',
    },
    
    overviewImage: {
      width: '300px',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
      transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      flex: '0 0 auto',
    },
    
    overviewImageHover: {
      transform: 'scale(1.05)',
    },
    
    overviewContent: {
      flex: '1 1 300px',
      minWidth: '300px',
    },
    
    overviewText: {
      fontSize: '1.25rem',
      lineHeight: 1.8,
      color: '#000000',
      textAlign: 'left',
      margin: 0,
      fontWeight: 400,
    },
    
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      margin: '80px 0',
    },
    
    statCard: {
      textAlign: 'center',
      padding: '30px 20px',
      background: 'rgba(255, 255, 255, 0.6)',
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      border: '1px solid rgba(124, 124, 124, 0.1)',
      transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    
    statNumber: {
      fontSize: '3.5rem',
      fontWeight: 300,
      color: '#000000',
      margin: '0 0 10px 0',
      letterSpacing: '-0.02em',
    },
    
    statLabel: {
      fontSize: '1rem',
      color: '#7C7C7C',
      margin: 0,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    
    ctaSection: {
      textAlign: 'center',
      padding: '100px 20px',
      background: 'linear-gradient(180deg, rgba(248, 248, 248, 1) 0%, rgba(255, 255, 255, 1) 100%)',
    },
    
    ctaTitle: {
      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
      fontWeight: 500,
      margin: '0 0 20px 0',
      color: '#000000',
      letterSpacing: '-0.01em',
    },
    
    ctaSubtitle: {
      fontSize: '1.3rem',
      color: '#7C7C7C',
      margin: '0 0 50px 0',
      lineHeight: 1.6,
    },
    
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    
    primaryButton: {
      background: 'linear-gradient(135deg, #000000 0%, #3d3d3d 100%)',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '50px',
      padding: '16px 40px',
      fontSize: '1.1rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'inherit',
    },
    
    primaryButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
      background: 'linear-gradient(135deg, #1d1d1d 0%, #4d4d4d 100%)',
    },
    
    secondaryButton: {
      background: 'rgba(255, 255, 255, 0.9)',
      color: '#000000',
      border: '2px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '50px',
      padding: '14px 38px',
      fontSize: '1.1rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      backdropFilter: 'blur(20px)',
      position: 'relative',
      fontFamily: 'inherit',
    },
    
    secondaryButtonHover: {
      transform: 'translateY(-2px)',
      border: '2px solid rgba(0, 0, 0, 0.3)',
      background: 'rgba(255, 255, 255, 1)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    },
    
    footer: {
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 1) 100%)',
      color: '#FFFFFF',
      padding: '60px 20px',
      textAlign: 'center',
    },
    
    footerTitle: {
      fontSize: '1.5rem',
      fontWeight: 500,
      margin: '0 0 20px 0',
    },
    
    footerText: {
      fontSize: '1rem',
      color: '#7C7C7C',
      margin: 0,
      lineHeight: 1.6,
    },
    
    '@keyframes float': {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-20px)' }
    },
    
    '@keyframes slideInUp': {
      'from': { opacity: 0, transform: 'translateY(50px)' },
      'to': { opacity: 1, transform: 'translateY(0)' }
    },
    
    '@keyframes fadeIn': {
      'from': { opacity: 0 },
      'to': { opacity: 1 }
    },
    
    '@keyframes pulse': {
      '0%, 100%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.05)' }
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.section]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    // Trigger hero animation immediately
    setTimeout(() => {
      setIsVisible(prev => ({ ...prev, hero: true }));
    }, 100);

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { days: 33, placement: 95, graduates: 500, partners: 15 };
    const duration = 2500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCounters({
        days: Math.floor(targets.days * easeOut),
        placement: Math.floor(targets.placement * easeOut),
        graduates: Math.floor(targets.graduates * easeOut),
        partners: Math.floor(targets.partners * easeOut),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const ButtonComponent = ({ primary, children, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const buttonStyle = {
      ...styles[primary ? 'primaryButton' : 'secondaryButton'],
      ...(isHovered ? styles[primary ? 'primaryButtonHover' : 'secondaryButtonHover'] : {}),
      transform: `${isHovered ? 'translateY(-2px)' : 'translateY(0)'} ${isPressed ? 'scale(0.98)' : 'scale(1)'}`,
    };

    return (
      <button
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  const DetailCard = ({ icon, title, text, delay = 0 }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const cardStyle = {
      ...styles.detailCard,
      ...(isHovered ? styles.detailCardHover : {}),
      animation: isVisible.details ? `slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s forwards` : 'none',
      opacity: isVisible.details ? 1 : 0,
      transform: isVisible.details ? 'translateY(0)' : 'translateY(40px)',
    };

    return (
      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={styles.detailIcon}>
          {icon}
        </div>
        <h3 style={styles.detailTitle}>{title}</h3>
        <p style={styles.detailText}>{text}</p>
      </div>
    );
  };

  const StatCard = ({ number, label, suffix = '' }) => (
    <div style={styles.statCard}>
      <div style={styles.statNumber}>
        {number}{suffix}
      </div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );

  const OverviewImage = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <img 
        src="https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
        alt="Professional cabin crew training"
        style={{
          ...styles.overviewImage,
          ...(isHovered ? styles.overviewImageHover : {}),
          className: 'overview-image'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    );
  };

  // Professional SVG Icons
  const ClockIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
  );

  const LocationIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );

  const CertificationIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  );

  return (
    <div style={styles.container}>
      {/* CSS Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideInUp {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        
        @media (max-width: 768px) {
          .program-details {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .stats-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          
          .button-container {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .overview-card {
            flex-direction: column !important;
            text-align: center !important;
          }
          
          .overview-image {
            width: 100% !important;
            max-width: 400px !important;
            height: 250px !important;
          }
          
          .overview-text {
            text-align: center !important;
          }
          
          .hero-image {
            opacity: 0.08 !important;
          }
        }
      `}</style>

      <div style={styles.content}>
        {/* Hero Section */}
        <section style={styles.hero} data-section="hero">
          <img 
            src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Aircraft interior"
            style={{
              ...styles.heroImage,
              className: 'hero-image'
            }}
          />
          <h1 style={styles.heroTitle}>
            Cabin Crew Training
          </h1>
          <p style={styles.heroSubtitle}>
            Elevate your career to new heights
          </p>
        </section>

        {/* Program Details */}
        <section style={styles.section}>
          <div 
            style={{...styles.programDetails, className: 'program-details'}}
            data-section="details"
          >
            <DetailCard
              icon={<ClockIcon />}
              title="Duration"
              text="33 intensive days of comprehensive training"
              delay={0}
            />
            <DetailCard
              icon={<LocationIcon />}
              title="Location"
              text="South Africa (partner academies)"
              delay={0.1}
            />
            <DetailCard
              icon={<CertificationIcon />}
              title="Certification"
              text="Industry-recognized credentials"
              delay={0.2}
            />
          </div>

          {/* Overview */}
          <div 
            style={{
              ...styles.overviewCard,
              className: 'overview-card',
              animation: isVisible.details ? 'slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards' : 'none',
              opacity: isVisible.details ? 1 : 0,
              transform: isVisible.details ? 'translateY(0)' : 'translateY(40px)',
            }}
          >
            <OverviewImage />
            <div style={styles.overviewContent}>
              <p style={{...styles.overviewText, className: 'overview-text'}}>
                "For those who dream of joining leading airlines as flight attendants. 
                Training includes grooming, aviation hospitality, safety & emergency procedures, 
                and customer service."
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Counter */}
        <section style={styles.section} ref={counterRef} data-section="stats">
          <h2 style={styles.sectionTitle}>Training Excellence</h2>
          <div style={{...styles.statsContainer, className: 'stats-container'}}>
            <StatCard number={counters.days} label="Training Days" />
            <StatCard number={counters.placement} label="Placement Rate" suffix="%" />
            <StatCard number={counters.graduates} label="Graduates" suffix="+" />
            <StatCard number={counters.partners} label="Airline Partners" suffix="+" />
          </div>
        </section>

        {/* Career Outcome CTA */}
        <section style={styles.ctaSection} data-section="cta">
          <h2 
            style={{
              ...styles.ctaTitle,
              animation: isVisible.cta ? 'slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' : 'none',
              opacity: isVisible.cta ? 1 : 0,
              transform: isVisible.cta ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            Your Aviation Career Awaits
          </h2>
          <p 
            style={{
              ...styles.ctaSubtitle,
              animation: isVisible.cta ? 'slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s forwards' : 'none',
              opacity: isVisible.cta ? 1 : 0,
              transform: isVisible.cta ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            Placement assistance with domestic and international airlines
          </p>
          <div 
            style={{
              ...styles.buttonContainer,
              className: 'button-container',
              animation: isVisible.cta ? 'slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards' : 'none',
              opacity: isVisible.cta ? 1 : 0,
              transform: isVisible.cta ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            <ButtonComponent primary onClick={() => alert('Apply Now clicked!')}>
              Apply Now
            </ButtonComponent>
            <ButtonComponent onClick={() => alert('Learn More clicked!')}>
              Learn More
            </ButtonComponent>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <h3 style={styles.footerTitle}>Ready to Soar?</h3>
          <p style={styles.footerText}>
            Join hundreds of successful cabin crew members who started their journey with us.
            <br />
            Contact us today to begin your aviation career.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;