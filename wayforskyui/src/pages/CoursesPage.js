import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Plane, User, Briefcase, Star, ArrowRight, BookOpen, Languages, GraduationCap, TrendingUp } from 'lucide-react';
import heroImage from '../assets/Program/CPLHU.JPG';

// --- Data for Course Cards ---
const coursesData = [
  {
    icon: <Star />,
    title: 'Zero to Hero Airline Ready Program',
    description: 'A complete EASA program designed to take you from no experience to a fully qualified airline pilot.',
    link: '/zero-to-hero',
    tags: ['EASA', 'Beginner', 'Airline Career'],
    category: 'pilot',
    level: 'Beginner',
  },
  {
    icon: <Plane />,
    title: 'Commercial Pilot License (MEIR)',
    description: 'Become a professional pilot with our SACAA-approved CPL, including multi-engine and instrument ratings.',
    link: '/commercial-pilot-license',
    tags: ['SACAA', 'CPL', 'Multi-Engine'],
    category: 'pilot',
    level: 'Intermediate',
  },
  {
    icon: <Plane />,
    title: 'Private Pilot License',
    description: 'The first step into the world of aviation. Learn to fly for recreation or as a foundation for a commercial license.',
    link: '/private-pilot-license',
    tags: ['PPL', 'Recreational', 'Beginner'],
    category: 'pilot',
    level: 'Beginner',
  },
  {
    icon: <Briefcase />,
    title: 'Flight Instructor Rating',
    description: 'Share your passion for flying by becoming a certified flight instructor. Build hours while mentoring new pilots.',
    link: '/flight-instructor-rating',
    tags: ['Advanced', 'Career', 'Instructor'],
    category: 'pilot',
    level: 'Advanced',
  },
  {
    icon: <Briefcase />,
    title: 'Type Rating (A320 & B737)',
    description: 'Specialize in flying modern commercial airliners like the Airbus A320 and Boeing 737.',
    link: '/type-rating',
    tags: ['Advanced', 'Airlines', 'Specialization'],
    category: 'pilot',
    level: 'Advanced',
  },
  {
    icon: <User />,
    title: 'Cabin Crew Training',
    description: 'Begin your career in aviation hospitality with our comprehensive training for aspiring cabin crew members.',
    link: '/cabin-crew',
    tags: ['Hospitality', 'Career', 'Airlines'],
    category: 'crew',
    level: 'Beginner',
  },
  {
    icon: <BookOpen />,
    title: 'DGCA Ground Classes',
    description: 'Master aviation theory with our comprehensive ground classes covering all DGCA exam subjects.',
    link: '/dgca-classes',
    tags: ['Theory', 'DGCA', 'Exam Prep'],
    category: 'classes',
    level: 'All Levels',
  },
  {
    icon: <Languages />,
    title: 'English Language Proficiency (ELP)',
    description: 'Meet ICAO language requirements with our specialized aviation English training program.',
    link: '/elp-classes',
    tags: ['ICAO', 'Communication', 'Required'],
    category: 'classes',
    level: 'All Levels',
  },
  {
    icon: <GraduationCap />,
    title: 'NIOS Prep Classes',
    description: 'Complete your academic requirements with our focused NIOS preparation classes for aviation students.',
    link: '/nios-classes',
    tags: ['Academic', 'Foundation', 'Prerequisite'],
    category: 'classes',
    level: 'All Levels',
  },
];

// --- Styled Components ---

const PageWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  background: #ffffff;
  color: #1a202c;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(135deg, rgba(0, 86, 179, 0.03) 0%, rgba(255, 215, 0, 0.02) 100%),
      radial-gradient(circle at 20% 80%, rgba(0, 61, 130, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 165, 0, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 160px 20px 120px;
  background: 
    linear-gradient(135deg, rgba(0, 31, 63, 0.95) 0%, rgba(0, 86, 179, 0.92) 50%, rgba(0, 61, 130, 0.94) 100%),
    url(${heroImage}) center/cover no-repeat fixed;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle at 30% 50%, rgba(255, 215, 0, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 70% 60%, rgba(255, 165, 0, 0.12) 0%, transparent 40%),
      radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 30%);
    animation: gradientShift 15s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes gradientShift {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    50% {
      transform: translate(5%, 5%) rotate(5deg);
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(180deg, transparent 0%, #ffffff 100%);
    pointer-events: none;
  }

  h1 {
    font-size: clamp(3rem, 7vw, 5.2rem);
    font-weight: 900;
    line-height: 1.1;
    text-shadow: 0 4px 30px rgba(0,0,0,0.5);
    position: relative;
    z-index: 1;
    margin-bottom: 25px;
    animation: fadeInUp 0.8s ease-out;
    
    span {
      background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: inline-block;
      animation: shimmer 3s ease-in-out infinite;
      background-size: 200% 100%;
    }
  }

  @keyframes shimmer {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  p {
    font-size: clamp(1.2rem, 3vw, 1.45rem);
    max-width: 950px;
    margin: 0 auto;
    opacity: 0.96;
    position: relative;
    z-index: 1;
    line-height: 1.7;
    font-weight: 300;
    letter-spacing: 0.3px;
    animation: fadeInUp 0.8s ease-out 0.2s backwards;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  }

  @media (max-width: 768px) {
    padding: 120px 20px 80px;
  }
`;

const CoursesSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 100px 20px 120px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 10%;
    right: 5%;
    width: 400px;
    height: 400px;
    background: 
      radial-gradient(circle, rgba(0, 86, 179, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(60px);
    pointer-events: none;
    animation: float 20s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 20%;
    left: 5%;
    width: 350px;
    height: 350px;
    background: 
      radial-gradient(circle, rgba(255, 165, 0, 0.06) 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(60px);
    pointer-events: none;
    animation: float 18s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(30px, -30px) scale(1.1);
    }
  }

  @media (max-width: 768px) {
    padding: 80px 15px 100px;
    
    &::before, &::after {
      width: 250px;
      height: 250px;
    }
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 70px;
  position: relative;
  z-index: 1;

  h2 {
    font-size: clamp(2.2rem, 5vw, 3.2rem);
    font-weight: 900;
    background: linear-gradient(135deg, #001f3f 0%, #0056b3 50%, #001f3f 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
    animation: fadeInUp 0.6s ease-out;

    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 5px;
      background: linear-gradient(90deg, #FFD700, #FFA500, #FFD700);
      border-radius: 10px;
      box-shadow: 0 2px 15px rgba(255, 165, 0, 0.4);
    }

    &::before {
      content: '✈';
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2rem;
      opacity: 0.2;
      animation: planeFly 4s ease-in-out infinite;
    }
  }

  @keyframes planeFly {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-30%) translateY(-10px);
    }
  }

  p {
    font-size: clamp(1.05rem, 2.5vw, 1.2rem);
    color: #4a5568;
    max-width: 750px;
    margin: 30px auto 0;
    line-height: 1.8;
    animation: fadeInUp 0.6s ease-out 0.2s backwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 60px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const CategoryTab = styled.button`
  padding: 14px 32px;
  border: 2px solid ${props => props.active ? '#0056b3' : '#e2e8f0'};
  background: ${props => props.active 
    ? 'linear-gradient(135deg, #0056b3 0%, #003d82 100%)' 
    : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'};
  color: ${props => props.active ? '#ffffff' : '#4a5568'};
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: ${props => props.active 
    ? '0 6px 20px rgba(0, 86, 179, 0.35), 0 0 20px rgba(255, 215, 0, 0.2)' 
    : '0 3px 10px rgba(0, 0, 0, 0.08)'};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 86, 179, 0.3), 0 0 25px rgba(255, 165, 0, 0.2);
    border-color: #0056b3;
    
    &::before {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 0.95rem;
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 40px;
  animation: fadeIn 0.8s ease-in-out;
  position: relative;
  z-index: 1;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 35px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const CourseCard = styled(Link)`
  background: linear-gradient(135deg, #ffffff 0%, #f8fcff 100%);
  border-radius: 24px;
  text-decoration: none;
  color: inherit;
  box-shadow: 
    0 10px 40px rgba(0, 31, 63, 0.1),
    0 2px 8px rgba(0, 86, 179, 0.05);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(0, 86, 179, 0.1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #0056b3, #FFD700, #FFA500, #0056b3);
    background-size: 200% 100%;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 10% 20%, rgba(0, 86, 179, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(255, 165, 0, 0.03) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-15px) scale(1.03);
    box-shadow: 
      0 30px 60px rgba(0, 31, 63, 0.18),
      0 5px 20px rgba(255, 165, 0, 0.1),
      0 0 0 3px rgba(0, 86, 179, 0.1);
    border-color: rgba(255, 165, 0, 0.3);

    &::before {
      transform: scaleX(1);
      animation: shimmerGradient 2s linear infinite;
    }

    &::after {
      opacity: 1;
    }

    .icon-container {
      transform: scale(1.15) rotate(10deg);
      background: linear-gradient(135deg, #0056b3, #003d82);
      color: #ffffff;
      box-shadow: 
        0 8px 25px rgba(0, 86, 179, 0.4),
        0 0 30px rgba(255, 215, 0, 0.3);
    }

    .learn-more {
      gap: 14px;
      color: #FFA500;
      
      svg {
        transform: translateX(8px);
      }
    }

    h3 {
      background: linear-gradient(135deg, #001f3f, #0056b3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  @keyframes shimmerGradient {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }

  .card-header {
    padding: 35px 35px 25px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  .icon-container {
    color: #0056b3;
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #e6f2ff, #cce5ff, #b3d9ff);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 
      0 6px 20px rgba(0, 86, 179, 0.15),
      inset 0 2px 4px rgba(255, 255, 255, 0.5);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: 22px;
      background: linear-gradient(135deg, #FFD700, #FFA500);
      opacity: 0;
      transition: opacity 0.5s ease;
      z-index: -1;
    }

    svg {
      width: 32px;
      height: 32px;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }
  }

  .card-title-section {
    flex: 1;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0 0 10px;
    color: #001f3f;
    line-height: 1.3;
    transition: all 0.4s ease;
  }

  .card-body {
    padding: 0 35px 35px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
    color: #4a5568;
    flex-grow: 1;
    margin-bottom: 24px;
  }

  .tags {
    display: flex;
    gap: 10px;
    margin-bottom: 28px;
    flex-wrap: wrap;
  }

  .tag {
    background: linear-gradient(135deg, #f0f7ff, #e0f0ff);
    color: #1e3a8a;
    padding: 7px 16px;
    border-radius: 25px;
    font-size: 0.8rem;
    font-weight: 700;
    border: 1.5px solid rgba(0, 86, 179, 0.15);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 2px 8px rgba(0, 86, 179, 0.08);

    &:hover {
      background: linear-gradient(135deg, #0056b3, #003d82);
      color: #ffffff;
      border-color: transparent;
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 4px 15px rgba(0, 86, 179, 0.3);
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    border-top: 2px solid rgba(0, 86, 179, 0.08);
  }

  .learn-more {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #0056b3;
    font-weight: 800;
    font-size: 1rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    svg {
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }

  .course-level {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.88rem;
    color: #718096;
    font-weight: 600;
    padding: 6px 14px;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    border-radius: 20px;
    border: 1px solid rgba(0, 86, 179, 0.1);

    svg {
      width: 18px;
      height: 18px;
      color: #0056b3;
    }
  }

  @media (max-width: 768px) {
    .card-header {
      padding: 30px 30px 20px;
    }

    .card-body {
      padding: 0 30px 30px;
    }

    h3 {
      font-size: 1.35rem;
    }

    .icon-container {
      width: 60px;
      height: 60px;

      svg {
        width: 28px;
        height: 28px;
      }
    }
  }
`;

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'pilot', label: 'Pilot Training' },
    { id: 'crew', label: 'Cabin Crew' },
    { id: 'classes', label: 'Ground Classes' },
  ];

  const filteredCourses = activeCategory === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.category === activeCategory);

  return (
    <PageWrapper>
      <HeroSection>
        <h1>Your Wings, <span>Your Way</span></h1>
        <p>
          Transform your aviation dreams into reality with world-class training programs. 
          From ground zero to the captain's seat, we're your trusted partner in reaching new heights.
        </p>
      </HeroSection>

      <CoursesSection>
        <SectionHeader>
          <h2>Explore Our Programs</h2>
          <p>
            Choose from our comprehensive range of internationally recognized training courses 
            designed to launch and advance your aviation career.
          </p>
        </SectionHeader>

        <CategoryTabs>
          {categories.map(category => (
            <CategoryTab
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </CategoryTab>
          ))}
        </CategoryTabs>

        <CoursesGrid>
          {filteredCourses.map((course) => (
            <CourseCard to={course.link} key={course.title}>
              <div className="card-header">
                <div className="icon-container">{course.icon}</div>
                <div className="card-title-section">
                  <h3>{course.title}</h3>
                </div>
              </div>
              <div className="card-body">
                <p>{course.description}</p>
                <div className="tags">
                  {course.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <div className="card-footer">
                  <div className="learn-more">
                    Learn More <ArrowRight size={18} />
                  </div>
                  <div className="course-level">
                    <TrendingUp />
                    {course.level}
                  </div>
                </div>
              </div>
            </CourseCard>
          ))}
        </CoursesGrid>
      </CoursesSection>
    </PageWrapper>
  );
};

export default CoursesPage;