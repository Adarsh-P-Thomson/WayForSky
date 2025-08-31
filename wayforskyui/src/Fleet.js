import React, { useState, useEffect } from 'react';
import './Fleet.css';

const Fleet = () => {
  // MODIFIED: Updated the master list of all aircraft and simulators
  const aircrafts = [
    { name: "Cessna 172", category: "Single Engine", image: "/cessna-172-side.png" },
    { name: "Tecnam 2008JC", category: "Single Engine", image: "/tecnam-2008jc.png" },
    { name: "Piper 28 181 Archer III", category: "Single Engine", image: "/piper-archer-iii.png" },
    { name: "Diamond DA42", category: "Multi-Engine", image: "/diamond-da42-side.png" },
    { name: "Beechcraft Baron", category: "Multi-Engine", image: "/beechcraft-baron-side.png" },
    { name: "Piper Seneca II", category: "Multi-Engine", image: "/piper-seneca-ii.png" },
    { name: "Tecnam 2006T", category: "Multi-Engine", image: "/tecnam-2006t.png" },
    { name: "FNPT II", category: "Simulators", image: "/fnpt-ii.png" },
    { name: "A320 / B737", category: "Simulators", image: "/a320-b737-sim.png" },
    { name: "ALSIM", category: "Simulators", image: "/alsim-simulator.png" },
    { name: "Redbird", category: "Simulators", image: "/redbird-simulator.png" },
  ];

  // State to track the index in the master 'aircrafts' list
  const [masterIndex, setMasterIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // The active category is now derived from the current aircraft in the master list
  const activeCategory = aircrafts[masterIndex].category;

  // Filtered list for rendering indicators based on the active category
  const filteredAircrafts = aircrafts.filter(a => a.category === activeCategory);

  // The current aircraft is always taken from the master list
  const currentAircraft = aircrafts[masterIndex];
  
  // Find the index of the current aircraft within its own category for the indicator highlight
  const currentIndexInCategory = filteredAircrafts.findIndex(a => a.name === currentAircraft.name);

  // REFACTORED: Navigation now works on the entire 'aircrafts' list
  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      const nextIndex = (masterIndex + 1) % aircrafts.length;
      setMasterIndex(nextIndex);
      setIsTransitioning(false);
    }, 250);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      const prevIndex = (masterIndex - 1 + aircrafts.length) % aircrafts.length;
      setMasterIndex(prevIndex);
      setIsTransitioning(false);
    }, 250);
  };

  // REFACTORED: Jumps to the first aircraft of the selected category
  const handleCategoryFilter = (category) => {
    if (isTransitioning || category === activeCategory) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      const firstIndexInCategory = aircrafts.findIndex(a => a.category === category);
      if (firstIndexInCategory !== -1) {
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
        setMasterIndex(newMasterIndex);
      }
      setIsTransitioning(false);
    }, 250);
  };

  return (
    <div className="fleet-container">
      <div className="fleet-content">
        
        <div className="fleet-header-top">
          <h2 className="fleet-title">
            Our Fleets 
          </h2>
          <button className="explore-button">
            <span>Explore Our Fleet</span>
            <svg className="explore-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
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
            <div className="aircraft-display">
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