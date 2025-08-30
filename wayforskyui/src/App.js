"use client"

import { useState } from "react"
import Header from "./components/Header"
import HeroSection from "./HeroSection"
import Quickintro from "./Quickintro"   // ✅ Import Quickintro
import FeatureSection from "./FeatureSection"
import Contact from "./contact" // Import Contact component
import TrainingLocations from "./TrainingLocations"
import Fleet from "./Fleet"
import Programoverview from "./Programoverview" // Import Programoverview component
import Blog from "./Blog"
import CTA from "./CTA" // Import CTA component
import Footer from "./components/Footer" // ✅ Import Footer component

import "./App.css"
import "./TrainingLocation.css"

function App() {
  // Add state to manage current page
  const [currentPage, setCurrentPage] = useState("home")

  // Function to handle page navigation
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="App">
      <Header onPageChange={handlePageChange} currentPage={currentPage} />
      <HeroSection />
      <Quickintro />   {/* ✅ Added Quickintro here */}
      {/* Conditionally render pages based on currentPage state */}
      {currentPage === "home" && (
        <>
          <FeatureSection />
          <TrainingLocations />
          <Fleet />
          <Programoverview /> {/* Added Programoverview here */}
          <Blog />
          <CTA /> {/* Added CTA at the end */}
        </>
      )}
      {currentPage === "contact" && <Contact />}

      {/* ✅ Footer always at the bottom */}
      <Footer />
    </div>
  )
}

export default App
