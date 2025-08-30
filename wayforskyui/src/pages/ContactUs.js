import React, { useState, useEffect, useRef, useCallback } from 'react';

const Styles = () => {
    const css = `
        /* General Styles */
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
        }

        /* Location/Map Section Styles */
        .animate-spin {
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .hover-scale:hover {
            transform: translateY(-2px);
        }
        .transition-all {
            transition: all 0.2s ease-in-out;
        }
        .glass-effect-map {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.95);
        }
        .premium-shadow {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        /* Form Section Styles */
        .gradient-bg {
            background: linear-gradient(135deg, #00d4ff 0%, #3b82f6 25%, #8b5cf6 50%, #ec4899 75%, #f97316 100%);
        }

        .glass-effect {
            backdrop-filter: blur(20px);
            background: rgba(0, 0, 0, 0.6);
        }

        .interest-btn {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .interest-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
        }

        .interest-btn.selected {
            background: white;
            color: black;
            border-color: white;
        }

        .form-input {
            transition: all 0.3s ease;
        }

        .form-input:focus {
            border-color: rgba(255, 255, 255, 0.6);
            outline: none;
        }

        .submit-btn {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .submit-btn:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }

        .submit-btn:active {
            transform: translateY(0) scale(0.98);
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
            .main-container {
                flex-direction: column;
            }
            
            .left-section {
                min-height: 50vh;
                padding: 2rem;
            }
            
            .right-section {
                padding: 2rem;
            }
            
            .main-heading {
                font-size: 3rem;
                line-height: 1.1;
            }
        }

        @media (min-width: 1025px) {
            .content-wrapper {
                margin: 0 4cm;
                max-width: calc(100vw - 8cm);
                min-height: 90vh;
                max-height: none;
            }
            .left-section {
                flex: 0 0 45%;
                max-width: 45%;
            }
            .right-section {
                flex: 0 0 55%;
                max-width: 55%;
                padding: 3rem;
            }
        }

        @media (max-width: 768px) {
            .interest-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    `;
    return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

const CalendarGrid = ({ currentMonth, selectedDate, onDateSelect }) => {
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();

    const blanks = Array(firstDayOfWeek).fill(null);
    const daysInMonth = Array.from({ length: totalDays }, (_, i) => i + 1);

    return (
        <div id="calendarGrid" className="grid grid-cols-7 gap-1 mb-6">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                <div key={day} className="text-center text-gray-500 text-sm py-2">{day}</div>
            ))}
            {blanks.map((_, i) => <div key={`blank-${i}`}></div>)}
            {daysInMonth.map(day => {
                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                return (
                    <button
                        key={day}
                        onClick={() => onDateSelect(date)}
                        className={`w-10 h-10 text-center rounded-full hover:bg-gray-700 transition-colors text-white ${isSelected ? 'bg-pink-500' : ''}`}
                    >
                        {day}
                    </button>
                );
            })}
        </div>
    );
};

