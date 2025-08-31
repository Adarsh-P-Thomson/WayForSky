import { useState, useEffect } from 'react';
import { Plane, MapPin, Clock, Users, Award, CheckCircle, ArrowRight, Star, Globe, Calendar, Briefcase, BookOpen, Phone, Mail, X } from 'lucide-react';

export default function PPLPage() {
  const [activeLocation, setActiveLocation] = useState('south-africa');
  const [showContactForm, setShowContactForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const location = formData.get('location');

    if (!name || !email || !phone) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Contact form submitted:', { name, email, phone, location });
    alert('Thank you for your interest! We will contact you within 24 hours.');
    setShowContactForm(false);
  };

  const locations = {
    'south-africa': {
      name: 'South Africa',
      flag: '🇿🇦',
      tagline: 'Clear Skies, Expert Training',
      heroImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      duration: '3-4 Months',
      partner: 'Accolade Flying Wings',
      flyingDays: '300+',
      weather: 'Clear Skies',
      cost: 'From $18,000',
      highlights: [
        '300+ flying days per year with pristine weather conditions',
        'Lower training costs compared to Europe, USA, and India',
        'English-medium instruction and communication',
        'Diverse flying conditions across mountains, plains, and coast',
        'Internationally recognized PPL with CPL upgrade pathway'
      ],
      aircraft: [
        { name: 'Cessna 172', type: 'Primary Training' },
        { name: 'Diamond DA42', type: 'Advanced Multi-Engine' },
        { name: 'FNPT II Simulator', type: 'Instrument Training' }
      ],
      facilities: [
        'State-of-the-art classrooms with digital learning',
        'Advanced flight simulator training center',
        'Five-day weekly flying schedule',
        'On-campus student accommodations',
        'Professional maintenance and ground school facilities'
      ],
      lifestyle: [
        'Safe, student-oriented living environment',
        'Active Indian student community with cultural connection',
        'Adventure activities: safaris, beaches, vibrant city life',
        'Affordable living costs for housing, food, and transport',
        'Rich cultural exchange programs and community events'
      ],
      process: [
        'Initial consultation and career counseling',
        'Comprehensive student evaluation and document review',
        'Academy interview and detailed orientation session',
        'Provisional admission letter and program confirmation',
        'Complete visa application support and guidance',
        'Travel coordination and comprehensive campus induction'
      ]
    },
    'hungary': {
      name: 'Hungary',
      flag: '🇭🇺',
      tagline: 'European Excellence, Global Recognition',
      heroImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      duration: '4-6 Months',
      partner: 'PharmaFlight Academy',
      flyingDays: 'Year-Round',
      weather: 'All Conditions',
      cost: 'From $22,000',
      highlights: [
        'Training in EU airspace with world-class safety standards',
        'Comprehensive weather condition training for real-world preparation',
        'Cost-effective compared to Western Europe and North America',
        'EASA-approved license recognized across Europe and globally',
        'Seamless pathway to Frozen ATPL and CPL programs'
      ],
      aircraft: [
        { name: 'Tecnam 2008JC', type: 'Modern Training Aircraft' },
        { name: 'Tecnam 2006T', type: 'Twin-Engine Training' },
        { name: 'FNPT II Simulator', type: 'Advanced Simulation' },
        { name: 'Redbird Simulators', type: 'Professional Training' }
      ],
      facilities: [
        'Cutting-edge simulator training center',
        'Modern digital classrooms with interactive learning',
        'Premium on-campus accommodations with full amenities',
        'Comprehensive medical and pilot assessment facilities',
        'Advanced weather monitoring and flight briefing rooms'
      ],
      lifestyle: [
        'Safe, structured European academic environment',
        'Established Indian student community with support network',
        'Rich blend of historical culture and modern European lifestyle',
        'Easy access to explore EU countries during training breaks',
        'Dedicated student support services and mentorship programs'
      ],
      process: [
        'Personalized consultation and program guidance',
        'Thorough student assessment and documentation verification',
        'Academy entrance evaluation and program orientation',
        'Official provisional admission letter and confirmation',
        'Comprehensive Schengen visa application assistance',
        'Complete travel arrangements and detailed campus orientation'
      ]
    }
  };

  const currentLocation = locations[activeLocation];

  return (
    <div style={styles.container}>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #000;
          background: #fff;
        }

        .smooth-transition {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .responsive-grid {
            grid-template-columns: 1fr !important;
          }
          
          .responsive-text {
            font-size: 3rem !important;
          }
          
          .responsive-flex {
            flex-direction: column !important;
          }
        }
      `}</style>

      {/* Header */}
      <header style={{
        ...styles.header,
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid #e5e7eb' : 'none',
        boxShadow: isScrolled ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
      }}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <Plane size={16} color="white" />
            </div>
            <span style={styles.logoText}>WayForSky</span>
          </div>

          <nav style={styles.nav}>
            <a href="#programs" style={styles.navLink}>Programs</a>
            <a href="#locations" style={styles.navLink}>Locations</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            <Star size={16} color="#000" />
            <span>Internationally Recognized Training</span>
          </div>
          
          <h1 style={styles.heroTitle}>
            Private Pilot<br />
            <span style={{ color: '#6b7280' }}>License</span>
          </h1>
          
          <p style={styles.heroSubtitle}>
            Begin your aviation journey with world-class PPL training. 
            Choose between South Africa's clear skies or Hungary's European excellence.
          </p>

          {/* Location Switcher */}
          <div id="locations" style={styles.switcherContainer}>
            <div style={styles.switcher}>
              {Object.entries(locations).map(([key, location]) => (
                <button
                  key={key}
                  onClick={() => setActiveLocation(key)}
                  style={{
                    ...styles.switcherButton,
                    background: activeLocation === key ? '#fff' : 'transparent',
                    color: activeLocation === key ? '#000' : '#6b7280',
                    boxShadow: activeLocation === key ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
                  }}
                >
                  <span style={{ fontSize: '1.5rem' }}>{location.flag}</span>
                  <span>{location.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Hero Card */}
          <div style={styles.heroCard}>
            <div style={{
              ...styles.heroCardInner,
              background: currentLocation.heroImage
            }}>
              <div style={styles.heroCardOverlay}></div>
              <div style={styles.heroCardContent}>
                <div style={styles.heroCardInfo}>
                  <span style={{ fontSize: '4rem' }}>{currentLocation.flag}</span>
                  <div>
                    <h2 style={styles.heroCardTitle}>{currentLocation.name}</h2>
                    <p style={styles.heroCardTagline}>{currentLocation.tagline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div style={styles.statsGrid} className="responsive-grid">
            {[
              { icon: Clock, label: 'Duration', value: currentLocation.duration },
              { icon: Calendar, label: 'Flying Days', value: currentLocation.flyingDays },
              { icon: Briefcase, label: 'Partner', value: currentLocation.partner },
              { icon: Globe, label: 'Investment', value: currentLocation.cost }
            ].map((stat, index) => (
              <div key={index} style={styles.statCard} className="hover-lift smooth-transition">
                <stat.icon size={24} color="#000" style={{ marginBottom: '12px' }} />
                <div style={styles.statValue}>{stat.value}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="programs" style={styles.mainSection}>
        <div style={styles.mainContent}>
          {/* Key Highlights */}
          <div style={styles.highlightsSection}>
            <h3 style={styles.sectionTitle}>Why Choose {currentLocation.name}?</h3>
            <div style={styles.highlightsGrid} className="responsive-grid">
              {currentLocation.highlights.map((highlight, index) => (
                <div key={index} style={styles.highlightCard} className="hover-lift smooth-transition">
                  <CheckCircle size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={styles.highlightText}>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Three Column Layout */}
          <div style={styles.threeColumnGrid} className="responsive-grid">
            {/* Aircraft Fleet */}
            <div style={styles.columnCard}>
              <div style={styles.columnHeader}>
                <Plane size={24} color="#000" />
                <h4 style={styles.columnTitle}>Training Fleet</h4>
              </div>
              <div style={styles.columnContent}>
                {currentLocation.aircraft.map((aircraft, index) => (
                  <div key={index} style={styles.aircraftItem}>
                    <div style={styles.aircraftName}>{aircraft.name}</div>
                    <div style={styles.aircraftType}>{aircraft.type}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div style={styles.columnCard}>
              <div style={styles.columnHeader}>
                <BookOpen size={24} color="#000" />
                <h4 style={styles.columnTitle}>Campus Facilities</h4>
              </div>
              <div style={styles.columnContent}>
                {currentLocation.facilities.map((facility, index) => (
                  <div key={index} style={styles.facilityItem}>
                    <div style={styles.bullet}></div>
                    <span style={styles.facilityText}>{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Life */}
            <div style={styles.columnCard}>
              <div style={styles.columnHeader}>
                <Users size={24} color="#000" />
                <h4 style={styles.columnTitle}>Student Life</h4>
              </div>
              <div style={styles.columnContent}>
                {currentLocation.lifestyle.map((life, index) => (
                  <div key={index} style={styles.facilityItem}>
                    <div style={styles.bullet}></div>
                    <span style={styles.facilityText}>{life}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Admission Process */}
          <div style={styles.processSection}>
            <h3 style={styles.sectionTitle}>Admission Process</h3>
            <div style={styles.processGrid} className="responsive-grid">
              {currentLocation.process.map((step, index) => (
                <div key={index} style={styles.processStep}>
                  <div style={styles.processNumber}>{index + 1}</div>
                  <div style={styles.processCard}>
                    <p style={styles.processText}>{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={styles.ctaSection}>
            <div style={styles.ctaCard}>
              <h3 style={styles.ctaTitle}>Ready to Start Your Aviation Journey?</h3>
              <p style={styles.ctaSubtitle}>Join hundreds of successful pilots who started their career with us</p>
              <div style={styles.ctaButtons} className="responsive-flex">
                <button
                  onClick={() => setShowContactForm(true)}
                  style={styles.ctaPrimary}
                  onMouseOver={(e) => e.target.style.background = '#f3f4f6'}
                  onMouseOut={(e) => e.target.style.background = '#fff'}
                >
                  <span>Apply Now</span>
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => setShowContactForm(true)}
                  style={styles.ctaSecondary}
                  onMouseOver={(e) => {e.target.style.background = '#fff'; e.target.style.color = '#000'}}
                  onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = '#fff'}}
                >
                  Get Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactForm && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>Apply Today</h3>
              <button
                onClick={() => setShowContactForm(false)}
                style={styles.closeButton}
                onMouseOver={(e) => e.target.style.color = '#6b7280'}
                onMouseOut={(e) => e.target.style.color = '#9ca3af'}
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleContactSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  style={styles.input}
                  placeholder="Enter your full name"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  style={styles.input}
                  placeholder="Enter your email"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  style={styles.input}
                  placeholder="Enter your phone number"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Preferred Location</label>
                <select name="location" style={styles.select}>
                  <option value="">Select a location</option>
                  <option value="south-africa">South Africa</option>
                  <option value="hungary">Hungary</option>
                  <option value="both">Both locations</option>
                </select>
              </div>

              <button
                type="submit"
                style={styles.submitButton}
                onMouseOver={(e) => e.target.style.background = '#374151'}
                onMouseOut={(e) => e.target.style.background = '#000'}
              >
                Send Application
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'
  },

  // Header Styles
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    transition: 'all 0.5s ease'
  },
  headerContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  logoIcon: {
    width: '32px',
    height: '32px',
    backgroundColor: '#000',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#000'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px'
  },
  navLink: {
    color: '#374151',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'color 0.2s ease',
    cursor: 'pointer'
  },
  applyButton: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '8px 24px',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },

  // Hero Section Styles
  heroSection: {
    paddingTop: '96px',
    paddingBottom: '64px',
    position: 'relative'
  },
  heroContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    textAlign: 'center'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#f3f4f6',
    borderRadius: '9999px',
    padding: '8px 16px',
    marginBottom: '24px',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#1f2937'
  },
  heroTitle: {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '24px',
    letterSpacing: '-0.025em',
    lineHeight: '1'
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#6b7280',
    maxWidth: '768px',
    margin: '0 auto 48px auto',
    lineHeight: '1.6',
    fontWeight: 'normal'
  },

  // Location Switcher Styles
  switcherContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '64px'
  },
  switcher: {
    backgroundColor: '#f3f4f6',
    borderRadius: '16px',
    padding: '4px',
    display: 'inline-flex'
  },
  switcherButton: {
    padding: '16px 32px',
    borderRadius: '12px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.875rem'
  },

  // Hero Card Styles
  heroCard: {
    maxWidth: '1024px',
    margin: '0 auto'
  },
  heroCardInner: {
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    height: '384px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: '48px',
    color: '#fff'
  },
  heroCardOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  heroCardContent: {
    position: 'relative',
    zIndex: 10
  },
  heroCardInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px'
  },
  heroCardTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  heroCardTagline: {
    fontSize: '1.25rem',
    opacity: 0.9,
    textAlign: 'left'
  },

  // Stats Grid Styles
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    maxWidth: '1024px',
    margin: '48px auto 0 auto'
  },
  statCard: {
    backgroundColor: '#f9fafb',
    borderRadius: '16px',
    padding: '24px',
    textAlign: 'center',
    cursor: 'pointer'
  },
  statValue: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#000',
    marginBottom: '4px'
  },
  statLabel: {
    fontSize: '0.875rem',
    color: '#6b7280'
  },

  // Main Section Styles
  mainSection: {
    padding: '80px 0',
    backgroundColor: '#f9fafb'
  },
  mainContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  },

  // Highlights Section Styles
  highlightsSection: {
    marginBottom: '80px'
  },
  sectionTitle: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '32px',
    textAlign: 'center'
  },
  highlightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
    maxWidth: '1280px',
    margin: '0 auto'
  },
  highlightCard: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '24px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    cursor: 'pointer'
  },
  highlightText: {
    color: '#1f2937',
    lineHeight: '1.6'
  },

  // Three Column Layout Styles
  threeColumnGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px'
  },
  columnCard: {
    backgroundColor: '#fff',
    borderRadius: '24px',
    padding: '32px'
  },
  columnHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px'
  },
  columnTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#000'
  },
  columnContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  aircraftItem: {
    borderLeft: '4px solid #000',
    paddingLeft: '16px'
  },
  aircraftName: {
    fontWeight: '600',
    color: '#000'
  },
  aircraftType: {
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  facilityItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px'
  },
  bullet: {
    width: '8px',
    height: '8px',
    backgroundColor: '#000',
    borderRadius: '50%',
    marginTop: '8px',
    flexShrink: 0
  },
  facilityText: {
    color: '#374151',
    fontSize: '0.875rem',
    lineHeight: '1.6'
  },

  // Process Section Styles
  processSection: {
    marginTop: '80px'
  },
  processGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
    maxWidth: '1536px',
    margin: '0 auto'
  },
  processStep: {
    textAlign: 'center'
  },
  processNumber: {
    width: '64px',
    height: '64px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    margin: '0 auto 24px auto'
  },
  processCard: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '24px'
  },
  processText: {
    color: '#374151',
    lineHeight: '1.6'
  },

  // CTA Section Styles
  ctaSection: {
    textAlign: 'center',
    marginTop: '80px'
  },
  ctaCard: {
    backgroundColor: '#000',
    borderRadius: '24px',
    padding: '48px',
    color: '#fff',
    maxWidth: '1024px',
    margin: '0 auto'
  },
  ctaTitle: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  ctaSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '32px',
    opacity: 0.9
  },
  ctaButtons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px'
  },
  ctaPrimary: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '16px 32px',
    borderRadius: '9999px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  ctaSecondary: {
    border: '2px solid #fff',
    color: '#fff',
    backgroundColor: 'transparent',
    padding: '16px 32px',
    borderRadius: '9999px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },

  // Modal Styles
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
    padding: '16px'
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: '24px',
    padding: '32px',
    maxWidth: '448px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px'
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#000'
  },
  closeButton: {
    color: '#9ca3af',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'color 0.2s ease'
  },

  // Form Styles
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '8px'
  },
  input: {
    width: '100%',
    padding: '16px',
    border: '1px solid #d1d5db',
    borderRadius: '16px',
    backgroundColor: '#f9fafb',
    color: '#000',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    outline: 'none'
  },
  select: {
    width: '100%',
    padding: '16px',
    border: '1px solid #d1d5db',
    borderRadius: '16px',
    backgroundColor: '#f9fafb',
    color: '#000',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    outline: 'none'
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    padding: '16px',
    borderRadius: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  }
};