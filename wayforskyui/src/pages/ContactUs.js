import React, { useState, useEffect } from 'react';
// Import the new components from the official Google Maps library for React
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

const ContactUs = () => {
    // Simplified state for redesigned form
    const [selectedInterests, setSelectedInterests] = useState(new Set());
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', country: '', intake: '', budget: '',
        'ground-classes': '', project: '', consent: false, otherInterest: ''
    });
    const [submitStatus, setSubmitStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState('');

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

    // --- Handlers ---
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError('');
        setSubmitSuccess('');

        const payload = { ...formData, interests: Array.from(selectedInterests) };

        try {
            setIsSubmitting(true);
            setSubmitStatus('Submitting...');
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error('Failed to submit contact form');
            await res.json().catch(() => ({}));
            setSubmitStatus('Submitted');
            setSubmitSuccess('Thanks! Your request has been sent. We will contact you shortly.');
            // Optionally clear form
            setFormData({
                name: '', phone: '', email: '', country: '', intake: '', budget: '',
                'ground-classes': '', project: '', consent: false, otherInterest: ''
            });
            setSelectedInterests(new Set());
        } catch (err) {
            console.error(err);
            setSubmitError('Something went wrong. Please try again.');
            setSubmitStatus('');
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const handleGetDirections = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${COMPANY_LOCATION.lat},${COMPANY_LOCATION.lng}`;
        window.open(url, '_blank');
    };
    
    // --- The JSX for your page remains the same, except for the map section ---
    return (
    <>
        <style>{`
            /* General Styles */
            body, html {
                overflow-x: hidden;
                margin: 0;
                padding: 0;
            }
            * {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                box-sizing: border-box;
            }
            .page-container {
                overflow-x: hidden;
                margin-top: 1.6cm;
                background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%);
            }
            @media screen and (min-width: 1024px) {
                .page-container {
                    margin-top: 2.1cm;
                }
            }

            /* Hero Section */
            .hero-section {
                position: relative;
                background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%);
                padding: 4rem 0;
                margin-bottom: 0;
                overflow: hidden;
            }
            .hero-section::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.05)"/></svg>');
                opacity: 0.3;
            }
            .hero-content {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 2rem;
                text-align: center;
                color: white;
                position: relative;
                z-index: 1;
            }
            .hero-title {
                font-size: clamp(2rem, 5vw, 3.5rem);
                font-weight: 800;
                margin-bottom: 1rem;
                line-height: 1.1;
                text-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .hero-subtitle {
                font-size: clamp(1rem, 2.5vw, 1.25rem);
                opacity: 0.95;
                max-width: 700px;
                margin: 0 auto;
                line-height: 1.6;
                font-weight: 400;
            }
            @media (max-width: 768px) {
                .hero-section { padding: 3rem 0; }
            }

            /* Main Container */
            .main-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 2rem;
            }
            
            /* Form Section */
            .form-section {
                background: transparent;
                padding: 4rem 0;
                position: relative;
                margin-top: -3rem;
            }
            .form-container {
                max-width: 900px;
                margin: 0 auto;
                padding: 0 1rem;
            }
            .form-card {
                background: #ffffff;
                border-radius: 24px;
                padding: clamp(2rem, 4vw, 3rem);
                box-shadow: 0 20px 60px rgba(14, 165, 233, 0.15);
                border: 1px solid rgba(56, 189, 248, 0.2);
                position: relative;
                overflow: hidden;
            }
            .form-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #0ea5e9, #38bdf8, #7dd3fc);
            }
            .form-header {
                text-align: center;
                margin-bottom: 2.5rem;
            }
            .form-title {
                color: #0c4a6e;
                font-size: clamp(1.75rem, 4vw, 2.25rem);
                font-weight: 800;
                margin-bottom: 0.75rem;
                background: linear-gradient(135deg, #0ea5e9, #0284c7);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .form-subtitle {
                color: #475569;
                font-size: clamp(0.9rem, 2vw, 1.05rem);
                line-height: 1.6;
                max-width: 600px;
                margin: 0 auto;
            }

            /* Form Grid */
            .form-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            @media (min-width: 768px) {
                .form-grid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (min-width: 1024px) {
                .form-grid { 
                    grid-template-columns: repeat(3, 1fr); 
                    gap: 1.75rem;
                }
            }
            
            .span-full { grid-column: 1 / -1; }
            .span-2 { grid-column: 1 / -1; }
            .span-3 { grid-column: 1 / -1; }
            @media (min-width: 768px) {
                .span-2 { grid-column: span 2; }
            }
            @media (min-width: 1024px) {
                .span-3 { grid-column: span 3; }
            }

            /* Form Elements */
            .form-field {
                display: flex;
                flex-direction: column;
                gap: 0.6rem;
            }
            .label {
                color: #0c4a6e;
                font-size: 0.9rem;
                font-weight: 600;
                letter-spacing: 0.01em;
            }
            .input, .select, .textarea {
                width: 100%;
                border: 2px solid #e0f2fe;
                background: #f8fafc;
                color: #0f172a;
                padding: 0.95rem 1.1rem;
                border-radius: 12px;
                font-size: 1rem;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                outline: none;
            }
            .input:hover, .select:hover, .textarea:hover {
                border-color: #bae6fd;
                background: #ffffff;
            }
            .input:focus, .select:focus, .textarea:focus {
                border-color: #0ea5e9;
                background: #ffffff;
                box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
            }
            .input::placeholder, .textarea::placeholder {
                color: #94a3b8;
            }
            .textarea {
                resize: vertical;
                min-height: 130px;
                font-family: inherit;
            }

            /* Interest Pills */
            .interest-section {
                margin-bottom: 0.5rem;
            }
            .interest-pills {
                display: flex;
                flex-wrap: wrap;
                gap: 0.75rem;
                margin-top: 0.75rem;
            }
            .pill {
                border: 2px solid #e0f2fe;
                color: #0369a1;
                background: #f0f9ff;
                padding: 0.7rem 1.2rem;
                border-radius: 50px;
                font-size: 0.875rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                user-select: none;
            }
            .pill:hover {
                border-color: #0ea5e9;
                background: #e0f2fe;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2);
            }
            .pill.selected {
                background: linear-gradient(135deg, #0ea5e9, #0284c7);
                color: #ffffff;
                border-color: #0ea5e9;
                box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
            }

            /* Submit Section */
            .submit-section {
                margin-top: 1.5rem;
                display: flex;
                flex-direction: column;
                gap: 1.25rem;
            }
            .consent-wrapper {
                display: flex;
                align-items: flex-start;
                gap: 0.75rem;
                color: #475569;
                font-size: 0.875rem;
                line-height: 1.6;
                padding: 1rem;
                background: #f0f9ff;
                border-radius: 12px;
                border: 1px solid #e0f2fe;
            }
            .consent-wrapper input[type="checkbox"] {
                margin-top: 0.2rem;
                width: 1.1rem;
                height: 1.1rem;
                accent-color: #0ea5e9;
                cursor: pointer;
            }
            .consent {
                display: flex;
                align-items: flex-start;
                gap: 0.75rem;
                color: #475569;
                font-size: 0.875rem;
                line-height: 1.6;
                padding: 1rem;
                background: #f0f9ff;
                border-radius: 12px;
                border: 1px solid #e0f2fe;
                cursor: pointer;
            }
            .consent input[type="checkbox"] {
                margin-top: 0.2rem;
                width: 1.1rem;
                height: 1.1rem;
                accent-color: #0ea5e9;
                cursor: pointer;
            }
            .submit-area {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
            }
            .submit-btn {
                background: linear-gradient(135deg, #0ea5e9, #0284c7);
                color: #ffffff;
                padding: 1.15rem 2.5rem;
                font-weight: 700;
                font-size: 1.05rem;
                border: none;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 6px 20px rgba(14, 165, 233, 0.35);
                min-height: 54px;
                letter-spacing: 0.02em;
            }
            .submit-btn:hover:not(:disabled) {
                transform: translateY(-3px);
                box-shadow: 0 10px 30px rgba(14, 165, 233, 0.45);
                background: linear-gradient(135deg, #0284c7, #0369a1);
            }
            .submit-btn:active:not(:disabled) {
                transform: translateY(-1px);
            }
            .submit-btn:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                transform: none;
            }
            .submit-hint {
                text-align: center;
                color: #64748b;
                font-size: 0.875rem;
            }

            /* Alerts */
            .alert {
                border-radius: 14px;
                padding: 1.15rem 1.5rem;
                margin-bottom: 1.5rem;
                font-size: 0.95rem;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
            .alert-success {
                background: #ecfdf5;
                border: 2px solid #6ee7b7;
                color: #047857;
            }
            .alert-error {
                background: #fef2f2;
                border: 2px solid #fca5a5;
                color: #dc2626;
            }

            /* Benefits Strip */
            .benefits-strip {
                margin-top: 2.5rem;
                background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                border-radius: 20px;
                padding: 2rem;
                box-shadow: 0 4px 20px rgba(14, 165, 233, 0.1);
                border: 2px solid rgba(56, 189, 248, 0.2);
            }
            .benefits-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 1.25rem;
            }
            @media (min-width: 640px) {
                .benefits-grid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (min-width: 1024px) {
                .benefits-grid { grid-template-columns: repeat(4, 1fr); }
            }
            .benefit {
                display: flex;
                align-items: center;
                gap: 1rem;
                color: #0c4a6e;
                padding: 0.75rem;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 12px;
                transition: all 0.3s ease;
            }
            .benefit:hover {
                transform: translateY(-2px);
                background: rgba(255, 255, 255, 0.9);
                box-shadow: 0 4px 12px rgba(14, 165, 233, 0.15);
            }
            .benefit .icon {
                width: 48px;
                height: 48px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #0ea5e9, #0284c7);
                color: #ffffff;
                font-size: 1.1rem;
                flex-shrink: 0;
                box-shadow: 0 4px 12px rgba(14, 165, 233, 0.25);
            }
            .benefit .text {
                font-weight: 600;
                font-size: 0.9rem;
                line-height: 1.4;
            }

            /* Location Section */
            .location-container {
                padding: 4rem 0;
                background: linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%);
            }
            .location-card {
                background-color: white;
                overflow: hidden;
                border-radius: 24px;
                box-shadow: 0 20px 60px rgba(14, 165, 233, 0.12);
                border: 1px solid rgba(56, 189, 248, 0.2);
            }
            .location-grid {
                display: grid;
                min-height: 600px;
            }
            @media (min-width: 1024px) {
                .location-grid {
                    grid-template-columns: 45% 55%;
                }
            }
            .contact-info-section {
                padding: clamp(2rem, 5vw, 4rem);
                background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);
                display: flex;
                flex-direction: column;
                justify-content: center;
                border-right: 1px solid #e0f2fe;
            }
            .contact-info-content {
                max-width: 32rem;
                margin: 0 auto;
            }
            .contact-header {
                margin-bottom: 2.5rem;
            }
            .contact-title {
                font-size: clamp(1.75rem, 4vw, 2.25rem);
                font-weight: 800;
                color: #0c4a6e;
                margin-bottom: 1rem;
                letter-spacing: -0.01em;
                background: linear-gradient(135deg, #0ea5e9, #0284c7);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .contact-subtitle {
                color: #475569;
                line-height: 1.7;
                font-weight: 400;
                font-size: 1.05rem;
            }
            .contact-details {
                display: flex;
                flex-direction: column;
                gap: 1.75rem;
            }
            .info-item {
                display: flex;
                align-items: flex-start;
                gap: 1.25rem;
                padding: 1.25rem;
                background: white;
                border-radius: 16px;
                border: 2px solid #e0f2fe;
                transition: all 0.3s ease;
            }
            .info-item:hover {
                border-color: #0ea5e9;
                box-shadow: 0 4px 15px rgba(14, 165, 233, 0.15);
                transform: translateX(4px);
            }
            .info-icon-wrapper {
                flex-shrink: 0;
                width: 3.25rem;
                height: 3.25rem;
                background: linear-gradient(135deg, #0ea5e9, #0284c7);
                border: none;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                box-shadow: 0 4px 12px rgba(14, 165, 233, 0.25);
            }
            .info-icon-wrapper .fa { 
                font-size: 1.1rem; 
            }
            .info-content {
                flex: 1;
                min-width: 0;
            }
            .info-title {
                font-size: 0.75rem;
                font-weight: 700;
                color: #0ea5e9;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                margin-bottom: 0.5rem;
            }
            .info-text {
                color: #0f172a;
                font-weight: 400;
                line-height: 1.7;
                font-size: 0.95rem;
            }
            .info-text a {
                color: #0369a1;
                text-decoration: none;
                transition: color 0.2s;
                font-weight: 500;
            }
            .info-text a:hover { 
                color: #0ea5e9;
                text-decoration: underline;
            }
            .map-section {
                position: relative;
                height: 100%;
                min-height: 600px;
                background: #e0f2fe;
            }
            
            .mobile-directions {
                position: absolute;
                top: 1.5rem;
                right: 1.5rem;
                background-color: white;
                box-shadow: 0 6px 20px rgba(14, 165, 233, 0.25);
                padding: 0.875rem 1.25rem;
                border: 2px solid #e0f2fe;
                border-radius: 12px;
                z-index: 10;
                transition: all 0.3s ease;
            }
            .mobile-directions:hover {
                box-shadow: 0 8px 25px rgba(14, 165, 233, 0.35);
                border-color: #0ea5e9;
            }
            .mobile-directions-btn {
                display: flex;
                align-items: center;
                gap: 0.6rem;
                color: #0369a1;
                font-weight: 600;
                text-decoration: none;
                background: none;
                border: none;
                cursor: pointer;
                transition: color 0.2s;
                font-size: 0.95rem;
            }
            .mobile-directions-btn:hover { 
                color: #0ea5e9;
            }
            .mobile-directions-btn .fa { 
                font-size: 1rem; 
            }

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
            @media (max-width: 768px) {
                .form-card { padding: 1.75rem; }
                .benefits-strip { 
                    margin-top: 1.5rem; 
                    padding: 1.5rem; 
                }
                .benefit { 
                    flex-direction: row;
                    text-align: left;
                }
                .benefit .icon {
                    width: 44px;
                    height: 44px;
                }
                .contact-info-section {
                    padding: 2rem 1.5rem;
                }
                .location-grid {
                    grid-template-columns: 1fr;
                }
                .map-section {
                    min-height: 450px;
                }
            }
            @media (max-width: 640px) {
                .benefit .text { font-size: 0.85rem; }
                .pill {
                    padding: 0.65rem 1rem;
                    font-size: 0.8rem;
                }
            }
        `}</style>
        <div className="page-container">
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Get In Touch</h1>
                    <p className="hero-subtitle">
                        Ready to start your aviation journey? Fill out the form below and our expert team will guide you through every step of your pilot training.
                    </p>
                </div>
            </div>

            <div className="form-section">
                <div className="form-container">
                            <div className="form-card">
                                {submitSuccess && <div className="alert alert-success">{submitSuccess}</div>}
                                {submitError && <div className="alert alert-error">{submitError}</div>}
                                <div className="form-header">
                                    <h3 className="form-title">Contact Us</h3>
                                    <p className="form-subtitle">Fill out the form and our team will get back to you shortly.</p>
                                </div>
                                <form id="contactForm" onSubmit={handleSubmit} className="form-grid">
                                    {/* Interests */}
                                    <div className="span-3">
                                        <div className="label">I'm interested in</div>
                                        <div className="interest-pills">
                                            {[
                                                'Private Pilot License',
                                                'Commercial Pilot License',
                                                'DGCA Ground Classes',
                                                'English Language Proficiency',
                                                'NIOS Prep',
                                                'Type Rating',
                                                'Flight Instructor',
                                                'Cabin Crew',
                                                'Zero to Hero',
                                                'Other'
                                            ].map(interest => (
                                                <button
                                                    key={interest}
                                                    type="button"
                                                    onClick={() => handleInterestClick(interest)}
                                                    className={`pill ${selectedInterests.has(interest) ? 'selected' : ''}`}
                                                >
                                                    {interest}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* If Other is selected */}
                                    {selectedInterests.has('Other') && (
                                        <div className="form-field span-3">
                                            <div className="label">If other, please specify</div>
                                            <input
                                                type="text"
                                                name="otherInterest"
                                                placeholder="Tell us what you’re looking for"
                                                value={formData.otherInterest}
                                                onChange={handleInputChange}
                                                className="input"
                                            />
                                        </div>
                                    )}

                                    {/* Contact details */}
                                    <div className="form-field">
                                        <div className="label">Full name</div>
                                        <input type="text" name="name" placeholder="Your full name" value={formData.name} onChange={handleInputChange} className="input" required />
                                    </div>
                                    <div className="form-field">
                                        <div className="label">Phone</div>
                                        <input type="tel" name="phone" placeholder="Your phone number" value={formData.phone} onChange={handleInputChange} className="input" required />
                                    </div>
                                    <div className="form-field">
                                        <div className="label">Email</div>
                                        <input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleInputChange} className="input" required />
                                    </div>
                                    <div className="form-field">
                                        <div className="label">Country of Interest</div>
                                        <select name="country" onChange={handleInputChange} value={formData.country} className="select" required>
                                            <option value="" disabled>Choose a country</option>
                                            <option value="india">India</option>
                                            <option value="south-africa">South Africa</option>
                                            <option value="hungary">Hungary</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    {/* Program preferences */}
                                    <div className="form-field">
                                        <div className="label">Preferred Intake</div>
                                        <select name="intake" onChange={handleInputChange} value={formData.intake} className="select" required>
                                            <option value="" disabled>Select intake</option>
                                            <option value="oct-2024">October 2024</option>
                                            <option value="nov-2024">November 2024</option>
                                            <option value="dec-2024">December 2024</option>
                                            <option value="jan-2025">January 2025</option>
                                        </select>
                                    </div>
                                    <div className="form-field">
                                        <div className="label">Budget</div>
                                        <select name="budget" onChange={handleInputChange} value={formData.budget} className="select" required>
                                            <option value="" disabled>Choose a range</option>
                                            <option value="below-35">Below 35 lakhs</option>
                                            <option value="35-40">35 - 40 lakhs</option>
                                            <option value="40-45">40 - 45 lakhs</option>
                                        </select>
                                    </div>
                                    <div className="form-field">
                                        <div className="label">Ground Classes</div>
                                        <select name="ground-classes" onChange={handleInputChange} value={formData['ground-classes']} className="select" required>
                                            <option value="" disabled>Status</option>
                                            <option value="completed">Completed</option>
                                            <option value="ongoing">Ongoing</option>
                                            <option value="not-started">Not started yet</option>
                                        </select>
                                    </div>

                                    {/* Notes */}
                                    <div className="form-field span-3">
                                        <div className="label">Additional details (optional)</div>
                                        <textarea name="project" placeholder="Anything you'd like to add?" value={formData.project} onChange={handleInputChange} className="textarea"></textarea>
                                    </div>

                                    {/* Consent & submit */}
                                    <label className="consent">
                                        <input type="checkbox" name="consent" checked={formData.consent} required onChange={handleInputChange} />
                                        <span>I consent to WayForSky storing my information to contact me about aviation training opportunities.</span>
                                    </label>
                                    <div className="submit-area">
                                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                            {isSubmitting ? 'Submitting…' : submitStatus || 'Send request'}
                                        </button>
                                        {submitStatus && <span className="submit-hint">{submitStatus}</span>}
                                    </div>
                                </form>
                            </div>
                        {/* Benefits strip under the form */}
                        <div className="benefits-strip">
                            <div className="benefits-grid">
                                <div className="benefit">
                                    <span className="icon"><i className="fas fa-user-tie"></i></span>
                                    <span className="text">DGCA-certified mentors</span>
                                </div>
                                <div className="benefit">
                                    <span className="icon"><i className="fas fa-globe"></i></span>
                                    <span className="text">Global training partners</span>
                                </div>
                                <div className="benefit">
                                    <span className="icon"><i className="fas fa-briefcase"></i></span>
                                    <span className="text">Career & placement support</span>
                                </div>
                                <div className="benefit">
                                    <span className="icon"><i className="fas fa-clock"></i></span>
                                    <span className="text">Response within 24 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="location-container">
                <div className="main-container">
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
        </div>
        </div>
    </>
    );
};

export default ContactUs;