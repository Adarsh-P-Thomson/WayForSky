import React, { useState, useEffect } from 'react';

// --- Custom Hook for Window Width ---
// This hook listens to the window resize event and provides the current width.
// This allows the component to apply styles dynamically based on screen size.
const useWindowWidth = () => {
    // Initialize state with the current window width
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => setWidth(window.innerWidth);
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Call handler right away so state gets updated with initial window size
        handleResize();
        
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return width;
};


// --- Style Objects ---
// These are the base styles, primarily for the mobile view (mobile-first approach).
const styles = {
    footer: {
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f3f4f6',
        fontFamily: 'sans-serif',
    },
    container: {
        maxWidth: '80rem',
        margin: '0 auto',
    },
    brandTitle: {
        fontSize: '2.25rem',
        fontWeight: '700',
        color: '#000000',
        marginBottom: '1rem',
        letterSpacing: '-0.025em',
    },
    brandSubtitle: {
        fontSize: '1.125rem',
        color: '#4b5563',
        fontWeight: '500',
        lineHeight: '1.75',
    },
    navSectionTitle: {
        fontSize: '1.125rem',
        fontWeight: '600',
        color: '#000000',
        marginBottom: '1.5rem',
        letterSpacing: '0.025em',
        borderBottom: '2px solid #2563eb',
        paddingBottom: '0.5rem',
        display: 'inline-block',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    footerLink: {
        color: '#4b5563',
        textDecoration: 'none',
        transition: 'all 0.2s ease-in-out',
        fontSize: '1rem',
        fontWeight: '500',
        display: 'block',
        padding: '0.25rem 0',
    },
    footerLinkHover: {
        color: '#2563eb',
        transform: 'translateX(4px)',
    },
    officeInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        color: '#4b5563',
    },
    poweredBy: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        color: '#4b5563',
        fontSize: '1rem',
    },
    socialIconsContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
    },
    socialIcon: {
        color: '#6b7280',
        transition: 'all 0.2s ease-in-out',
    },
    socialIconHover: {
        color: '#2563eb',
        transform: 'scale(1.1) translateY(-2px)',
    },
};

