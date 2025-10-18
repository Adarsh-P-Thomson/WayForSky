import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

import img21 from '../../../assets/Aboutwfs/2.1.JPG';
import img22 from '../../../assets/Aboutwfs/2.2.JPG';
import img23 from '../../../assets/Aboutwfs/2.3.JPG';
import img24 from '../../../assets/Aboutwfs/2.4.JPG';
import img25 from '../../../assets/Aboutwfs/2.5.JPG';
import img26 from '../../../assets/Aboutwfs/2.6.JPG';

// Declare the BenefitImage variable
const BenefitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const benefitsData = [
  {
    id: 1,
    number: "01",
    title: "Career Counseling",
    description:
      "Personalized guidance to help you choose the right aviation career path, from commercial pilot to specialized aviation roles, ensuring your goals align with industry opportunities.",
    image: img21,
  },
  {
    id: 2,
    number: "02",
    title: "Document Handling",
    description:
      "Complete assistance with all aviation documentation, from medical certificates to license applications, ensuring every requirement is met accurately and on time.",
    image: img22,
  },
  {
    id: 3,
    number: "03",
    title: "Visa & Immigration",
    description:
      "Expert support for student visas, work permits, and immigration processes across multiple countries, making your international aviation training seamless.",
    image: img23,
  },
  {
    id: 4,
    number: "04",
    title: "Logistics Support",
    description:
      "Comprehensive assistance with accommodation, transportation, and daily logistics, so you can focus entirely on your aviation training without distractions.",
    image: img24,
  },
  {
    id: 5,
    number: "05",
    title: "Parent & Guardian Support",
    description:
      "Dedicated support for families throughout the aviation training journey, providing regular updates and addressing concerns to ensure peace of mind.",
    image: img25,
  },
  {
    id: 6,
    number: "06",
    title: "After Departure Services",
    description:
      "Continued support even after training completion, including job placement assistance, career advancement guidance, and ongoing professional development.",
    image: img26,
  },
];

// Main section container with white background and padding
const SectionContainer = styled.section`
  background-color: #ffffff;
  padding: 80px 40px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  @media (max-width: 1024px) {
    padding: 70px 30px;
  }
  
  @media (max-width: 768px) {
    padding: 50px 20px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`

// Header container with flexbox layout for title and contact link
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 60px;
  
  @media (min-width: 1025px) {
    margin-left: 16.7px;
    margin-right: 16.7px;
  }
  
  @media (max-width: 1024px) {
    margin-bottom: 50px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    gap: 16px;
    margin-bottom: 32px;
  }
`

// Main headline styling
const MainHeadline = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.1;
  
  @media (max-width: 1024px) {
    font-size: 2.75rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
    line-height: 1.2;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.25;
  }
  
  @media (max-width: 360px) {
    font-size: 1.75rem;
  }
`

// Contact link with underline
const ContactLink = styled.a`
  font-size: 1.125rem;
  color: #1a1a1a;
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #666666;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

// Container for all benefit items
const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

// Card for each benefit — rounded, shadowed, and responsive
const BenefitCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  background: #ffffff;
  border: 1px solid #eef2f7;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.10);
  }
`

// Image container with rounded corners (visible on all sizes, responsive)
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f8fafc;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 900px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`

// Circular badge number overlay
const BenefitNumber = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 8px 12px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(0,0,0,0.06);
  font-size: 0.8rem;
  font-weight: 700;
  color: #111827;
  box-shadow: 0 4px 12px rgba(16,24,40,0.08);
`

// Text content container
const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 16px 18px;
  min-width: 0;
  word-wrap: break-word;
`

// Benefit title styling
const BenefitTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  line-height: 1.3;
`

// Benefit description styling
const BenefitDescription = styled.p`
  font-size: 0.975rem;
  color: #475569;
  line-height: 1.7;
  margin: 0;
  word-wrap: break-word;
  hyphens: auto;
`

// removed MobileTopRow (no longer needed with vertical card layout)

// Separator line component
const Separator = styled.div`
  display: none;
  
  @media (max-width: 900px) {
    display: block;
    border-bottom: 1px solid #e0e0e0;
    margin: 30px 0;
  }
  
  @media (max-width: 768px) {
    display: block;
    border-bottom: 1px solid #e0e0e0;
    margin: 30px 0;
  }
  
  @media (max-width: 480px) {
    margin: 24px 0;
  }
`

const SubHeading = styled.p`
  font-size: 1.25rem;
  color: #666666;
  line-height: 1.6;
  margin: 20px 0 0 0;
  max-width: 800px;
  
  @media (max-width: 1024px) {
    font-size: 1.125rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.65;
    margin: 16px 0 0 0;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9375rem;
    line-height: 1.7;
    margin: 12px 0 0 0;
  }
`

// Main component function
const Quickintro = () => {
  return (
    <SectionContainer>
      {/* Header with title and contact link */}
      <HeaderContainer>
        <div>
          <MainHeadline>About WayForSky</MainHeadline>
          <SubHeading>
            We are an aviation consultancy with one mission: to turn students into confident, qualified, and globally
            recognized commercial pilots. At WayForSky, we go beyond admissions—we provide end-to-end support:
          </SubHeading>
        </div>


<ContactLink as={Link} to="/contactus">
  Ready to get started? Contact us
</ContactLink>
      </HeaderContainer>

      {/* Benefits list container */}
      <BenefitsContainer>
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.45, ease: 'easeOut' }}
          >
            <BenefitCard as={motion.div} whileHover={{ scale: 1.02 }}>
              <ImageContainer>
                <BenefitNumber>{benefit.number}</BenefitNumber>
                <img src={benefit.image || "/placeholder.svg"} alt={benefit.title} loading="lazy" />
              </ImageContainer>

              <TextContent>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </TextContent>
            </BenefitCard>
          </motion.div>
        ))}
      </BenefitsContainer>
    </SectionContainer>
  )
}

export default Quickintro
