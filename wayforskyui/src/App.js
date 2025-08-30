"use client"

import { useState } from "react"
import Header from "./components/Header"
import HeroSection from "./HeroSection"
import Quickintro from "./Quickintro"
import FeatureSection from "./FeatureSection"
import Contact from "./contact"
import TrainingLocations from "./TrainingLocations"
import Fleet from "./Fleet" // This is the SECTION for the homepage ( untouched)
import FleetPage from "./fleetpage.js" // ✅ Here is the new SEPARATE PAGE (FIXED)
import Programoverview from "./Programoverview"
import Blog from "./Blog"
import CTA from "./CTA"
import Footer from "./components/Footer"

import "./App.css"
import "./TrainingLocation.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="App">
      <Header onPageChange={handlePageChange} currentPage={currentPage} />
      
      {/* This renders only the HOME page content */}
      {currentPage === "home" && (
        <>
          <HeroSection />
          <Quickintro />
          <FeatureSection />
          <TrainingLocations />
          <Fleet /> {/* This is your original homepage fleet section. It stays here. */}
          <Programoverview />
          <Blog />
          <CTA />
        </>
      )}

      {/* ✅ This renders ONLY the FLEET PAGE when you click the link */}
      {currentPage === "fleet" && <FleetPage />}

      {/* This renders ONLY the CONTACT PAGE */}
      {currentPage === "contact" && <Contact />}
      
      <Footer />
    </div>
  )
}

export default App

