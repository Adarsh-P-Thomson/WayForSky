import React, { useState } from 'react';
import styled from 'styled-components';
import { MapPin, Calendar, Clock, UserCheck, CheckCircle } from 'lucide-react';

// Using an existing image from your assets for the hero section
import heroImage from '../assets/Whywfs/3.1.JPG';

// --- Styled Components ---

const PageWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  background-color: #f8f9fa;
  color: #1a202c;
`;

const HeroSection = styled.section`
  position: relative;
  text-align: center;
  padding: 120px 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${heroImage});
    background-size: cover;
    background-position: center;
    filter: brightness(0.5);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    max-width: 700px;
    margin: 20px auto 0;
    opacity: 0.9;
    font-weight: 400;
  }
`;

const MainContent = styled.main`
  display: grid;
  gap: 40px;
  max-width: 1200px;
  margin: -80px auto 0;
  padding: 0 20px 80px;
  position: relative;
  z-index: 3;
`;

const TopContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: start;

  @media (min-width: 992px) {
    grid-template-columns: 2fr 1fr;
    gap: 40px;
    align-items: start;
  }
`;

const StorySection = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 31, 63, 0.08);

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #001f3f;
    margin-bottom: 24px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #4a5568;
    margin-bottom: 20px;
  }

  strong {
    color: #003d82;
    font-weight: 600;
  }
`;

const WebinarDetails = styled.div`
  background: linear-gradient(135deg, #003d82 0%, #0056b3 100%);
  color: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 86, 179, 0.2);
  position: sticky;
  top: 40px; /* Adjust sticky position within its parent */

  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 15px;
  }
`;

const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;

  svg {
    flex-shrink: 0;
    margin-top: 3px;
    opacity: 0.8;
  }

  span {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const RegistrationForm = styled.form`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 31, 63, 0.08);
  grid-column: 1 / -1; /* Span full width */

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: #001f3f;
    margin-bottom: 30px;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #0056b3;
    box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.2);
  }
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1; /* Span full width */
  background-color: #0056b3;
  color: white;
  border: none;
  padding: 16px 20px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:not(:disabled):hover {
    background-color: #003d82;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 86, 179, 0.2);
  }

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: #ffffff;
  padding: 60px 40px;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 31, 63, 0.08);
  text-align: center;
  grid-column: 1 / -1; /* Span full width */

  svg {
    color: #28a745;
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #001f3f;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    color: #4a5568;
    max-width: 500px;
    margin: 0 auto;
  }
`;


const WebinarPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500); // Simulate network request
  };

  return (
    <PageWrapper>
      <HeroSection>
        <h1>Your First Step Into the Cockpit</h1>
        <p>A live, interactive webinar designed to demystify the journey of becoming a commercial pilot.</p>
      </HeroSection>

      <MainContent>
        <TopContentWrapper>
          <StorySection>
            <h2>From Dream to Reality: A Pilot's Roadmap</h2>
            <p>
              Ever looked up at the sky and felt a pull? The dream of flying is powerful, but the path to the cockpit can seem complex, filled with questions about costs, licenses, and career prospects. It's easy to feel lost before you even begin.
            </p>
            <p>
              We've been there. That's why we created this exclusive webinar. It’s not just another presentation; it's a <strong>live conversation with seasoned airline pilots and aviation experts</strong> who have navigated this exact journey. They will share their stories, demystify the process, and provide a clear, step-by-step roadmap.
            </p>
            <p>
              This is your chance to get real answers, understand the challenges, and see the incredible opportunities that await. Consider this your pre-flight briefing for the most exciting journey of your life.
            </p>
          </StorySection>

          <WebinarDetails>
            <h3>Webinar Details</h3>
            <DetailItem>
              <Calendar size={24} />
              <span><strong>Date:</strong> Saturday, September 28, 2024</span>
            </DetailItem>
            <DetailItem>
              <Clock size={24} />
              <span><strong>Time:</strong> 11:00 AM (IST)</span>
            </DetailItem>
            <DetailItem>
              <MapPin size={24} />
              <span><strong>Platform:</strong> Live on Zoom</span>
            </DetailItem>
            <DetailItem>
              <UserCheck size={24} />
              <span><strong>Hosted By:</strong> Airline Captains & WayForSky Experts</span>
            </DetailItem>
          </WebinarDetails>
        </TopContentWrapper>

        {isSubmitted ? (
          <SuccessMessage>
            <CheckCircle />
            <h2>Thank You for Registering!</h2>
            <p>We've secured your spot. Please check your email for the webinar link and further details. We look forward to seeing you there!</p>
          </SuccessMessage>
        ) : (
          <RegistrationForm onSubmit={handleSubmit}>
            <h2>Secure Your Spot - It's Free!</h2>
            <FormGrid>
              <Input type="text" placeholder="Full Name" required />
              <Input type="email" placeholder="Email Address" required />
              <Input type="tel" placeholder="Phone Number" required />
              <Input type="text" placeholder="City" required />
            </FormGrid>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register for Webinar'}
            </SubmitButton>
          </RegistrationForm>
        )}
      </MainContent>
    </PageWrapper>
  );
};

export default WebinarPage;