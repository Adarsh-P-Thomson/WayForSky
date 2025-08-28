"use client"

import { useState } from "react"
import Header from "./Header"
import HeroSection from "./HeroSection"
import FeatureSection from "./FeatureSection"
import Contact from "./contact" //  Import Contact component
import TrainingLocations from "./TrainingLocations"
import Fleet from "./Fleet"
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
      {/* Conditionally render pages based on currentPage state */}
      {currentPage === "home" && (
        <>
          <FeatureSection />
          <TrainingLocations />
          <Fleet />
        </>
      )}
      {currentPage === "contact" && <Contact />}
    </div>
  )
}

export default App