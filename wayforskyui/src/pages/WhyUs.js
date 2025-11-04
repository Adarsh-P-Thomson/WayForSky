import React from 'react';
import styled from 'styled-components';

// Import images for the feature cards
import img1 from '../assets/Whywfs/3.1.JPG';
import img2 from '../assets/Whywfs/3.2.JPG';
import img3 from '../assets/Whywfs/3.3.JPG';
import img4 from '../assets/Whywfs/3.4.JPG';
import img5 from '../assets/Whywfs/3.5.JPG';
import img6 from '../assets/Whywfs/3.6.JPG';

// --- SVG Icons for this page ---
const TieIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const PackageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
);
const UserCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
);
const UsersGroupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const FastForwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/></svg>
);
const FileTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
);
const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);

// --- Styled Components ---
const WhyUsPage = styled.div`
  font-family: 'Inter', sans-serif;
  color: #333;
  background-color: #f8f9fa;
`;

const WhyUsHero = styled.section`
  text-align: center;
  padding: 120px 20px 100px;
  position: relative;
  background: linear-gradient(135deg, #001f3f 0%, #003d82 100%);
  color: white;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.05)"/></svg>');
    opacity: 0.3;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    text-shadow: 0 4px 20px rgba(0,0,0,0.2);
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }

  p {
    font-size: clamp(1.05rem, 3vw, 1.3rem);
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.95;
    line-height: 1.6;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 100px 20px 80px;
  }
`;

const WhyUsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 35px;
  max-width: 1400px;
  margin: -60px auto 80px;
  padding: 0 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 15px;
    margin-top: -40px;
  }
`;

const WhyCard = styled.div`
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.12);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 2px solid #e0f2fe;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 50px rgba(56, 189, 248, 0.2);
    border-color: #38bdf8;
  }

  .card-image {
    height: 220px;
    width: 100%;
    object-fit: cover;
  }

  .card-content {
    padding: 35px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  }

  .icon-container {
    color: #38bdf8;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(56, 189, 248, 0.15);
  }

  h3 {
    font-size: 1.5rem;
    margin: 0 0 16px;
    color: #0369a1;
    font-weight: 700;
  }

  p {
    margin: 0;
    color: #64748b;
    line-height: 1.7;
    flex-grow: 1;
    font-size: 1rem;
  }
`;

const SupportSection = styled.section`
  max-width: 1200px;
  margin: 100px auto;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(56, 189, 248, 0.08);

  h2 {
    font-size: clamp(2.2rem, 5vw, 3rem);
    color: #0369a1;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 800;
    position: relative;
    padding-bottom: 20px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #38bdf8, #7dd3fc);
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    margin: 80px auto;
    padding: 40px 20px;
  }
