"use client"

import { useState, useEffect } from "react"

export default function Header({ onPageChange, currentPage }) {
  // Accept props for navigation
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

  const handleNavClick = (page, e) => {
    e.preventDefault()
    onPageChange(page)
    closeMobileMenu()
  }

  return (
    <>
      <header className={`header ${isHeaderHidden ? "header-hidden" : ""}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <span>Way</span>
              <span className="accent">ForSky</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <a
                href="/"
                className={`nav-link focus-ring ${currentPage === "home" ? "active" : ""}`}
                onClick={(e) => handleNavClick("home", e)}
              >
                Home
              </a>

              <div className="dropdown-container">
                <a href="/about" className="nav-link focus-ring dropdown-trigger">
                  About Us
                  <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="dropdown-menu">
                  <a href="/our-story" className="dropdown-item">
                    About WayForSky
                  </a>
                  <a href="/why-wayforsky" className="dropdown-item">
                    Why WayForSky ?
                  </a>
                </div>
              </div>

              <div className="dropdown-container">
                <a href="/courses" className="nav-link focus-ring dropdown-trigger">
                  Courses
                  <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="dropdown-menu">
                  <a href="/web-development" className="dropdown-item">
                    Web Development
                  </a>
                  <a href="/mobile-development" className="dropdown-item">
                    Mobile Development
                  </a>
                  <a href="/data-science" className="dropdown-item">
                    Data Science
                  </a>
                  <a href="/ui-ux-design" className="dropdown-item">
                    UI/UX Design
                  </a>
                </div>
              </div>

              <div className="dropdown-container">
                <a href="/events" className="nav-link focus-ring dropdown-trigger">
                  Events
                  <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="dropdown-menu">
                  <a href="/fleets" className="dropdown-item">
                    Fleets
                  </a>
                  <a href="/orientation" className="dropdown-item">
                    Orientation program
                  </a>
                  <a href="/seminars" className="dropdown-item">
                    Seminars
                  </a>
                  <a href="/shorts" className="dropdown-item">
                    Shorts
                  </a>
                  <a href="/testimonials" className="dropdown-item">
                    Testimonials
                  </a>
                </div>
              </div>

              <div className="dropdown-container">
                <a href="/classes" className="nav-link focus-ring dropdown-trigger">
                  Classes
                  <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="dropdown-menu">
                  <a href="/dgca-classes" className="dropdown-item">
                    DGCA ground Classes
                  </a>
                  <a href="/rtr-classes" className="dropdown-item">
                    Radiology Telephonics (RTR) classes
                  </a>
                  <a href="/nios-classes" className="dropdown-item">
                    NIOS Prep Classes
                  </a>
                </div>
              </div>

              <a href="/webinar" className="nav-link focus-ring">
                Join the Webinar
              </a>
              <a
  href="/contact.html"
  className="nav-link focus-ring"
>
  Contact-Us
</a>
            </nav>

            {/* Right Actions */}
            <div className="right-actions">
              <button className="search-icon focus-ring" aria-label="Search">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#FFFFFF" strokeWidth="1.5" />
                  <path d="m15 15 3 3" stroke="#FFFFFF" strokeWidth="1.5" />
                </svg>
              </button>

              <a
                href="/contact"
                className="contact-btn focus-ring"
                onClick={(e) => handleNavClick("contact", e)} // Handle apply now navigation
              >
                Apply Now
              </a>

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
            <a
              href="/"
              className={`mobile-nav-link focus-ring ${currentPage === "home" ? "active" : ""}`}
              onClick={(e) => handleNavClick("home", e)}
            >
              Home
            </a>

            <div className="mobile-dropdown-container">
              <button
                className={`mobile-nav-link mobile-dropdown-trigger focus-ring ${activeDropdown === "aboutus" ? "active" : ""}`}
                onClick={() => toggleMobileDropdown("aboutus")}
              >
                About Us
                <svg className="mobile-dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={`mobile-dropdown-menu ${activeDropdown === "aboutus" ? "open" : ""}`}>
                <a href="/our-story" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  About WayForSky
                </a>
                <a href="/why-wayforsky" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Why WayForSky ?
                </a>
              </div>
            </div>

            <div className="mobile-dropdown-container">
              <button
                className={`mobile-nav-link mobile-dropdown-trigger focus-ring ${activeDropdown === "courses" ? "active" : ""}`}
                onClick={() => toggleMobileDropdown("courses")}
              >
                Courses
                <svg className="mobile-dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={`mobile-dropdown-menu ${activeDropdown === "courses" ? "open" : ""}`}>
                <a href="/web-development" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Web Development
                </a>
                <a href="/mobile-development" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Mobile Development
                </a>
                <a href="/data-science" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Data Science
                </a>
                <a href="/ui-ux-design" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  UI/UX Design
                </a>
              </div>
            </div>

            <div className="mobile-dropdown-container">
              <button
                className={`mobile-nav-link mobile-dropdown-trigger focus-ring ${activeDropdown === "events" ? "active" : ""}`}
                onClick={() => toggleMobileDropdown("events")}
              >
                Events
                <svg className="mobile-dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={`mobile-dropdown-menu ${activeDropdown === "events" ? "open" : ""}`}>
                <a href="/fleets" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Fleets
                </a>
                <a href="/orientation" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Orientation program
                </a>
                <a href="/seminars" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Seminars
                </a>
                <a href="/shorts" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Shorts
                </a>
                <a href="/testimonials" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Testimonials
                </a>
              </div>
            </div>

            <a
  href="/contact.html"
  className="mobile-nav-link focus-ring"
>
  Contact-Us
</a>

            <div className="mobile-dropdown-container">
              <button
                className={`mobile-nav-link mobile-dropdown-trigger focus-ring ${activeDropdown === "classes" ? "active" : ""}`}
                onClick={() => toggleMobileDropdown("classes")}
              >
                Classes
                <svg className="mobile-dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={`mobile-dropdown-menu ${activeDropdown === "classes" ? "open" : ""}`}>
                <a href="/dgca-classes" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  DGCA ground Classes
                </a>
                <a href="/rtr-classes" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Radiology Telephonics (RTR) classes
                </a>
                <a href="/nios-classes" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  NIOS Prep Classes
                </a>
              </div>
            </div>

            <a href="/webinar" className="mobile-nav-link focus-ring" onClick={closeMobileMenu}>
              Join the Webinar
            </a>
          </nav>
        </div>
      </header>
      <div style={{ height: "2px", backgroundColor: "white", width: "100%" }}></div>
    </>
  )
}
