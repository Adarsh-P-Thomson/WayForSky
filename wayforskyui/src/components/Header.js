"use client"

import { useState, useEffect } from "react"
// ✅ Import useLocation to read the current URL
import { Link, useLocation } from "react-router-dom"
import HeaderLogo from "../assets/Headerlogo.jpeg"; 

const DropdownArrow = ({ className }) => (
  <svg
    className={className || "dropdown-arrow"}
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
  >
    <path
      d="M1 1.5L6 6.5L11 1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const MobileDropdownArrow = ({ className }) => (
  <svg
    className={className || "dropdown-arrow"}
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
  >
    <path
      d="M1 1.5L6 6.5L11 1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ✅ Removed 'currentPage' prop, as the component now handles this internally
export default function Header() {
  const location = useLocation(); // ✅ Get current location from React Router
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    let isScrolling = false
    const scrollThreshold = 10

    const handleScroll = () => {
      if (isScrolling) return

      isScrolling = true
      requestAnimationFrame(() => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop

        if (Math.abs(currentScrollTop - lastScrollTop) > scrollThreshold) {
          if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
            setIsHeaderHidden(true)
          } else {
            setIsHeaderHidden(false)
          }
          setLastScrollTop(currentScrollTop)
        }

        isScrolling = false
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollTop])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isMobileMenuOpen) {
      setActiveDropdown(null)
    }
  }

  const toggleMobileDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <>
      <header className={`header ${isHeaderHidden ? "header-hidden" : ""}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
<div className="logo">
  <Link to="/">
    <img 
      src={HeaderLogo} 
      alt="WayForSky Logo" 
      style={{
        height: "50px",
        width: "auto",
        display: "block"
      }}
    />
  </Link>
</div>



            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <Link
                to="/"
                className={`nav-link focus-ring ${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>

              <div className="dropdown-container">
                <Link to="/our-story" className="nav-link focus-ring dropdown-trigger">
                  About Us
                  <DropdownArrow />
                </Link>
                <div className="dropdown-menu">
                  <Link to="/our-story" className="dropdown-item">
                    About WayForSky
                  </Link>
                  <Link to="/why-wayforsky" className="dropdown-item">
                    Why WayForSky ?
                  </Link>
                </div>
              </div>

              <div className="dropdown-container">
                {/* The "Courses" text is now a direct link to the main courses page */}
                <Link
                  to="/courses"
                  className={`nav-link focus-ring dropdown-trigger ${
                    location.pathname.startsWith("/courses") || location.pathname.startsWith("/zero-to-hero") || location.pathname.startsWith("/commercial-pilot-license") ? "active" : ""
                  }`}
                >
                  Courses
                  <DropdownArrow />
                </Link>
                <div className="dropdown-menu">
                  <Link to="/zero-to-hero" className="dropdown-item">
                    Zero to Hero Airline Ready Program - EASA
                  </Link>
                  <Link to="/commercial-pilot-license" className="dropdown-item">
                    Commercial Pilot License with MEIR - SACAA
                  </Link>
                  <Link to="/private-pilot-license" className="dropdown-item">
                    Private Pilot License
                  </Link>
                  <Link to="/flight-instructor-rating" className="dropdown-item">
                    Flight Instructor Rating
                  </Link>
                  <Link to="/type-rating" className="dropdown-item">
                    Type Rating A320 and B737 Cabin Crew
                  </Link>
                  <Link to="/cabin-crew" className="dropdown-item">
                    Cabin Crew
                  </Link>
                </div>
              </div>

              <div className="dropdown-container">
                {/* ✅ UPDATED: Events is active when on the /fleet page */}
                <Link
                  to="/fleet"
                  className={`nav-link focus-ring dropdown-trigger ${
                    location.pathname === "/fleet" ? "active" : ""
                  }`}
                >
                  Fleet
                  
                </Link>
                
              </div>

              <div className="dropdown-container">
                <Link to="/dgca-classes" className="nav-link focus-ring dropdown-trigger">
                  Classes
                  <DropdownArrow />
                </Link>
                <div className="dropdown-menu">
                  <Link to="/dgca-classes" className="dropdown-item">
                    DGCA ground Classes
                  </Link>
                  <Link to="/elp-classes" className="dropdown-item">
                    English Language Proficiency (ELP) Training
                  </Link>
                  <Link to="/nios-classes" className="dropdown-item">
                    NIOS Prep Classes
                  </Link>
                </div>
              </div>

              <Link to="/webinar" className="nav-link focus-ring">
                Join the Webinar
              </Link>
               {/* ✅ UPDATED: Contact Us is active on the /contactus page */}
              <Link
                to="/contactus"
                className={`nav-link focus-ring ${location.pathname === "/contactus" ? "active" : ""}`}
                >
                Contact Us
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="right-actions">

                {/* ✅ UPDATED: Link points to the correct /contactus route and underline is removed */}
              <Link
                to="/contactus"
                className="contact-btn focus-ring"
                style={{ textDecoration: 'none' }}
              >
                Apply Now
              </Link>

              <button className="mobile-menu-btn focus-ring" aria-label="Menu" onClick={toggleMobileMenu}>
                <svg
                  id="hamburgerIcon"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  style={{ display: isMobileMenuOpen ? "none" : "block" }}
                >
                  <path d="M0 1h20M0 8h20M0 15h20" stroke="#FFFFFF" strokeWidth="1.5" />
                </svg>
                <svg
                  id="closeIcon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{ display: isMobileMenuOpen ? "block" : "none" }}
                >
                  <path d="M15 5L5 15M5 5l10 10" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <nav className="mobile-nav">
            <Link
              to="/"
              className={`mobile-nav-link focus-ring ${location.pathname === "/" ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <div className="mobile-dropdown-container">
              <button
                className={`mobile-nav-link mobile-dropdown-trigger focus-ring ${activeDropdown === "aboutus" ? "active" : ""}`}
                onClick={() => toggleMobileDropdown("aboutus")}
              >
                About Us
                <MobileDropdownArrow />
              </button>
              <div className={`mobile-dropdown-menu ${activeDropdown === "aboutus" ? "open" : ""}`}>
                <Link to="/our-story" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  About WayForSky
                </Link>
                <Link to="/why-wayforsky" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Why WayForSky ?
                </Link>
              </div>
            </div>

            <div className="mobile-dropdown-container">
              <button
                className={`mobile-nav-link mobile-dropdown-trigger focus-ring ${
                  location.pathname.startsWith("/courses") || activeDropdown === "courses" ? "active" : ""
                }`}
              >
                <Link to="/courses" style={{ color: 'inherit', textDecoration: 'none' }} onClick={closeMobileMenu}>
                  Courses
                </Link>
                <MobileDropdownArrow onClick={() => toggleMobileDropdown("courses")} />
              </button>
              <div className={`mobile-dropdown-menu ${activeDropdown === "courses" ? "open" : ""}`}>
                <Link to="/zero-to-hero" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Zero to Hero Airline Ready Program - EASA
                </Link>
                <Link to="/commercial-pilot-license" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Commercial Pilot License with MEIR - SACAA
                </Link>
                <Link to="/private-pilot-license" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Private Pilot License
                </Link>
                <Link to="/flight-instructor-rating" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Flight Instructor Rating
                </Link>
                <Link to="/type-rating" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Type Rating A320 and B737 Cabin Crew
                </Link>
                <Link to="/cabin-crew" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Cabin Crew
                </Link>
              </div>
            </div>

            <div className="mobile-dropdown-container">
               {/* ✅ UPDATED: Events is active when on the /fleet page */}
              <button
                className={`mobile-nav-link mobile-dropdown-trigger focus-ring ${
                  activeDropdown === "events" || location.pathname === "/fleet"
                    ? "active"
                    : ""
                }`}
                onClick={() => toggleMobileDropdown("events")}
              >
                Events
                <MobileDropdownArrow />
              </button>
              <div className={`mobile-dropdown-menu ${activeDropdown === "events" ? "open" : ""}`}>
                <Link
                  to="/fleet"
                  className="mobile-dropdown-item"
                  onClick={closeMobileMenu}
                >
                  Fleets
                </Link>

                <Link to="/testimonials" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Testimonials
                </Link>
              </div>
            </div>
             {/* ✅ UPDATED: Mobile Contact Us link is active and points to the correct route */}
            <Link
                to="/contactus"
                className={`mobile-nav-link focus-ring ${location.pathname === "/contactus" ? "active" : ""}`}
                onClick={closeMobileMenu}>
              Contact Us
            </Link>

            <div className="mobile-dropdown-container">
              <button
                className={`mobile-nav-link mobile-dropdown-trigger focus-ring ${activeDropdown === "classes" ? "active" : ""}`}
                onClick={() => toggleMobileDropdown("classes")}
              >
                Classes
                <MobileDropdownArrow />
              </button>
              <div className={`mobile-dropdown-menu ${activeDropdown === "classes" ? "open" : ""}`}>
                <Link to="/dgca-classes" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  DGCA ground Classes
                </Link>
                <Link to="/rtr-classes" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Radiology Telephonics (RTR) classes
                </Link>
                <Link to="/nios-classes" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  NIOS Prep Classes
                </Link>
              </div>
            </div>

            <Link to="/webinar" className="mobile-nav-link focus-ring" onClick={closeMobileMenu}>
              Join the Webinar
            </Link>
          </nav>
        </div>
      </header>
      <div style={{ height: "2px", backgroundColor: "white", width: "100%" }}></div>
    </>
  )
}