import React, { useState, useEffect, useRef } from 'react';

// Pure CSS Icons as React Components
const PlaneIcon = ({ size = 24, color = "#000", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M2 16h20v2H2zm1.5-5L22 7.5 20.5 6 2 10.5z" fill={color}/>
    <path d="M12 2L8 6h8l-4-4z" fill={color}/>
  </svg>
);

const ClockIcon = ({ size = 24, color = "#000" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <polyline points="12,6 12,12 16,14" stroke={color} strokeWidth="2"/>
  </svg>
);

const UsersIcon = ({ size = 24, color = "#000" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke={color} strokeWidth="2"/>
    <circle cx="9" cy="7" r="4" stroke={color} strokeWidth="2"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke={color} strokeWidth="2"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke={color} strokeWidth="2"/>
  </svg>
);

const CheckCircleIcon = ({ size = 24, color = "#10b981" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke={color} strokeWidth="2"/>
    <polyline points="22,4 12,14.01 9,11.01" stroke={color} strokeWidth="2"/>
  </svg>
);

const ArrowRightIcon = ({ size = 24, color = "#000" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <line x1="5" y1="12" x2="19" y2="12" stroke={color} strokeWidth="2"/>
    <polyline points="12,5 19,12 12,19" stroke={color} strokeWidth="2"/>
  </svg>
);

const StarIcon = ({ size = 24, color = "#000" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke={color} strokeWidth="2"/>
  </svg>
);

const GlobeIcon = ({ size = 24, color = "#000" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke={color} strokeWidth="2"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke={color} strokeWidth="2"/>
  </svg>
);

const CalendarIcon = ({ size = 24, color = "#000" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke={color} strokeWidth="2"/>
    <line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth="2"/>
    <line x1="8" y1="2" x2="8" y2="6" stroke={color} strokeWidth="2"/>
    <line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="2"/>
  </svg>
);

const BriefcaseIcon = ({ size = 24, color = "#000" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke={color} strokeWidth="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke={color} strokeWidth="2"/>
  </svg>
);

const BookOpenIcon = ({ size = 24, color = "#000" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke={color} strokeWidth="2"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke={color} strokeWidth="2"/>
  </svg>
);

const XIcon = ({ size = 24, color = "#000" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <line x1="18" y1="6" x2="6" y2="18" stroke={color} strokeWidth="2"/>
    <line x1="6" y1="6" x2="18" y2="18" stroke={color} strokeWidth="2"/>
  </svg>
);

export default function PrivatePilotPage() {
  const [activeLocation, setActiveLocation] = useState('south-africa');
  const [showContactForm, setShowContactForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [animatedCounters, setAnimatedCounters] = useState(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const observerRef = useRef(null);
  const elementsRef = useRef(new Map());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate');
            if (elementId) {
              setVisibleElements(prev => new Set([...prev, elementId]));
              
              if (elementId.includes('counter')) {
                setAnimatedCounters(prev => new Set([...prev, elementId]));
              }
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    elementsRef.current.forEach((element) => {
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [activeLocation]);

  const setElementRef = (id) => (element) => {
    if (element) {
      elementsRef.current.set(id, element);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const location = formData.get('location');

    if (!name || !email || !phone) {
      alert('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Contact form submitted:', { name, email, phone, location });
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      setShowContactForm(false);
      setSubmitSuccess(false);
    }, 2000);
  };

  const locations = {
    'south-africa': {
      name: 'South Africa',
      flag: '🇿🇦',
      tagline: 'Clear Skies, Expert Training',
      heroImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      heroImageUrl: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      campusImage: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '3-4 Months',
      partner: 'Accolade Flying Wings',
      flyingDays: '300+',
      weather: 'Clear Skies',
      cost: 'From $18,000',
      highlights: [
        '300+ flying days per year with pristine weather conditions',
        'Lower training costs compared to Europe, USA, and India',
        'English-medium instruction and communication',
        'Diverse flying conditions across mountains, plains, and coast',
        'Internationally recognized PPL with CPL upgrade pathway'
      ],
      aircraft: [
        { 
          name: 'Cessna 172', 
          type: 'Primary Training',
          image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        { 
          name: 'Diamond DA42', 
          type: 'Advanced Multi-Engine',
          image: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        { 
          name: 'FNPT II Simulator', 
          type: 'Instrument Training',
          image: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        }
      ],
      facilities: [
        'State-of-the-art classrooms with digital learning',
        'Advanced flight simulator training center',
        'Five-day weekly flying schedule',
        'On-campus student accommodations',
        'Professional maintenance and ground school facilities'
      ],
      lifestyle: [
        'Safe, student-oriented living environment',
        'Active Indian student community with cultural connection',
        'Adventure activities: safaris, beaches, vibrant city life',
        'Affordable living costs for housing, food, and transport',
        'Rich cultural exchange programs and community events'
      ],
      process: [
        'Initial consultation and career counseling',
        'Comprehensive student evaluation and document review',
        'Academy interview and detailed orientation session',
        'Provisional admission letter and program confirmation',
        'Complete visa application support and guidance',
        'Travel coordination and comprehensive campus induction'
      ]
    },
    'hungary': {
      name: 'Hungary',
      flag: '🇭🇺',
      tagline: 'European Excellence, Global Recognition',
      heroImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      heroImageUrl: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      campusImage: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '4-6 Months',
      partner: 'PharmaFlight Academy',
      flyingDays: 'Year-Round',
      weather: 'All Conditions',
      cost: 'From $22,000',
      highlights: [
        'Training in EU airspace with world-class safety standards',
        'Comprehensive weather condition training for real-world preparation',
        'Cost-effective compared to Western Europe and North America',
        'EASA-approved license recognized across Europe and globally',
        'Seamless pathway to Frozen ATPL and CPL programs'
      ],
      aircraft: [
        { 
          name: 'Tecnam 2008JC', 
          type: 'Modern Training Aircraft',
          image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        { 
          name: 'Tecnam 2006T', 
          type: 'Twin-Engine Training',
          image: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        { 
          name: 'FNPT II Simulator', 
          type: 'Advanced Simulation',
          image: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        { 
          name: 'Redbird Simulators', 
          type: 'Professional Training',
          image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        }
      ],
      facilities: [
        'Cutting-edge simulator training center',
        'Modern digital classrooms with interactive learning',
        'Premium on-campus accommodations with full amenities',
        'Comprehensive medical and pilot assessment facilities',
        'Advanced weather monitoring and flight briefing rooms'
      ],
      lifestyle: [
        'Safe, structured European academic environment',
        'Established Indian student community with support network',
        'Rich blend of historical culture and modern European lifestyle',
        'Easy access to explore EU countries during training breaks',
        'Dedicated student support services and mentorship programs'
      ],
      process: [
        'Personalized consultation and program guidance',
        'Thorough student assessment and documentation verification',
        'Academy entrance evaluation and program orientation',
        'Official provisional admission letter and confirmation',
        'Comprehensive Schengen visa application assistance',
        'Complete travel arrangements and detailed campus orientation'
      ]
    }
  };

  const currentLocation = locations[activeLocation];

  // Animated Counter Component
  const AnimatedCounter = ({ target, suffix = '', prefix = '', id }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (animatedCounters.has(id)) {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        
        return () => clearInterval(timer);
      }
    }, [target, id, animatedCounters]);
    
    return React.createElement('span', null, `${prefix}${count}${suffix}`);
  };

  // Ultra-Modern Magnetic Button Component
  const MagneticButton = ({ 
    children, 
    onClick, 
    variant = 'primary', 
    size = 'md', 
    loading = false, 
    success = false,
    className = '',
    type = 'button',
    style = {}
  }) => {
    const buttonRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [ripples, setRipples] = useState([]);

    const handleMouseMove = (e) => {
      if (!buttonRef.current) return;
      
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
    };

    const handleClick = (e) => {
      if (loading) return;
      
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newRipple = {
        id: Date.now(),
        x: x - 50,
        y: y - 50,
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
      
      if (onClick) onClick(e);
    };

    const getButtonStyles = () => {
      const baseStyles = {
        position: 'relative',
        overflow: 'hidden',
        border: 'none',
        cursor: loading ? 'not-allowed' : 'pointer',
        fontWeight: '600',
        transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        transform: `translateY(${isHovered && !loading ? '-2px' : '0'}) scale(${isPressed ? '0.98' : isHovered && !loading ? '1.02' : '1'})`,
        outline: 'none',
        fontFamily: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        opacity: loading ? 0.7 : 1,
        ...style
      };

      const sizeStyles = {
        sm: { padding: '8px 16px', fontSize: '0.875rem', borderRadius: '12px' },
        md: { padding: '16px 32px', fontSize: '1rem', borderRadius: '16px' },
        lg: { padding: '20px 40px', fontSize: '1.125rem', borderRadius: '20px' }
      };

      const variantStyles = {
        primary: {
          background: success ? 
            'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 
            isHovered ? 
              'linear-gradient(135deg, #1f2937 0%, #374151 100%)' : 
              'linear-gradient(135deg, #000 0%, #1f2937 100%)',
          color: '#fff',
          boxShadow: isHovered ? 
            '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)' : 
            '0 4px 20px rgba(0, 0, 0, 0.15)',
        },
        secondary: {
          background: isHovered ? '#fff' : 'transparent',
          color: isHovered ? '#000' : '#fff',
          border: '2px solid #fff',
          boxShadow: isHovered ? '0 10px 30px rgba(255, 255, 255, 0.3)' : 'none',
        },
        ghost: {
          background: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          color: '#000',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          boxShadow: isHovered ? '0 8px 25px rgba(0, 0, 0, 0.1)' : 'none',
        }
      };

      return {
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
      };
    };

    return React.createElement('button', {
      ref: buttonRef,
      type: type,
      onClick: handleClick,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onMouseDown: () => setIsPressed(true),
      onMouseUp: () => setIsPressed(false),
      onMouseMove: handleMouseMove,
      style: getButtonStyles(),
      className: className,
      disabled: loading
    }, [
      // Ripple Effects
      ...ripples.map(ripple => 
        React.createElement('div', {
          key: ripple.id,
          style: {
            position: 'absolute',
            top: ripple.y,
            left: ripple.x,
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            animation: 'ripple 0.6s ease-out',
          }
        })
      ),
      
      // Magnetic Glow Effect
      isHovered && !loading && React.createElement('div', {
        style: {
          position: 'absolute',
          top: mousePosition.y - 75,
          left: mousePosition.x - 75,
          width: '150px',
          height: '150px',
          background: variant === 'primary' ? 
            'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)' :
            'radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          transition: 'all 0.3s ease',
        }
      }),
      
      // Loading Spinner
      loading && React.createElement('div', {
        style: {
          width: '20px',
          height: '20px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderTop: '2px solid #fff',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }
      }),
      
      // Success Checkmark
      success && !loading && React.createElement(CheckCircleIcon, { 
        size: 20, 
        color: '#fff',
        style: { animation: 'bounceIn 0.5s ease-out' }
      }),
      
      // Button Content
      !loading && !success && children
    ]);
  };

  // Global Styles
  const globalStyles = `
    @keyframes ripple {
      0% { transform: scale(0); opacity: 1; }
      100% { transform: scale(2); opacity: 0; }
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes bounceIn {
      0% { transform: scale(0); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
    
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeInLeft {
      0% { opacity: 0; transform: translateX(-30px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes fadeInRight {
      0% { opacity: 0; transform: translateX(30px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes scaleIn {
      0% { opacity: 0; transform: scale(0.8); }
      100% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.3); }
      50% { box-shadow: 0 0 40px rgba(102, 126, 234, 0.6); }
    }
    
    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .animate-fadeInLeft {
      animation: fadeInLeft 0.8s ease-out forwards;
    }
    
    .animate-fadeInRight {
      animation: fadeInRight 0.8s ease-out forwards;
    }
    
    .animate-scaleIn {
      animation: scaleIn 0.6s ease-out forwards;
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    
    .animate-pulse {
      animation: pulse 2s ease-in-out infinite;
    }
    
    .animate-glow {
      animation: glow 2s ease-in-out infinite;
    }
    
    .glass-morphism {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .image-hover-zoom {
      transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    
    .image-hover-zoom:hover {
      transform: scale(1.05);
    }
    
    .card-hover-lift {
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    
    .card-hover-lift:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    }
    
    .shimmer-effect {
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
    }
    
    .parallax-bg {
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    
    .nav-link-hover:hover::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 1px;
      animation: fadeInUp 0.3s ease-out;
    }
    
    @media (max-width: 768px) {
      .responsive-grid {
        grid-template-columns: 1fr !important;
      }
      
      .responsive-text {
        font-size: 3rem !important;
      }
      
      .responsive-flex {
        flex-direction: column !important;
      }
      
      .parallax-bg {
        background-attachment: scroll;
      }
    }
    
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #000;
      background: #fff;
    }
  `;

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      position: 'relative',
    },

    // Header Styles
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: isScrolled ? '1px solid #e5e7eb' : 'none',
      boxShadow: isScrolled ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
    },
    headerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    logoIcon: {
      width: '32px',
      height: '32px',
      backgroundColor: '#000',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      animation: 'float 3s ease-in-out infinite',
    },
    logoText: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#000'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    },
    navLink: {
      color: '#374151',
      textDecoration: 'none',
      fontSize: '0.875rem',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      padding: '8px 0',
    },

    // Hero Section Styles
    heroSection: {
      paddingTop: '96px',
      paddingBottom: '64px',
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    },
    heroBackground: {
      position: 'absolute',
      inset: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${currentLocation.heroImageUrl})`,
      backgroundAttachment: 'fixed',
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%)',
    },
    heroContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10,
      color: '#fff',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '9999px',
      padding: '8px 16px',
      marginBottom: '24px',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#1f2937',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    heroTitle: {
      fontSize: '6rem',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '24px',
      letterSpacing: '-0.025em',
      lineHeight: '1',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.9)',
      maxWidth: '768px',
      margin: '0 auto 48px auto',
      lineHeight: '1.6',
      fontWeight: 'normal',
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    },

    // Location Switcher Styles
    switcherContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '64px'
    },
    switcher: {
      borderRadius: '16px',
      padding: '4px',
      display: 'inline-flex',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    switcherButton: {
      padding: '16px 32px',
      borderRadius: '12px',
      fontWeight: '600',
      transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.875rem'
    },

    // Hero Card Styles
    heroCard: {
      maxWidth: '1024px',
      margin: '0 auto'
    },
    heroCardInner: {
      position: 'relative',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
      height: '384px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      padding: '48px',
      color: '#fff',
      background: currentLocation.heroImage
    },
    heroCardOverlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    heroCardContent: {
      position: 'relative',
      zIndex: 10
    },
    heroCardInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px'
    },
    heroCardTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'left'
    },
    heroCardTagline: {
      fontSize: '1.25rem',
      opacity: 0.9,
      textAlign: 'left'
    },

    // Stats Grid Styles
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      maxWidth: '1024px',
      margin: '48px auto 0 auto'
    },
    statCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '16px',
      padding: '24px',
      textAlign: 'center',
      cursor: 'pointer',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    statValue: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#000',
      marginBottom: '4px'
    },
    statLabel: {
      fontSize: '0.875rem',
      color: '#6b7280'
    },

    // Main Section Styles
    mainSection: {
      padding: '80px 0',
      backgroundColor: '#f9fafb',
      position: 'relative',
    },
    mainContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px'
    },

    // Highlights Section Styles
    highlightsSection: {
      marginBottom: '80px'
    },
    sectionTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: '#000',
      marginBottom: '32px',
      textAlign: 'center'
    },
    highlightsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px',
      maxWidth: '1280px',
      margin: '0 auto'
    },
    highlightCard: {
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '24px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    highlightText: {
      color: '#1f2937',
      lineHeight: '1.6'
    },

    // Three Column Layout Styles
    threeColumnGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px'
    },
    columnCard: {
      backgroundColor: '#fff',
      borderRadius: '24px',
      padding: '32px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    columnHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '24px'
    },
    columnTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#000'
    },
    columnContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    aircraftItem: {
      borderLeft: '4px solid #000',
      paddingLeft: '16px',
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      transition: 'all 0.3s ease',
    },
    aircraftImageContainer: {
      position: 'relative',
      width: '80px',
      height: '60px',
      borderRadius: '8px',
      overflow: 'hidden',
      flexShrink: 0,
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    },
    aircraftImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    aircraftImageOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.1), transparent)',
    },
    aircraftInfo: {
      flex: 1,
    },
    aircraftName: {
      fontWeight: '600',
      color: '#000',
      fontSize: '0.875rem',
    },
    aircraftType: {
      fontSize: '0.75rem',
      color: '#6b7280'
    },
    campusImageContainer: {
      width: '100%',
      height: '120px',
      borderRadius: '12px',
      overflow: 'hidden',
      marginBottom: '16px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    },
    campusImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    facilityItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      transition: 'all 0.3s ease',
    },
    bullet: {
      width: '8px',
      height: '8px',
      backgroundColor: '#000',
      borderRadius: '50%',
      marginTop: '8px',
      flexShrink: 0,
      transition: 'all 0.3s ease',
    },
    facilityText: {
      color: '#374151',
      fontSize: '0.875rem',
      lineHeight: '1.6'
    },

    // Process Section Styles
    processSection: {
      marginTop: '80px'
    },
    processGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px',
      maxWidth: '1536px',
      margin: '0 auto'
    },
    processStep: {
      textAlign: 'center'
    },
    processNumber: {
      width: '64px',
      height: '64px',
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '1.25rem',
      margin: '0 auto 24px auto',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease',
      background: 'linear-gradient(135deg, #000 0%, #374151 100%)',
    },
    processCard: {
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    processText: {
      color: '#374151',
      lineHeight: '1.6'
    },

    // CTA Section Styles
    ctaSection: {
      textAlign: 'center',
      marginTop: '80px'
    },
    ctaCard: {
      background: 'linear-gradient(135deg, #000 0%, #1f2937 100%)',
      borderRadius: '24px',
      padding: '48px',
      color: '#fff',
      maxWidth: '1024px',
      margin: '0 auto',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
      position: 'relative',
      overflow: 'hidden',
    },
    ctaTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    ctaSubtitle: {
      fontSize: '1.25rem',
      marginBottom: '32px',
      opacity: 0.9
    },
    ctaButtons: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '16px'
    },

    // Modal Styles
    modalOverlay: {
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: '16px',
      animation: 'fadeInUp 0.3s ease-out',
    },
    modalContent: {
      backgroundColor: '#fff',
      borderRadius: '24px',
      padding: '32px',
      maxWidth: '448px',
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      animation: 'scaleIn 0.3s ease-out',
    },
    modalHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '24px'
    },
    modalTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#000'
    },

    // Form Styles
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '16px',
      border: '1px solid #d1d5db',
      borderRadius: '16px',
      backgroundColor: '#f9fafb',
      color: '#000',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    },
    select: {
      width: '100%',
      padding: '16px',
      border: '1px solid #d1d5db',
      borderRadius: '16px',
      backgroundColor: '#f9fafb',
      color: '#000',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    },
  };

  return (
    <>
      <style>{globalStyles}</style>
      
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>
                <PlaneIcon size={16} color="white" />
              </div>
              <span style={styles.logoText}>WayForSky</span>
            </div>

            <nav style={styles.nav}>
              <a href="#programs" style={styles.navLink} className="nav-link-hover">Programs</a>
              <a href="#locations" style={styles.navLink} className="nav-link-hover">Locations</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div style={styles.heroBackground} className="parallax-bg"></div>
          <div style={styles.heroOverlay}></div>
          
          <div style={styles.heroContent}>
            <div 
              ref={setElementRef('hero-badge')}
              data-animate="hero-badge"
              style={{
                ...styles.badge,
                opacity: visibleElements.has('hero-badge') ? 1 : 0,
              }}
              className={visibleElements.has('hero-badge') ? 'animate-fadeInUp' : ''}
            >
              <StarIcon size={16} color="#000" />
              <span>Internationally Recognized Training</span>
            </div>
            
            <h1 
              ref={setElementRef('hero-title')}
              data-animate="hero-title"
              style={{
                ...styles.heroTitle,
                opacity: visibleElements.has('hero-title') ? 1 : 0,
              }}
              className={`${visibleElements.has('hero-title') ? 'animate-fadeInUp' : ''} responsive-text`}
            >
              Private Pilot<br />
              <span style={{ color: '#6b7280' }}>License</span>
            </h1>
            
            <p 
              ref={setElementRef('hero-subtitle')}
              data-animate="hero-subtitle"
              style={{
                ...styles.heroSubtitle,
                opacity: visibleElements.has('hero-subtitle') ? 1 : 0,
              }}
              className={visibleElements.has('hero-subtitle') ? 'animate-fadeInUp' : ''}
            >
              Begin your aviation journey with world-class PPL training. 
              Choose between South Africa's clear skies or Hungary's European excellence.
            </p>

            {/* Location Switcher */}
            <div id="locations" style={styles.switcherContainer}>
              <div 
                ref={setElementRef('location-switcher')}
                data-animate="location-switcher"
                style={{
                  ...styles.switcher,
                  opacity: visibleElements.has('location-switcher') ? 1 : 0,
                }}
                className={visibleElements.has('location-switcher') ? 'animate-scaleIn' : ''}
              >
                {Object.entries(locations).map(([key, location]) => (
                  <button
                    key={key}
                    onClick={() => setActiveLocation(key)}
                    style={{
                      ...styles.switcherButton,
                      background: activeLocation === key ? '#fff' : 'transparent',
                      color: activeLocation === key ? '#000' : '#6b7280',
                      boxShadow: activeLocation === key ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
                      transform: activeLocation === key ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{location.flag}</span>
                    <span>{location.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Hero Card */}
            <div 
              ref={setElementRef('hero-card')}
              data-animate="hero-card"
              style={{
                ...styles.heroCard,
                opacity: visibleElements.has('hero-card') ? 1 : 0,
              }}
              className={visibleElements.has('hero-card') ? 'animate-scaleIn' : ''}
            >
              <div style={styles.heroCardInner}>
                <div style={styles.heroCardOverlay}></div>
                <div style={styles.heroCardContent}>
                  <div style={styles.heroCardInfo}>
                    <span style={{ fontSize: '4rem', animation: 'float 3s ease-in-out infinite' }}>
                      {currentLocation.flag}
                    </span>
                    <div>
                      <h2 style={styles.heroCardTitle}>{currentLocation.name}</h2>
                      <p style={styles.heroCardTagline}>{currentLocation.tagline}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div style={styles.statsGrid} className="responsive-grid">
              {[
                { icon: ClockIcon, label: 'Duration', value: currentLocation.duration, counterId: 'duration' },
                { icon: CalendarIcon, label: 'Flying Days', value: currentLocation.flyingDays, counterId: 'flying-days' },
                { icon: BriefcaseIcon, label: 'Partner', value: currentLocation.partner, counterId: 'partner' },
                { icon: GlobeIcon, label: 'Investment', value: currentLocation.cost, counterId: 'cost' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  ref={setElementRef(`stat-${index}`)}
                  data-animate={`stat-${index}`}
                  style={{
                    ...styles.statCard,
                    opacity: visibleElements.has(`stat-${index}`) ? 1 : 0,
                    animationDelay: `${index * 0.1}s`,
                  }}
                  className={visibleElements.has(`stat-${index}`) ? 'animate-fadeInUp card-hover-lift' : ''}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-8px) scale(1.02)';
                    e.target.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <stat.icon size={24} color="#000" style={{ marginBottom: '12px' }} />
                  <div style={styles.statValue}>
                    {stat.label === 'Flying Days' && stat.value.includes('300') ? (
                      <AnimatedCounter target={300} suffix="+" id={`counter-${stat.counterId}`} />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section id="programs" style={styles.mainSection}>
          <div style={styles.mainContent}>
            {/* Key Highlights */}
            <div style={styles.highlightsSection}>
              <h3 
                ref={setElementRef('highlights-title')}
                data-animate="highlights-title"
                style={{
                  ...styles.sectionTitle,
                  opacity: visibleElements.has('highlights-title') ? 1 : 0,
                }}
                className={visibleElements.has('highlights-title') ? 'animate-fadeInUp' : ''}
              >
                Why Choose {currentLocation.name}?
              </h3>
              <div style={styles.highlightsGrid} className="responsive-grid">
                {currentLocation.highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    ref={setElementRef(`highlight-${index}`)}
                    data-animate={`highlight-${index}`}
                    style={{
                      ...styles.highlightCard,
                      opacity: visibleElements.has(`highlight-${index}`) ? 1 : 0,
                      animationDelay: `${index * 0.1}s`,
                    }}
                    className={visibleElements.has(`highlight-${index}`) ? 'animate-fadeInLeft' : ''}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                    }}
                  >
                    <CheckCircleIcon size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={styles.highlightText}>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Three Column Layout */}
            <div style={styles.threeColumnGrid} className="responsive-grid">
              {/* Aircraft Fleet */}
              <div 
                ref={setElementRef('aircraft-section')}
                data-animate="aircraft-section"
                style={{
                  ...styles.columnCard,
                  opacity: visibleElements.has('aircraft-section') ? 1 : 0,
                }}
                className={visibleElements.has('aircraft-section') ? 'animate-fadeInUp' : ''}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={styles.columnHeader}>
                  <PlaneIcon size={24} color="#000" />
                  <h4 style={styles.columnTitle}>Training Fleet</h4>
                </div>
                <div style={styles.columnContent}>
                  {currentLocation.aircraft.map((aircraft, index) => (
                    <div 
                      key={index} 
                      style={styles.aircraftItem}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(8px)';
                        const img = e.currentTarget.querySelector('img');
                        if (img) img.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                        const img = e.currentTarget.querySelector('img');
                        if (img) img.style.transform = 'scale(1)';
                      }}
                    >
                      <div style={styles.aircraftImageContainer}>
                        <img
                          src={aircraft.image}
                          alt={aircraft.name}
                          style={styles.aircraftImage}
                          loading="lazy"
                        />
                        <div style={styles.aircraftImageOverlay}></div>
                      </div>
                      <div style={styles.aircraftInfo}>
                        <div style={styles.aircraftName}>{aircraft.name}</div>
                        <div style={styles.aircraftType}>{aircraft.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div 
                ref={setElementRef('facilities-section')}
                data-animate="facilities-section"
                style={{
                  ...styles.columnCard,
                  opacity: visibleElements.has('facilities-section') ? 1 : 0,
                }}
                className={visibleElements.has('facilities-section') ? 'animate-fadeInUp' : ''}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={styles.columnHeader}>
                  <BookOpenIcon size={24} color="#000" />
                  <h4 style={styles.columnTitle}>Campus Facilities</h4>
                </div>
                <div style={styles.columnContent}>
                  <div style={styles.campusImageContainer}>
                    <img
                      src={currentLocation.campusImage}
                      alt={`${currentLocation.name} Campus`}
                      style={styles.campusImage}
                      className="image-hover-zoom"
                      loading="lazy"
                    />
                  </div>
                  {currentLocation.facilities.map((facility, index) => (
                    <div 
                      key={index} 
                      style={styles.facilityItem}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(4px)';
                        const bullet = e.currentTarget.querySelector('div');
                        if (bullet) bullet.style.backgroundColor = '#667eea';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                        const bullet = e.currentTarget.querySelector('div');
                        if (bullet) bullet.style.backgroundColor = '#000';
                      }}
                    >
                      <div style={styles.bullet}></div>
                      <span style={styles.facilityText}>{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Life */}
              <div 
                ref={setElementRef('lifestyle-section')}
                data-animate="lifestyle-section"
                style={{
                  ...styles.columnCard,
                  opacity: visibleElements.has('lifestyle-section') ? 1 : 0,
                }}
                className={visibleElements.has('lifestyle-section') ? 'animate-fadeInUp' : ''}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={styles.columnHeader}>
                  <UsersIcon size={24} color="#000" />
                  <h4 style={styles.columnTitle}>Student Life</h4>
                </div>
                <div style={styles.columnContent}>
                  {currentLocation.lifestyle.map((life, index) => (
                    <div 
                      key={index} 
                      style={styles.facilityItem}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(4px)';
                        const bullet = e.currentTarget.querySelector('div');
                        if (bullet) bullet.style.backgroundColor = '#667eea';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                        const bullet = e.currentTarget.querySelector('div');
                        if (bullet) bullet.style.backgroundColor = '#000';
                      }}
                    >
                      <div style={styles.bullet}></div>
                      <span style={styles.facilityText}>{life}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Admission Process */}
            <div style={styles.processSection}>
              <h3 
                ref={setElementRef('process-title')}
                data-animate="process-title"
                style={{
                  ...styles.sectionTitle,
                  opacity: visibleElements.has('process-title') ? 1 : 0,
                }}
                className={visibleElements.has('process-title') ? 'animate-fadeInUp' : ''}
              >
                Admission Process
              </h3>
              <div style={styles.processGrid} className="responsive-grid">
                {currentLocation.process.map((step, index) => (
                  <div 
                    key={index} 
                    ref={setElementRef(`process-${index}`)}
                    data-animate={`process-${index}`}
                    style={{
                      ...styles.processStep,
                      opacity: visibleElements.has(`process-${index}`) ? 1 : 0,
                      animationDelay: `${index * 0.2}s`,
                    }}
                    className={visibleElements.has(`process-${index}`) ? 'animate-fadeInUp' : ''}
                  >
                    <div 
                      style={styles.processNumber}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1) rotate(5deg)';
                        e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1) rotate(0deg)';
                        e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                      }}
                    >
                      {index + 1}
                    </div>
                    <div 
                      style={styles.processCard}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.12)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                      }}
                    >
                      <p style={styles.processText}>{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div 
              ref={setElementRef('cta-section')}
              data-animate="cta-section"
              style={{
                ...styles.ctaSection,
                opacity: visibleElements.has('cta-section') ? 1 : 0,
              }}
              className={visibleElements.has('cta-section') ? 'animate-scaleIn' : ''}
            >
              <div style={styles.ctaCard}>
                <h3 style={styles.ctaTitle}>Ready to Start Your Aviation Journey?</h3>
                <p style={styles.ctaSubtitle}>Join hundreds of successful pilots who started their career with us</p>
                <div style={styles.ctaButtons} className="responsive-flex">
                  <MagneticButton
                    onClick={() => setShowContactForm(true)}
                    variant="primary"
                    size="lg"
                    success={submitSuccess}
                  >
                    <span>Apply Now</span>
                    <ArrowRightIcon size={20} color="#fff" />
                  </MagneticButton>
                  <MagneticButton
                    onClick={() => setShowContactForm(true)}
                    variant="secondary"
                    size="lg"
                  >
                    Get Information
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Modal */}
        {showContactForm && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
              <div style={styles.modalHeader}>
                <h3 style={styles.modalTitle}>Apply Today</h3>
                <MagneticButton
                  onClick={() => setShowContactForm(false)}
                  variant="ghost"
                  size="sm"
                >
                  <XIcon size={24} />
                </MagneticButton>
              </div>

              <form onSubmit={handleContactSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    style={styles.input}
                    placeholder="Enter your full name"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                    }}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    style={styles.input}
                    placeholder="Enter your email"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                    }}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    style={styles.input}
                    placeholder="Enter your phone number"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                    }}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Preferred Location</label>
                  <select 
                    name="location" 
                    style={styles.select}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                    }}
                  >
                    <option value="">Select a location</option>
                    <option value="south-africa">South Africa</option>
                    <option value="hungary">Hungary</option>
                    <option value="both">Both locations</option>
                  </select>
                </div>

                <MagneticButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  success={submitSuccess}
                  style={{ width: '100%' }}
                >
                  {isSubmitting ? 'Sending Application...' : 'Send Application'}
                </MagneticButton>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}