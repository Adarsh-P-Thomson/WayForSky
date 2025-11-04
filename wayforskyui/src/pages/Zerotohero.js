import React, { useState, useEffect } from 'react';
import { Plane, Globe, MapPin, Clock, DollarSign, Users, Award, CheckCircle, Shield, Target, BookOpen, ChevronRight, Star, ArrowLeft, Calendar, TrendingUp } from 'lucide-react';

const CPLHungaryPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let currentSection = 'overview';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 120) {
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
      icon: <Shield className="benefit-icon" />,
      title: "EASA Standards Training",
      description: "Training under EASA (European Union Aviation Safety Agency) standards",
      iconBg: "#0369a1",
      accentColor: "#0ea5e9"
    },
    {
      icon: <Globe className="benefit-icon" />,
      title: "European Lifestyle",
      description: "Opportunity to train and live in Europe, exposure to EU lifestyle and aviation practices",
      iconBg: "#0369a1",
      accentColor: "#0ea5e9"
    },
    {
      icon: <Target className="benefit-icon" />,
      title: "World-Class Simulators",
      description: "Access to PharmaFlight's world-class simulators and aviation research facilities",
      iconBg: "#0369a1",
      accentColor: "#0ea5e9"
    },
    {
      icon: <Star className="benefit-icon" />,
      title: "Airline Placement Foundation",
      description: "Strong foundation for airline placements across Europe and beyond",
      iconBg: "#0369a1",
      accentColor: "#0ea5e9"
    },
    {
      icon: <BookOpen className="benefit-icon" />,
      title: "Structured Program",
      description: "Highly structured training program, ensuring discipline and quality",
      iconBg: "#0369a1",
      accentColor: "#0ea5e9"
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
      background: '#ffffff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      color: '#1e293b'
    },
    stickyHeader: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    },
    headerContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 32px'
    },
    headerFlex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 0'
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    },
    backButton: {
      padding: '10px',
      borderRadius: '10px',
      border: '1px solid #e2e8f0',
      background: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerInfo: {},
    headerTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#0f172a',
      margin: 0
    },
    headerSubtitle: {
      fontSize: '14px',
      color: '#64748b',
      margin: '4px 0 0 0'
    },
    nav: {
      display: 'flex',
      gap: '8px'
    },
    navButton: {
      padding: '10px 20px',
      borderRadius: '10px',
      border: 'none',
      background: 'transparent',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s',
      color: '#64748b'
    },
    hero: {
      position: 'relative',
      background: 'linear-gradient(135deg, #001f3f 0%, #003d82 100%)',
      padding: '90px 32px 70px',
      overflow: 'hidden'
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1
    },
    heroContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    },
    heroGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center'
    },
    heroLeft: {},
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 20px',
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      borderRadius: '100px',
      color: 'white',
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '32px',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    heroTitle: {
      fontSize: '56px',
      fontWeight: '700',
      color: 'white',
      lineHeight: '1.1',
      marginBottom: '24px'
    },
    heroAccent: {
      display: 'block',
      background: 'linear-gradient(135deg, #38bdf8, #7dd3fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroDescription: {
      fontSize: '18px',
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: '1.7',
      marginBottom: '40px',
      maxWidth: '600px'
    },
    heroActions: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap'
    },
    primaryButton: {
      padding: '16px 32px',
      background: 'white',
      color: '#0369a1',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)'
    },
    secondaryButton: {
      padding: '16px 32px',
      background: 'transparent',
      color: 'white',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    heroRight: {},
    statsCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: '32px',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    section: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '70px 32px'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '50px'
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '20px'
    },
    sectionDescription: {
      fontSize: '18px',
      color: '#64748b',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.7'
    },
    overviewGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px'
    },
    overviewCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '32px',
      border: '1px solid #e2e8f0',
      transition: 'all 0.3s'
    },
    highlightCard: {
      background: 'linear-gradient(135deg, #001f3f, #003d82)',
      borderRadius: '20px',
      padding: '32px',
      color: 'white'
    },
    benefitsSection: {
      background: '#f8fafc',
      padding: '70px 32px'
    },
    benefitsGrid: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px'
    },
    benefitCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '28px',
      border: '1px solid #e2e8f0',
      transition: 'all 0.3s',
      position: 'relative',
      overflow: 'hidden'
    },
    campusSection: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '70px 32px'
    },
    campusContainer: {
      background: 'white',
      borderRadius: '24px',
      padding: '48px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
    },
    campusGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      marginTop: '40px'
    },
    studentLifeSection: {
      background: '#f8fafc',
      padding: '70px 32px'
    },
    lifeGrid: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px'
    },
    admissionSection: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '70px 32px'
    },
    stepsContainer: {
      maxWidth: '1000px',
      margin: '0 auto 50px',
      position: 'relative'
    },
    ctaContainer: {
      background: 'linear-gradient(135deg, #001f3f, #003d82)',
      borderRadius: '24px',
      padding: '60px 50px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  };

  return (
    <div style={styles.container}>
      {/* Professional Header */}
      <header style={styles.stickyHeader}>
        <div style={styles.headerContent}>
          <div style={styles.headerFlex}>
            <div style={styles.headerLeft}>
              <button 
                style={styles.backButton}
                onClick={() => window.location.href = '/programs'}
                className="back-btn"
              >
                <ArrowLeft className="back-icon" />
              </button>
              <div style={styles.headerInfo}>
                <h1 style={styles.headerTitle}>CPL Training – Hungary</h1>
                <p style={styles.headerSubtitle}>European Aviation Excellence</p>
              </div>
            </div>
            <nav style={styles.nav} className="desktop-nav">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  style={styles.navButton}
                  className={activeSection === section.id ? 'nav-active' : 'nav-inactive'}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" data-section style={styles.hero} className="heroSection">
        <div style={styles.heroBackground}>
          <div className="hero-pattern"></div>
        </div>
        <div style={styles.heroContent}>
          <div style={styles.heroGrid}>
            <div style={styles.heroLeft}>
              <div style={styles.badge}>
                <Globe className="badge-icon" />
                <span>EASA Certified Training</span>
              </div>
              <h1 style={styles.heroTitle}>
                Commercial Pilot License
                <span style={styles.heroAccent}> Hungary</span>
              </h1>
              <p style={styles.heroDescription}>
                Earn your Commercial Pilot License in Hungary with EASA standards training. Experience European aviation excellence 
                while building your path to a successful airline career.
              </p>
              <div style={styles.heroActions}>
                <button style={styles.primaryButton} className="primary-btn">
                  Start Application
                </button>
                <button style={styles.secondaryButton} className="secondary-btn">
                  Download Brochure
                </button>
              </div>
            </div>
            <div style={styles.heroRight}>
              <div style={styles.statsCard}>
                <div className="stat-item">
                  <Calendar className="stat-icon" />
                  <div className="stat-content">
                    <div className="stat-value">16-18 Months</div>
                    <div className="stat-label">Program Duration</div>
                  </div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <DollarSign className="stat-icon" />
                  <div className="stat-content">
                    <div className="stat-value">₹46,50,000</div>
                    <div className="stat-label">All-Inclusive Fees</div>
                  </div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <Award className="stat-icon" />
                  <div className="stat-content">
                    <div className="stat-value">EASA Certified</div>
                    <div className="stat-label">European Standards</div>
                  </div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <MapPin className="stat-icon" />
                  <div className="stat-content">
                    <div className="stat-value">Hungary, EU</div>
                    <div className="stat-label">Training Location</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section id="overview" data-section style={styles.section}>
        <div style={styles.sectionHeader}>
          <div className="section-badge">Program Details</div>
          <h2 style={styles.sectionTitle}>Program Overview</h2>
          <p style={styles.sectionDescription}>
            Our CPL Hungary program provides comprehensive commercial pilot training under EASA regulations, 
            preparing you for a successful career in European and international aviation.
          </p>
        </div>

        <div style={styles.overviewGrid}>
          <div style={styles.overviewCard} className="overview-card">
            <div className="overview-icon-wrapper">
              <Clock className="overview-icon" />
            </div>
            <h3 className="overview-card-title">Duration</h3>
            <div className="overview-value">16–18 months</div>
            <p className="overview-description">
              Duration depends on weather conditions and individual student pace, ensuring quality training
            </p>
          </div>

          <div style={styles.overviewCard} className="overview-card">
            <div className="overview-icon-wrapper">
              <DollarSign className="overview-icon" />
            </div>
            <h3 className="overview-card-title">Investment</h3>
            <div className="overview-value">₹46,50,000</div>
            <p className="overview-description">
              All inclusive fees with no hidden costs - covers training, certification, and support
            </p>
          </div>

          <div style={styles.highlightCard} className="highlight-card">
            <h3 className="highlight-title">Why CPL Hungary?</h3>
            <div className="highlight-list">
              <div className="highlight-item">
                <CheckCircle className="highlight-check" />
                <div>
                  <strong>EASA Standards</strong>
                  <p>Train under European aviation standards, globally recognized</p>
                </div>
              </div>
              <div className="highlight-item">
                <CheckCircle className="highlight-check" />
                <div>
                  <strong>European Experience</strong>
                  <p>Live and train in Europe with cultural immersion</p>
                </div>
              </div>
              <div className="highlight-item">
                <CheckCircle className="highlight-check" />
                <div>
                  <strong>Career Foundation</strong>
                  <p>Strong foundation for airline placements across Europe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" data-section style={styles.benefitsSection} className="benefitsSection">
        <div style={styles.sectionHeader}>
          <div className="section-badge">Program Advantages</div>
          <h2 style={styles.sectionTitle}>Key Benefits</h2>
          <p style={styles.sectionDescription}>
            Experience world-class aviation training with comprehensive benefits designed for your success.
          </p>
        </div>

        <div style={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={styles.benefitCard}
              className="benefit-card"
              onMouseEnter={() => setHoveredBenefit(index)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              <div 
                className="benefit-icon-container"
                style={{
                  backgroundColor: hoveredBenefit === index ? benefit.accentColor : benefit.iconBg
                }}
              >
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
              <div 
                className="benefit-accent"
                style={{
                  backgroundColor: benefit.accentColor,
                  opacity: hoveredBenefit === index ? 1 : 0
                }}
              ></div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus & Fleet Section */}
      <section id="campus" data-section style={styles.campusSection} className="campusSection">
        <div style={styles.sectionHeader}>
          <div className="section-badge">Training Infrastructure</div>
          <h2 style={styles.sectionTitle}>Campus & Fleet</h2>
          <p style={styles.sectionDescription}>
            Train at PharmaFlight's advanced facilities with state-of-the-art aircraft and simulation technology.
          </p>
        </div>

        <div style={styles.campusContainer} className="campusContainer">
          <div className="campus-header">
            <div className="campus-badge">
              <MapPin className="campus-badge-icon" />
            </div>
            <div className="campus-info">
              <h3 className="campus-name">PharmaFlight Academy</h3>
              <p className="campus-location">Premium Training Partner in Hungary</p>
            </div>
          </div>

          <div style={styles.campusGrid}>
            <div className="facilities-section">
              <h4 className="subsection-title">Advanced Facilities</h4>
              <div className="facility-list">
                <div className="facility-item">
                  <div className="facility-icon-box">
                    <CheckCircle className="facility-check" />
                  </div>
                  <div className="facility-content">
                    <h5 className="facility-name">Advanced Simulators</h5>
                    <p className="facility-detail">Full flight + procedural simulators for comprehensive pilot training</p>
                  </div>
                </div>
                <div className="facility-item">
                  <div className="facility-icon-box">
                    <CheckCircle className="facility-check" />
                  </div>
                  <div className="facility-content">
                    <h5 className="facility-name">Medical & Performance Labs</h5>
                    <p className="facility-detail">Integrated medical and human performance laboratories for aviation medicine</p>
                  </div>
                </div>
                <div className="facility-item">
                  <div className="facility-icon-box">
                    <CheckCircle className="facility-check" />
                  </div>
                  <div className="facility-content">
                    <h5 className="facility-name">Modern Classrooms</h5>
                    <p className="facility-detail">State-of-the-art learning environments with latest aviation technology</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fleet-section">
              <h4 className="subsection-title">Training Fleet</h4>
              <div className="fleet-list">
                {fleetDetails.map((aircraft, index) => (
                  <div key={index} className="fleet-card">
                    <div className="fleet-card-header">
                      <Plane className="fleet-icon" />
                      <span className="fleet-badge">{aircraft.type}</span>
                    </div>
                    <h5 className="fleet-name">{aircraft.name}</h5>
                    <p className="fleet-description">{aircraft.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section id="student-life" data-section style={styles.studentLifeSection} className="studentLifeSection">
        <div style={styles.sectionHeader}>
          <div className="section-badge">Living in Europe</div>
          <h2 style={styles.sectionTitle}>Student Life & Environment</h2>
          <p style={styles.sectionDescription}>
            Immerse yourself in European culture while pursuing your aviation dreams in a safe, professional environment.
          </p>
        </div>

        <div style={styles.lifeGrid}>
          <div className="life-card">
            <div className="life-icon-wrapper" style={{background: 'linear-gradient(135deg, #0369a1, #0ea5e9)'}}>
              <Users className="life-icon" />
            </div>
            <h3 className="life-card-title">Safe EU Environment</h3>
            <p className="life-card-text">
              Train in a safe European Union environment with cultural diversity, exposure to international aviation standards and practices.
            </p>
          </div>

          <div className="life-card">
            <div className="life-icon-wrapper" style={{background: 'linear-gradient(135deg, #0369a1, #0ea5e9)'}}>
              <Globe className="life-icon" />
            </div>
            <h3 className="life-card-title">European Lifestyle</h3>
            <p className="life-card-text">
              Experience European lifestyle and travel opportunities across the Schengen zone, broadening your cultural and professional horizons.
            </p>
          </div>

          <div className="life-card">
            <div className="life-icon-wrapper" style={{background: 'linear-gradient(135deg, #0369a1, #0ea5e9)'}}>
              <Award className="life-icon" />
            </div>
            <h3 className="life-card-title">Professional Excellence</h3>
            <p className="life-card-text">
              Strong emphasis on discipline and professionalism in training, preparing you for the highest standards of the aviation industry.
            </p>
          </div>

          <div className="life-card">
            <div className="life-icon-wrapper" style={{background: 'linear-gradient(135deg, #0369a1, #0ea5e9)'}}>
              <MapPin className="life-icon" />
            </div>
            <h3 className="life-card-title">Campus Accommodation</h3>
            <p className="life-card-text">
              Student accommodations available near campus, ensuring convenience and community with fellow international aviation students.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section id="admission" data-section style={styles.admissionSection}>
        <div style={styles.sectionHeader}>
          <div className="section-badge">Getting Started</div>
          <h2 style={styles.sectionTitle}>Admission Process</h2>
          <p style={styles.sectionDescription}>
            Your journey to becoming a commercial pilot starts here. Follow our streamlined admission process designed for your success.
          </p>
        </div>

        <div style={styles.stepsContainer}>
          {admissionSteps.map((step, index) => (
            <div
              key={index}
              className="admission-step"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="step-line"></div>
              <div className="step-badge">
                <span className="step-num">{step.number}</span>
              </div>
              <div className="step-content-box">
                <h3 className="step-title-main">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
                <p className="step-detail-text">{step.detail}</p>
                {hoveredStep === index && (
                  <div className="step-arrow-indicator">
                    <ChevronRight className="arrow-icon" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={styles.ctaContainer} className="ctaContainer">
          <div className="cta-content">
            <TrendingUp className="cta-icon" />
            <h3 className="cta-heading">Ready to Begin Your CPL Journey?</h3>
            <p className="cta-text">
              Take the first step towards your commercial pilot career in Hungary. Our admission team is ready to guide you through the entire process.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary">Start Application Process</button>
              <button className="cta-secondary">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Styling */}
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          /* Header Interactions */
          .back-btn:hover {
            background: #f8fafc !important;
            border-color: #cbd5e1 !important;
            transform: translateX(-2px);
          }

          .back-icon {
            width: 20px;
            height: 20px;
            color: #64748b;
          }

          .desktop-nav {
            display: flex;
          }

          .nav-active {
            background: #eff6ff !important;
            color: #0369a1 !important;
          }

          .nav-inactive:hover {
            background: #f8fafc !important;
            color: #0f172a !important;
          }

          /* Hero Section */
          .hero-pattern {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="1" fill="white" opacity="0.4"/></svg>');
          }

          .badge-icon {
            width: 18px;
            height: 18px;
          }

          .primary-btn:hover {
            background: #f0f9ff !important;
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(255, 255, 255, 0.3) !important;
          }

          .secondary-btn:hover {
            background: rgba(255, 255, 255, 0.1) !important;
            border-color: rgba(255, 255, 255, 0.5) !important;
          }

          /* Stats Card */
          .stat-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 0;
          }

          .stat-icon {
            width: 40px;
            height: 40px;
            color: #38bdf8;
            flex-shrink: 0;
          }

          .stat-content {
            text-align: left;
          }

          .stat-value {
            font-size: 24px;
            font-weight: 700;
            color: white;
            margin-bottom: 4px;
          }

          .stat-label {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.7);
          }

          .stat-divider {
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
          }

          /* Section Badges */
          .section-badge {
            display: inline-block;
            padding: 8px 20px;
            background: #eff6ff;
            color: #0369a1;
            borderRadius: 100px;
            fontSize: 14px;
            fontWeight: 600;
            marginBottom: 24px;
          }

          /* Overview Cards */
          .overview-card {
            position: relative;
          }

          .overview-card:hover {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
            transform: translateY(-4px);
            border-color: #0ea5e9 !important;
          }

          .overview-icon-wrapper {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #eff6ff, #dbeafe);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
          }

          .overview-icon {
            width: 32px;
            height: 32px;
            color: #0369a1;
          }

          .overview-card-title {
            font-size: 14px;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 12px;
          }

          .overview-value {
            font-size: 32px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 12px;
          }

          .overview-description {
            color: #64748b;
            line-height: 1.7;
          }

          /* Highlight Card */
          .highlight-title {
            font-size: 26px;
            font-weight: 700;
            margin-bottom: 24px;
            color: white;
          }

          .highlight-list {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .highlight-item {
            display: flex;
            gap: 14px;
          }

          .highlight-check {
            width: 24px;
            height: 24px;
            color: #7dd3fc;
            flex-shrink: 0;
            margin-top: 2px;
          }

          .highlight-item strong {
            display: block;
            font-size: 16px;
            margin-bottom: 4px;
          }

          .highlight-item p {
            color: rgba(255, 255, 255, 0.85);
            margin: 0;
            line-height: 1.6;
          }

          /* Benefits Section */
          .benefit-card:hover {
            box-shadow: 0 20px 40px rgba(3, 105, 161, 0.15) !important;
            transform: translateY(-4px);
            border-color: #0ea5e9 !important;
          }

          .benefit-icon-container {
            width: 60px;
            height: 60px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
            transition: all 0.3s;
          }

          .benefit-icon {
            width: 32px;
            height: 32px;
            color: white;
          }

          .benefit-title {
            font-size: 18px;
            font-weight: 600;
            color: #0f172a;
            margin-bottom: 10px;
          }

          .benefit-description {
            color: #64748b;
            line-height: 1.6;
            font-size: 15px;
          }

          .benefit-accent {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 4px;
            border-radius: 0 0 20px 20px;
            transition: opacity 0.3s;
          }

          /* Campus Section */
          .campus-header {
            display: flex;
            align-items: center;
            gap: 18px;
            margin-bottom: 28px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e2e8f0;
          }

          .campus-badge {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #0369a1, #0ea5e9);
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .campus-badge-icon {
            width: 36px;
            height: 36px;
            color: white;
          }

          .campus-name {
            font-size: 28px;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 6px 0;
          }

          .campus-location {
            font-size: 16px;
            color: #64748b;
            margin: 0;
          }

          .subsection-title {
            font-size: 22px;
            font-weight: 600;
            color: #0f172a;
            margin-bottom: 20px;
          }

          .facility-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .facility-item {
            display: flex;
            gap: 14px;
            padding: 16px;
            background: #f8fafc;
            border-radius: 14px;
            transition: all 0.3s;
          }

          .facility-item:hover {
            background: #eff6ff;
            transform: translateX(4px);
          }

          .facility-icon-box {
            width: 48px;
            height: 48px;
            background: white;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .facility-check {
            width: 24px;
            height: 24px;
            color: #0ea5e9;
          }

          .facility-name {
            font-size: 16px;
            font-weight: 600;
            color: #0f172a;
            margin: 0 0 6px 0;
          }

          .facility-detail {
            font-size: 14px;
            color: #64748b;
            margin: 0;
            line-height: 1.6;
          }

          /* Fleet Section */
          .fleet-list {
            display: grid;
            gap: 14px;
          }

          .fleet-card {
            background: #f8fafc;
            border-radius: 14px;
            padding: 18px;
            transition: all 0.3s;
            border: 1px solid transparent;
          }

          .fleet-card:hover {
            background: white;
            border-color: #0ea5e9;
            box-shadow: 0 4px 20px rgba(3, 105, 161, 0.1);
          }

          .fleet-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
          }

          .fleet-icon {
            width: 20px;
            height: 20px;
            color: #0369a1;
          }

          .fleet-badge {
            font-size: 11px;
            padding: 4px 12px;
            background: #eff6ff;
            color: #0369a1;
            border-radius: 100px;
            font-weight: 600;
          }

          .fleet-name {
            font-size: 16px;
            font-weight: 600;
            color: #0f172a;
            margin: 0 0 8px 0;
          }

          .fleet-description {
            font-size: 14px;
            color: #64748b;
            margin: 0;
            line-height: 1.6;
          }

          /* Student Life Cards */
          .life-card {
            background: white;
            border-radius: 20px;
            padding: 32px;
            border: 1px solid #e2e8f0;
            transition: all 0.3s;
          }

          .life-card:hover {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            transform: translateY(-4px);
            border-color: #0ea5e9;
          }

          .life-icon-wrapper {
            width: 64px;
            height: 64px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
          }

          .life-icon {
            width: 32px;
            height: 32px;
            color: white;
          }

          .life-card-title {
            font-size: 19px;
            font-weight: 600;
            color: #0f172a;
            margin-bottom: 12px;
          }

          .life-card-text {
            color: #64748b;
            line-height: 1.7;
            margin: 0;
          }

          /* Admission Steps */
          .admission-step {
            display: flex;
            gap: 24px;
            margin-bottom: 28px;
            position: relative;
          }

          .admission-step:last-child .step-line {
            display: none;
          }

          .step-line {
            position: absolute;
            left: 27px;
            top: 56px;
            bottom: -28px;
            width: 2px;
            background: linear-gradient(180deg, #0ea5e9, #e2e8f0);
          }

          .step-badge {
            width: 56px;
            height: 56px;
            background: linear-gradient(135deg, #0369a1, #0ea5e9);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            position: relative;
            z-index: 1;
          }

          .step-num {
            font-size: 20px;
            font-weight: 700;
            color: white;
          }

          .step-content-box {
            flex: 1;
            background: white;
            border-radius: 18px;
            padding: 26px;
            border: 1px solid #e2e8f0;
            transition: all 0.3s;
            position: relative;
          }

          .admission-step:hover .step-content-box {
            box-shadow: 0 10px 30px rgba(3, 105, 161, 0.1);
            border-color: #0ea5e9;
          }

          .step-title-main {
            font-size: 19px;
            font-weight: 600;
            color: #0f172a;
            margin: 0 0 10px 0;
          }

          .step-desc {
            font-size: 15px;
            color: #64748b;
            margin: 0 0 10px 0;
          }

          .step-detail-text {
            font-size: 13px;
            color: #94a3b8;
            margin: 0;
            line-height: 1.5;
          }

          .step-arrow-indicator {
            position: absolute;
            right: 32px;
            top: 50%;
            transform: translateY(-50%);
          }

          .arrow-icon {
            width: 24px;
            height: 24px;
            color: #0ea5e9;
          }

          /* CTA Section */
          .cta-content {
            position: relative;
            z-index: 1;
          }

          .cta-icon {
            width: 52px;
            height: 52px;
            color: white;
            margin: 0 auto 20px;
          }

          .cta-heading {
            font-size: 36px;
            font-weight: 700;
            color: white;
            margin: 0 0 16px 0;
          }

          .cta-text {
            font-size: 17px;
            color: rgba(255, 255, 255, 0.9);
            max-width: 700px;
            margin: 0 auto 32px;
            line-height: 1.6;
          }

          .cta-buttons {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .cta-primary {
            padding: 18px 40px;
            background: white;
            color: #0369a1;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
          }

          .cta-primary:hover {
            background: #f0f9ff;
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
          }

          .cta-secondary {
            padding: 18px 40px;
            background: transparent;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
          }

          .cta-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.5);
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .desktop-nav {
              display: none !important;
            }

            .heroGrid {
              grid-template-columns: 1fr !important;
              gap: 60px !important;
            }

            .overviewGrid {
              grid-template-columns: 1fr !important;
            }

            .campusGrid {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 768px) {
            /* Header Mobile */
            .back-icon {
              width: 18px;
              height: 18px;
            }

            /* Hero Mobile */
            .hero-pattern {
              display: none;
            }

            .heroSection {
              padding: 80px 20px 60px !important;
            }

            .heroGrid {
              gap: 40px !important;
            }

            .heroTitle {
              font-size: 36px !important;
            }

            .heroDescription {
              font-size: 16px !important;
              max-width: 100% !important;
            }

            .badge-icon {
              width: 16px;
              height: 16px;
            }

            .heroActions {
              flex-direction: column;
              width: 100%;
            }

            .primaryButton, .secondaryButton {
              width: 100%;
              padding: 14px 24px !important;
            }

            /* Stats Card Mobile */
            .stat-item {
              flex-direction: column;
              align-items: flex-start;
              gap: 12px;
              padding: 16px 0;
            }

            .stat-icon {
              width: 32px;
              height: 32px;
            }

            .stat-value {
              font-size: 20px;
            }

            .stat-label {
              font-size: 13px;
            }

            /* Section Padding Mobile */
            section {
              padding: 50px 20px !important;
            }

            .heroSection {
              padding: 70px 20px 50px !important;
            }

            .benefitsSection, .studentLifeSection {
              padding: 50px 20px !important;
            }

            .campusSection {
              padding: 50px 20px !important;
            }

            /* Section Headers Mobile */
            .section-badge {
              font-size: 12px;
              padding: 6px 16px;
            }

            .sectionTitle {
              font-size: 32px !important;
              line-height: 1.2;
            }

            .sectionDescription {
              font-size: 16px !important;
            }

            /* Overview Cards Mobile */
            .overview-card {
              padding: 32px 24px !important;
            }

            .overview-icon-wrapper {
              width: 56px;
              height: 56px;
            }

            .overview-icon {
              width: 28px;
              height: 28px;
            }

            .overview-card-title {
              font-size: 12px;
            }

            .overview-value {
              font-size: 28px;
            }

            .overview-description {
              font-size: 14px;
            }

            /* Highlight Card Mobile */
            .highlight-card {
              padding: 32px 24px !important;
            }

            .highlight-title {
              font-size: 24px;
              margin-bottom: 24px;
            }

            .highlight-check {
              width: 20px;
              height: 20px;
            }

            .highlight-item {
              gap: 12px;
            }

            .highlight-item strong {
              font-size: 15px;
            }

            .highlight-item p {
              font-size: 14px;
            }

            /* Benefits Section Mobile */
            .benefitsSection {
              padding: 60px 20px !important;
            }

            /* Benefits Grid Mobile */
            .benefitsGrid, .lifeGrid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }

            .benefit-card {
              padding: 28px 20px !important;
            }

            .benefit-icon-container {
              width: 56px;
              height: 56px;
            }

            .benefit-icon {
              width: 28px;
              height: 28px;
            }

            .benefit-title {
              font-size: 17px;
            }

            .benefit-description {
              font-size: 14px;
              line-height: 1.5;
            }

          /* Campus Container Mobile */
          .campusContainer {
            padding: 32px 20px !important;
          }

          .campusGrid {
            gap: 24px !important;
            margin-top: 24px !important;
          }          /* Campus Section Mobile */
          .campus-header {
            flex-direction: row;
            align-items: center;
            gap: 16px;
            padding-bottom: 20px;
            margin-bottom: 24px;
          }

          .campus-badge {
            width: 56px;
            height: 56px;
          }

          .campus-badge-icon {
            width: 28px;
            height: 28px;
          }

          .campus-name {
            font-size: 20px;
          }

          .campus-location {
            font-size: 13px;
          }

          .subsection-title {
            font-size: 18px;
            margin-bottom: 16px;
          }

          .facility-item {
            padding: 14px;
          }

          .facility-icon-box {
            width: 36px;
            height: 36px;
          }

          .facility-check {
            width: 18px;
            height: 18px;
          }

          .facility-name {
            font-size: 14px;
          }

          .facility-detail {
            font-size: 13px;
          }

          .fleet-list {
            gap: 12px;
          }

          .fleet-card {
            padding: 16px;
          }

          .fleet-name {
            font-size: 14px;
          }

          .fleet-description {
            font-size: 13px;
          }            /* Student Life Cards Mobile */
            .life-card {
              padding: 32px 24px;
            }

            .life-icon-wrapper {
              width: 64px;
              height: 64px;
            }

            .life-icon {
              width: 32px;
              height: 32px;
            }

            .life-card-title {
              font-size: 18px;
              margin-bottom: 12px;
            }

            .life-card-text {
              font-size: 14px;
            }

            /* Admission Steps Mobile */
            .admission-step {
              flex-direction: column;
              gap: 16px;
              margin-bottom: 32px;
            }

            .step-line {
              left: 27px;
              top: 72px;
            }

            .step-badge {
              width: 56px;
              height: 56px;
            }

            .step-num {
              font-size: 20px;
            }

            .step-content-box {
              padding: 24px;
            }

            .step-title-main {
              font-size: 18px;
              margin-bottom: 8px;
            }

            .step-desc {
              font-size: 14px;
              margin-bottom: 8px;
            }

            .step-detail-text {
              font-size: 13px;
            }

            .step-arrow-indicator {
              display: none;
            }

            /* CTA Container Mobile */
            .ctaContainer {
              padding: 40px 24px !important;
            }

            /* CTA Section Mobile */
            .cta-icon {
              width: 44px;
              height: 44px;
              margin-bottom: 16px;
            }

            .cta-heading {
              font-size: 26px !important;
              line-height: 1.2;
            }

            .cta-text {
              font-size: 15px;
              margin-bottom: 28px;
            }

            .cta-buttons {
              flex-direction: column;
              width: 100%;
            }

            .cta-primary, .cta-secondary {
              width: 100%;
              padding: 16px 32px;
            }
          }

          @media (max-width: 480px) {
            /* Extra Small Devices */
            .heroSection {
              padding: 50px 16px 35px !important;
            }

            section {
              padding: 40px 16px !important;
            }

            .benefitsSection, .studentLifeSection {
              padding: 40px 16px !important;
            }

            .campusSection {
              padding: 40px 16px !important;
            }

            .heroTitle {
              font-size: 28px !important;
            }

            .sectionTitle {
              font-size: 28px !important;
            }

            .overview-card, .benefit-card, .life-card {
              padding: 24px 18px !important;
            }

            .highlight-card {
              padding: 28px 20px !important;
            }

            .campusContainer {
              padding: 24px 16px !important;
            }

            .campusGrid {
              gap: 20px !important;
              margin-top: 20px !important;
            }

            .campus-header {
              gap: 12px;
              padding-bottom: 16px;
              margin-bottom: 20px;
            }

            .campus-badge {
              width: 48px !important;
              height: 48px !important;
            }

            .campus-badge-icon {
              width: 24px !important;
              height: 24px !important;
            }

            .campus-name {
              font-size: 18px !important;
            }

            .campus-location {
              font-size: 12px !important;
            }

            .subsection-title {
              font-size: 16px !important;
              margin-bottom: 14px !important;
            }

            .facility-item {
              padding: 12px !important;
              gap: 10px !important;
            }

            .facility-icon-box {
              width: 32px !important;
              height: 32px !important;
            }

            .facility-check {
              width: 16px !important;
              height: 16px !important;
            }

            .facility-name {
              font-size: 13px !important;
            }

            .facility-detail {
              font-size: 12px !important;
            }

            .fleet-list {
              gap: 10px !important;
            }

            .fleet-card {
              padding: 14px !important;
            }

            .fleet-name {
              font-size: 13px !important;
            }

            .fleet-description {
              font-size: 12px !important;
            }

            .benefitsGrid {
              gap: 16px !important;
            }

            .benefit-card {
              padding: 24px 16px !important;
            }

            .benefit-icon-container {
              width: 52px !important;
              height: 52px !important;
              margin-bottom: 16px !important;
            }

            .benefit-icon {
              width: 26px !important;
              height: 26px !important;
            }

            .benefit-title {
              font-size: 16px !important;
              margin-bottom: 8px !important;
            }

            .benefit-description {
              font-size: 13px !important;
            }

            .overview-value {
              font-size: 24px;
            }

            .stat-value {
              font-size: 18px;
            }

            .cta-heading {
              font-size: 24px !important;
            }

            .ctaContainer {
              padding: 35px 20px !important;
            }

            .cta-icon {
              width: 40px !important;
              height: 40px !important;
            }

            .cta-heading {
              font-size: 22px !important;
            }

            .cta-text {
              font-size: 14px !important;
              margin-bottom: 24px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CPLHungaryPage;