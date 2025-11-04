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
  padding: 100px 20px 80px;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 380px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${heroBg});
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(56, 189, 248, 0.65) 0%, rgba(125, 211, 252, 0.65) 50%, rgba(186, 230, 253, 0.60) 100%);
    z-index: 2;
  }

  & > * {
    position: relative;
    z-index: 3;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: 20px;
    text-shadow: 0 4px 20px rgba(0,0,0,0.4);
    line-height: 1.2;
  }

  p {
    font-size: clamp(1.05rem, 2.5vw, 1.3rem);
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.95;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 80px 20px 60px;
    min-height: 320px;
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
  color: #0369a1;
  text-align: center;
  margin-bottom: 60px;
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
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-left: 6px solid #38bdf8;
  padding: 40px;
  border-radius: 16px;
  margin-top: 40px;
  box-shadow: 0 8px 25px rgba(56, 189, 248, 0.12);

  h3 {
    font-size: 1.8rem;
    color: #0369a1;
    margin-top: 0;
    margin-bottom: 15px;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    color: #0284c7;
    margin: 0;
    line-height: 1.8;
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
  padding: 35px;
  text-align: center;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(56, 189, 248, 0.08);
  transition: all 0.3s ease;
  border: 2px solid #e0f2fe;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(56, 189, 248, 0.15);
    border-color: #38bdf8;
  }

  .icon {
    color: #38bdf8;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }

  h4 {
    font-size: 1.4rem;
    color: #0369a1;
    margin-bottom: 12px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: #64748b;
    margin: 0;
    line-height: 1.7;
  }
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const PartnerCard = styled.div`
  background: #fff;
  border: 2px solid #e0f2fe;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(56, 189, 248, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(56, 189, 248, 0.15);
    border-color: #38bdf8;
  }

  .flag {
    font-size: 3.5rem;
    margin-bottom: 15px;
    line-height: 1;
  }

  h4 {
    font-size: 1.5rem;
    color: #0369a1;
    margin-bottom: 15px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: #64748b;
    margin: 0;
    line-height: 1.7;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
`;

const TeamMemberCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(56, 189, 248, 0.08);
  border: 2px solid #e0f2fe;
  transition: all 0.3s ease;

  &:hover {
    border-color: #38bdf8;
    box-shadow: 0 8px 25px rgba(56, 189, 248, 0.15);
    transform: translateY(-5px);
  }

  h5 {
    font-size: 1.2rem;
    color: #0369a1;
    margin: 0 0 8px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: #64748b;
    margin: 0;
    line-height: 1.7;
  }
`;

const ClosingNote = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
  color: white;
  padding: 80px 30px;
  border-radius: 24px;
  margin-top: 80px;
  box-shadow: 0 20px 60px rgba(56, 189, 248, 0.25);

  p {
    font-size: 1.4rem;
    max-width: 800px;
    margin: 0 auto 30px;
    opacity: 0.95;
    line-height: 1.8;
  }
`;

const CtaButton = styled.a`
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
`;

const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
`;

const SupportCard = styled.div`
  background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);
  padding: 30px;
  border-radius: 16px;
  border-left: 4px solid #38bdf8;
  box-shadow: 0 4px 15px rgba(56, 189, 248, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 25px rgba(56, 189, 248, 0.15);
  }

  h4 {
    font-size: 1.2rem;
    color: #0369a1;
    margin: 0 0 10px;
    font-weight: 700;
  }

  p {
    font-size: 0.95rem;
    color: #64748b;
    margin: 0;
    line-height: 1.7;
  }
`;

const IntroText = styled.div`
  max-width: 900px;
  margin: 0 auto 50px;
  text-align: center;

  p {
    font-size: 1.15rem;
    color: #475569;
    line-height: 1.9;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }

    strong {
      color: #0369a1;
    }
  }
`;

const StorySection = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%);
  padding: 60px 40px;
  border-radius: 24px;
  margin-top: 30px;
  box-shadow: 0 4px 20px rgba(56, 189, 248, 0.08);
`;

