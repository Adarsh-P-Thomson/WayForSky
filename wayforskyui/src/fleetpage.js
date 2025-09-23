import React, { useState, useEffect, useCallback } from 'react';

// ✅ Import local images from the assets folder
import cessna172 from './assets/Cessna 172.jpeg';
import tecnam2008 from './assets/Tecnam 2008 JC.jpg';
import piperArcher from './assets/Piper 28 181 Archer III.jpg';
import diamondDA42 from './assets/Diamond DA42.jpeg';
import beechcraftBaron from './assets/Beechcraft Baron.jpeg';
import piperSeneca from './assets/Piper Seneca.jpg';
import tecnam2006 from './assets/Tecnam 2006T.jpg';
import fnptII from './assets/FNPT II.jpg';
import a320Sim from './assets/A320 Simulator.jpeg';
import b737Sim from './assets/B737 Simulator.jpg';
import alsim from './assets/Alsim.jpeg';
import redbird from './assets/Redbird.jpg';


// Main Fleet Component
const FleetPage = () => {
    // --- STATE MANAGEMENT ---
    const [selectedAircraft, setSelectedAircraft] = useState(null);
    const [isModalAnimating, setIsModalAnimating] = useState(false);

    // --- DATA ---
    // ✅ Updated image paths to use local imports
    const fleetGalleryData = [
        { 
            id: 'cessna-172', 
            name: 'Cessna 172 Skyhawk', 
            model: 'Single-Engine Aircraft', 
            image: cessna172, 
            description: '<b>Seats:</b> 4<br><b>Cruise Speed:</b> ~120 knots<br><b>Range:</b> ~640 nm<br><b>Avionics:</b> Often equipped with Garmin G1000.<br><b>Role in Training:</b> World’s most popular trainer, used for PPL and CPL initial training. Perfect for solo flights and navigation.' 
        },
        { 
            id: 'tecnam-p2008jc', 
            name: 'Tecnam P2008JC', 
            model: 'Single-Engine Aircraft', 
            image: tecnam2008, 
            description: '<b>Seats:</b> 2<br><b>Cruise Speed:</b> ~115 knots<br><b>Range:</b> ~650 nm<br><b>Avionics:</b> Modern digital cockpit with Garmin G3X.<br><b>Role in Training:</b> Lightweight, efficient, cost-friendly trainer.' 
        },
        { 
            id: 'piper-archer-iii', 
            name: 'Piper Archer III (PA-28-181)', 
            model: 'Single-Engine Aircraft', 
            image: piperArcher, 
            description: '<b>Seats:</b> 4<br><b>Cruise Speed:</b> ~120 knots<br><b>Range:</b> ~520 nm<br><b>Avionics:</b> Garmin G500 or analog panels.<br><b>Role in Training:</b> Reliable for cross-country and CPL hour building.' 
        },
        { 
            id: 'diamond-da42', 
            name: 'Diamond DA42 Twin Star', 
            model: 'Multi-Engine Aircraft', 
            image: diamondDA42, 
            description: '<b>Seats:</b> 4<br><b>Cruise Speed:</b> ~180 knots<br><b>Range:</b> ~1,200 nm<br><b>Avionics:</b> Garmin G1000, advanced autopilot.<br><b>Role in Training:</b> Standard for Multi-Engine Rating (ME). Modern safety features and fuel efficiency.' 
        },
        { 
            id: 'beechcraft-baron', 
            name: 'Beechcraft Baron (BE58)', 
            model: 'Multi-Engine Aircraft', 
            image: beechcraftBaron, 
            description: '<b>Seats:</b> 6<br><b>Cruise Speed:</b> ~200 knots<br><b>Range:</b> ~1,000 nm<br><b>Role in Training:</b> High-performance twin-engine aircraft, ideal for advanced multi-engine training.' 
        },
        { 
            id: 'piper-seneca-ii', 
            name: 'Piper Seneca II (PA-34)', 
            model: 'Multi-Engine Aircraft', 
            image: piperSeneca, 
            description: '<b>Seats:</b> 6<br><b>Cruise Speed:</b> ~190 knots<br><b>Range:</b> ~820 nm<br><b>Role in Training:</b> Widely used for ME ratings worldwide; forgiving handling for students.' 
        },
        { 
            id: 'tecnam-p2006t', 
            name: 'Tecnam P2006T', 
            model: 'Multi-Engine Aircraft', 
            image: tecnam2006, 
            description: '<b>Seats:</b> 4<br><b>Cruise Speed:</b> ~145 knots<br><b>Range:</b> ~650 nm<br><b>Avionics:</b> Glass cockpit options available.<br><b>Role in Training:</b> Lightweight, fuel-efficient twin trainer.' 
        }
    ];

    const simulatorData = [
        { 
            id: 'fnpt-ii-sim', 
            name: 'FNPT II Simulator', 
            model: 'Flight & Navigation Trainer', 
            image: fnptII, 
            description: 'Certified for IFR training hours. Used to simulate instrument procedures and emergencies.' 
        },
        { 
            id: 'a320-sim', 
            name: 'A320 Full Flight Simulator', 
            model: 'Airline-Level Simulator', 
            image: a320Sim, 
            description: 'Airline-level training for Type Rating. Replicates real cockpit environment and airline SOPs for the Airbus A320.' 
        },
        { 
            id: 'b737-sim', 
            name: 'B737 Full Flight Simulator', 
            model: 'Airline-Level Simulator', 
            image: b737Sim, 
            description: 'Airline-level training for Type Rating. Replicates real cockpit environment and airline SOPs for the Boeing 737.' 
        },
        {
            id: 'alsim-sim',
            name: 'ALSIM Simulators',
            model: 'Ab-Initio Trainer',
            image: alsim,
            description: 'Known for reliability in ab-initio training. Can simulate single and twin-engine aircraft.'
        },
        {
            id: 'redbird-sim',
            name: 'Redbird Simulator',
            model: 'Versatile Training Device',
            image: redbird,
            description: 'Affordable, versatile training device. Used for early instrument training and procedural practice.'
        }
    ];
    
    // --- LOGIC ---
    const openFleetModal = (itemId) => {
        const allItems = [...fleetGalleryData, ...simulatorData];
        const item = allItems.find(i => i.id === itemId);
        if (item) {
            setSelectedAircraft(item);
            setTimeout(() => { setIsModalAnimating(true); }, 10);
        }
    };

    const closeFleetModal = useCallback(() => {
        setIsModalAnimating(false);
        setTimeout(() => { setSelectedAircraft(null); }, 300);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeFleetModal();
            }
        };
        if (selectedAircraft) {
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedAircraft, closeFleetModal]);
    
    
    // --- RENDER ---
    return (
        <>
            <style>{`
                /* --- GENERAL STYLES & FONTS --- */
                .fleet-component-wrapper {
                    background-color: #ffffff;
                    font-family: 'Inter', sans-serif;
                }

                .container {
                    max-width: 1280px;
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 1rem;
                    padding-right: 1rem;
                }

                @media (min-width: 640px) { .container { padding-left: 1.5rem; padding-right: 1.5rem; } }
                @media (min-width: 1024px) { .container { padding-left: 2rem; padding-right: 2rem; } }
                
                /* --- FLEET GALLERY SECTION --- */
                .gallery-section {
                    padding-top: 4rem;
                    padding-bottom: 2rem; /* Adjusted padding */
                }
                @media (min-width: 1024px) { .gallery-section { padding-top: 6rem; padding-bottom: 3rem; } }
                
                .fleet-heading-container {
                    text-align: left;
                    margin-bottom: 3rem;
                }
                .fleet-title {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    font-size: 2.8rem;
                    font-weight: 700;
                    color: #1a202c;
                    display: inline-block;
                    position: relative;
                    padding-bottom: 0.5rem;
                }
                .fleet-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    transform: none;
                    width: 60px;
                    height: 4px;
                    background-color: #2563eb;
                    border-radius: 2px;
                }
                @media (max-width: 768px) {
                    .fleet-title {
                        font-size: 2.2rem;
                    }
                    .fleet-heading-container {
                        margin-bottom: 2rem;
                    }
                }
                
                .fleet-grid {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 2rem;
                }
                @media (min-width: 768px) { .fleet-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (min-width: 1024px) { .fleet-grid { grid-template-columns: repeat(3, 1fr); gap: 2.5rem; } }

                /* --- FLEET CARD STYLES --- */
                .fleet-card {
                    position: relative;
                    background-color: white;
                    border-radius: 1rem;
                    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                    border: 1px solid #f1f5f9;
                    cursor: pointer;
                }
                .fleet-card:hover { box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); }
                .card-image-wrapper { position: relative; overflow: hidden; aspect-ratio: 4 / 3; }
                .card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transform-origin: center center;
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .fleet-card:hover .card-image { transform: scale(1.1); }
                .card-gradient-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: linear-gradient(to top, rgba(0,0,0,0.6), transparent, transparent);
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                }
                .fleet-card:hover .card-gradient-overlay { opacity: 1; }
                .card-text-overlay {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 1.5rem;
                    opacity: 0;
                    transform: translateY(1rem);
                    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
                }
                .fleet-card:hover .card-text-overlay { opacity: 1; transform: translateY(0); }
                .card-text-overlay h3 { color: white; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.5)); }
                .card-text-overlay p { color: rgba(255,255,255,0.9); font-weight: 500; font-size: 1.125rem; filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.5)); }
                .card-text-overlay .details-text { font-size: 0.875rem; color: rgba(255,255,255,0.8); margin-top: 0.5rem; }
                .card-info-bar { padding: 1.5rem; background: linear-gradient(to right, #f8fafc, #ffffff); }
                .card-info-bar h3 { color: #0f172a; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.25rem; }
                .card-info-bar p { color: #475569; font-weight: 500; }

                /* --- MODAL STYLES --- */
                .modal-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 50;
                    background-color: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(8px);
                    transition: opacity 0.3s ease-in-out;
                }
                .modal-container { display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 1rem; }
                .modal-content {
                    background-color: white;
                    border-radius: 1rem;
                    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
                    max-width: 42rem;
                    width: 100%;
                    max-height: 90vh;
                    overflow: auto; /* Changed to auto for scrollable content */
                    position: relative;
                    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
                }
                .modal-close-button {
                    position: absolute;
                    top: 1rem; right: 1rem;
                    z-index: 10;
                    width: 2.5rem; height: 2.5rem;
                    background-color: rgba(255,255,255,0.9);
                    border: none;
                    border-radius: 9999px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                    transition: all 0.2s;
                    cursor: pointer;
                }
                .modal-close-button:hover { background-color: white; transform: scale(1.1); }
                .modal-close-button svg { width: 1.25rem; height: 1.25rem; color: #4b5563; }
                .modal-image-wrapper { position: relative; }
                .modal-image { width: 100%; height: 16rem; object-fit: cover; }
                .modal-image-gradient { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.4), transparent); }
                .modal-image-text { position: absolute; bottom: 1.5rem; left: 1.5rem; }
                .modal-image-text h2 { color: white; font-size: 1.875rem; font-weight: 700; margin-bottom: 0.5rem; filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.5)); }
                .modal-image-text p { color: rgba(255,255,255,0.9); font-size: 1.25rem; font-weight: 500; filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.5)); }
                .modal-details { padding: 2rem; }
                .modal-details h3 { font-size: 1.5rem; font-weight: 700; color: #111827; margin-bottom: 1.5rem; }
                .modal-details .description { color: #374151; line-height: 1.75; font-size: 1.125rem; }

                /* Modal Animations */
                .modal-enter { opacity: 0; }
                .modal-enter .modal-content { transform: scale(0.95) translateY(-20px); opacity: 0; }
                .modal-show { opacity: 1; }
                .modal-show .modal-content { transform: scale(1) translateY(0); opacity: 1; }
            `}</style>
            
            <div className="fleet-component-wrapper">
                {/* Fleet Gallery Section */}
                <div className="container gallery-section">
                    <div className="fleet-heading-container">
                        <h1 className="fleet-title">Our Fleets</h1>
                    </div>

                    <div className="fleet-grid">
                        {fleetGalleryData.map((aircraft) => (
                            <div
                                key={aircraft.id}
                                className="fleet-card"
                                onClick={() => openFleetModal(aircraft.id)}
                            >
                                <div className="card-image-wrapper">
                                    <img 
                                        src={aircraft.image} 
                                        alt={aircraft.name}
                                        className="card-image"
                                    />
                                    <div className="card-gradient-overlay"></div>
                                    <div className="card-text-overlay">
                                        <h3>{aircraft.name}</h3>
                                        <p>{aircraft.model}</p>
                                        <p className="details-text">Click to view details</p>
                                    </div>
                                </div>
                                <div className="card-info-bar">
                                    <h3>{aircraft.name}</h3>
                                    <p>{aircraft.model}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Simulator Section */}
                <div className="container gallery-section" style={{paddingTop: '0', paddingBottom: '4rem'}}>
                    <div className="fleet-heading-container">
                        <h1 className="fleet-title">Our Simulators</h1>
                    </div>

                    <div className="fleet-grid">
                        {simulatorData.map((sim) => (
                            <div
                                key={sim.id}
                                className="fleet-card"
                                onClick={() => openFleetModal(sim.id)}
                            >
                                <div className="card-image-wrapper">
                                    <img 
                                        src={sim.image} 
                                        alt={sim.name}
                                        className="card-image"
                                    />
                                    <div className="card-gradient-overlay"></div>
                                    <div className="card-text-overlay">
                                        <h3>{sim.name}</h3>
                                        <p>{sim.model}</p>
                                        <p className="details-text">Click to view details</p>
                                    </div>
                                </div>
                                <div className="card-info-bar">
                                    <h3>{sim.name}</h3>
                                    <p>{sim.model}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal for fleet description */}
                {selectedAircraft && (
                    <div
                        className={`modal-backdrop ${isModalAnimating ? 'modal-show' : 'modal-enter'}`}
                        onClick={closeFleetModal}
                    >
                        <div className="modal-container">
                            <div
                                className="modal-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="modal-close-button" onClick={closeFleetModal}>
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                                
                                <div className="modal-image-wrapper">
                                    <img src={selectedAircraft.image} alt={selectedAircraft.name} className="modal-image" />
                                    <div className="modal-image-gradient"></div>
                                    <div className="modal-image-text">
                                        <h2>{selectedAircraft.name}</h2>
                                        <p>{selectedAircraft.model}</p>
                                    </div>
                                </div>
                                <div className="modal-details">
                                    <h3>Description</h3>
                                    <p className="description" dangerouslySetInnerHTML={{ __html: selectedAircraft.description }}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default FleetPage;
