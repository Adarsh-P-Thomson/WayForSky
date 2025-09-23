import React from 'react';
import styled from 'styled-components';

// Import images
import heroBg from '../assets/Whywfs/3.2.JPG';
import storyImg from '../assets/Whywfs/3.4.JPG';
import missionImg from '../assets/Whywfs/3.5.JPG';

// --- SVG Icons for Values Section ---
// ... (Icons remain the same as the previous version)
const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);
const HandshakeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 17.5V14a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6"/><path d="M10 17.5V14a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6"/><path d="M4 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M16 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
);
const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>
);

// --- Styled Components ---

const AboutUsPage = styled.div`
  font-family: 'Inter', sans-serif;
  color: #333;
  line-height: 1.7;
  background-color: #f8f9fa;
`;

const AboutHero = styled.section`
  text-align: center;
  padding: 120px 20px;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${heroBg});
    background-size: cover;
    background-position: center;
    filter: brightness(0.5) saturate(1.2);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: clamp(2.8rem, 7vw, 4.5rem);
    font-weight: 800;
    margin-bottom: 15px;
    text-shadow: 0 2px 10px rgba(0,0,0,0.4);
  }

  p {
    font-size: clamp(1.1rem, 3vw, 1.3rem);
    max-width: 750px;
    margin: 0 auto;
    opacity: 0.95;
  }
`;

const PageSection = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin: 60px auto;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.2rem, 5vw, 3rem);
  color: #001f3f;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 700;
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const StoryContent = styled.div`
  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 20px;
  }
`;

const StoryImage = styled.img`
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 31, 63, 0.1);
  object-fit: cover;
  aspect-ratio: 4 / 3;

  @media (max-width: 992px) {
    order: -1; /* Move image to top on mobile */
  }
`;

const MissionBox = styled.div`
  background-color: #e6f7ff;
  border-left: 6px solid #0056b3;
  padding: 40px;
  border-radius: 12px;
  margin-top: 40px;

  h3 {
    font-size: 1.8rem;
    color: #001f3f;
    margin-top: 0;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    color: #003d82;
    margin: 0;
  }
`;

