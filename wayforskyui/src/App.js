/* THIS IS ROUTING PAGE CONTROL . DONT DO ANYTHING ELSE*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"   // ✅ import it here
import Header from "./components/Header" 
import FleetPage from "./fleetpage.js" 
import Footer from "./components/Footer"
import Aboutus from "./pages/Aboutus"
import WhyUs from "./pages/WhyUs.js" 
import Zerotohero from "./pages/Zerotohero.js" 
import Southafricacpl from "./pages/Southafricacpl.js" 
import Privatepilot from "./pages/Privatepilot.js" 
import FlightInstructor from "./pages/FlightInstructor.js" 
import Typerating from "./pages/Typerating.js" 
import Cabincrew from "./pages/Cabincrew.js" 
import NotFoundPage from "./pages/static/NotFoundPage"
import DGCAGroundClassesPage from "./pages/DGCAGroundClassesPage.js"
import "./App.css"
import HomePage from "./pages/static/home_page/HomePage.js"
import ContactUs from "./pages/ContactUs.js"
import ELPClassesPage from "./pages/ELPClassesPage.js"
import NIOSPrepPage from "./pages/NIOSPrepPage.js"
import WebinarPage from "./pages/WebinarPage.js" // Import the new webinar page

function App() {
  return (
    <Router>
            <ScrollToTop /> 
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

                    <Route path="/flight-instructor-rating" element={<FlightInstructor />} />


          <Route path="/type-rating" element={<Typerating />} />

          <Route path="/cabin-crew" element={<Cabincrew />} />

          <Route path="/contactus" element={<ContactUs />} />


        <Route path="/dgca-classes" element={<DGCAGroundClassesPage />} />

        <Route path="/elp-classes" element={<ELPClassesPage />} />

        <Route path="/nios-classes" element={<NIOSPrepPage />} />

        {/* Webinar Page */}
        <Route path="/webinar" element={<WebinarPage />} />









          

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