// --- Sub-Components ---
const FooterLink = ({ href, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const linkStyle = {
        ...styles.footerLink,
        ...(isHovered ? styles.footerLinkHover : {}),
    };
    return (
        <li>
            <a href={href} style={linkStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {children}
            </a>
        </li>
    );
};

const SocialIcon = ({ href, ariaLabel, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const iconStyle = {
        ...styles.socialIcon,
        ...(isHovered ? styles.socialIconHover : {}),
    };
    return (
        <a href={href} style={iconStyle} aria-label={ariaLabel} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {children}
        </a>
    );
};


// --- Main Footer Component ---
const Footer = () => {
    const width = useWindowWidth();
    // Define breakpoints
    const isSm = width >= 640;
    const isLg = width >= 1024;

    // --- Dynamic Styles ---
    // These styles change based on the window width, creating the responsive effect.
    const footerStyle = {
        ...styles.footer,
        padding: isLg ? '4rem 3rem' : isSm ? '4rem 2rem' : '4rem 1.5rem',
    };

    const mainGridStyle = {
        display: 'grid',
        gridTemplateColumns: isLg ? 'repeat(4, minmax(0, 1fr))' : 'repeat(1, minmax(0, 1fr))',
        gap: isLg ? '2rem' : '3rem',
    };
    
    const brandSectionStyle = {
        gridColumn: isLg ? 'span 1 / span 1' : 'span 1 / span 1',
    };

    const navContainerStyle = {
        gridColumn: isLg ? 'span 3 / span 3' : 'span 1 / span 1',
    };

    const navGridStyle = {
        display: 'grid',
        gridTemplateColumns: isLg ? 'repeat(4, minmax(0, 1fr))' : isSm ? 'repeat(2, minmax(0, 1fr))' : 'repeat(1, minmax(0, 1fr))',
        gap: isSm ? '3rem' : '2rem',
    };

    const bottomSectionStyle = {
        marginTop: '4rem',
        paddingTop: '2rem',
        borderTop: '1px solid #f3f4f6',
        display: 'flex',
        flexDirection: isSm ? 'row' : 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1.5rem',
    };

    return (
        <footer style={footerStyle}>
            <div style={styles.container}>
                <div style={mainGridStyle}>
                    <div style={brandSectionStyle}>
                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={styles.brandTitle}>Wayforsky</h2>
                            <p style={styles.brandSubtitle}>Your sky your future.</p>
                        </div>
                    </div>
                    <div style={navContainerStyle}>
                        <div style={navGridStyle}>
                            <div>
                                <h3 style={styles.navSectionTitle}>Company</h3>
                                <ul style={styles.navList}>
                                    <FooterLink href="#">About</FooterLink>
                                    <FooterLink href="#">Vision</FooterLink>
                                    <FooterLink href="#">Genesis</FooterLink>
                                </ul>
                            </div>
                            <div>
                                <h3 style={styles.navSectionTitle}>Marketplace</h3>
                                <ul style={styles.navList}>
                                    <FooterLink href="#">FAQ</FooterLink>
                                    <FooterLink href="#">Blog</FooterLink>
                                    <FooterLink href="#">Apply</FooterLink>
                                </ul>
                            </div>
                            <div>
                                <h3 style={styles.navSectionTitle}>Support</h3>
                                <ul style={styles.navList}>
                                    <FooterLink href="#">Contact</FooterLink>
                                    <FooterLink href="#">FAQ</FooterLink>
                                </ul>
                            </div>
                            <div>
                                <h3 style={styles.navSectionTitle}>Office</h3>
                                <div style={styles.officeInfo}>
                                    <p style={{ fontSize: '1rem', fontWeight: '500' }}>Wayforsky Headquarters</p>
                                    <p style={{ fontSize: '0.875rem', lineHeight: '1.75', color: '#374151' }}>
                                        {/* This logic now perfectly mirrors the HTML's sm:hidden and sm:inline classes */}
                                        <span style={{ display: isSm ? 'inline' : 'none' }}>
                                            Nandi Building No 56, Bowring Hospital Road, Shivaji Nagar, Bangalore, Karnataka 560001
                                        </span>
                                        <span style={{ display: isSm ? 'none' : 'inline' }}>
                                            Nandi Building No 56<br />
                                            Bowring Hospital Road, Shivaji Nagar<br />
                                            Bangalore, Karnataka 560001
                                        </span>
                                    </p>
                                    <p style={{ fontSize: '0.875rem' }}>
                                        <span style={{ fontWeight: '500', color: '#000000' }}>Phone:</span><br />
                                        +91 9071165504
                                    </p>
                                    <p style={{ fontSize: '0.875rem' }}>
                                        <span style={{ fontWeight: '500', color: '#000000' }}>Email:</span><br />
                                        <a href="mailto:info@wayforsky.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
                                            info@wayforsky.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={bottomSectionStyle}>
                    <div style={styles.poweredBy}>
                        <span>Lifting Dreams</span>
                        <img src="https://img.icons8.com/ios-filled/50/1E90FF/airplane-take-off.png" alt="plane icon" style={{ width: '1.5rem', height: '1.5rem' }} />
                        <span>by Creative Layer</span>
                    </div>
                    <div style={styles.socialIconsContainer}>
                        <SocialIcon href="#" ariaLabel="Twitter">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </SocialIcon>
                        <SocialIcon href="#" ariaLabel="Facebook">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </SocialIcon>
                        <SocialIcon href="#" ariaLabel="YouTube">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// The main App component that renders the Footer.
function App() {
  return (
    <div>
      {/* You can add other components like a Header or Main content here */}
      <Footer />
    </div>
  );
}

export default App;
