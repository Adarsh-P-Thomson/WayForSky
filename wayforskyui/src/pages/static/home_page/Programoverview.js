"use client"
import cplTrainingImg from "../../../assets/Program/CPLSA.JPG";
import airlineReadyImg from "../../../assets/Program/CPLHU.JPG";
import specializedTrainingImg from "../../../assets/Program/CPLOTHER.JPG";


import { useEffect, useRef, useState } from "react"

const ProgramOverview = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [expandedCard, setExpandedCard] = useState(null)
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth <= 1024 : false)
  const featureTourRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!featureTourRef.current) return

      const rect = featureTourRef.current.getBoundingClientRect()
      const sectionHeight = rect.height / 3
      const scrollProgress = Math.max(0, -rect.top) / (rect.height - window.innerHeight)
      const currentSection = Math.min(Math.floor(scrollProgress * 3), 2)

      setActiveSection(currentSection)
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!prefersReducedMotion) {
      window.addEventListener("scroll", handleScroll)
      handleScroll()
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Make mobile/desktop view reactive to viewport changes
  useEffect(() => {
    const onResize = () => {
      if (typeof window === 'undefined') return
      setIsMobile(window.innerWidth <= 1024)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleFeatureClick = (index) => {
    if (!featureTourRef.current) return

    const rect = featureTourRef.current.getBoundingClientRect()
    // The scroll detection uses (rect.height - window.innerHeight) as the scrollable range
    const scrollableRange = rect.height - window.innerHeight
    const targetScroll = window.scrollY + rect.top + (index / 3) * scrollableRange

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    })
  }

  const handleArrowClick = (e) => {
    const button = e.currentTarget
    button.style.transform = "scale(0.95)"
    setTimeout(() => {
      button.style.transform = "scale(1)"
    }, 150)
  }

  const handleViewAllClick = () => {
    // You can customize this action as needed
    console.log("View All Programs clicked")
    // Example: navigate to programs page or show modal
  }

  const handleCardClick = (program) => {
    setExpandedCard(expandedCard === program ? null : program)
  }

  const styles = {
    featureTour: {
      height: "200vh",
      position: "relative",
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      fontFamily: "'Inter', sans-serif",
      lineHeight: 1.6,
      width: "100%",
    },
    contentContainer: {
      position: "sticky",
      top: "0",
      width: "100%",
      height: "100vh",
      display: "flex",
    },
    leftPanel: {
      width: "50%",
      background: "linear-gradient(180deg, #0b1220 0%, #0f172a 100%)",
      color: "white",
      padding: "clamp(24px, 6vw, 80px) clamp(16px, 5vw, 60px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      boxSizing: "border-box",
      borderRight: "1px solid rgba(255,255,255,0.06)",
    },
    headerContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "clamp(24px, 6vw, 60px)",
    },
    mainHeading: {
      fontSize: "clamp(28px, 4vw, 48px)",
      fontWeight: 700,
      lineHeight: 1.1,
      marginBottom: "0", // Removed bottom margin since it's now in headerContainer
      letterSpacing: "-0.02em",
    },
    viewAllButton: {
      background: "linear-gradient(180deg, #3b82f6, #1d4ed8)",
      color: "white",
      border: "1px solid rgba(255, 255, 255, 0.25)",
      borderRadius: "10px",
      padding: "12px 20px",
      fontSize: "14px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "transform 0.2s ease, box-shadow 0.3s ease, filter 0.2s ease",
      whiteSpace: "nowrap",
      marginLeft: "20px",
      boxShadow: "0 10px 20px rgba(59,130,246,0.25)",
    },
    viewAllButtonHover: {
      filter: "brightness(1.05)",
      transform: "translateY(-2px)",
      boxShadow: "0 14px 28px rgba(59,130,246,0.35)",
    },
    featureItem: {
      marginBottom: "50px",
      padding: "20px",
      borderRadius: "12px",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    featureItemActive: {
      background: "rgba(59, 130, 246, 0.12)",
      border: "1px solid rgba(59, 130, 246, 0.35)",
      transform: "translateX(8px)",
    },
    featureTitle: {
      display: "flex",
      alignItems: "center",
      fontSize: "20px",
      fontWeight: 600,
      marginBottom: "12px",
      lineHeight: 1.3,
    },
    arrowIcon: {
      marginRight: "12px",
      width: "16px",
      height: "16px",
      flexShrink: 0,
      transition: "transform 0.3s ease",
    },
    featureDescription: {
      fontSize: "16px",
      lineHeight: 1.5,
      color: "#ccc",
      maxWidth: "420px",
      transition: "color 0.3s ease",
    },
    featureDescriptionActive: {
      color: "#e6f2ff",
    },
    posLink: {
      color: "white",
      textDecoration: "underline",
    },
    rightPanel: {
      width: "50%",
      background: "linear-gradient(135deg, #0a0f1a 0%, #0c1c3a 100%)",
      padding: "clamp(20px, 4vw, 40px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      boxSizing: "border-box",
    },
    contentSection: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
      transition: "opacity 0.5s ease",
    },
    contentSectionActive: {
      opacity: 1,
    },
    browserMockup: {
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 20px 40px rgba(2, 6, 23, 0.4)",
      overflow: "hidden",
      width: "100%",
      maxWidth: "600px",
      position: "relative",
      border: "1px solid rgba(2,6,23,0.2)",
    },
    browserHeader: {
      background: "linear-gradient(180deg, #f8fbff, #eff6ff)",
      padding: "12px 20px",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #dbeafe",
    },
    browserDots: {
      display: "flex",
      gap: "6px",
    },
    dot: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
    },
    browserContent: {
      padding: "20px",
    },
    siteHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
    },
    logo: {
      fontWeight: 700,
      fontSize: "18px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    navMenu: {
      display: "flex",
      gap: "24px",
      fontSize: "14px",
    },
    navItem: {
      color: "#4b5563",
      textDecoration: "none",
      fontWeight: 500,
    },
    userIcons: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
      fontSize: "16px",
    },
    heroSection: {
      textAlign: "left",
      marginBottom: "30px",
    },
    heroTitle: {
      fontSize: "clamp(20px, 3vw, 32px)",
      fontWeight: 700,
      marginBottom: "8px",
      color: "#0b1220",
    },
    heroSubtitle: {
      color: "#666",
      fontSize: "14px",
      lineHeight: 1.4,
      maxWidth: "300px",
    },
    productShowcase: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    productImage: {
      width: "min(45vw, 280px)",
      height: "min(32vw, 200px)",
      background: "linear-gradient(135deg, #f0f7ff, #e6efff)",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    },
    cyclingShoe: {
      width: "180px",
      height: "100px",
      background: "linear-gradient(135deg, #c4e538, #a8cc2a)",
      borderRadius: "50px 20px 30px 40px",
      position: "relative",
      transform: "rotate(-15deg)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    },
    shoeDetails: {
      position: "absolute",
      top: "30%",
      left: "40%",
      width: "30px",
      height: "30px",
      background: "#333",
      borderRadius: "50%",
      border: "3px solid #666",
    },
    shoeStraps: {
      position: "absolute",
      top: "20%",
      left: "20%",
      width: "60%",
      height: "8px",
      background: "#333",
      borderRadius: "4px",
    },
    navigationArrows: {
      display: "flex",
      gap: "8px",
    },
    navArrow: {
      width: "40px",
      height: "40px",
      background: "linear-gradient(180deg, #3b82f6, #1d4ed8)",
      color: "white",
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "18px",
      transition: "transform 0.15s ease, filter 0.2s ease, box-shadow 0.3s ease",
      boxShadow: "0 10px 20px rgba(59, 130, 246, 0.25)",
    },
    progressSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "20px",
    },
    progressBar: {
      width: "200px",
      height: "4px",
      background: "#dbeafe",
      borderRadius: "2px",
      overflow: "hidden",
    },
    progressFill: {
      width: "60%",
      height: "100%",
      background: "#3b82f6",
    },
    progressText: {
      fontSize: "12px",
      color: "#666",
    },
    platformLogos: {
      position: "absolute",
      right: "-80px",
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    logoCard: {
      width: "100px",
      height: "80px",
      background: "rgba(255, 255, 255, 0.9)",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 600,
      fontSize: "14px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    mobileContainer: {
      display: "none",
      padding: "5vw",
      background: "#ffffff",
      minHeight: "100vh",
    },
    mobileHeaderContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "clamp(30px, 8vw, 60px)",
      flexWrap: "wrap",
      gap: "16px",
    },
    mobileCard: {
      background: "white",
      borderRadius: "16px",
      padding: "0",
      marginBottom: "20px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
      width: "100%",
      boxSizing: "border-box",
      cursor: "pointer",
      overflow: "hidden",
      transition: "all 0.3s ease",
    },
    mobileCardImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      display: "block",
    },
    mobileCardContent: {
      padding: "20px",
    },
    mobileCardHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "12px",
    },
    mobileCardTitle: {
      fontSize: "20px",
      fontWeight: 700,
      margin: "0",
      color: "#000",
      lineHeight: 1.2,
      flex: 1,
    },
    expandIcon: {
      width: "24px",
      height: "24px",
      color: "#666",
      transition: "transform 0.3s ease",
      flexShrink: 0,
    },
    expandIconRotated: {
      transform: "rotate(180deg)",
    },
    mobileCardDescription: {
      fontSize: "14px",
      color: "#666",
      lineHeight: 1.5,
      marginBottom: "0",
    },
    expandedContent: {
      maxHeight: "0",
      overflow: "hidden",
      transition: "max-height 0.3s ease",
      borderTop: "1px solid #f0f0f0",
    },
    expandedContentOpen: {
      maxHeight: "500px",
    },
    expandedDetails: {
      padding: "20px",
      background: "#f8f9fa",
    },
    detailItem: {
      display: "flex",
      alignItems: "flex-start",
      marginBottom: "16px",
      fontSize: "14px",
    },
    detailIcon: {
      width: "16px",
      height: "16px",
      color: "#4f46e5",
      marginRight: "12px",
      marginTop: "2px",
      flexShrink: 0,
    },
    detailText: {
      color: "#333",
      lineHeight: 1.4,
    },
    programBadge: {
      display: "inline-block",
      background: "#1d4ed8",
      color: "white",
      padding: "4px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: 500,
      marginBottom: "16px",
    },
    mobileViewAllButton: {
      background: "#1d4ed8",
      color: "white",
      border: "none",
      borderRadius: "8px",
      padding: "clamp(10px, 3vw, 16px) clamp(16px, 4vw, 24px)",
      fontSize: "clamp(12px, 3.5vw, 16px)",
      fontWeight: 500,
      cursor: "pointer",
      transition: "all 0.3s ease",
      whiteSpace: "nowrap",
      flexShrink: 0,
    },
  }

  // isMobile now comes from state and updates on resize

  // Enhanced mobile styles with better responsiveness
  const mobileStyles = {
    featureTour: {
      ...styles.featureTour,
      height: "auto",
      minHeight: "100vh",
    },
    mobileContainer: {
      ...styles.mobileContainer,
      display: "block",
      padding: "clamp(20px, 5vw, 40px)",
      maxWidth: "100%",
      overflow: "hidden",
    },
    mainHeading: {
      ...styles.mainHeading,
      fontSize: "clamp(24px, 8vw, 48px)",
      marginBottom: "0", // Removed bottom margin for mobile too
      textAlign: "left", // Changed from center to left for better alignment with button
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      flex: 1,
    },
  }

  const finalStyles = isMobile ? { ...styles, ...mobileStyles } : styles

  const programData = {
    "CPL South Africa": {
      image: cplTrainingImg,
      badge: "12-14 Months",
      description: "Affordable commercial pilot training with 300+ flying days per year.",
      shortDesc: "12–14 months program with affordable training featuring 300+ flying days a year. Multi-engine & IR included for comprehensive pilot preparation.",
      details: [
        "12-14 months duration with flexible scheduling",
        "300+ flying days per year - excellent weather conditions",
        "Multi-engine and Instrument Rating included",
        "Most affordable CPL program globally",
        "Training locations across South Africa"
      ]
    },
    "CPL Hungary": {
      image: airlineReadyImg,
      badge: "16-18 Months",
      description: "Zero to Hero Airline Ready Program with comprehensive training.",
      shortDesc: "16 - 18 months Zero to Hero Airline Ready Program. Multi-engine, IR, MCC, UPRT included for complete commercial pilot certification.",
      details: [
        "Complete Zero to Hero airline preparation",
        "Multi-engine, IR, MCC, and UPRT included",
        "European training standards and certification",
        "Multi-Crew Cooperation (MCC) training",
        "Upset Prevention & Recovery Training (UPRT)"
      ]
    },
    "Other Training": {
      image: specializedTrainingImg,
      badge: "Various",
      description: "Specialized aviation training programs.",
      shortDesc: "Specialized aviation training including Cabin Crew Training, Flight Instructor Rating, and Type Rating for A320 & B737 aircraft.",
      details: [
        "Cabin Crew Training programs",
        "Flight Instructor Rating (FI)",
        "Type Rating for A320 aircraft",
        "Type Rating for B737 aircraft",
        "Customized training solutions"
      ]
    }
  }

  // Mobile version - simple cards layout
  if (isMobile) {
    return (
      <section style={finalStyles.featureTour}>
        <div style={finalStyles.mobileContainer}>
          <div style={finalStyles.mobileHeaderContainer}>
            <h1 style={finalStyles.mainHeading}>Programs Overview</h1>

          </div>

          {Object.entries(programData).map(([programKey, program]) => (
            <div key={programKey} style={{
              ...finalStyles.mobileCard,
              marginBottom: expandedCard === programKey ? "30px" : "20px",
              transform: expandedCard === programKey ? "scale(1.02)" : "scale(1)",
              boxShadow: expandedCard === programKey 
                ? "0 12px 32px rgba(0, 0, 0, 0.18)" 
                : "0 8px 24px rgba(0, 0, 0, 0.12)"
            }}>
              {/* Card Header with Image */}
              <div style={{ position: "relative" }}>
                <img
                  src={program.image}
                  alt={programKey}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
                <div style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600"
                }}>
                  {program.badge}
                </div>
              </div>

              {/* Card Content */}
              <div 
                style={{ padding: "20px" }}
                onClick={() => handleCardClick(programKey)}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px"
                }}>
                  <h3 style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    margin: "0",
                    color: "#000",
                    lineHeight: 1.2,
                    flex: 1
                  }}>
                    {programKey}
                  </h3>
                  <svg 
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#666",
                      transition: "transform 0.3s ease",
                      transform: expandedCard === programKey ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
                
                <p style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: 1.5,
                  margin: "0"
                }}>
                  {program.shortDesc}
                </p>
              </div>

              {/* Expandable Details */}
              <div style={{
                maxHeight: expandedCard === programKey ? "400px" : "0",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
                borderTop: expandedCard === programKey ? "1px solid #f0f0f0" : "none"
              }}>
                <div style={{
                  padding: "20px",
                  background: "#f8f9fa"
                }}>
                  <h4 style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#000",
                    marginBottom: "16px",
                    margin: "0 0 16px 0"
                  }}>
                    Program Details
                  </h4>
                  
                  {program.details.map((detail, index) => (
                    <div key={index} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "12px",
                      fontSize: "14px"
                    }}>
                      <div style={{
                        width: "6px",
                        height: "6px",
                        background: "#4f46e5",
                        borderRadius: "50%",
                        marginRight: "12px",
                        marginTop: "6px",
                        flexShrink: 0
                      }}></div>
                      <span style={{
                        color: "#333",
                        lineHeight: 1.4
                      }}>
                        {detail}
                      </span>
                    </div>
                  ))}
                  
                  <button style={{
                    width: "100%",
                    background: "#4f46e5",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginTop: "16px",
                    cursor: "pointer",
                    transition: "background 0.3s ease"
                  }}
                  onMouseDown={(e) => e.target.style.background = "#3730a3"}
                  onMouseUp={(e) => e.target.style.background = "#4f46e5"}
                  onMouseLeave={(e) => e.target.style.background = "#4f46e5"}
                  >
                    Learn More About This Program
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section style={finalStyles.featureTour} ref={featureTourRef}>
      <div style={finalStyles.contentContainer}>
        {/* Left panel with features */}
        <div style={finalStyles.leftPanel}>
          <div style={finalStyles.headerContainer}>
            <h1 style={finalStyles.mainHeading}>Programs Overview</h1>
            <button
              style={finalStyles.viewAllButton}
              onClick={handleViewAllClick}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, finalStyles.viewAllButtonHover)
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.1)"
                e.target.style.transform = "translateY(0)"
              }}
            >
              View All Programs
            </button>
          </div>

          <div
            style={{
              ...finalStyles.featureItem,
              ...(activeSection === 0 ? finalStyles.featureItemActive : {}),
            }}
            onClick={() => handleFeatureClick(0)}
          >
            <div style={finalStyles.featureTitle}>
              <svg style={finalStyles.arrowIcon} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0L6.59 1.41L12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z" />
              </svg>
              CPL in South Africa
            </div>
            <p
              style={{
                ...finalStyles.featureDescription,
                ...(activeSection === 0 ? finalStyles.featureDescriptionActive : {}),
              }}
            >
              12–14 months program with affordable training featuring 300+ flying days a year. Multi-engine & IR
              included for comprehensive pilot preparation.
            </p>
          </div>

          <div
            style={{
              ...finalStyles.featureItem,
              ...(activeSection === 1 ? finalStyles.featureItemActive : {}),
            }}
            onClick={() => handleFeatureClick(1)}
          >
            <div style={finalStyles.featureTitle}>
              <svg style={finalStyles.arrowIcon} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0L6.59 1.41L12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z" />
              </svg>
              CPL in Hungary
            </div>
            <p
              style={{
                ...finalStyles.featureDescription,
                ...(activeSection === 1 ? finalStyles.featureDescriptionActive : {}),
              }}
            >
              16 - 18 months Zero to Hero Airline Ready Program. Multi-engine, IR, MCC, and UPRT for airline career
              preparation.
            </p>
          </div>

          <div
            style={{
              ...finalStyles.featureItem,
              ...(activeSection === 2 ? finalStyles.featureItemActive : {}),
            }}
            onClick={() => handleFeatureClick(2)}
          >
            <div style={finalStyles.featureTitle}>
              <svg style={finalStyles.arrowIcon} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0L6.59 1.41L12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z" />
              </svg>
              Other Training Programs
            </div>
            <p
              style={{
                ...finalStyles.featureDescription,
                ...(activeSection === 2 ? finalStyles.featureDescriptionActive : {}),
              }}
            >
              Specialized aviation training including Cabin Crew Training, Flight Instructor Rating, and Type Rating for
              A320 & B737 aircraft.
            </p>
          </div>
        </div>

        {/* Right panel with changing content */}
        <div style={finalStyles.rightPanel}>
          {/* Section 1: CPL South Africa */}
          <div
            style={{
              ...finalStyles.contentSection,
              ...(activeSection === 0 ? finalStyles.contentSectionActive : {}),
            }}
          >
            <div style={finalStyles.browserMockup}>
              <div style={finalStyles.browserHeader}>
                <div style={finalStyles.browserDots}>
                  <div style={{ ...finalStyles.dot, background: "#ff5f57" }}></div>
                  <div style={{ ...finalStyles.dot, background: "#ffbd2e" }}></div>
                  <div style={{ ...finalStyles.dot, background: "#28ca42" }}></div>
                </div>
              </div>
              <div style={finalStyles.browserContent}>
                <div style={finalStyles.siteHeader}>
                  <div style={finalStyles.logo}>WayForSky</div>
                  <nav style={finalStyles.navMenu}>
                    <a href="#" style={finalStyles.navItem}>
                      Programs
                    </a>
                    <a href="#" style={finalStyles.navItem}>
                      Training
                    </a>
                    <a href="#" style={finalStyles.navItem}>
                      Aircraft
                    </a>
                    <a href="#" style={finalStyles.navItem}>
                      Apply
                    </a>
                    <a href="#" style={finalStyles.navItem}>
                      Contact
                    </a>
                  </nav>
                  <div style={finalStyles.userIcons}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H3.5C2.67 2 2 2.67 2 3.5v15C2 19.33 2.67 20 3.5 20h17c.83 0 1.5-.67 1.5-1.5v-15C22 2.67 21.33 2 20.5 2z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>

                <div style={finalStyles.heroSection}>
                  <h2 style={finalStyles.heroTitle}>CPL South Africa</h2>
                  <p style={finalStyles.heroSubtitle}>
                    Affordable commercial pilot training with 300+ flying days per year. Complete your CPL with
                    multi-engine and instrument rating included.
                  </p>
                </div>

                <div style={finalStyles.productShowcase}>
                  <div style={finalStyles.productImage}>
                    <img
                      src={cplTrainingImg}
                      alt="CPL Training"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div style={finalStyles.navigationArrows}>
                    <button
                      style={finalStyles.navArrow}
                      aria-label="Previous program"
                      onClick={handleArrowClick}
                    >
                      ‹
                    </button>
                    <button
                      style={finalStyles.navArrow}
                      aria-label="Next program"
                      onClick={handleArrowClick}
                    >
                      ›
                    </button>
                  </div>
                </div>

                <div style={finalStyles.progressSection}>
                  <div style={finalStyles.progressBar}>
                    <div style={finalStyles.progressFill}></div>
                  </div>
                  <div style={finalStyles.progressText}>12-14 Months Program</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: CPL Hungary */}
          <div
            style={{
              ...finalStyles.contentSection,
              ...(activeSection === 1 ? finalStyles.contentSectionActive : {}),
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            <div style={finalStyles.browserMockup}>
              <div style={finalStyles.browserHeader}>
                <div style={finalStyles.browserDots}>
                  <div style={{ ...finalStyles.dot, background: "#ff5f57" }}></div>
                  <div style={{ ...finalStyles.dot, background: "#ffbd2e" }}></div>
                  <div style={{ ...finalStyles.dot, background: "#28ca42" }}></div>
                </div>
              </div>
              <div
                style={{
                  ...finalStyles.browserContent,
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                }}
              >
                <div style={finalStyles.siteHeader}>
                  <div style={finalStyles.logo}>WayForSky</div>
                  <nav style={finalStyles.navMenu}>
                    <a href="#" style={{ ...finalStyles.navItem, color: "white" }}>
                      Training
                    </a>
                    <a href="#" style={{ ...finalStyles.navItem, color: "white" }}>
                      Aircraft
                    </a>
                    <a href="#" style={{ ...finalStyles.navItem, color: "white" }}>
                      Airline Ready
                    </a>
                    <a href="#" style={{ ...finalStyles.navItem, color: "white" }}>
                      Apply
                    </a>
                  </nav>
                  <div style={finalStyles.userIcons}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
                    </svg>
                  </div>
                </div>

                <div style={finalStyles.heroSection}>
                  <h2 style={{ ...finalStyles.heroTitle, color: "white" }}>CPL Hungary</h2>
                  <p style={{ ...finalStyles.heroSubtitle, color: "rgba(255,255,255,0.8)" }}>
                    Zero to Hero Airline Ready Program. Complete training with multi-engine, IR, MCC, and UPRT for
                    airline career preparation.
                  </p>
                </div>

                <div style={finalStyles.productShowcase}>
                  <div style={finalStyles.productImage}>
                    <img
                      src={airlineReadyImg}
                      alt="Airline Ready"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                <div style={finalStyles.progressSection}>
                  <div style={finalStyles.progressBar}>
                    <div
                      style={{
                        ...finalStyles.progressFill,
                        width: "80%",
                        background: "rgba(255,255,255,0.8)",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{ ...finalStyles.progressText, color: "rgba(255,255,255,0.8)" }}
                  >
                    16-18 Months Program
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Other Training Programs */}
          <div
            style={{
              ...finalStyles.contentSection,
              ...(activeSection === 2 ? finalStyles.contentSectionActive : {}),
              background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
            }}
          >
            <div style={finalStyles.browserMockup}>
              <div style={finalStyles.browserHeader}>
                <div style={finalStyles.browserDots}>
                  <div style={{ ...finalStyles.dot, background: "#ff5f57" }}></div>
                  <div style={{ ...finalStyles.dot, background: "#ffbd2e" }}></div>
                  <div style={{ ...finalStyles.dot, background: "#28ca42" }}></div>
                </div>
              </div>
              <div
                style={{
                  ...finalStyles.browserContent,
                  background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
                  color: "white",
                }}
              >
                <div style={finalStyles.siteHeader}>
                  <div style={finalStyles.logo}>
                    WayForSky
                  </div>
                  <nav style={finalStyles.navMenu}>
                    <a href="#" style={{ ...finalStyles.navItem, color: "white" }}>
                      Type Rating
                    </a>
                    <a href="#" style={{ ...finalStyles.navItem, color: "white" }}>
                      A320/B737
                    </a>
                    <a href="#" style={{ ...finalStyles.navItem, color: "white" }}>
                      Enroll
                    </a>
                  </nav>
                  <div style={finalStyles.userIcons}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H3.5C2.67 2 2 2.67 2 3.5v15C2 19.33 2.67 20 3.5 20h17c.83 0 1.5-.67 1.5-1.5v-15C22 2.67 21.33 2 20.5 2z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>

                <div style={finalStyles.heroSection}>
                  <h2 style={{ ...finalStyles.heroTitle, color: "white" }}>Other Training Programs</h2>
                  <p style={{ ...finalStyles.heroSubtitle, color: "rgba(255,255,255,0.8)" }}>
                    Specialized aviation training including Cabin Crew Training, Flight Instructor Rating, and Type
                    Rating for A320 & B737 aircraft.
                  </p>
                </div>

                <div style={finalStyles.productShowcase}>
                  <div style={finalStyles.productImage}>
                    <img
                      src={specializedTrainingImg}
                      alt="Specialized Training"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                </div>

                <div style={finalStyles.progressSection}>
                  <div style={finalStyles.progressBar}>
                    <div
                      style={{ ...finalStyles.progressFill, width: "90%", background: "rgba(255,255,255,0.8)" }}
                    ></div>
                  </div>
                  <div style={{ ...finalStyles.progressText, color: "rgba(255,255,255,0.8)" }}>Multiple Programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramOverview
