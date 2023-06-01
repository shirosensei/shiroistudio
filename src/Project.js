import React from 'react';
import styled from 'styled-components';
import { DarkBackground, LightBackground } from './DarkBackground';
import Footer from './Footer';
import ResponsiveNavbar from './ResponsiveNavbar';
// import ScrollToTop from './ScrollToTop';
// import ScrollToTopButton from './ScrollToTopButton';
// import ScrollToTopButtonMobile from './ScrollToTopButtonMobile';
// import ScrollToTopButtonMobileSmall from './ScrollToTopButtonMobileSmall';
// import ScrollToTopButtonMobileSmaller from './ScrollToTopButtonMobileSmaller';
// import ScrollToTopButtonMobileSmallest from './ScrollToTopButtonMobileSmallest';
// import ScrollToTopButtonMobileSmallestSmall from './ScrollToTopButtonMobileSmallestSmall';

const ProjectSection = styled.section`
  padding: 60px 0;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  img {
    width: 200px;
    height: auto;
    margin-right: 20px;
  }

  .project-info {
    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      margin-bottom: 10px;
      line-height: 26px;
    }

    .project-link {
      display: inline-block;
      padding: 8px 16px;
      background-color: #333;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      font-size: 14px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #666;
      }
    }
  }
`;

const Project = () => {
  return (
    <>
    <DarkBackground />
    <ResponsiveNavbar />
    <ProjectSection>
      <h2>Projects</h2>
      <ProjectCard>
        <img src="project-image-1.jpg" alt="Project 1" />
        <div className="project-info">
          <h3>Random Api Quote Generator 1</h3>
          <p>Introducing our Random API Quote Generator: an endless source of inspiration and wisdom. Click, and watch as insightful quotes from renowned figures instantly appear. Share these gems with others, sparking motivation in their lives. Start your journey of enlightenment with our Quote Generator today.</p>
          <a href="https://github.com/shirosensei/CRUD-APP.git" className="project-link">View Project</a>
        </div>
      </ProjectCard>
      <ProjectCard>
        <img src="project-image-2.jpg" alt="Project 2" />
        <div className="project-info">
          <h3>URL-Shortener-Microservice</h3>
          <p>URL Shortener Microservice project: the perfect tool to make long URLs short and manageable. Say goodbye to lengthy and complex web addresses, and replace them with concise and user-friendly links. Our microservice offers seamless integration, allowing you to effortlessly generate shortened URLs with a single click. Simplify your online experience and share your links with ease using our URL Shortener Microservice.</p>
          <a href="https://github.com/shirosensei/URL-Shortener-Microservice.git" className="project-link">View Project</a>
        </div>
      </ProjectCard>
      <ProjectCard>
        <img src="project-image-3.jpg" alt="Project 3" />
        <div className="project-info">
            <h3>Employee Directory</h3>
            <p>Employee Directory project: a CLI employee directory that allows users to view employees, add employees, and search employees. Employee Directory is a CLI application that allows users to view employees, add employees, and search employees. Employee Directory
                </p>
                <a href="https://github.com/"className='project-link'>View pProject</a>
        </div>
      </ProjectCard>
      <ProjectCard>
        <img src="project-image-3.jpg" alt="Project 4" />
        <div className="project-info">
            <h3>Timestamp Microservice</h3>
            <p>The Timestamp Microservice is a simple and lightweight API that converts Unix timestamps and natural language dates into standardized date and time formats. It accepts a timestamp in either Unix format (seconds since January 1, 1970) or a natural language date (e.g., "January 1, 2022") and returns the corresponding date and time in both Unix and UTC formats. This microservice is useful for developers working with timestamps and date conversions, as well as for anyone looking to quickly convert dates between different formats. Simplify your date and time calculations with the Timestamp Microservice.</p>
                <a href="https://github.com/shirosensei/Timestamp-Microservice.git"className='project-link'>View pProject</a>
        </div>
      </ProjectCard>
    </ProjectSection>
    <Footer />
    </>
  )
}

export default Project