const ContactUs = () => {
    // State for the form
    const [selectedInterests, setSelectedInterests] = useState(new Set());
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        country: '',
        intake: '',
        budget: '',
        'ground-classes': '',
        project: '',
        consent: false,
    });

    // State for popups
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);
    const [showSchedulingModal, setShowSchedulingModal] = useState(false);
    const [showFinalConfirmation, setShowFinalConfirmation] = useState(false);

    // State for scheduling modal
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [step, setStep] = useState('calendar'); // 'calendar' or 'time'

    const mapRef = useRef(null);

    const handleInterestClick = (interest) => {
        const newInterests = new Set(selectedInterests);
        if (newInterests.has(interest)) {
            newInterests.delete(interest);
        } else {
            newInterests.add(interest);
        }
        setSelectedInterests(newInterests);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const submissionData = {
            ...formData,
            interests: Array.from(selectedInterests),
        };
        console.log('Form submitted:', submissionData);
        setShowSuccessPopup(true);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const openSchedulingModal = () => {
        setShowSuccessPopup(false);
        setShowSchedulingModal(true);
    };

    const handleNoThanks = () => {
        setShowSuccessPopup(false);
        setShowThankYouPopup(true);
    };

    const closeThankYouPopup = () => setShowThankYouPopup(false);
    const closeSchedulingModal = () => setShowSchedulingModal(false);
    const confirmSession = () => {
        setShowSchedulingModal(false);
        setShowFinalConfirmation(true);
    };
    const closeFinalConfirmation = () => setShowFinalConfirmation(false);

    const handlePrevMonth = () => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    const handleNextMonth = () => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));

    const updateSelectedDateTime = () => {
        if (selectedDate && selectedTime) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const dateStr = selectedDate.toLocaleDateString('en-US', options);
            return `${selectedTime}, ${dateStr}`;
        }
        return 'Select date and time';
    };

    const initMap = useCallback(() => {
        const COMPANY_LOCATION = { lat: 12.98125, lng: 77.60672 };
        if (mapRef.current && window.google) {
            const mapLoader = document.getElementById('mapLoader');
            if (mapLoader) mapLoader.style.display = 'none';

            const map = new window.google.maps.Map(mapRef.current, {
                zoom: 15,
                center: COMPANY_LOCATION,
                styles: [ /* Map styles from your HTML file can be added here */ ]
            });
            new window.google.maps.Marker({
                position: COMPANY_LOCATION,
                map: map,
                title: 'Our Training Center',
                animation: window.google.maps.Animation.DROP,
            });
        }
    }, []);

    useEffect(() => {
        const GOOGLE_MAPS_API_KEY = 'YourApikey'; // IMPORTANT: Replace with your actual key
        if (window.google && window.google.maps) {
            initMap();
            return;
        }

        window.initMap = initMap;

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.onerror = () => {
            const mapLoader = document.getElementById('mapLoader');
            if (mapLoader) mapLoader.innerHTML = `<p class="text-red-500">Failed to load map.</p>`;
        };
        document.head.appendChild(script);

        return () => {
            const scriptElement = document.querySelector(`script[src*="${GOOGLE_MAPS_API_KEY}"]`);
            if (scriptElement) {
                document.head.removeChild(scriptElement);
            }
            delete window.initMap;
        };
    }, [initMap]);

    const interestButtons = [
        { label: 'Private Pilot License', key: 'PPL' },
        { label: 'Commercial Pilot License', key: 'CPL' },
        { label: 'DGCA Ground Classes', key: 'DGCA' },
        { label: 'Aviation Diploma', key: 'Diploma' },
        { label: 'Other', key: 'Other' },
    ];

    return (
        <>
            <Styles />
            <div className="min-h-screen relative">
                <div className="absolute inset-0 gradient-bg"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 min-h-screen flex main-container content-wrapper">
                    <div className="flex-1 flex flex-col justify-between p-16 left-section">
                        <div className="flex-1 flex items-center">
                            <div>
                                <h2 className="text-white font-bold leading-tight mb-8 main-heading" style={{ fontSize: '3.5rem' }}>
                                    Got a Big Idea?<br />
                                    We've Got the<br />
                                    Wings for It.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 glass-effect p-16 right-section">
                        <nav className="flex justify-start space-x-8 mb-16 nav-menu">
                            <a href="#" className="nav-link active text-lg">Contact Us</a>
                        </nav>
                        <form id="contactForm" className="space-y-8" onSubmit={handleSubmit}>
                            <div>
                                <p className="text-gray-400 text-lg mb-6">I'm interested in...</p>
                                <div className="grid grid-cols-3 gap-4 mb-8 interest-grid">
                                    {interestButtons.map(btn => (
                                        <button
                                            key={btn.key}
                                            type="button"
                                            className={`interest-btn px-6 py-3 border border-gray-600 text-sm font-medium text-gray-300 ${selectedInterests.has(btn.key) ? 'selected' : ''}`}
                                            onClick={() => handleInterestClick(btn.key)}
                                        >{btn.label}</button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <input type="text" name="name" placeholder="Your name" onChange={handleInputChange} value={formData.name} className="form-input w-full bg-transparent border-0 border-b border-gray-600 py-4 text-white placeholder-gray-500 text-lg" />
                            </div>
                            <div>
                                <input type="tel" name="phone" placeholder="Your phone number" onChange={handleInputChange} value={formData.phone} className="form-input w-full bg-transparent border-0 border-b border-gray-600 py-4 text-white placeholder-gray-500 text-lg" />
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Your email" onChange={handleInputChange} value={formData.email} className="form-input w-full bg-transparent border-0 border-b border-gray-600 py-4 text-white placeholder-gray-500 text-lg" />
                            </div>
                            <div>
                                <select name="country" onChange={handleInputChange} value={formData.country} className="form-input w-full bg-transparent border-0 border-b border-gray-600 py-4 text-white placeholder-gray-500 text-lg" style={{ color: formData.country ? 'white' : '#9ca3af' }}>
                                    <option value="" disabled>Country of Interest</option>
                                    <option value="india" style={{ color: '#000' }}>India</option>
                                    <option value="south-africa" style={{ color: '#000' }}>South Africa</option>
                                    <option value="hungary" style={{ color: '#000' }}>Hungary</option>
                                    <option value="other" style={{ color: '#000' }}>Other</option>
                                </select>
                            </div>
                            <div>
                                <textarea name="project" placeholder="Anything you'd like to add? (optional)" rows="4" onChange={handleInputChange} value={formData.project} className="form-input w-full bg-transparent border-0 border-b border-gray-600 py-4 text-white placeholder-gray-500 resize-none text-lg"></textarea>
                            </div>
                            <div className="pt-4">
                                <label className="flex items-start space-x-3 text-gray-400 text-sm cursor-pointer">
                                    <input type="checkbox" name="consent" required onChange={handleInputChange} checked={formData.consent} className="mt-1 w-4 h-4 text-white bg-transparent border border-gray-600 rounded focus:ring-2 focus:ring-white focus:ring-opacity-50" />
                                    <span className="leading-relaxed">I consent to WayForSky storing my information to contact me about aviation training opportunities.</span>
                                </label>
                            </div>
                            <div className="pt-8 flex justify-start">
                                <button type="submit" className="submit-btn bg-white text-black px-8 py-4 font-medium text-lg shadow-lg">Sent request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mx-auto py-12 px-4 bg-white max-w-[calc(theme(maxWidth.7xl)+4cm)]">
                <div className="bg-white l overflow-hidden border border-gray-100">
                    <div className="grid lg:grid-cols-12 min-h-[600px]">
                        <div className="lg:col-span-4 p-12 lg:p-16 bg-gray-50 flex flex-col justify-center border-r border-gray-200">
                            {/* Contact Info */}
                        </div>
                        <div className="relative lg:col-span-8">
                            <div id="map" ref={mapRef} className="w-full h-full min-h-[400px] lg:min-h-[600px] bg-gray-100 flex items-center justify-center">
                                <div id="mapLoader" className="text-center">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                                    <p className="text-gray-600">Loading map...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {showSuccessPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
                        <div className="text-4xl mb-4">✅</div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Thank you for sharing your details!</h3>
                        <p className="text-gray-600 mb-6">Our team has received your enquiry and will get back to you shortly. Would you like to book a free phone counselling session with one of our Junior Counsellors at a time that suits you?</p>
                        <div className="flex flex-col gap-3">
                            <button onClick={openSchedulingModal} className="bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors">
                                Yes, Book My Free Counselling Session
                            </button>
                            <button onClick={handleNoThanks} className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                                No Thanks, I'll Wait for Contact
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showThankYouPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
                        <div className="text-4xl mb-4">✅</div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Your enquiry has been submitted successfully.</h3>
                        <p className="text-gray-600 mb-6">Our team will reach out to you soon.</p>
                        <button onClick={closeThankYouPopup} className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                            Close
                        </button>
                    </div>
                </div>
            )}

            {showSchedulingModal && (
                <div id="schedulingModal" className="fixed inset-0 bg-black md:bg-opacity-90 flex items-center justify-center z-[9999]">
                    <div className="bg-black text-white rounded-lg max-w-6xl w-full mx-4 h-[90vh] flex">
                        <div className="w-1/2 p-12 flex-col justify-center hidden md:flex">
                            <h1 className="text-5xl font-light mb-6 leading-tight">Let's get down to business</h1>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                We'd love to chat! If you fill out the information below, someone from the team will reach out right away!
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 bg-gray-900 p-8 overflow-y-auto">
                            <div className="flex mb-8 border-b border-gray-700">
                                <button className="tab-btn px-6 py-3 text-gray-400 border-b-2 border-transparent" data-tab="message">Send a Message</button>
                                <button className="tab-btn px-6 py-3 text-white border-b-2 border-pink-500 active" data-tab="schedule">Schedule a Call</button>
                            </div>

                            {step === 'calendar' && (
                                <div id="calendarStep">
                                    <div className="flex items-center justify-between mb-4">
                                        <button onClick={handlePrevMonth} className="text-white hover:text-pink-500 transition-colors">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                        </button>
                                        <h3 id="currentMonth" className="text-xl font-medium">{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
                                        <button onClick={handleNextMonth} className="text-white hover:text-pink-500 transition-colors">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                        </button>
                                    </div>
                                    <CalendarGrid currentMonth={currentMonth} selectedDate={selectedDate} onDateSelect={setSelectedDate} />
                                    <button onClick={() => setStep('time')} className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!selectedDate}>
                                        Next
                                    </button>
                                </div>
                            )}

                            {step === 'time' && (
                                <div id="timeStep">
                                    <h3 className="text-xl font-medium mb-6">Select Time</h3>
                                    <div className="grid grid-cols-4 gap-3 mb-8">
                                        {['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM'].map(time => (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`time-slot border rounded-full px-4 py-2 text-sm transition-colors ${selectedTime === time ? 'bg-pink-500 border-pink-500' : 'border-gray-600 hover:border-pink-500'}`}
                                            >{time}</button>
                                        ))}
                                    </div>
                                    <div className="bg-gray-800 rounded-lg p-4 mb-6">
                                        <h4 className="font-medium mb-2">📞 Free Phone Counselling Session</h4>
                                        <div className="text-sm text-gray-400 space-y-1">
                                            <div id="selectedDateTime">{updateSelectedDateTime()}</div>
                                        </div>
                                    </div>
                                    <button onClick={confirmSession} className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!selectedTime}>
                                        Confirm My Session
                                    </button>
                                </div>
                            )}

                            <button onClick={closeSchedulingModal} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showFinalConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
                        <div className="text-4xl mb-4">🎉</div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Your counselling session has been booked successfully!</h3>
                        <p className="text-gray-600 mb-6">Our Junior Counsellor will call you on your selected date and time. A confirmation email/WhatsApp has also been sent to you.</p>
                        <button onClick={closeFinalConfirmation} className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactUs;