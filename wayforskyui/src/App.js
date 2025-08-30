/* THIS IS ROUTING PAGE CONTROL . DONT DO ANYTHING ELSE*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import HeroSection from "./HeroSection"
import Quickintro from "./Quickintro"
import FeatureSection from "./FeatureSection"
import Contact from "./contact"
import TrainingLocations from "./TrainingLocations"
import Fleet from "./Fleet" 
import FleetPage from "./fleetpage.js" 
import Programoverview from "./Programoverview"
import Blog from "./Blog"
import CTA from "./CTA"
import Footer from "./components/Footer"

import "./App.css"
import "./TrainingLocation.css"

// ✅ HomePage is grouped as one component
function HomePage() {
  return (
    <>
      <HeroSection />
      <Quickintro />
      <FeatureSection />
      <TrainingLocations />
      <Fleet /> 
      <Programoverview />
      <Blog />
      <CTA />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 

        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Fleet Page */}
          <Route path="/fleet" element={<FleetPage />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App

