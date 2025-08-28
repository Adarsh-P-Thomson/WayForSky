import React, { useState, useEffect } from 'react';
import './Fleet.css';

const Fleet = () => {
  const aircrafts = [
    {
      name: "Cessna 172",
      category: "Single Engine",
      image: "/cessna-172-side.png"
    },
    {
      name: "Piper Cherokee",
      category: "Single Engine", 
      image: "/piper-cherokee-side.png"
    },
    {
      name: "Beechcraft Baron",
      category: "Multi-Engine",
      image: "/beechcraft-baron-side.png"
    },
    {
      name: "Diamond DA42",
      category: "Multi-Engine",
      image: "/diamond-da42-side.png"
    },
    {
      name: "Flight Simulator",
      category: "Simulators",
      image: "/flight-simulator.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [filteredAircrafts, setFilteredAircrafts] = useState(aircrafts);
  const [activeCategory, setActiveCategory] = useState("Single Engine");

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === filteredAircrafts.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 250);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? filteredAircrafts.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 250);
  };

  const handleCategoryFilter = (category) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveCategory(category);
    
    setTimeout(() => {
      const filtered = aircrafts.filter(aircraft => aircraft.category === category);
      setFilteredAircrafts(filtered);
      setCurrentIndex(0);
      setIsTransitioning(false);
    }, 250);
  };

  const handleIndicatorClick = (index) => {
    if (index === currentIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 250);
  };

  useEffect(() => {
    const filtered = aircrafts.filter(aircraft => aircraft.category === activeCategory);
    setFilteredAircrafts(filtered);
    setCurrentIndex(0);
  }, []);

  const currentAircraft = filteredAircrafts[currentIndex];

  return (
    <div className="fleet-container">
      <div className="fleet-content">
        
        {/* MODIFIED: New header structure for title and button alignment */}
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

        {/* Aircraft Header */}
        <div className="aircraft-header">
          <h1 className={`aircraft-name ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            {currentAircraft?.name}
          </h1>
          <p className={`aircraft-category ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            {currentAircraft?.category}
          </p>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="aircraft-container">
            <div className="aircraft-display">
              {/* Previous Button */}
              <button
                className="nav-button nav-button-prev"
                onClick={handlePrev}
              >
                <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
            
              {/* Next Button */}
              <button
                className="nav-button nav-button-next"
                onClick={handleNext}
              >
                <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            

            
              {/* Aircraft Image */}
              <img
                src={currentAircraft?.image}
                alt={currentAircraft?.name}
                className={`aircraft-image ${isTransitioning ? 'fade-out' : 'fade-in'}`}
              />
            </div>
          </div>
        </div>

        {/* Aircraft Indicators */}
        <div className="indicators">
          {filteredAircrafts.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'indicator-active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>

        {/* Category Filter */}
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