import React from 'react';
import styled from 'styled-components';
import { DarkBackground } from './DarkBackground';
import Footer from './Footer';
import ResponsiveNavbar from './ResponsiveNavbar';

const ProjectSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
min-height: 90vh;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
    text-align: center;
  }

  @media only screen and (min-width: 320px) and (max-width: 500px) {
    h2 {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
`;

const ProjectCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.project-info {
  padding: 1.5rem 0;
}

  img {
    width: 200px;
    height: auto;
    margin-right: 20px;
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

      &:hover {
        background-color: #666;
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }
`;

const Project = () => {
  return (
    <>
    <DarkBackground />
    <ResponsiveNavbar />
    <ProjectSection>
      <h2>My Portfolio</h2>
      <ProjectCard>
        <img src="project-image-1.jpg" alt="Project 1" />
        <div className="project-info">
          <h3>Api Quote Generator</h3>
          <p>The Quote API Web App Generator is a powerful tool for generating, storing, and managing quotes. It fetches a daily "Quote of the Day" from an API and offers features like quote generation, storage in a MongoDB database, and easy management. With dark and light modes and a subscription option, it's the perfect solution for those seeking daily motivation and seamless quote management.</p>
          <a href="https://github.com/shirosensei/CRUD-APP.git" className="project-link">View Project</a>
        </div>
      </ProjectCard>
      <ProjectCard>
        <img src="project-image-2.jpg" alt="Project 2" />
        <div className="project-info">
          <h3>URL-Shortener-Microservice</h3>
          <p>URL Shortener Microservice simplifies long URLs, making them concise and user-friendly. Say goodbye to complex web addresses and effortlessly generate shortened links with a single click. Share your links seamlessly using our service, simplifying your online experience</p>
          <a href="https://github.com/shirosensei/URL-Shortener-Microservice.git" className="project-link">View Project</a>
        </div>
      </ProjectCard>
      <ProjectCard>
        <img src="project-image-3.jpg" alt="Project 3" />
        <div className="project-info">
            <h3>Timestamp Microservice</h3>
            <p>The Timestamp Microservice simplifies date and time conversions by converting Unix timestamps and natural language dates into standardized formats. It is a lightweight API that accepts various inputs and provides corresponding Unix and UTC formats.</p>
                <a href="https://github.com/shirosensei/Timestamp-Microservice.git"className='project-link'>View Project</a>
        </div>
      </ProjectCard>
      <ProjectCard>
        <img src="project-image-4.jpg" alt="Project 4" />
        <div className="project-info">
            <h3>Exercise Tracker</h3>
            <p> Exercise Tracker application built with HTML, CSS, JavaScript, and MongoDB. The application allows users to store their exercise activities in a MongoDB database and provides a user-friendly interface for managing and viewing their exercise history.</p>
                <a href="https://github.com/shirosensei/Timestamp-Microservice.git"className='project-link'>View Project</a>
        </div>
      </ProjectCard>
    </ProjectSection>
    <Footer />
    </>
  )
}

export default Project