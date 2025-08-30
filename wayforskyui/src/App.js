/* THIS IS ROUTING PAGE CONTROL . DONT DO ANYTHING ELSE*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import HeroSection from "./HeroSection"
import Quickintro from "./Quickintro"
import FeatureSection from "./FeatureSection"
import TrainingLocations from "./TrainingLocations"
import Fleet from "./Fleet" 
import FleetPage from "./fleetpage.js" 
import Programoverview from "./Programoverview"
import Blog from "./Blog"
import CTA from "./CTA"
import Footer from "./components/Footer"
import Aboutus from "./pages/Aboutus"
import WhyUs from "./pages/WhyUs.js" 
import NotFoundPage from "./pages/static/NotFoundPage"

import "./App.css"
import "./TrainingLocation.css"
import ContactUs from "./pages/ContactUs.js"

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
        

          <Route path="/our-story" element={<Aboutus />} />

          <Route path="/why-wayforsky" element={<WhyUs />} />

          <Route path="/contactus" element={<ContactUs />} />

          {/* 👇 Add this catch-all route at the very end */}
          <Route path="*" element={<NotFoundPage />} />




          {/* ADD NEW ROUTES ABOVE THIS */}
          </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App

