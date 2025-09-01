import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Add these Google Fonts imports to your global CSS or index.html:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500;1,600&display=swap" rel="stylesheet">

// Styled Components for layout and styling
const HeroContainer = styled(motion.section)`
  width: 100%;
  height: 100vh;
  min-height: 700px;
  background: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100vh;
    min-height: 600px;
    padding: 15px;
  }
`;

const LeftColumn = styled.div`
  background: #F39C12;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 3rem 4rem 4rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    align-items: center;
    text-align: center;
  }
`;

const HeadlineContainer = styled.div`
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const BoldText = styled(motion.h1)`
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: clamp(3.5rem, 8vw, 7rem);
  color: #2C2C2C;
  line-height: 0.85;
  margin: 0;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 12vw, 4.5rem);
  }
`;

const ItalicText = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 500;
  font-size: clamp(3.5rem, 8vw, 7rem);
  color: #2C2C2C;
  line-height: 0.85;
  margin: 0;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 12vw, 4.5rem);
  }
`;

const ContentContainer = styled(motion.div)`
  margin-bottom: 2.5rem;
  max-width: 400px;
  
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`;

const ContentText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: #2C2C2C;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.75rem;
  }
`;

const CTAButton = styled(motion.button)`
  background: #E8E8E8;
  color: #2C2C2C;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 0.9rem;
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: #2C2C2C;
  border: 2px solid #2C2C2C;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 0.9rem;
  }
`;

const RightColumn = styled(motion.div)`
  position: relative;
  overflow: hidden;
background: url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') center/cover no-repeat;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Framer Motion variants for animations
const containerVariants = {
  hidden: { 
    opacity: 0
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15
    }
  }
};

const textVariants = {
  hidden: { 
    opacity: 0,
    y: 30 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const contentVariants = {
  hidden: { 
    opacity: 0,
    y: 20 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.3
    }
  }
};

const patternVariants = {
  hidden: { 
    scale: 1.05,
    opacity: 0 
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

const buttonHoverVariants = {
  hover: { 
    scale: 1.03,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: { 
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
};

const secondaryButtonHoverVariants = {
  hover: { 
    scale: 1.03,
    backgroundColor: "#2C2C2C",
    color: "#FF4500",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: { 
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
};

// Main React component
const CTA = () => {
  const handleGetStarted = () => {
    console.log('Get Started clicked!');
    // Add your navigation or action logic here
  };

  const handleBookCounselling = () => {
    console.log('Book Free Counselling clicked!');
    // Add your booking logic here
  };

  return (
    <HeroContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Column - Orange background with headline, content and CTAs */}
      <LeftColumn>
        <HeadlineContainer>
          <BoldText variants={textVariants}>
            READY
          </BoldText>
          <BoldText variants={textVariants}>
            TO <ItalicText as="span" variants={textVariants}>TAKE</ItalicText>
          </BoldText>
          <BoldText variants={textVariants}>
            OFF?
          </BoldText>
        </HeadlineContainer>
        
        <ContentContainer variants={contentVariants}>
          <ContentText>
            Your aviation career starts with a single step. Book your free counselling session today and let our team guide you to the right path.
          </ContentText>
          
          <ButtonContainer>
            <CTAButton
              variants={contentVariants}
              whileHover="hover"
              whileTap="tap"
              {...buttonHoverVariants}
              onClick={handleGetStarted}
            >
              GET STARTED
            </CTAButton>
            
            <SecondaryButton
              variants={contentVariants}
              whileHover="hover"
              whileTap="tap"
              {...secondaryButtonHoverVariants}
              onClick={handleBookCounselling}
            >
              BOOK FREE COUNSELLING
            </SecondaryButton>
          </ButtonContainer>
        </ContentContainer>
      </LeftColumn>

      {/* Right Column - Full image background */}
      <RightColumn
        variants={patternVariants}
        initial="hidden"
        animate="visible"
      />
    </HeroContainer>
  );
};

export default CTA;