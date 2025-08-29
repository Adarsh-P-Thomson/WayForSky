import React from "react"
import styled from "styled-components"
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
    image:
      "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
  },
  {
    id: 2,
    number: "02",
    title: "Document Handling",
    description:
      "Complete assistance with all aviation documentation, from medical certificates to license applications, ensuring every requirement is met accurately and on time.",
    image:
      "https://images.pexels.com/photos/7464720/pexels-photo-7464720.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
  },
  {
    id: 3,
    number: "03",
    title: "Visa & Immigration",
    description:
      "Expert support for student visas, work permits, and immigration processes across multiple countries, making your international aviation training seamless.",
    image:
      "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
  },
  {
    id: 4,
    number: "04",
    title: "Logistics Support",
    description:
      "Comprehensive assistance with accommodation, transportation, and daily logistics, so you can focus entirely on your aviation training without distractions.",
    image:
      "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
  },
  {
    id: 5,
    number: "05",
    title: "Parent & Guardian Support",
    description:
      "Dedicated support for families throughout the aviation training journey, providing regular updates and addressing concerns to ensure peace of mind.",
    image:
      "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
  },
  {
    id: 6,
    number: "06",
    title: "After Departure Services",
    description:
      "Continued support even after training completion, including job placement assistance, career advancement guidance, and ongoing professional development.",
    image:
      "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
  },
]

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
  max-width: 1200px;
  margin: 0 auto;
`

// Individual benefit item with 3-column grid
const BenefitItem = styled.div`
  display: grid;
  grid-template-columns: 200px 80px 1fr;
  gap: 40px;
  align-items: flex-start;
  padding: 40px 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: 180px 70px 1fr;
    gap: 30px;
    padding: 35px 0;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 30px 0;
  }
  
  @media (max-width: 480px) {
    gap: 16px;
    padding: 24px 0;
  }
`

// Image container with rounded corners
const ImageContainer = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    height: 130px;
  }
  
  @media (max-width: 768px) {
    display: none; /* Hide desktop image on mobile */
  }
`

// Number styling - large, bold, and gray
const BenefitNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #666666;
  font-family: 'Inter', monospace;
  
  @media (max-width: 1024px) {
    font-size: 2.25rem;
  }
  
  @media (max-width: 768px) {
    display: none; /* Hide desktop number on mobile */
  }
`

// Text content container
const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 480px) {
    gap: 12px;
  }
`

// Benefit title styling
const BenefitTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.3;
  
  @media (max-width: 1024px) {
    font-size: 1.625rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.35;
  }
  
  @media (max-width: 480px) {
    font-size: 1.375rem;
    line-height: 1.4;
  }
  
  @media (max-width: 360px) {
    font-size: 1.25rem;
  }
`

// Benefit description styling
const BenefitDescription = styled.p`
  font-size: 1.125rem;
  color: #666666;
  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: 1.0625rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.65;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9375rem;
    line-height: 1.7;
  }
`

// Mobile layout adjustments for image and number
const MobileTopRow = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    align-items: center;
    margin-bottom: 16px; /* Add spacing below mobile row */
    
    ${ImageContainer} {
      height: 200px; /* Larger mobile image for better visual impact */
      border-radius: 16px;
      display: block; /* Show image in mobile layout */
    }
    
    ${BenefitNumber} {
      font-size: 2rem;
      display: block; /* Show number in mobile layout */
      color: #666666;
      font-weight: 700;
      font-family: 'Inter', monospace;
    }
  }
  
  @media (max-width: 480px) {
    gap: 16px;
    margin-bottom: 12px;
    
    ${ImageContainer} {
      height: 180px;
      border-radius: 12px;
    }
    
    ${BenefitNumber} {
      font-size: 1.75rem;
    }
  }
  
  @media (max-width: 360px) {
    ${ImageContainer} {
      height: 160px;
    }
    
    ${BenefitNumber} {
      font-size: 1.5rem;
    }
  }
`

// Separator line component
const Separator = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin: 40px 0;
  
  @media (max-width: 1024px) {
    margin: 35px 0;
  }
  
  @media (max-width: 768px) {
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
        <ContactLink href="#contact">Ready to get started? Contact us</ContactLink>
      </HeaderContainer>

      {/* Benefits list container */}
      <BenefitsContainer>
        {benefitsData.map((benefit, index) => (
          <React.Fragment key={benefit.id}>
            <BenefitItem>
              {/* Desktop layout - 3 columns (hidden on mobile) */}
              <ImageContainer className="desktop-image">
                <BenefitImage src={benefit.image || "/placeholder.svg"} alt={benefit.title} loading="lazy" />
              </ImageContainer>

              <BenefitNumber className="desktop-number">{benefit.number}</BenefitNumber>

              {/* Mobile layout - stacked image and number on top */}
              <MobileTopRow>
                <ImageContainer>
                  <BenefitImage src={benefit.image || "/placeholder.svg"} alt={benefit.title} loading="lazy" />
                </ImageContainer>
                <BenefitNumber>{benefit.number}</BenefitNumber>
              </MobileTopRow>

              {/* Text content - title and description */}
              <TextContent>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </TextContent>
            </BenefitItem>

            {/* Separator line between items (except after last item) */}
            {index < benefitsData.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </BenefitsContainer>
    </SectionContainer>
  )
}

export default Quickintro
