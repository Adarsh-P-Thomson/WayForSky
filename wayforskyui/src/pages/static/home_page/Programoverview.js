"use client"
import cplTrainingImg from "../../../assets/Program/CPLSA.JPG";
import airlineReadyImg from "../../../assets/Program/CPLHU.JPG";
import specializedTrainingImg from "../../../assets/Program/CPLOTHER.JPG";
import { useState } from "react"

const ProgramOverview = () => {
  const [expandedCard, setExpandedCard] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)

  const handleCardClick = (program) => {
    setExpandedCard(expandedCard === program ? null : program)
  }

  const handleLearnMore = (program) => {
    console.log("Learn more about:", program)
  }

  const programData = {
    "CPL South Africa": {
      image: cplTrainingImg,
      badge: "12-14 Months",
      shortDesc: "Complete your Commercial Pilot License in sunny South Africa with 300+ flying days annually.",
      details: [
        "Duration: 12-14 months with flexible scheduling",
        "Weather: 300+ flying days per year - ideal conditions",
        "Training: Multi-engine and Instrument Rating included",
        "Cost: Most affordable CPL program globally",
        "Locations: Multiple training bases across South Africa",
        "Aircraft: Modern fleet with state-of-the-art equipment"
      ],
      highlights: [
        { icon: "", text: "300+ Flying Days" },
        { icon: "", text: "Multi-Engine" },
        { icon: "", text: "Affordable" },
        { icon: "", text: "EASA Approved" }
      ]
    },
    "CPL Hungary": {
      image: airlineReadyImg,
      badge: "16-18 Months",
      shortDesc: "Become airline-ready with our comprehensive Zero to Hero training program in Europe.",
      details: [
        "Duration: 16-18 months intensive training",
        "Certification: Complete Zero to Hero airline preparation",
        "Modules: Multi-engine, IR, MCC, and UPRT included",
        "Standards: European aviation training standards",
        "Cooperation: Multi-Crew Cooperation (MCC) training",
        "Safety: Upset Prevention & Recovery Training (UPRT)"
      ],
      highlights: [
        { icon: "", text: "European Training" },
        { icon: "", text: "MCC Certified" },
        { icon: "", text: "UPRT Included" },
        { icon: "", text: "Airline Ready" }
      ]
    },
    "Other Training": {
      image: specializedTrainingImg,
      badge: "Various Durations",
      shortDesc: "Advance your aviation career with specialized training programs and type ratings.",
      details: [
        "Cabin Crew: Complete cabin crew training programs",
        "FI Rating: Flight Instructor certification courses",
        "A320 Type: Airbus A320 family type rating",
        "B737 Type: Boeing 737 family type rating",
        "Custom: Tailored training solutions available",
        "Recurrent: Refresher and recurrent training"
      ],
      highlights: [
        { icon: "", text: "Type Ratings" },
        { icon: "", text: "FI Courses" },
        { icon: "", text: "Cabin Crew" },
        { icon: "", text: "Recurrent" }
      ]
    }
  }

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)",
      padding: "clamp(40px, 8vw, 100px) clamp(20px, 5vw, 80px)",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    header: {
      textAlign: "center",
      marginBottom: "clamp(40px, 8vw, 80px)",
      maxWidth: "900px",
      margin: "0 auto clamp(40px, 8vw, 80px)",
    },
    title: {
      fontSize: "clamp(32px, 6vw, 56px)",
      fontWeight: "800",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      marginBottom: "16px",
      lineHeight: 1.2,
    },
    subtitle: {
      fontSize: "clamp(16px, 3vw, 20px)",
      color: "#6c757d",
      lineHeight: 1.6,
      maxWidth: "700px",
      margin: "0 auto",
    },
    cardsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
      gap: "clamp(24px, 4vw, 40px)",
      maxWidth: "1400px",
      margin: "0 auto",
    },
    card: {
      background: "white",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      position: "relative",
    },
    cardHovered: {
      transform: "translateY(-8px)",
      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
    },
    cardExpanded: {
      transform: "scale(1.02)",
      boxShadow: "0 25px 60px rgba(0, 0, 0, 0.2)",
    },
    imageContainer: {
      position: "relative",
      width: "100%",
      height: "280px",
      overflow: "hidden",
    },
    cardImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.4s ease",
    },
    imageOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%)",
      pointerEvents: "none",
    },
    badge: {
      position: "absolute",
      top: "20px",
      right: "20px",
      background: "rgba(0, 0, 0, 0.85)",
      backdropFilter: "blur(10px)",
      color: "white",
      padding: "8px 16px",
      borderRadius: "30px",
      fontSize: "13px",
      fontWeight: "600",
      letterSpacing: "0.5px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    },
    cardContent: {
      padding: "clamp(24px, 4vw, 32px)",
    },
    cardHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "16px",
    },
    cardTitle: {
      fontSize: "clamp(22px, 4vw, 28px)",
      fontWeight: "700",
      color: "#212529",
      margin: 0,
      lineHeight: 1.3,
      flex: 1,
    },
    expandIcon: {
      width: "28px",
      height: "28px",
      color: "#6c757d",
      transition: "transform 0.3s ease, color 0.3s ease",
      flexShrink: 0,
      marginLeft: "12px",
    },
    expandIconRotated: {
      transform: "rotate(180deg)",
      color: "#667eea",
    },
    cardDescription: {
      fontSize: "clamp(14px, 2.5vw, 16px)",
      color: "#6c757d",
      lineHeight: 1.7,
      marginBottom: "20px",
    },
    highlightsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "12px",
      marginBottom: "20px",
    },
    highlightItem: {
      display: "flex",
      alignItems: "center",
      padding: "10px",
      background: "#f8f9fa",
      borderRadius: "10px",
      fontSize: "13px",
      fontWeight: "500",
      color: "#495057",
    },
    highlightIcon: {
      fontSize: "18px",
      marginRight: "8px",
    },
    expandedContent: {
      maxHeight: "0",
      overflow: "hidden",
      transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    },
    expandedContentOpen: {
      maxHeight: "800px",
    },
    expandedDetails: {
      padding: "24px",
      paddingTop: "0",
    },
    divider: {
      height: "1px",
      background: "linear-gradient(90deg, transparent 0%, #dee2e6 50%, transparent 100%)",
      marginBottom: "24px",
    },
    detailsTitle: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#212529",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
    },
    detailsList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    detailItem: {
      display: "flex",
      alignItems: "flex-start",
      padding: "12px 0",
      borderBottom: "1px solid #f1f3f5",
      fontSize: "14px",
      color: "#495057",
      lineHeight: 1.6,
    },
    detailIcon: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      marginRight: "12px",
      marginTop: "6px",
      flexShrink: 0,
    },
    ctaButton: {
      width: "100%",
      padding: "16px",
      marginTop: "20px",
      border: "none",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "600",
      color: "white",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
    },
    ctaButtonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
    },
  }

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Our Training Programs</h1>
        <p style={styles.subtitle}>
          Choose from our world-class aviation training programs designed to launch and advance your flying career
        </p>
      </div>

      <div style={styles.cardsGrid}>
        {Object.entries(programData).map(([programKey, program]) => (
          <div
            key={programKey}
            style={{
              ...styles.card,
              ...(hoveredCard === programKey && !expandedCard ? styles.cardHovered : {}),
              ...(expandedCard === programKey ? styles.cardExpanded : {}),
            }}
            onMouseEnter={() => setHoveredCard(programKey)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.imageContainer}>
              <img
                src={program.image}
                alt={programKey}
                style={{
                  ...styles.cardImage,
                  transform: hoveredCard === programKey ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div style={styles.imageOverlay} />
              <div style={styles.badge}>{program.badge}</div>
            </div>

            <div style={styles.cardContent}>
              <div 
                style={styles.cardHeader}
                onClick={() => handleCardClick(programKey)}
              >
                <h3 style={styles.cardTitle}>{programKey}</h3>
                <svg
                  style={{
                    ...styles.expandIcon,
                    ...(expandedCard === programKey ? styles.expandIconRotated : {}),
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>

              <p style={styles.cardDescription}>{program.shortDesc}</p>

              <div style={styles.highlightsGrid}>
                {program.highlights.map((highlight, index) => (
                  <div key={index} style={styles.highlightItem}>
                    <span style={styles.highlightIcon}>{highlight.icon}</span>
                    <span>{highlight.text}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  ...styles.expandedContent,
                  ...(expandedCard === programKey ? styles.expandedContentOpen : {}),
                }}
              >
                <div style={styles.expandedDetails}>
                  <div style={styles.divider} />
                  
                  <h4 style={styles.detailsTitle}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginRight: "8px" }}
                    >
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                    Program Details
                  </h4>

                  <ul style={styles.detailsList}>
                    {program.details.map((detail, index) => (
                      <li key={index} style={styles.detailItem}>
                        <div style={styles.detailIcon} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    style={styles.ctaButton}
                    onClick={() => handleLearnMore(programKey)}
                    onMouseEnter={(e) => {
                      Object.assign(e.target.style, styles.ctaButtonHover)
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)"
                      e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.3)"
                    }}
                  >
                    Learn More & Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProgramOverview
