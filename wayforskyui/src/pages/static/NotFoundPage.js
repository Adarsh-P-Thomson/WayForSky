import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// --- SVG Icon for the 404 Page ---
// A compass icon fits the aviation/navigation theme perfectly.
const CompassIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="80" 
        height="80" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="not-found-icon"
    >
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
    </svg>
);

// --- Main Not Found Page Component ---
const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .not-found-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: 70vh;
          font-family: 'Inter', sans-serif;
          background-color: #f9f9f9;
          padding: 40px 20px;
        }

        .not-found-icon {
          color: #0056b3;
          margin-bottom: 25px;
        }

        .not-found-title {
          font-size: 3rem;
          font-weight: 800;
          color: #001f3f;
          margin: 0 0 10px;
        }

        .not-found-text {
          font-size: 1.2rem;
          color: #555;
          max-width: 500px;
          margin-bottom: 30px;
        }

        .not-found-actions {
          display: flex;
          gap: 15px;
        }

        .action-button {
          padding: 12px 25px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .home-button {
          background-color: #0056b3;
          color: white;
        }
        
        .home-button:hover {
            background-color: #003d82;
            transform: translateY(-2px);
        }

        .back-button {
          background-color: transparent;
          color: #0056b3;
          border: 2px solid #0056b3;
        }

        .back-button:hover {
            background-color: #e6f7ff;
            transform: translateY(-2px);
        }
      `}</style>
      <div className="not-found-container">
        <CompassIcon />
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p className="not-found-text">
          It looks like you've navigated off the flight path. The page you are looking for does not exist.
        </p>
        <div className="not-found-actions">
          <button onClick={() => navigate(-1)} className="action-button back-button">
            Go Back
          </button>
          <Link to="/" className="action-button home-button">
            Go to Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
