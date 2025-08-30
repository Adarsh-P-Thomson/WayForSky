import React from "react"
import logo from "../assets/WhiteBg.jpg" // ✅ adjust path if needed

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand Section */}
        <div style={styles.brand}>
          <img src={logo} alt="WayForSky Logo" style={styles.logo} />
          <p style={styles.tagline}>Your Sky, Your Future.</p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.title}>Explore</h3>
          <ul style={styles.list}>
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/courses" style={styles.link}>Courses</a></li>
            <li><a href="/fleet" style={styles.link}>Fleet</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
          </ul>
        </div>

        {/* Office Info */}
        <div style={styles.section}>
          <h3 style={styles.title}>Head Office</h3>
          <p style={styles.officeText}>
            Nandi Building No 56,<br />
            Bowring Hospital Road, Shivaji Nagar,<br />
            Bangalore, Karnataka 560001
          </p>
          <p style={styles.officeText}><strong>Phone:</strong> +91 9071165504</p>
          <p style={styles.officeText}>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@wayforsky.com" style={styles.email}>
              info@wayforsky.com
            </a>
          </p>
        </div>

        {/* Social Section */}
        <div style={styles.section}>
          <h3 style={styles.title}>Follow Us</h3>
          <div style={styles.socialContainer}>
            <a href="#" style={styles.social}><i className="fab fa-twitter"></i></a>
            <a href="#" style={styles.social}><i className="fab fa-facebook"></i></a>
            <a href="#" style={styles.social}><i className="fab fa-youtube"></i></a>
            <a href="#" style={styles.social}><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p>© {new Date().getFullYear()} WayForSky ✈️ | Lifting Dreams Beyond Horizons</p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: "linear-gradient(180deg, #ffffff 0%, #f0f8ff 60%, #e6f2fa 100%)",
    padding: "4rem 2rem 2rem",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#1e293b",
  },
  container: {
    maxWidth: "1200px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "3rem",
    borderBottom: "1px solid #dbeafe",
    paddingBottom: "2rem",
  },
  brand: {
    textAlign: "left",
  },
  logo: {
    width: "180px",
    marginBottom: "1rem",
  },
  tagline: {
    fontSize: "1rem",
    color: "#334155",
    fontWeight: "500",
    letterSpacing: "0.5px",
  },
  section: {
    textAlign: "left",
  },
  title: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: "1rem",
    borderBottom: "2px solid #38bdf8",
    display: "inline-block",
    paddingBottom: "0.3rem",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  link: {
    display: "block",
    color: "#475569",
    fontSize: "0.95rem",
    marginBottom: "0.6rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
  officeText: {
    fontSize: "0.9rem",
    color: "#475569",
    margin: "0.4rem 0",
    lineHeight: "1.6",
  },
  email: {
    color: "#0284c7",
    textDecoration: "none",
    fontWeight: "500",
  },
  linkHover: {
    color: "#0284c7",
    transform: "translateX(4px)",
  },
  socialContainer: {
    display: "flex",
    gap: "1rem",
    fontSize: "1.5rem",
  },
  social: {
    color: "#64748b",
    transition: "all 0.3s ease",
  },
  bottomBar: {
    textAlign: "center",
    paddingTop: "1.5rem",
    color: "#64748b",
    fontSize: "0.9rem",
  },
}

export default Footer