const VisionText = styled.p`
  text-align: center;
  font-size: 1.25rem;
  max-width: 800px;
  margin: -30px auto 60px;
  color: #555;
  font-style: italic;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const ValueCard = styled.div`
  padding: 30px;
  text-align: center;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 31, 63, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 31, 63, 0.1);
  }

  .icon {
    color: #0056b3;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 1.4rem;
    color: #001f3f;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin: 0;
  }
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const PartnerCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 31, 63, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 31, 63, 0.1);
  }

  .flag {
    font-size: 3.5rem;
    margin-bottom: 15px;
    line-height: 1;
  }

  h4 {
    font-size: 1.5rem;
    color: #001f3f;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin: 0;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
`;

const TeamMemberCard = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 31, 63, 0.04);
  border: 1px solid #f0f0f0;

  h5 {
    font-size: 1.2rem;
    color: #001f3f;
    margin: 0 0 5px;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin: 0;
  }
`;

const ClosingNote = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #001f3f 0%, #003d82 100%);
  color: white;
  padding: 80px 30px;
  border-radius: 20px;
  margin-top: 80px;

  p {
    font-size: 1.3rem;
    max-width: 800px;
    margin: 0 auto 30px;
    opacity: 0.9;
  }
`;

const CtaButton = styled.a`
  background-color: #fff;
  color: #001f3f;
  padding: 16px 35px;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e6f7ff;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

// --- Main About Us Component ---
const AboutUs = () => {
  return (
      <AboutUsPage>
        <AboutHero>
          <h1>Turning Dreams Into Reality</h1>
          <p>We are the bridge between your dream of flying and a successful career in the cockpit.</p>
        </AboutHero>
        
        <PageSection id="our-story">
            <SectionTitle>Our Story</SectionTitle>
            <StoryGrid>
                <StoryContent>
                    <p>WayForSky – Global Aviation Pathway is where dreams of flying turn into reality. We connect aspiring pilots with exclusive academies in South Africa and Hungary, ensuring world-class training, modern aircraft, and DGCA-compliant standards.</p>
                    <p>Our role goes far beyond admissions. We provide complete end-to-end support, which is why parents trust us. With written agreements, regular Parents-Instructor Meetings (PIMs), and Indian representatives on-site, we ensure transparency and peace of mind.</p>
                    <MissionBox>
                        <h3>Our Mission</h3>
                        <p>To make the journey to becoming a commercial pilot simple, transparent, and exciting, allowing students to focus solely on their training and career goals.</p>
                    </MissionBox>
                </StoryContent>
                <StoryImage src={storyImg} alt="Pilot in a cockpit" />
            </StoryGrid>
        </PageSection>

        <PageSection id="values">
          <SectionTitle>Our Vision & Values</SectionTitle>
           <VisionText>To be the most trusted aviation consultancy in the world, known for turning dreams into pilots and pilots into aviation leaders.</VisionText>
          <ValuesGrid>
            <ValueCard><div className="icon"><ShieldCheckIcon /></div><h4>Integrity</h4><p>Transparent processes, honest guidance, no hidden agendas.</p></ValueCard>
            <ValueCard><div className="icon"><UsersIcon /></div><h4>Student-First Approach</h4><p>Every decision we make starts with, “What’s best for the student?”</p></ValueCard>
            <ValueCard><div className="icon"><GlobeIcon /></div><h4>Global Outlook</h4><p>Training opportunities in South Africa, Hungary, and India.</p></ValueCard>
            <ValueCard><div className="icon"><HandshakeIcon /></div><h4>Partnership & Trust</h4><p>We build long-term relationships with students, families, and institutions.</p></ValueCard>
            <ValueCard><div className="icon"><AwardIcon /></div><h4>Excellence</h4><p>Striving for high standards that prepare students for competitive airline careers.</p></ValueCard>
          </ValuesGrid>
        </PageSection>

        <PageSection id="partners">
            <SectionTitle>Our Global Academy Partnerships</SectionTitle>
            <PartnersGrid>
                <PartnerCard><div className="flag">🇿🇦</div><h4>Accolade Flying Wings</h4><p>A leading South African flight school with a large fleet, experienced instructors, and over 300 flying days a year.</p></PartnerCard>
                <PartnerCard><div className="flag">🇭🇺</div><h4>PharmaFlight</h4><p>A state-of-the-art European training center with advanced simulators and EASA-standard flight programs in Hungary.</p></PartnerCard>
                <PartnerCard><div className="flag">🇮🇳</div><h4>Pilot Preparation Academy</h4><p>Local ground schools and support centers in India to prepare aspiring pilots before they head abroad for training.</p></PartnerCard>
            </PartnersGrid>
        </PageSection>

        <PageSection id="team">
          <SectionTitle>Meet the Leadership Team</SectionTitle>
          <TeamGrid>
            <TeamMemberCard><h5>Director</h5><p>A visionary entrepreneur shaping WayForSky as the bridge between students and global academies.</p></TeamMemberCard>
            <TeamMemberCard><h5>General Manager – Roshan Shaikh</h5><p>Oversees daily operations, ensuring every student receives personalized guidance and support.</p></TeamMemberCard>
            <TeamMemberCard><h5>Chief Finance & Strategy Officer</h5><p>Handles financial planning and the strategic sustainability of our operations.</p></TeamMemberCard>
            <TeamMemberCard><h5>Chief Operating Officer</h5><p>Ensures seamless execution of all student processes, from admissions to training support.</p></TeamMemberCard>
            <TeamMemberCard><h5>Team Coordinating Officer</h5><p>Manages internal teams to ensure smooth collaboration between all departments.</p></TeamMemberCard>
            <TeamMemberCard><h5>Chief Marketing Officer</h5><p>Builds awareness and maintains strong engagement with students, parents, and partners.</p></TeamMemberCard>
            <TeamMemberCard><h5>Chief Sales Officer</h5><p>Guides students in shortlisting the best academies and maintains confidence with parents.</p></TeamMemberCard>
          </TeamGrid>
        </PageSection>

        <PageSection>
            <ClosingNote>
                <p>At WayForSky, you don’t just join a flying academy – you join a pathway that takes you from a dreamer to a professional pilot.</p>
                <CtaButton href="/contactus">Start Your Journey Today</CtaButton>
            </ClosingNote>
        </PageSection>
      </AboutUsPage>
  );
};

export default AboutUs;
