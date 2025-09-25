import React, { useState, useEffect } from 'react';
// Import the new components from the official Google Maps library for React
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

const ContactUs = () => {
    // --- All your existing state and form logic remains unchanged ---
    const [selectedInterests, setSelectedInterests] = useState(new Set());
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', country: '', intake: '', budget: '',
        'ground-classes': '', project: '', consent: false,
    });
    const [submitStatus, setSubmitStatus] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);
    const [showSchedulingModal, setShowSchedulingModal] = useState(false);
    const [showFinalConfirmation, setShowFinalConfirmation] = useState(false);
    const [currentStep, setCurrentStep] = useState('calendar');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const timeSlots = [];
    for (let i = 0; i < 16; i++) {
        const hour = 10 + Math.floor(i / 2);
        const minute = (i % 2) * 30;
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
        const displayMinute = minute === 0 ? '00' : '30';
        timeSlots.push(`${displayHour}:${displayMinute} ${period}`);
    }

    const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const COMPANY_LOCATION = { lat: 12.98125, lng: 77.60672 };

    useEffect(() => {
        // We only need to add the Font Awesome stylesheet now.
        // The Google Maps script is handled by the APIProvider component.
        if (!document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"]')) {
            const fontAwesomeLink = document.createElement('link');
            fontAwesomeLink.rel = 'stylesheet';
            fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(fontAwesomeLink);
        }
    }, []);

    // --- All of the old, problematic useEffect and initMap functions have been REMOVED ---
    
    // --- All your handler functions remain unchanged ---
    const handleInterestClick = (interest) => {
        const newInterests = new Set(selectedInterests);
        if (newInterests.has(interest)) {
            newInterests.delete(interest);
        } else {
            newInterests.add(interest);
        }
        setSelectedInterests(newInterests);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { ...formData, interests: Array.from(selectedInterests) };
        console.log('Form submitted:', data);
        setSubmitStatus('Request sent!');
        setShowSuccessPopup(true);
        setTimeout(() => {
            setSubmitStatus('');
        }, 2000);
    };

    const handleBookSession = () => {
        setShowSuccessPopup(false);
        setShowSchedulingModal(true);
    };

    const handleNoThanks = () => {
        setShowSuccessPopup(false);
        setShowThankYouPopup(true);
    };
    
    const handleGetDirections = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${COMPANY_LOCATION.lat},${COMPANY_LOCATION.lng}`;
        window.open(url, '_blank');
    };

    // --- All your scheduling and calendar logic remains unchanged ---
    const generateCalendar = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const calendarGrid = [];
        const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
        const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            calendarGrid.push(date);
        }
        return {
            monthName: monthNames[currentMonth.getMonth()] + ' ' + currentMonth.getFullYear(),
            grid: calendarGrid
        };
    };

    const { monthName, grid } = generateCalendar();

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };
    
    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    const selectedDateTimeString = () => {
        if (selectedDate && selectedTime) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            return `${selectedTime}, ${selectedDate.toLocaleDateString('en-US', options)}`;
        }
        return 'Select date and time';
    };

    const renderCalendar = () => (
        <div id="calendarStep">
            <div className="mb-6">
                <div className="calendar-header">
                    <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))} className="calendar-nav-btn">
                        <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <h3 className="month-name">{monthName}</h3>
                    <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))} className="calendar-nav-btn">
                        <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
                <div className="calendar-days-grid">
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => <div key={day} className="calendar-day-label">{day}</div>)}
                </div>
                <div className="calendar-dates-grid">
                    {grid.map((date, index) => {
                        const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
                        const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                        return (
                            <button
                                key={index}
                                disabled={!isCurrentMonth}
                                onClick={() => handleDateClick(date)}
                                className={`calendar-date-btn ${!isCurrentMonth ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`}
                            >
                                {date.getDate()}
                            </button>
                        );
                    })}
                </div>
            </div>
             <div className="mb-6">
                <label className="form-label-white">Time Zone</label>
                <select className="form-select-dark">
                    <option>India Standard Time (IST)</option>
                    <option>Eastern Time (EST)</option>
                    <option>Pacific Time (PST)</option>
                </select>
            </div>
            <button onClick={() => setCurrentStep('time')} disabled={!selectedDate} className="modal-action-button">
                Next
            </button>
        </div>
    );
    
    const renderTimeSelector = () => (
         <div id="timeStep">
            <div className="mb-6">
                <h3 className="modal-subtitle">Select Time</h3>
                <div className="time-slots-grid">
                    {timeSlots.map((time) => (
                        <button
                            key={time}
                            onClick={() => handleTimeClick(time)}
                            className={`time-slot-btn ${selectedTime === time ? 'selected' : ''}`}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>
            <div className="session-info-box">
                <h4 className="session-info-title">📞 Free Phone Counselling Session</h4>
                <div className="session-info-details">
                    <div className="session-info-item">
                         <svg className="icon-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>30 min</span>
                    </div>
                    <div className="session-info-item">
                        <svg className="icon-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                        <span>Phone call details provided upon confirmation.</span>
                    </div>
                    <div className="session-info-item">
                        <svg className="icon-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 13a2 2 0 002 2h8a2 2 0 002-2L16 7"></path></svg>
                        <span>{selectedDateTimeString()}</span>
                    </div>
                </div>
            </div>
             <button
                onClick={() => {
                    setShowSchedulingModal(false);
                    setShowFinalConfirmation(true);
                }}
                disabled={!selectedTime}
                className="modal-action-button"
            >
                Confirm My Session
            </button>
        </div>
    );
    
    // --- The JSX for your page remains the same, except for the map section ---
    return (
    <>
        {/* Your entire <style> block is preserved here */}
        <style>{`
            /* General Styles */
            body, html {
                overflow-x: hidden;
                margin: 0;
                padding: 0;
            }
            * {
                font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
                box-sizing: border-box;
            }
            .page-container {
                overflow-x: hidden;
                margin-top: 1.6cm;
            }
@media screen and (min-width: 1024px) {
  .page-container {
    overflow-x: hidden;
    margin-top: 2.1cm;
  }
}

            /* Main Section Styles */
            .hero-section {
                min-height: 100vh;
                position: relative;
            }
            .gradient-bg {
                position: absolute;
                inset: 0;
                background: linear-gradient(135deg, #00d4ff 0%, #3b82f6 25%, #8b5cf6 50%, #ec4899 75%, #f97316 100%);
            }
            .dark-overlay {
                position: absolute;
                inset: 0;
                background-color: rgba(0, 0, 0, 0.4);
            }
            .main-container {
                position: relative;
                z-index: 10;
                min-height: 100vh;
                display: flex;
            }
            .left-section {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 4rem;
            }
            .hero-content {
                flex: 1;
                display: flex;
                align-items: center;
            }
            .main-heading {
                color: white;
                font-weight: 700;
                line-height: 1.1;
                margin-bottom: 2rem;
                font-size: 3.5rem;
            }
            .right-section {
                flex: 1;
                padding: 4rem;
                backdrop-filter: blur(20px);
                background: rgba(0, 0, 0, 0.6);
            }
            .main-nav {
                display: flex;
                justify-content: flex-start;
                margin-bottom: 4rem;
            }
            .main-nav a {
                margin-right: 2rem;
                color: white;
                font-size: 1.125rem;
                text-decoration: none;
            }

            /* Form Styles */
            .contact-form {
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
            .form-prompt {
                color: #9ca3af;
                font-size: 1.125rem;
                margin-bottom: 1.5rem;
            }
            .interest-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem;
                margin-bottom: 2rem;
            }
            .interest-btn {
                padding: 0.75rem 1.5rem;
                border: 1px solid #4b5563;
                font-size: 0.875rem;
                font-weight: 500;
                color: #d1d5db;
                background-color: transparent;
                cursor: pointer;
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
            .form-input, .form-select, .form-textarea {
                width: 100%;
                background-color: transparent;
                border: 0;
                border-bottom: 1px solid #4b5563;
                padding: 1rem 0;
                color: white;
                font-size: 1.125rem;
                transition: all 0.3s ease;
            }
            .form-input::placeholder, .form-textarea::placeholder {
                color: #6b7280;
            }
            .form-input:focus, .form-select:focus, .form-textarea:focus {
                border-color: rgba(255, 255, 255, 0.6);
                outline: none;
            }
            .form-select {
                color: #9ca3af;
            }
            .form-select option {
                color: #000;
            }
            .form-textarea {
                resize: none;
            }
            .consent-container {
                padding-top: 1rem;
            }
            .consent-label {
                display: flex;
                align-items: flex-start;
                gap: 0.75rem;
                color: #9ca3af;
                font-size: 0.875rem;
                cursor: pointer;
            }
            .consent-label span {
                line-height: 1.625;
            }
            .consent-checkbox {
                margin-top: 0.25rem;
                width: 1rem;
                height: 1rem;
            }
            .submit-btn-container {
                padding-top: 2rem;
                display: flex;
                justify-content: flex-start;
            }
            .submit-btn {
                background-color: white;
                color: black;
                padding: 1rem 2rem;
                font-weight: 500;
                font-size: 1.125rem;
                border: none;
                box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .submit-btn:hover {
                transform: translateY(-2px) scale(1.02);
                box-shadow: 0 10px 15px -3px rgba(255,255,255,0.2), 0 4px 6px -2px rgba(255,255,255,0.1);
            }
            .submit-btn:active {
                transform: translateY(0) scale(0.98);
            }

            /* Location Section */
            .location-container {
                padding: 3rem 0;
                background-color: white;
            }
            .location-card {
                background-color: white;
                overflow: hidden;
                border: 1px solid #e5e7eb;
            }
            .location-grid {
                display: grid;
                min-height: 600px;
            }
            .contact-info-section {
                padding: 4rem;
                background-color: white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                border-right: 1px solid #e5e7eb;
            }
            .contact-info-content {
                max-width: 28rem;
                margin: 0 auto;
            }
            .contact-header {
                margin-bottom: 2rem;
            }
            .contact-title {
                font-size: 1.875rem;
                font-weight: 300;
                color: #111827;
                margin-bottom: 1rem;
                letter-spacing: 0.025em;
            }
            .contact-subtitle {
                color: #4b5563;
                line-height: 1.625;
                font-weight: 300;
            }
            .contact-details {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }
            .info-item {
                display: flex;
                align-items: flex-start;
                gap: 1rem;
            }
            .info-icon-wrapper {
                flex-shrink: 0;
                width: 3rem;
                height: 3rem;
                background-color: white;
                border: 2px solid #d1d5db;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #4b5563;
                box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
            }
            .info-icon-wrapper .fa { font-size: 0.875rem; }
            .info-content {
                flex: 1;
                min-width: 0;
            }
            .info-title {
                font-size: 0.75rem;
                font-weight: 500;
                color: #6b7280;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                margin-bottom: 0.5rem;
            }
            .info-text {
                color: #111827;
                font-weight: 300;
                line-height: 1.625;
            }
            .info-text a {
                color: #111827;
                text-decoration: none;
                transition: color 0.2s;
            }
            .info-text a:hover { color: #374151; }
            .map-section {
                position: relative;
                height: 100%;
                min-height: 600px; /* Ensure map section has a minimum height */
            }
            
            .mobile-directions {
                position: absolute;
                top: 1.5rem;
                right: 1.5rem;
                background-color: white;
                box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
                padding: 0.75rem;
                border: 1px solid #e5e7eb;
                z-index: 10;
            }
            .mobile-directions-btn {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: #374151;
                font-weight: 500;
                text-decoration: none;
                background: none;
                border: none;
                cursor: pointer;
                transition: color 0.2s;
            }
            .mobile-directions-btn:hover { color: #111827; }
            .mobile-directions-btn .fa { font-size: 0.875rem; }
            .mobile-directions-btn span { font-size: 0.875rem; }

            /* Modals */
            .modal-overlay {
                position: fixed;
                inset: 0;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 50;
            }
            .modal-content {
                background-color: white;
                border-radius: 0.5rem;
                padding: 2rem;
                max-width: 28rem;
                margin: 1rem;
                text-align: center;
            }
            .modal-icon { font-size: 2.25rem; margin-bottom: 1rem; }
            .modal-title { font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: #111827; }
            .modal-text { color: #4b5563; margin-bottom: 1.5rem; }
            .modal-actions { display: flex; flex-direction: column; gap: 0.75rem; }
            .modal-button {
                padding: 0.75rem 1.5rem;
                border-radius: 0.5rem;
                font-weight: 500;
                transition: background-color 0.2s;
                border: none;
                cursor: pointer;
            }
            .modal-button.primary { background-color: #ec4899; color: white; }
            .modal-button.primary:hover { background-color: #db2777; }
            .modal-button.secondary { background-color: #e5e7eb; color: #374151; }
            .modal-button.secondary:hover { background-color: #d1d5db; }

            /* Scheduling Modal */
            .scheduling-modal-overlay {
                position: fixed;
                inset: 0;
                background-color: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 100;
            }
            .scheduling-modal-content {
                background-color: #000;
                color: white;
                border-radius: 0.5rem;
                max-width: 80rem;
                width: calc(100% - 2rem);
                height: 90vh;
                display: flex;
            }
            .scheduling-modal-left {
                width: 50%;
                padding: 3rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .scheduling-modal-title { font-size: 3rem; font-weight: 300; margin-bottom: 1.5rem; line-height: 1.2; }
            .scheduling-modal-text { color: #9ca3af; font-size: 1.125rem; margin-bottom: 2rem; line-height: 1.625; }
            .scheduling-modal-right {
                width: 50%;
                background-color: #111827;
                padding: 2rem;
                position: relative;
                overflow-y: auto;
            }
            .modal-close-btn {
                position: absolute;
                top: 1rem;
                right: 1rem;
                color: #9ca3af;
                background: none;
                border: none;
                cursor: pointer;
            }
            .modal-close-btn:hover { color: white; }
            .icon-md { width: 1.5rem; height: 1.5rem; }
            .modal-tabs { display: flex; margin-bottom: 2rem; border-bottom: 1px solid #374151; }
            .tab-btn {
                padding: 0.75rem 1.5rem;
                color: #9ca3af;
                border-bottom: 2px solid transparent;
                background: none;
                border-top: none;
                border-left: none;
                border-right: none;
                cursor: pointer;
            }
            .tab-btn.active { color: white; border-bottom-color: #ec4899; }
            .mb-6 { margin-bottom: 1.5rem; }
            .calendar-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
            .calendar-nav-btn { color: white; transition: color 0.2s; background: none; border: none; cursor: pointer; }
            .calendar-nav-btn:hover { color: #ec4899; }
            .icon-sm { width: 1.5rem; height: 1.5rem; }
            .month-name { font-size: 1.25rem; font-weight: 500; }
            .calendar-days-grid, .calendar-dates-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.25rem; }
            .calendar-days-grid { margin-bottom: 1rem; }
            .calendar-dates-grid { margin-bottom: 1.5rem; }
            .calendar-day-label { text-align: center; color: #6b7280; font-size: 0.875rem; padding: 0.5rem 0; }
            .calendar-date-btn {
                width: 2.5rem;
                height: 2.5rem;
                text-align: center;
                border-radius: 9999px;
                transition: background-color 0.2s;
                color: white;
                background: none;
                border: none;
                cursor: pointer;
            }
            .calendar-date-btn:hover { background-color: #374151; }
            .calendar-date-btn.disabled { color: #4b5563; cursor: default; }
            .calendar-date-btn.disabled:hover { background-color: transparent; }
            .calendar-date-btn.selected { background-color: #ec4899; }
            .form-label-white { display: block; color: white; margin-bottom: 0.5rem; }
            .form-select-dark {
                width: 100%;
                background-color: #1f2937;
                border: 1px solid #4b5563;
                border-radius: 0.25rem;
                padding: 0.5rem 0.75rem;
                color: white;
            }
            .modal-action-button {
                width: 100%;
                background-color: #ec4899;
                color: white;
                padding: 0.75rem 0;
                border-radius: 0.5rem;
                font-weight: 500;
                transition: background-color 0.2s;
                border: none;
                cursor: pointer;
            }
            .modal-action-button:hover { background-color: #db2777; }
            .modal-action-button:disabled { opacity: 0.5; cursor: not-allowed; }
            .modal-subtitle { font-size: 1.25rem; font-weight: 500; margin-bottom: 1.5rem; }
            .time-slots-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-bottom: 2rem; }
            .time-slot-btn {
                border: 1px solid #4b5563;
                border-radius: 9999px;
                padding: 0.5rem 1rem;
                font-size: 0.875rem;
                transition: border-color 0.2s;
                color: white;
                background: none;
                cursor: pointer;
            }
            .time-slot-btn:hover { border-color: #ec4899; }
            .time-slot-btn.selected { background-color: #ec4899; border-color: #ec4899; }
            .session-info-box { background-color: #1f2937; border-radius: 0.5rem; padding: 1rem; margin-bottom: 1.5rem; }
            .session-info-title { font-weight: 500; margin-bottom: 0.5rem; }
            .session-info-details { font-size: 0.875rem; color: #9ca3af; display: flex; flex-direction: column; gap: 0.25rem; }
            .session-info-item { display: flex; align-items: center; gap: 0.5rem; }
            .icon-xs { width: 1rem; height: 1rem; }

            /* Responsive Styles */
            @media (max-width: 1024px) {
                .main-container { flex-direction: column; }
                .left-section { min-height: 50vh; padding: 2rem; }
                .right-section { padding: 2rem; }
                .main-heading { font-size: 3rem; }
                .location-grid { grid-template-columns: 1fr; }
                .scheduling-modal-left { display: none; }
                .scheduling-modal-right { width: 100%; }
            }
            @media (min-width: 1025px) {
                .content-wrapper { margin: 0 4cm; max-width: calc(100vw - 8cm); min-height: 90vh; max-height: none; }
                .left-section { flex: 0 0 45%; max-width: 45%; }
                .right-section { flex: 0 0 55%; max-width: 55%; padding: 3rem; }
                .location-grid { grid-template-columns: repeat(12, 1fr); }
                .contact-info-section { grid-column: span 4; }
                .map-section { grid-column: span 8; }
                .mobile-directions { display: none; }
            }
            @media (max-width: 768px) {
                .interest-grid { grid-template-columns: repeat(2, 1fr); }
                .main-heading { font-size: 2.5rem; }
                .left-section, .right-section { padding: 1.5rem; }
                .contact-info-section { padding: 3rem; }
            }
            @media (max-width: 640px) {
                .interest-grid { grid-template-columns: 1fr; }
                .main-heading { font-size: 2rem; }
                .left-section, .right-section { padding-left: 0.9rem !important; padding-right: 0.9rem !important; }
            }
        `}</style>
        <div className="page-container">
            <div style={{ height: '1px', backgroundColor: 'white', width: '100%' }}></div>
            <div className="hero-section">
                <div className="gradient-bg"></div>
                <div className="dark-overlay"></div>
                <div className="main-container content-wrapper">
                    <div className="left-section">
                        <div className="hero-content">
                            <h2 className="main-heading">
                                Got a Big Idea?<br />
                                We've Got the<br />
                                Wings for It.
                            </h2>
                        </div>
                    </div>
                    <div className="right-section">

                        <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                            <div>
                                <p className="form-prompt">I'm interested in...</p>
                                <div className="interest-grid">
                                    {['Private Pilot License', 'Commercial Pilot License', 'DGCA Ground Classes', 'Aviation Diploma', 'Other'].map(interest => (
                                        <button
                                            key={interest}
                                            type="button"
                                            onClick={() => handleInterestClick(interest)}
                                            className={`interest-btn ${selectedInterests.has(interest) ? 'selected' : ''}`}
                                        >
                                            {interest}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            <input type="text" name="name" placeholder="Your name" onChange={handleInputChange} className="form-input" />
                            <input type="tel" name="phone" placeholder="Your phone number" onChange={handleInputChange} className="form-input" />
                            <input type="email" name="email" placeholder="Your email" onChange={handleInputChange} className="form-input" />

                            <select name="country" onChange={handleInputChange} defaultValue="" className="form-select">
                                <option value="" disabled>Country of Interest</option>
                                <option value="india">India</option>
                                <option value="south-africa">South Africa</option>
                                <option value="hungary">Hungary</option>
                                <option value="other">Other</option>
                            </select>

                            <select name="intake" onChange={handleInputChange} defaultValue="" className="form-select">
                                <option value="" disabled>Preferred Intake</option>
                                <option value="oct-2024">October 2024</option>
                                <option value="nov-2024">November 2024</option>
                                <option value="dec-2024">December 2024</option>
                                <option value="jan-2025">January 2025</option>
                            </select>
                            
                             <select name="budget" onChange={handleInputChange} defaultValue="" className="form-select">
                                <option value="" disabled>Budget</option>
                                <option value="below-35">Below 35 lakhs</option>
                                <option value="35-40">35 - 40 lakhs</option>
                                <option value="40-45">40 - 45 lakhs</option>
                            </select>

                            <select name="ground-classes" onChange={handleInputChange} defaultValue="" className="form-select">
                                <option value="" disabled>Ground Classes</option>
                                <option value="completed">Completed</option>
                                <option value="ongoing">Ongoing</option>
                                <option value="not-started">Not started yet</option>
                            </select>

                            <textarea name="project" placeholder="Anything you'd like to add? (optional)" rows="4" onChange={handleInputChange} className="form-textarea"></textarea>
                            
                             <div className="consent-container">
                                <label className="consent-label">
                                    <input type="checkbox" name="consent" required onChange={handleInputChange} className="consent-checkbox" />
                                    <span>
                                        I consent to WayForSky storing my information to contact me about aviation training opportunities.
                                    </span>
                                </label>
                            </div>

                            <div className="submit-btn-container">
                                <button type="submit" className="submit-btn" style={{backgroundColor: submitStatus ? '#10b981' : 'white'}}>
                                    {submitStatus || 'Sent request'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="location-container">
                <div className="location-card">
                    <div className="location-grid">
                        <div className="contact-info-section">
                            <div className="contact-info-content">
                                <div className="contact-header">
                                    <h2 className="contact-title">Contact Information</h2>
                                    <p className="contact-subtitle">
                                        Get in touch with our professional team for inquiries and support.
                                    </p>
                                </div>
                                <div className="contact-details">
                                    {[
                                        { icon: 'fas fa-map-marker-alt', title: 'Address', content: ['Nandi Building No 56', 'Bowring Hospital Road, Shivaji Nagar', 'Bangalore, Karnataka 560001'] },
                                        { icon: 'fas fa-phone', title: 'Phone', content: <a href="tel:+919071165504">+91 7019903800</a> },
                                        { icon: 'fas fa-envelope', title: 'Email', content: <a href="mailto:info@wayforsky.com">info@wayforsky.com</a> },
                                        { icon: 'fas fa-clock', title: 'Hours', content: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM', 'Sun: Closed'] }
                                    ].map(item => (
                                        <div key={item.title} className="info-item">
                                            <div className="info-icon-wrapper">
                                                <i className={`${item.icon} fa`}></i>
                                            </div>
                                            <div className="info-content">
                                                <div className="info-title">{item.title}</div>
                                                <div className="info-text">
                                                    {Array.isArray(item.content) ? item.content.map((line, i) => <div key={i}>{line}</div>) : item.content}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* === START: FIXED MAP SECTION === */}
                        <div className="map-section">
                            {GOOGLE_MAPS_API_KEY ? (
                                <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
                                    <Map
                                        defaultZoom={15}
                                        defaultCenter={COMPANY_LOCATION}
                                        gestureHandling={'greedy'}
                                        disableDefaultUI={true}
                                        mapId={'YOUR_MAP_ID'} // Optional: Create a Map ID in Google Cloud for custom styles
                                        styles={[ // Your custom styles are applied here
                                            { featureType: 'all', elementType: 'geometry.fill', stylers: [{ weight: '2.00' }] },
                                            { featureType: 'all', elementType: 'geometry.stroke', stylers: [{ color: '#9c9c9c' }] },
                                            { featureType: 'all', elementType: 'labels.text', stylers: [{ visibility: 'on' }] },
                                            { featureType: 'landscape', elementType: 'all', stylers: [{ color: '#f2f2f2' }] },
                                            { featureType: 'water', elementType: 'all', stylers: [{ color: '#46bcec' }, { visibility: 'on' }] }
                                        ]}
                                    >
                                        <AdvancedMarker position={COMPANY_LOCATION} title={'Our Training Center'}>
                                            {/* You can add a custom pin image here if you want */}
                                        </AdvancedMarker>
                                    </Map>
                                </APIProvider>
                            ) : (
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                                    <p>Map unavailable: API key not configured.</p>
                                </div>
                            )}
                             <div className="mobile-directions">
                                <button onClick={handleGetDirections} className="mobile-directions-btn">
                                    <i className="fas fa-directions fa"></i>
                                    <span>Directions</span>
                                </button>
                            </div>
                        </div>
                        {/* === END: FIXED MAP SECTION === */}
                    </div>
                </div>
            </div>

            {/* --- All your modals are preserved below --- */}
            {showSuccessPopup && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-icon">✅</div>
                        <h3 className="modal-title">Thank you for sharing your details!</h3>
                        <p className="modal-text">Our team has received your enquiry and will get back to you shortly. Would you like to book a free phone counselling session with one of our Junior Counsellors at a time that suits you?</p>
                        <div className="modal-actions">
                            <button onClick={handleBookSession} className="modal-button primary">Yes, Book My Free Counselling Session</button>
                            <button onClick={handleNoThanks} className="modal-button secondary">No Thanks, I'll Wait for Contact</button>
                        </div>
                    </div>
                </div>
            )}
            
            {showThankYouPopup && (
                 <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-icon">✅</div>
                        <h3 className="modal-title">Your enquiry has been submitted successfully.</h3>
                        <p className="modal-text">Our team will reach out to you soon.</p>
                        <button onClick={() => setShowThankYouPopup(false)} className="modal-button secondary">Close</button>
                    </div>
                </div>
            )}
            
            {showSchedulingModal && (
                 <div className="scheduling-modal-overlay">
                    <div className="scheduling-modal-content">
                         <div className="scheduling-modal-left">
                            <h1 className="scheduling-modal-title">Let's get down to business</h1>
                            <p className="scheduling-modal-text">
                                We'd love to chat! If you fill out the information below, someone from the team will reach out right away!
                            </p>
                        </div>
                        <div className="scheduling-modal-right">
                             <div className="modal-tabs">
                                <button className="tab-btn active">Schedule a Call</button>
                            </div>
                            {currentStep === 'calendar' ? renderCalendar() : renderTimeSelector()}
                             <button onClick={() => setShowSchedulingModal(false)} className="modal-close-btn">
                                <svg className="icon-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showFinalConfirmation && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-icon">🎉</div>
                        <h3 className="modal-title">Your counselling session has been booked successfully!</h3>
                        <p className="modal-text">Our Junior Counsellor will call you on your selected date and time. A confirmation email/WhatsApp has also been sent to you.</p>
                        <button onClick={() => setShowFinalConfirmation(false)} className="modal-button secondary">Close</button>
                    </div>
                </div>
            )}

        </div>
    </>
    );
};

export default ContactUs;