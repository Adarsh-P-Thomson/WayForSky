import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"
import { ArrowRight, Send } from "lucide-react"

// Keyframes for animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 86, 179, 0.7); }
  70% { box-shadow: 0 0 0 20px rgba(0, 86, 179, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 86, 179, 0); }
`

// Styled Components
const CTASection = styled.section`
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%);
  padding: clamp(80px, 15vh, 120px) 2rem;
  font-family: "Inter", sans-serif;
  overflow: hidden;
`

const CTAContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 86, 179, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const ContentWrapper = styled.div`
  padding: clamp(40px, 8vw, 80px);

  @media (max-width: 992px) {
    order: 2;
  }
`

const Title = styled.h2`
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 800;
  color: #001f3f;
  line-height: 1.2;
  margin: 0 0 1rem;
`

const Subtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  color: #4a6a8a;
  line-height: 1.6;
  margin: 0 0 2.5rem;
  max-width: 500px;

  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #0056b3;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 18px 36px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 86, 179, 0.25);
  animation: ${pulse} 2s infinite;

  &:hover {
    background: #003d82;
    transform: translateY(-4px);
    box-shadow: 0 12px 25px rgba(0, 61, 130, 0.35);
    animation: none;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: linear-gradient(45deg, #0056b3, #007bff);
  border-radius: 0 24px 24px 0;

  @media (max-width: 992px) {
    order: 1;
    min-height: 300px;
    border-radius: 24px 24px 0 0;
  }
`

const PaperPlaneIcon = styled(Send)`
  color: white;
  width: clamp(80px, 20vw, 150px);
  height: auto;
  transform: rotate(-25deg);
  animation: ${float} 4s ease-in-out infinite;
  filter: drop-shadow(0 15px 20px rgba(0, 0, 0, 0.2));
`

const CTA = () => {
  return (
    <CTASection>
      <CTAContainer>
        <ContentWrapper>
          <Title>Ready for Takeoff?</Title>
          <Subtitle>
            Your journey to becoming a world-class pilot starts here. Consult
            with our experts and let us chart your course to the skies.
          </Subtitle>
          <CTAButton to="/contactus">
            Start Your Journey
            <ArrowRight size={22} />
          </CTAButton>
        </ContentWrapper>
        <ImageWrapper>
          <PaperPlaneIcon />
        </ImageWrapper>
      </CTAContainer>
    </CTASection>
  )
}

export default CTA;

