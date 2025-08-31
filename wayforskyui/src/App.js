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
import Zerotohero from "./pages/Zerotohero.js" 
import Southafricacpl from "./pages/Southafricacpl.js" 
import Privatepilot from "./pages/Privatepilot.js" 
import Cabincrew from "./pages/Cabincrew.js" 
import NotFoundPage from "./pages/static/NotFoundPage"
import DGCAGroundClassesPage from "./pages/DGCAGroundClassesPage.js"
import "./App.css"
import "./TrainingLocation.css"
import ContactUs from "./pages/ContactUs.js"
import ELPClassesPage from "./pages/ELPClassesPage.js"
import NIOSPrepPage from "./pages/NIOSPrepPage.js"

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
        
Cabincrew.js
          <Route path="/our-story" element={<Aboutus />} />

          <Route path="/why-wayforsky" element={<WhyUs />} />
          
          <Route path="/zero-to-hero" element={<Zerotohero />} />

          <Route path="/commercial-pilot-license" element={<Southafricacpl />} />

          <Route path="/private-pilot-license" element={<Privatepilot />} />

          <Route path="/cabin-crew" element={<Cabincrew />} />

          <Route path="/contactus" element={<ContactUs />} />


        <Route path="/dgca-classes" element={<DGCAGroundClassesPage />} />

        <Route path="/elp-classes" element={<ELPClassesPage />} />

        <Route path="/nios-classes" element={<NIOSPrepPage />} />









          

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

