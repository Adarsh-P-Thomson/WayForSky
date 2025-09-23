import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Plane, User, Briefcase, Star, ArrowRight } from 'lucide-react';

// --- Data for Course Cards ---
const coursesData = [
  {
    icon: <Star />,
    title: 'Zero to Hero Airline Ready Program',
    description: 'A complete EASA program designed to take you from no experience to a fully qualified airline pilot.',
    link: '/zero-to-hero',
    tags: ['EASA', 'Beginner', 'Airline Career'],
  },
  {
    icon: <Plane />,
    title: 'Commercial Pilot License (MEIR)',
    description: 'Become a professional pilot with our SACAA-approved CPL, including multi-engine and instrument ratings.',
    link: '/commercial-pilot-license',
    tags: ['SACAA', 'CPL', 'Multi-Engine'],
  },
  {
    icon: <Plane />,
    title: 'Private Pilot License',
    description: 'The first step into the world of aviation. Learn to fly for recreation or as a foundation for a commercial license.',
    link: '/private-pilot-license',
    tags: ['PPL', 'Recreational', 'Beginner'],
  },
  {
    icon: <Briefcase />,
    title: 'Flight Instructor Rating',
    description: 'Share your passion for flying by becoming a certified flight instructor. Build hours while mentoring new pilots.',
    link: '/flight-instructor-rating',
    tags: ['Advanced', 'Career', 'Instructor'],
  },
  {
    icon: <Briefcase />,
    title: 'Type Rating (A320 & B737)',
    description: 'Specialize in flying modern commercial airliners like the Airbus A320 and Boeing 737.',
    link: '/type-rating',
    tags: ['Advanced', 'Airlines', 'Specialization'],
  },
  {
    icon: <User />,
    title: 'Cabin Crew Training',
    description: 'Begin your career in aviation hospitality with our comprehensive training for aspiring cabin crew members.',
    link: '/cabin-crew',
    tags: ['Hospitality', 'Career', 'Airlines'],
  },
];

// --- Styled Components ---

const PageWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  background-color: #f8f9fa;
  color: #1a202c;
  padding-bottom: 80px;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(135deg, #001f3f 0%, #003d82 100%);
  color: white;

  h1 {
    font-size: clamp(2.8rem, 7vw, 4.5rem);
    font-weight: 800;
    line-height: 1.1;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  }

  p {
    font-size: clamp(1.1rem, 3vw, 1.25rem);
    max-width: 800px;
    margin: 20px auto 0;
    opacity: 0.9;
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 15px;
  }
`;

const CourseCard = styled(Link)`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 35px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 10px 25px rgba(0, 31, 63, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 31, 63, 0.12);
  }

  .icon-container {
    color: #0056b3;
    margin-bottom: 20px;
    width: 50px;
    height: 50px;
    background-color: #e6f2ff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0 0 12px;
    color: #001f3f;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #4a5568;
    flex-grow: 1;
    margin-bottom: 20px;
  }

  .tags {
    display: flex;
    gap: 8px;
    margin-bottom: 25px;
    flex-wrap: wrap;
  }

  .tag {
    background-color: #f0f0f0;
    color: #555;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .learn-more {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #0056b3;
    font-weight: 600;
    margin-top: auto; /* Pushes to the bottom */
  }
`;

const CoursesPage = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <h1>Our Training Programs</h1>
        <p>From your first flight to the airline cockpit, we offer a comprehensive range of courses to shape your aviation career.</p>
      </HeroSection>
      <CoursesGrid>
        {coursesData.map((course) => (
          <CourseCard to={course.link} key={course.title}>
            <div className="icon-container">{course.icon}</div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="tags">
              {course.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
            <div className="learn-more">
              Learn More <ArrowRight size={18} />
            </div>
          </CourseCard>
        ))}
      </CoursesGrid>
    </PageWrapper>
  );
};

export default CoursesPage;