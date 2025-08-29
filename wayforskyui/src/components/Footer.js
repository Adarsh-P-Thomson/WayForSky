
import Footer from '.Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h4 className="footer-logo">WAYFORSKY</h4>
          <p>Your journey to the skies begins here. Premier pilot training and aviation services designed for the future of flight.</p>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Our Courses</a></li>
            <li><a href="/fleet">Our Fleet</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Get in Touch</h4>
          <p>Email: <a href="mailto:contact@wayforsky.com">contact@wayforsky.com</a></p>
          <p>Phone: <a href="tel:+911234567890">+91 12345 67890</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} WayForSky. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default App;
