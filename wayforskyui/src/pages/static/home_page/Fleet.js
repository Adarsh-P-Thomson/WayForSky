import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import cessna172 from '../../../assets/Fleets/cessna.png';
import tecnam2008 from '../../../assets/Fleets/tecnam.jpg';
import piperArcher from '../../../assets/Fleets/piper28.jpg';
import diamondDA42 from '../../../assets/Fleets/diamond.png';
import beechcraftBaron from '../../../assets/Fleets/beechcraft.jpg';
import piperSeneca from '../../../assets/Fleets/piperseneca.jpg';
import tecnam2006 from '../../../assets/Fleets/tecnam2006.jpg';
import fnptII from '../../../assets/Fleets/fnpt.png';
import a320 from '../../../assets/Fleets/a320simulator.jpg';
import alsim from '../../../assets/Fleets/alsim.jpg';
import redbird from '../../../assets/Fleets/redbird.jpg';


import './Fleet.css';

const Fleet = () => {
  // ✅ Display names remain proper, only imports are simplified
  const aircrafts = [
    { name: "Cessna 172", category: "Single Engine", image: cessna172 },
    { name: "Tecnam 2008JC", category: "Single Engine", image: tecnam2008 },
    { name: "Piper 28 181 Archer III", category: "Single Engine", image: piperArcher },
    { name: "Diamond DA42", category: "Multi-Engine", image: diamondDA42 },
    { name: "Beechcraft Baron", category: "Multi-Engine", image: beechcraftBaron },
    { name: "Piper Seneca II", category: "Multi-Engine", image: piperSeneca },
    { name: "Tecnam 2006T", category: "Multi-Engine", image: tecnam2006 },
    { name: "FNPT II", category: "Simulators", image: fnptII },
    { name: "A320 / B737", category: "Simulators", image: a320 },
    { name: "ALSIM", category: "Simulators", image: alsim },
    { name: "Redbird", category: "Simulators", image: redbird },
  ];


  // State to track the index in the master 'aircrafts' list
  const [masterIndex, setMasterIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next'); // 'next' | 'prev' for subtle directional cues
  const [paused, setPaused] = useState(false); // pause auto-rotate on hover
  const displayRef = useRef(null);
  
  // The active category is now derived from the current aircraft in the master list
  const activeCategory = aircrafts[masterIndex].category;

  // Filtered list for rendering indicators based on the active category
  const filteredAircrafts = aircrafts.filter(a => a.category === activeCategory);

  // The current aircraft is always taken from the master list
  const currentAircraft = aircrafts[masterIndex];
  
  // Find the index of the current aircraft within its own category for the indicator highlight
  const currentIndexInCategory = filteredAircrafts.findIndex(a => a.name === currentAircraft.name);
const navigate = useNavigate();
  // REFACTORED: Navigation now works on the entire 'aircrafts' list
  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    
    setTimeout(() => {
      const nextIndex = (masterIndex + 1) % aircrafts.length;
      setMasterIndex(nextIndex);
      setIsTransitioning(false);
    }, 250);
  }, [isTransitioning, masterIndex, aircrafts.length]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    
    setTimeout(() => {
      const prevIndex = (masterIndex - 1 + aircrafts.length) % aircrafts.length;
      setMasterIndex(prevIndex);
      setIsTransitioning(false);
    }, 250);
  }, [isTransitioning, masterIndex, aircrafts.length]);

  // REFACTORED: Jumps to the first aircraft of the selected category
  const handleCategoryFilter = (category) => {
    if (isTransitioning || category === activeCategory) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      const firstIndexInCategory = aircrafts.findIndex(a => a.category === category);
      if (firstIndexInCategory !== -1) {
        setDirection('next');
        setMasterIndex(firstIndexInCategory);
      }
      setIsTransitioning(false);
    }, 250);
  };

  // REFACTORED: Clicking an indicator finds the aircraft in the master list
  const handleIndicatorClick = (indicatorIndex) => {
    const targetAircraft = filteredAircrafts[indicatorIndex];
    if (targetAircraft.name === currentAircraft.name || isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      const newMasterIndex = aircrafts.findIndex(a => a.name === targetAircraft.name);
      if (newMasterIndex !== -1) {
        setDirection(newMasterIndex > masterIndex ? 'next' : 'prev');
        setMasterIndex(newMasterIndex);
      }
      setIsTransitioning(false);
    }, 250);
  };

  // Auto-rotate through aircrafts for a lively, fun feel
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused && !isTransitioning) {
        handleNext();
      }
    }, 4000);
    return () => clearInterval(id);
  }, [paused, isTransitioning, handleNext]);

  // Interactive tilt effect via CSS variables
  const handleMouseMove = (e) => {
    if (!displayRef.current) return;
    const rect = displayRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1; // -1 to 1
    const py = (y / rect.height) * 2 - 1;
    const rotateY = px * 6; // deg
    const rotateX = -py * 6; // deg
    displayRef.current.style.setProperty('--ry', `${rotateY}deg`);
    displayRef.current.style.setProperty('--rx', `${rotateX}deg`);
  };

  const handleMouseLeaveTilt = () => {
    if (!displayRef.current) return;
    displayRef.current.style.setProperty('--ry', `0deg`);
    displayRef.current.style.setProperty('--rx', `0deg`);
  };

  return (
    <div className="fleet-container">
      <div className="fleet-content">
        
        <div className="fleet-header-top">
          <h2 className="fleet-title">
            Our Fleets 
          </h2>
<button
  className="explore-button"
  onClick={() => {
    navigate("/fleet");
    window.scrollTo(0, 0); // 👈 ensures page starts at top
  }}
>
  <span>Explore Our Fleet</span>
  <svg 
    className="explore-icon" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
</button>
        </div>
        
        <p className="fleet-description">
          Our partner academies provide access to modern and reliable training fleets,
          all meticulously maintained to the highest aviation safety standards.
        </p>

        <div className="aircraft-header">
          <h1 className={`aircraft-name ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            {currentAircraft?.name}
          </h1>
          <p className={`aircraft-category ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            {currentAircraft?.category}
          </p>
        </div>

        <div className="main-content">
          <div className="aircraft-container">
            <div
              className={`aircraft-display ${direction}`}
              ref={displayRef}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => { setPaused(false); handleMouseLeaveTilt(); }}
              onMouseMove={handleMouseMove}
            >
              <button
                className="nav-button nav-button-prev"
                onClick={handlePrev}
              >
                <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
            
              <button
                className="nav-button nav-button-next"
                onClick={handleNext}
              >
                <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            
              <img
                src={currentAircraft?.image}
                alt={currentAircraft?.name}
                className={`aircraft-image ${isTransitioning ? 'fade-out' : 'fade-in'}`}
              />
              <div className="platform-large" />
              <div className="platform-small" />
            </div>
          </div>
        </div>

        <div className="indicators">
          {filteredAircrafts.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndexInCategory ? 'indicator-active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>

        <div className="category-filter">
          <button 
            className={`category-btn ${activeCategory === 'Single Engine' ? 'category-btn-active' : ''}`}
            onClick={() => handleCategoryFilter('Single Engine')}
          >
            Single Engine
          </button>
          <button 
            className={`category-btn ${activeCategory === 'Multi-Engine' ? 'category-btn-active' : ''}`}
            onClick={() => handleCategoryFilter('Multi-Engine')}
          >
            Multi-Engine
          </button>
          <button 
            className={`category-btn ${activeCategory === 'Simulators' ? 'category-btn-active' : ''}`}
            onClick={() => handleCategoryFilter('Simulators')}
          >
            Simulators
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fleet;