`;

const SupportSteps = styled.div`
  position: relative;
  max-width: 900px;
  margin: 60px auto 0;
  
  &::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 30px;
    bottom: 30px;
    width: 3px;
    background: linear-gradient(180deg, #38bdf8, #7dd3fc, #bae6fd);
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 45px;
  gap: 30px;
  position: relative;
  padding: 25px;
  background: white;
  border-radius: 16px;
  border: 2px solid #e0f2fe;
  transition: all 0.3s ease;

  &:hover {
    border-color: #38bdf8;
    box-shadow: 0 8px 25px rgba(56, 189, 248, 0.12);
    transform: translateX(8px);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    gap: 20px;
    padding: 20px;
  }
`;

const StepNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #38bdf8, #0ea5e9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  min-width: 60px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    min-width: 50px;
  }
`;

const StepContent = styled.div`
  flex: 1;
  
  h5 {
    font-size: 1.4rem;
    margin: 0 0 10px;
    color: #0369a1;
    font-weight: 700;
  }
  
  p {
    margin: 0;
    color: #64748b;
    line-height: 1.7;
    font-size: 1rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.15rem;
  color: #64748b;
  max-width: 700px;
  margin: -10px auto 40px;
  line-height: 1.7;
`;

const ClosingSection = styled.section`
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(135deg, #001f3f 0%, #003d82 100%);
  color: white;
  margin-top: 80px;

  p {
    font-size: 1.6rem;
    max-width: 800px;
    margin: 0 auto 35px;
    font-weight: 600;
    line-height: 1.5;
    text-shadow: 0 2px 10px rgba(0,0,0,0.15);
  }

  .cta-button {
    background-color: #fff;
    color: #0ea5e9;
    padding: 18px 40px;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    display: inline-block;

    &:hover {
      background-color: #f0f9ff;
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
      color: #38bdf8;
    }
  }

  @media (max-width: 768px) {
    padding: 80px 20px;
    
    p {
      font-size: 1.3rem;
    }
  }
`;

// --- Main Why Us Component ---
const WhyUs = () => {
    const whyPoints = [
        {
            icon: <TieIcon />,
            title: "Exclusive Academy Tie-Ups",
            description: "We only send students to academies where we hold exclusive rights, guaranteeing safety and quality.",
            image: img1
        },
        {
            icon: <PackageIcon />,
            title: "End-to-End Services",
            description: "From medicals and visas to accommodation and ticketing, everything is handled under one roof.",
            image: img2
        },
        {
            icon: <UserCheckIcon />,
            title: "Expert Guidance",
            description: "In-house DGCA doctors, CPL ground instructors, and real pilots mentor students.",
            image: img3
        },
        {
            icon: <UsersGroupIcon />,
            title: "Parent Engagement",
            description: "Regular Parents-Instructor Meetings (PIMs) keep families informed and assured.",
            image: img4
        },
        {
            icon: <FastForwardIcon />,
            title: "Fast-Track Training",
            description: "Special MOUs help students complete CPL in shorter durations without compromising quality.",
            image: img5
        },
        {
            icon: <FileTextIcon />,
            title: "Transparent & Assured",
            description: "Every commitment is written, so there are no hidden conditions.",
            image: img6
        },
    ];

  return (
      <WhyUsPage>
        <WhyUsHero>
            <h1>The WayForSky Advantage</h1>
            <p>With WayForSky, both students and parents find confidence in a future that is safe, structured, and full of opportunities.</p>
        </WhyUsHero>

        <WhyUsGrid>
            {whyPoints.map(point => (
                <WhyCard key={point.title}>
                    <img src={point.image} alt={point.title} className="card-image" />
                    <div className="card-content">
                        <div className="icon-container">{point.icon}</div>
                        <h3>{point.title}</h3>
                        <p>{point.description}</p>
                    </div>
                </WhyCard>
            ))}
        </WhyUsGrid>

        <SupportSection id="support">
            <h2>Our Student-First Approach</h2>
            <SectionSubtitle>We understand that becoming a pilot isn't just about flying—it's about navigating every stage of the journey with expert guidance and unwavering support.</SectionSubtitle>
            <SupportSteps>
                <Step><StepNumber>01</StepNumber><StepContent><h5>Personalised Counselling</h5><p>Every student speaks with professional counsellors and pilots to clear all their doubts.</p></StepContent></Step>
                <Step><StepNumber>02</StepNumber><StepContent><h5>Panel Sessions with Pilots</h5><p>Students hear directly from experienced pilots who have been through the journey themselves.</p></StepContent></Step>
                <Step><StepNumber>03</StepNumber><StepContent><h5>Academy Selection</h5><p>We help students find the right fit based on their goals, budget, and career plans.</p></StepContent></Step>
                <Step><StepNumber>04</StepNumber><StepContent><h5>Admissions & Visa Assistance</h5><p>We provide complete, end-to-end support for documentation, applications, and approvals.</p></StepContent></Step>
                <Step><StepNumber>05</StepNumber><StepContent><h5>Training Mentorship</h5><p>Our team stays connected, offering mentorship and support throughout their training abroad.</p></StepContent></Step>
                <Step><StepNumber>06</StepNumber><StepContent><h5>Career Support</h5><p>We provide guidance for type ratings and airline entrance preparation for long-term success.</p></StepContent></Step>
            </SupportSteps>
        </SupportSection>
        
        <ClosingSection>
            <p>Ready to experience the difference?</p>
            <a href="/contactus" className="cta-button">Consult with a Pilot Today</a>
        </ClosingSection>
      </WhyUsPage>
  );
};

export default WhyUs;