// --- Main About Us Component ---
const AboutUs = () => {
  return (
      <AboutUsPage>
        <AboutHero>
          <h1>✈️ About Us – WayForSky</h1>
          <p>Empowering aspiring pilots with world-class training and lifelong support to turn dreams into reality.</p>
        </AboutHero>
        
        <PageSection id="our-story">
            <SectionTitle>Our Story</SectionTitle>
            <IntroText>
                <p>At WayForSky, we believe that every aspiring pilot deserves a clear path to the skies. Our journey began with a simple question: <strong>Why do so many talented students struggle to find the right guidance for their pilot career?</strong></p>
                <p>We saw the confusion, misinformation, and overwhelming choices students faced — from understanding different training countries, to securing admissions, visas, and career pathways. That's where WayForSky stepped in.</p>
                <p>Founded with the vision to simplify the journey for pilot aspirants, we became more than just a consultancy. We became mentors, partners, and lifelong supporters for students who dream of flying.</p>
            </IntroText>
            <StorySection>
                <StoryGrid>
                    <StoryContent>
                        <p>WayForSky – Global Aviation Pathway is where dreams of flying turn into reality. We connect aspiring pilots with exclusive academies in South Africa and Hungary, ensuring world-class training, modern aircraft, and DGCA-compliant standards.</p>
                        <p>Our role goes far beyond admissions. We provide complete end-to-end support, which is why parents trust us. With written agreements, regular Parents-Instructor Meetings (PIMs), and Indian representatives on-site, we ensure transparency and peace of mind.</p>
                        <MissionBox>
                            <h3>Our Mission</h3>
                            <p>To empower aspiring pilots with the right knowledge, access to world-class training academies, and end-to-end support so they can confidently achieve their lifelong dream and step into the aviation industry with pride.</p>
                        </MissionBox>
                    </StoryContent>
                    <StoryImage src={storyImg} alt="Pilot in training" />
                </StoryGrid>
            </StorySection>
        </PageSection>

        <PageSection id="values">
          <SectionTitle>Our Vision & Values</SectionTitle>
           <VisionText>To be the most trusted aviation consultancy in the world, known for turning dreams into pilots and pilots into aviation leaders.</VisionText>
          <ValuesGrid>
            <ValueCard><div className="icon"><ShieldCheckIcon /></div><h4>Integrity</h4><p>Transparent processes, honest guidance, no hidden agendas.</p></ValueCard>
            <ValueCard><div className="icon"><UsersIcon /></div><h4>Student-First Approach</h4><p>Every decision we make starts with, “What’s best for the student?”</p></ValueCard>
            <ValueCard><div className="icon"><GlobeIcon /></div><h4>Global Outlook</h4><p>Training opportunities in South Africa, Hungary, and India.</p></ValueCard>
            <ValueCard><div className="icon"><HandshakeIcon /></div><h4>Partnership & Trust</h4><p>We build long-term relationships with students, families, and institutions.</p></ValueCard>
            <ValueCard><div className="icon"><AwardIcon /></div><h4>Excellence in Aviation</h4><p>Striving for high standards that prepare students for competitive airline careers.</p></ValueCard>
          </ValuesGrid>
        </PageSection>

        <PageSection id="partners">
            <SectionTitle>Our Global Academy Partnerships</SectionTitle>
            <IntroText>
                <p>WayForSky is proud to collaborate with globally recognized aviation academies that share our passion for quality training. Through these partnerships, we ensure our students receive world-class training, international recognition, and a strong career foundation.</p>
            </IntroText>
            <PartnersGrid>
                <PartnerCard>
                    <div className="flag">🇿🇦</div>
                    <h4>Accolade Flying Wings</h4>
                    <p>One of South Africa's leading flight schools, offering extensive CPL training programs with a large fleet, experienced instructors, and over 300 flying days a year.</p>
                </PartnerCard>
                <PartnerCard>
                    <div className="flag">🇭🇺</div>
                    <h4>PharmaFlight</h4>
                    <p>A state-of-the-art aviation training and research center with advanced simulators, medical & human performance training, and EASA-standard flight programs.</p>
                </PartnerCard>
                <PartnerCard>
                    <div className="flag">🇮🇳</div>
                    <h4>Pilot Preparation Academy</h4>
                    <p>Local ground schools and training support centers for aspiring pilots to prepare before heading abroad.</p>
                </PartnerCard>
            </PartnersGrid>
        </PageSection>

        <PageSection id="team">
          <SectionTitle>Leadership Team</SectionTitle>
          <IntroText>
              <p>Together, our leadership team combines aviation expertise, business acumen, and student-focused care to keep WayForSky's mission on course.</p>
          </IntroText>
          <TeamGrid>
            <TeamMemberCard><h5>Director</h5><p>A visionary entrepreneur with years of experience in aviation education and consultancy. Their leadership has shaped WayForSky into a trusted bridge between students and global academies.</p></TeamMemberCard>
            <TeamMemberCard><h5>General Manager – Roshan Shaikh</h5><p>Oversees daily operations, with a passion for aviation and strategic growth, ensuring that every student receives personalized guidance and support.</p></TeamMemberCard>
            <TeamMemberCard><h5>Chief Finance & Strategy Officer (CFSO)</h5><p>Handles financial planning, strategy, and sustainability of operations.</p></TeamMemberCard>
            <TeamMemberCard><h5>Chief Operating Officer (COO)</h5><p>Ensures seamless execution of student processes, from admissions to training support.</p></TeamMemberCard>
            <TeamMemberCard><h5>Team Coordinating Officer (TCO)</h5><p>Manages internal teams and ensures smooth collaboration between departments.</p></TeamMemberCard>
            <TeamMemberCard><h5>Chief Marketing Officer (CMO)</h5><p>Builds awareness and maintains strong engagement with students, parents, and partners.</p></TeamMemberCard>
            <TeamMemberCard><h5>Chief Sales Officer (CSO)</h5><p>Guides students in shortlisting academies, explaining options, and maintaining confidence with parents.</p></TeamMemberCard>
          </TeamGrid>
        </PageSection>

        <PageSection id="student-support">
          <SectionTitle>Student-First Approach</SectionTitle>
          <IntroText>
              <p>We understand that becoming a pilot isn't just about flying—it's about navigating every stage of the journey. That's why we designed a step-by-step support system. With this end-to-end approach, we ensure no student feels alone in their journey.</p>
          </IntroText>
          <SupportGrid>
            <SupportCard><h4>Personalised Counselling</h4><p>Every student speaks with professional counsellors and pilots who answer doubts about fees, careers, visas, and life abroad.</p></SupportCard>
            <SupportCard><h4>Panel Sessions with Pilots</h4><p>Before choosing, students hear from experienced pilots who have been through the journey themselves.</p></SupportCard>
            <SupportCard><h4>Academy Selection</h4><p>We help students find the right fit in South Africa or Hungary based on goals, budget, and career plans.</p></SupportCard>
            <SupportCard><h4>Admissions & Visa Assistance</h4><p>Complete support for documentation, applications, and approvals.</p></SupportCard>
            <SupportCard><h4>Campus Orientation</h4><p>Arranging campus tours and connecting students with academies directly.</p></SupportCard>
            <SupportCard><h4>Training Mentorship</h4><p>Even after admission, our team stays connected with students, offering mentorship during their training.</p></SupportCard>
            <SupportCard><h4>Career Support</h4><p>Guidance for type ratings, airline entrance prep, and long-term career opportunities.</p></SupportCard>
          </SupportGrid>
        </PageSection>

        <PageSection>
            <ClosingNote>
                <p>At WayForSky, we don't just send students abroad—we walk the journey with them. For us, every pilot's success story is proof of our mission: helping dreams take off and soar.</p>
                <CtaButton href="/contactus">Start Your Journey Today</CtaButton>
            </ClosingNote>
        </PageSection>
      </AboutUsPage>
  );
};

export default AboutUs;
