import React, { useState, useEffect } from 'react';
import { Plane, Globe, MapPin, Clock, DollarSign, Users, Award, CheckCircle, Shield, Target, BookOpen, ChevronRight, Star, ArrowLeft } from 'lucide-react';

const CPLHungaryPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let currentSection = 'overview';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) { // 100px offset for header
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId); 
    }
  };

  const benefits = [
    {
      icon: <Shield style={{ width: '32px', height: '32px' }} />,
      title: "EASA Standards Training",
      description: "Training under EASA (European Union Aviation Safety Agency) standards",
      color: "linear-gradient(135deg, #3b82f6, #06b6d4)"
    },
    {
      icon: <Globe style={{ width: '32px', height: '32px' }} />,
      title: "European Lifestyle",
      description: "Opportunity to train and live in Europe, exposure to EU lifestyle and aviation practices",
      color: "linear-gradient(135deg, #8b5cf6, #ec4899)"
    },
    {
      icon: <Target style={{ width: '32px', height: '32px' }} />,
      title: "World-Class Simulators",
      description: "Access to PharmaFlight's world-class simulators and aviation research facilities",
      color: "linear-gradient(135deg, #10b981, #059669)"
    },
    {
      icon: <Star style={{ width: '32px', height: '32px' }} />,
      title: "Airline Placement Foundation",
      description: "Strong foundation for airline placements across Europe and beyond",
      color: "linear-gradient(135deg, #eab308, #f97316)"
    },
    {
      icon: <BookOpen style={{ width: '32px', height: '32px' }} />,
      title: "Structured Program",
      description: "Highly structured training program, ensuring discipline and quality",
      color: "linear-gradient(135deg, #ef4444, #ec4899)"
    }
  ];

  const fleetDetails = [
    { name: "Tecnam 2008JC", type: "Single Engine Aircraft", description: "Modern single-engine training aircraft for initial flight training" },
    { name: "Tecnam 2006T", type: "Single Engine Aircraft", description: "Advanced training platform for skill development" },
    { name: "B737-800 FFS", type: "Full Flight Simulator", description: "Boeing 737-800 Full Flight Simulator for airline training" },
    { name: "A320 FFS", type: "Full Flight Simulator", description: "Airbus A320 Full Flight Simulator for type rating" },
    { name: "Redbird A320", type: "Simulator", description: "Advanced A320 training simulator system" },
    { name: "Entrol A320", type: "Simulator", description: "Professional A320 simulator for procedural training" }
  ];

  const admissionSteps = [
    {
      number: "01",
      title: "Counselling & Guidance",
      description: "Counselling & program guidance by WayForSky",
      detail: "Comprehensive consultation to understand your aviation goals and ensure program alignment with your career aspirations."
    },
    {
      number: "02", 
      title: "Document Evaluation",
      description: "Document evaluation & English proficiency check",
      detail: "Thorough review of your academic credentials and assessment of English language proficiency for aviation training."
    },
    {
      number: "03",
      title: "Academy Entrance Process",
      description: "Academy entrance process (includes interview & basic aptitude test)",
      detail: "Professional evaluation including personal interview and aptitude assessment to determine your readiness for flight training."
    },
    {
      number: "04",
      title: "Provisional Admission",
      description: "Provisional admission confirmation",
      detail: "Official confirmation of your acceptance into the CPL program with detailed enrollment information."
    },
    {
      number: "05",
      title: "Visa Application",
      description: "Visa application (Schengen student visa)",
      detail: "Complete support for Schengen student visa application process including documentation and interview preparation."
    },
    {
      number: "06",
      title: "Departure & Induction",
      description: "Departure & induction at PharmaFlight",
      detail: "Travel coordination and comprehensive orientation program at PharmaFlight Academy in Hungary."
    }
  ];

  const sections = [
    { id: 'overview', label: 'Program Overview' },
    { id: 'benefits', label: 'Key Benefits' },
    { id: 'campus', label: 'Campus & Fleet' },
    { id: 'student-life', label: 'Student Life' },
    { id: 'admission', label: 'Admission Process' }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc, #dbeafe)',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    stickyHeader: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e5e7eb'
    },
    headerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px'
    },
    headerFlex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 0'
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    backButton: {
      padding: '8px',
      borderRadius: '8px',
      transition: 'background-color 0.2s',
      cursor: 'pointer',
      border: 'none',
      background: 'transparent'
    },
    backButtonHover: {
      backgroundColor: '#f3f4f6'
    },
    iconContainer: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #9333ea, #ec4899)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    headerTitle: {
      fontSize: '18px',
      fontWeight: '500',
      color: '#111827',
      margin: 0
    },
    headerSubtitle: {
      fontSize: '14px',
      color: '#6b7280',
      margin: 0
    },
    nav: {
      display: 'none',
      gap: '32px'
    },
    navVisible: {
      display: 'flex'
    },
    navButton: {
      fontSize: '14px',
      fontWeight: '500',
      transition: 'color 0.2s',
      cursor: 'pointer',
      border: 'none',
      background: 'transparent',
      padding: '4px 0'
    },
    navActive: {
      color: '#9333ea'
    },
    navInactive: {
      color: '#6b7280'
    },
    hero: {
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 1s',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))'
    },
    heroContent: {
      position: 'relative',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
      paddingTop: '96px',
      paddingBottom: '96px'
    },
    heroCenter: {
      textAlign: 'center'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 16px',
      backgroundColor: '#e0e7ff',
      color: '#7c3aed',
      borderRadius: '9999px',
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '32px'
    },
    heroTitle: {
      fontSize: '4.5rem',
      fontWeight: '300',
      color: '#111827',
      marginBottom: '32px',
      letterSpacing: '-0.025em',
      lineHeight: '1.1'
    },
    heroTitleGradient: {
      background: 'linear-gradient(135deg, #9333ea, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: '500'
    },
    heroDescription: {
      fontSize: '24px',
      color: '#6b7280',
      maxWidth: '1024px',
      margin: '0 auto',
      lineHeight: '1.625',
      fontWeight: '300',
      marginBottom: '48px'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '32px',
      maxWidth: '1024px',
      margin: '0 auto'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: '300',
      color: '#111827',
      marginBottom: '8px'
    },
    statLabel: {
      color: '#6b7280'
    },
    section: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
      paddingTop: '80px',
      paddingBottom: '80px'
    },
    sectionCenter: {
      textAlign: 'center',
      marginBottom: '64px'
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: '300',
      color: '#111827',
      marginBottom: '24px'
    },
    sectionDescription: {
      fontSize: '20px',
      color: '#6b7280',
      maxWidth: '768px',
      margin: '0 auto'
    },
    overviewGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '64px',
      alignItems: 'center'
    },
    overviewGridLg: {
      gridTemplateColumns: '1fr 1fr'
    },
    cardSpace: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '24px',
      padding: '32px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px'
    },
    cardIcon: {
      width: '32px',
      height: '32px',
      marginRight: '16px'
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: '500',
      color: '#111827'
    },
    cardSubtitle: {
      color: '#6b7280'
    },
    cardMainText: {
      fontSize: '36px',
      fontWeight: '300',
      color: '#111827',
      marginBottom: '8px'
    },
    cardDescription: {
      color: '#6b7280'
    },
    gradientCard: {
      background: 'linear-gradient(135deg, #9333ea, #ec4899)',
      borderRadius: '24px',
      padding: '48px',
      color: 'white'
    },
    gradientCardTitle: {
      fontSize: '36px',
      fontWeight: '300',
      marginBottom: '32px'
    },
    benefitItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '24px'
    },
    benefitIcon: {
      width: '24px',
      height: '24px',
      marginRight: '16px',
      marginTop: '4px',
      flexShrink: 0
    },
    benefitTitle: {
      fontWeight: '500',
      marginBottom: '8px'
    },
    benefitDescription: {
color: '#ffffff',
    },
    whiteSection: {
      backgroundColor: 'white',
      paddingTop: '80px',
      paddingBottom: '80px'
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px'
    },
    benefitCard: {
      padding: '32px',
      borderRadius: '24px',
      color: 'white',
      cursor: 'pointer',
      transition: 'transform 0.3s',
      display: 'flex',
      flexDirection: 'column'
    },
    benefitCardHover: {
      transform: 'scale(1.05)'
    },
    benefitCardIcon: {
      marginBottom: '24px'
    },
    benefitCardTitle: {
      fontSize: '24px',
      fontWeight: '500',
      marginBottom: '16px'
    },
    benefitCardDesc: {
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: '1.625'
    },
    campusCard: {
      backgroundColor: 'white',
      borderRadius: '24px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '48px',
      marginBottom: '64px'
    },
    campusHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '32px'
    },
    campusIcon: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      marginRight: '24px'
    },
    campusTitle: {
      fontSize: '36px',
      fontWeight: '300',
      color: '#111827',
      marginBottom: '8px'
    },
    campusSubtitle: {
      fontSize: '20px',
      color: '#6b7280'
    },
    campusGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '48px'
    },
    campusGridLg: {
      gridTemplateColumns: '1fr 1fr'
    },
    facilitiesTitle: {
      fontSize: '24px',
      fontWeight: '500',
      color: '#111827',
      marginBottom: '24px'
    },
    facilityItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '16px'
    },
    facilityIcon: {
      width: '24px',
      height: '24px',
      color: '#10b981',
      marginRight: '16px',
      marginTop: '4px',
      flexShrink: 0
    },
    facilityTitle: {
      fontWeight: '500',
      color: '#111827'
    },
    facilityDesc: {
      color: '#6b7280'
    },
    fleetContainer: {
      backgroundColor: '#f9fafb',
      borderRadius: '16px',
      padding: '32px'
    },
    fleetGrid: {
      display: 'grid',
      gap: '16px'
    },
    fleetItem: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '16px',
      transition: 'box-shadow 0.2s'
    },
    fleetItemHover: {
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    },
    fleetHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '8px'
    },
    fleetName: {
      fontWeight: '500',
      color: '#111827'
    },
    fleetType: {
      fontSize: '12px',
      backgroundColor: '#e0e7ff',
      color: '#7c3aed',
      padding: '4px 8px',
      borderRadius: '9999px'
    },
    fleetDesc: {
      color: '#6b7280',
      fontSize: '14px'
    },
    studentLifeGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '64px',
      alignItems: 'center'
    },
    studentLifeGridLg: {
      gridTemplateColumns: '1fr 1fr'
    },
    lifeCardSpace: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    },
    lifeCard: {
      borderRadius: '24px',
      padding: '32px'
    },
    blueCard: {
      backgroundColor: '#eff6ff'
    },
    purpleCard: {
      backgroundColor: '#faf5ff'
    },
    greenCard: {
      backgroundColor: '#ecfdf5'
    },
    yellowCard: {
      backgroundColor: '#fefce8'
    },
    lifeCardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px'
    },
    lifeCardIcon: {
      width: '32px',
      height: '32px',
      marginRight: '16px'
    },
    blueIcon: {
      color: '#2563eb'
    },
    purpleIcon: {
      color: '#9333ea'
    },
    greenIcon: {
      color: '#059669'
    },
    yellowIcon: {
      color: '#ca8a04'
    },
    lifeCardTitle: {
      fontSize: '24px',
      fontWeight: '500',
      color: '#111827'
    },
    lifeCardText: {
      color: '#374151',
      lineHeight: '1.625'
    },
    admissionSteps: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    },
    stepCard: {
      backgroundColor: 'white',
      borderRadius: '24px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: 'box-shadow 0.3s',
      overflow: 'hidden',
      cursor: 'pointer'
    },
    stepCardHover: {
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    stepContent: {
      padding: '32px 48px'
    },
    stepFlex: {
      display: 'flex',
      alignItems: 'flex-start'
    },
    stepFlexLg: {
      alignItems: 'center'
    },
    stepNumber: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #9333ea, #ec4899)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '24px',
      fontWeight: '300',
      marginRight: '32px',
      flexShrink: 0
    },
    stepDetails: {
      flexGrow: 1
    },
    stepTitle: {
      fontSize: '36px',
      fontWeight: '500',
      color: '#111827',
      marginBottom: '16px'
    },
    stepDescription: {
      fontSize: '20px',
      color: '#374151',
      marginBottom: '16px'
    },
    stepDetail: {
      color: '#6b7280',
      lineHeight: '1.625'
    },
    stepArrow: {
      marginLeft: '32px',
      width: '32px',
      height: '32px',
      color: '#9ca3af',
      transition: 'all 0.3s',
      display: 'none'
    },
    stepArrowLg: {
      display: 'block'
    },
    stepArrowHover: {
      color: '#9333ea',
      transform: 'translateX(8px)'
    },
    ctaSection: {
      textAlign: 'center',
      marginTop: '80px'
    },
    ctaCard: {
      background: 'linear-gradient(135deg, #9333ea, #ec4899)',
      borderRadius: '24px',
      padding: '48px',
      color: 'white'
    },
    ctaTitle: {
      fontSize: '36px',
      fontWeight: '300',
      marginBottom: '24px'
    },
    ctaDescription: {
      fontSize: '20px',
color: '#ffffff',
      marginBottom: '32px',
      maxWidth: '768px',
      margin: '0 auto 32px'
    },
    ctaButton: {
      backgroundColor: 'white',
      color: '#9333ea',
      padding: '16px 32px',
      borderRadius: '12px',
      fontWeight: '500',
      fontSize: '18px',
      transition: 'background-color 0.3s',
      border: 'none',
      cursor: 'pointer'
    },
    ctaButtonHover: {
      backgroundColor: '#faf5ff'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header with Back Navigation */}
      <div style={styles.stickyHeader}>
        <div style={styles.headerContent}>
          <div style={styles.headerFlex}>
            <div style={styles.headerLeft}>
              <button 
                style={styles.backButton}
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.backButtonHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={() => window.location.href = '/programs'}
              >
                <ArrowLeft style={{ width: '20px', height: '20px', color: '#6b7280' }} />
              </button>
              <div style={styles.iconContainer}>
                <Plane style={{ width: '24px', height: '24px' }} />
              </div>
              <div>
                <h1 style={styles.headerTitle}>CPL – Hungary</h1>
                <p style={styles.headerSubtitle}>Commercial Pilot License</p>
              </div>
            </div>
            <nav style={{...styles.nav, ...styles.navVisible}}>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  style={{
                    ...styles.navButton,
                    ...(activeSection === section.id ? styles.navActive : styles.navInactive)
                  }}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div id="hero" data-section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroCenter}>
            <div style={styles.badge}>
              <Globe style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              EASA Certified in Europe
            </div>
            <h1 style={styles.heroTitle}>
              Commercial Pilot License <br />
              <span style={styles.heroTitleGradient}>
                Hungary
              </span>
            </h1>
            <p style={styles.heroDescription}>
              Earn your Commercial Pilot License in Hungary with EASA standards training. Experience European aviation excellence 
              while building your path to a successful airline career.
            </p>
            
            {/* Key Stats */}
            <div style={styles.statsGrid}>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>16-18</div>
                <div style={styles.statLabel}>Months Duration</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>₹46,50,000</div>
                <div style={styles.statLabel}>All Inclusive Fees</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>EASA</div>
                <div style={styles.statLabel}>European Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Overview Section */}
      <div id="overview" data-section style={styles.section}>
        <div style={styles.sectionCenter}>
          <h2 style={styles.sectionTitle}>Program Overview</h2>
          <p style={styles.sectionDescription}>
            Our CPL Hungary program provides comprehensive commercial pilot training under EASA regulations, 
            preparing you for a successful career in European and international aviation.
          </p>
        </div>

        <div style={{...styles.overviewGrid, ...styles.overviewGridLg}} className="overview-grid-lg">
          <div style={styles.cardSpace}>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <Clock style={{...styles.cardIcon, color: '#9333ea'}} />
                <div>
                  <h3 style={styles.cardTitle}>Duration</h3>
                  <p style={styles.cardSubtitle}>Flexible timeline based on conditions</p>
                </div>
              </div>
              <p style={styles.cardMainText}>16–18 months</p>
              <p style={styles.cardDescription}>Duration depends on weather conditions and individual student pace, ensuring quality training</p>
            </div>

            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <DollarSign style={{...styles.cardIcon, color: '#059669'}} />
                <div>
                  <h3 style={styles.cardTitle}>Investment</h3>
                  <p style={styles.cardSubtitle}>Complete program cost</p>
                </div>
              </div>
              <p style={styles.cardMainText}>₹46,50,000 INR</p>
              <p style={styles.cardDescription}>All inclusive fees with no hidden costs - covers training, certification, and support</p>
            </div>
          </div>

          <div style={styles.gradientCard}>
            <h3 style={styles.gradientCardTitle}>Why CPL Hungary?</h3>
            <div>
              <div style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} />
                <div>
                  <h4 style={styles.benefitTitle}>EASA Standards</h4>
                  <p style={styles.benefitDescription}>Train under European aviation standards, globally recognized</p>
                </div>
              </div>
              <div style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} />
                <div>
                  <h4 style={styles.benefitTitle}>European Experience</h4>
                  <p style={styles.benefitDescription}>Live and train in Europe with cultural immersion</p>
                </div>
              </div>
              <div style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} />
                <div>
                  <h4 style={styles.benefitTitle}>Career Foundation</h4>
                  <p style={styles.benefitDescription}>Strong foundation for airline placements across Europe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div id="benefits" data-section style={styles.whiteSection}>
        <div style={styles.section}>
          <div style={styles.sectionCenter}>
            <h2 style={styles.sectionTitle}>Key Benefits</h2>
            <p style={styles.sectionDescription}>
              Experience world-class aviation training with comprehensive benefits designed for your success.
            </p>
          </div>

          <div style={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  ...styles.benefitCard,
                  background: benefit.color
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <div style={styles.benefitCardIcon}>
                  {benefit.icon}
                </div>
                <h3 style={styles.benefitCardTitle}>{benefit.title}</h3>
                <p style={styles.benefitCardDesc}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campus & Fleet Section */}
      <div id="campus" data-section style={styles.section}>
        <div style={styles.sectionCenter}>
          <h2 style={styles.sectionTitle}>Campus & Fleet</h2>
          <p style={styles.sectionDescription}>
            Train at PharmaFlight's advanced facilities with state-of-the-art aircraft and simulation technology.
          </p>
        </div>

        {/* Partner Information */}
        <div style={styles.campusCard}>
          <div style={styles.campusHeader}>
            <div style={styles.campusIcon}>
              <MapPin style={{ width: '40px', height: '40px' }} />
            </div>
            <div>
              <h3 style={styles.campusTitle}>PharmaFlight Academy</h3>
              <p style={styles.campusSubtitle}>Premium Training Partner in Hungary</p>
            </div>
          </div>

          <div style={{...styles.campusGrid, ...styles.campusGridLg}} className="campus-grid-lg">
            <div>
              <h4 style={styles.facilitiesTitle}>Advanced Facilities</h4>
              <div>
                <div style={styles.facilityItem}>
                  <CheckCircle style={styles.facilityIcon} />
                  <div>
                    <h5 style={styles.facilityTitle}>Advanced Simulators</h5>
                    <p style={styles.facilityDesc}>Full flight + procedural simulators for comprehensive pilot training</p>
                  </div>
                </div>
                <div style={styles.facilityItem}>
                  <CheckCircle style={styles.facilityIcon} />
                  <div>
                    <h5 style={styles.facilityTitle}>Medical & Performance Labs</h5>
                    <p style={styles.facilityDesc}>Integrated medical and human performance laboratories for aviation medicine</p>
                  </div>
                </div>
                <div style={styles.facilityItem}>
                  <CheckCircle style={styles.facilityIcon} />
                  <div>
                    <h5 style={styles.facilityTitle}>Modern Classrooms</h5>
                    <p style={styles.facilityDesc}>State-of-the-art learning environments with latest aviation technology</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.fleetContainer}>
              <h4 style={styles.facilitiesTitle}>Training Fleet</h4>
              <div style={styles.fleetGrid}>
                {fleetDetails.map((aircraft, index) => (
                  <div 
                    key={index} 
                    style={styles.fleetItem}
                    onMouseEnter={(e) => e.target.style.boxShadow = styles.fleetItemHover.boxShadow}
                    onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
                  >
                    <div style={styles.fleetHeader}>
                      <h5 style={styles.fleetName}>{aircraft.name}</h5>
                      <span style={styles.fleetType}>{aircraft.type}</span>
                    </div>
                    <p style={styles.fleetDesc}>{aircraft.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Life Section */}
      <div id="student-life" data-section style={styles.whiteSection}>
        <div style={styles.section}>
          <div style={styles.sectionCenter}>
            <h2 style={styles.sectionTitle}>Student Life & Environment</h2>
            <p style={styles.sectionDescription}>
              Immerse yourself in European culture while pursuing your aviation dreams in a safe, professional environment.
            </p>
          </div>

          <div style={{...styles.studentLifeGrid, ...styles.studentLifeGridLg}} className="student-life-grid-lg">
            <div style={styles.lifeCardSpace}>
              <div style={{...styles.lifeCard, ...styles.blueCard}}>
                <div style={styles.lifeCardHeader}>
                  <Users style={{...styles.lifeCardIcon, ...styles.blueIcon}} />
                  <h3 style={styles.lifeCardTitle}>Safe EU Environment</h3>
                </div>
                <p style={styles.lifeCardText}>
                  Train in a safe European Union environment with cultural diversity, exposure to international aviation standards and practices.
                </p>
              </div>

              <div style={{...styles.lifeCard, ...styles.purpleCard}}>
                <div style={styles.lifeCardHeader}>
                  <Globe style={{...styles.lifeCardIcon, ...styles.purpleIcon}} />
                  <h3 style={styles.lifeCardTitle}>European Lifestyle</h3>
                </div>
                <p style={styles.lifeCardText}>
                  Experience European lifestyle and travel opportunities across the Schengen zone, broadening your cultural and professional horizons.
                </p>
              </div>
            </div>

            <div style={styles.lifeCardSpace}>
              <div style={{...styles.lifeCard, ...styles.greenCard}}>
                <div style={styles.lifeCardHeader}>
                  <Award style={{...styles.lifeCardIcon, ...styles.greenIcon}} />
                  <h3 style={styles.lifeCardTitle}>Professional Excellence</h3>
                </div>
                <p style={styles.lifeCardText}>
                  Strong emphasis on discipline and professionalism in training, preparing you for the highest standards of the aviation industry.
                </p>
              </div>

              <div style={{...styles.lifeCard, ...styles.yellowCard}}>
                <div style={styles.lifeCardHeader}>
                  <MapPin style={{...styles.lifeCardIcon, ...styles.yellowIcon}} />
                  <h3 style={styles.lifeCardTitle}>Campus Accommodation</h3>
                </div>
                <p style={styles.lifeCardText}>
                  Student accommodations available near campus, ensuring convenience and community with fellow international aviation students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Process Section */}
      <div id="admission" data-section style={styles.section}>
        <div style={styles.sectionCenter}>
          <h2 style={styles.sectionTitle}>Admission Process</h2>
          <p style={styles.sectionDescription}>
            Your journey to becoming a commercial pilot starts here. Follow our streamlined admission process designed for your success.
          </p>
        </div>

        <div style={styles.admissionSteps}>
          {admissionSteps.map((step, index) => (
            <div
              key={index}
              style={styles.stepCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = styles.stepCardHover.boxShadow;
                const arrow = e.currentTarget.querySelector('.step-arrow-dynamic');
                if (arrow) Object.assign(arrow.style, styles.stepArrowHover);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = styles.stepCard.boxShadow;
                const arrow = e.currentTarget.querySelector('.step-arrow-dynamic');
                if (arrow) {
                   arrow.style.color = styles.stepArrow.color;
                   arrow.style.transform = 'translateX(0px)';
                }
              }}
            >
              <div style={styles.stepContent}>
                <div style={{...styles.stepFlex, ...styles.stepFlexLg}} className="step-flex-lg">
                  <div style={styles.stepNumber}>
                    {step.number}
                  </div>
                  <div style={styles.stepDetails}>
                    <h3 style={styles.stepTitle}>{step.title}</h3>
                    <p style={styles.stepDescription}>{step.description}</p>
                    <p style={styles.stepDetail}>{step.detail}</p>
                  </div>
                  <div style={{...styles.stepArrow, ...styles.stepArrowLg}} className="step-arrow-dynamic step-arrow-lg">
                    <ChevronRight style={{ width: '32px', height: '32px' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={styles.ctaSection}>
          <div style={styles.ctaCard}>
            <h3 style={styles.ctaTitle}>Ready to Begin Your CPL Journey?</h3>
            <p style={styles.ctaDescription}>
              Take the first step towards your commercial pilot career in Hungary. Our admission team is ready to guide you through the entire process.
            </p>
            <button 
              style={styles.ctaButton}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.ctaButtonHover.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              Start Application Process
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .nav-visible {
              display: none !important;
            }
            .overview-grid-lg {
              grid-template-columns: 1fr !important;
            }
            .campus-grid-lg {
              grid-template-columns: 1fr !important;
            }
            .student-life-grid-lg {
              grid-template-columns: 1fr !important;
            }
            .step-flex-lg {
              align-items: flex-start !important;
            }
            .step-arrow-lg {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CPLHungaryPage;
