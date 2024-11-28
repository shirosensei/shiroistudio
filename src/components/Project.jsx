import React from "react";
import styled from "styled-components";
import ImagePlaceholder from "./ImagePlaceholder";
import placeholder from "../assets/placeholder.png";

//! transient props anchor link to external site
const Link = ({ className, text, ...props }) => (
  <a {...props} className={className} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;

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
  margin: 20px 0;

  

    p {
      font-size: 14px;
      margin-bottom: 10px;
      line-height: 26px;
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

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const ProjectInfo = styled.div`
  display: inline-block;
  text-align: center;

  h3 { 
      color: var(--white);
       fontWeight: '600';
    }

  p { 

   }
`;

const ProjectLinks = styled.div`
  margin: 0 auto;
  padding: 10px 0;
  margin: 20px;
`;

//? Styled transient props anchor tag
const StyledLink = styled(Link)`
  color: ${(props) => (props.$primary ? "var(--gunmetal)" : "var(--accent-color)")};
  background-color: ${(props) =>
    props.$primary ? "var(--accent-color)" : "var(--onyx)"};
  border: 2px solid
    ${(props) =>
      props.$primary ? "var(--accent-color)" : "var(--anti-flash-white)"};
  margin: 1em;
  padding: 10px;
  font-size: 1em;
  text-decoration: none;

  &:hover {
    background-color: ${(props) =>
      props.$primary ? "var(--gunmetal)" : "var(--accent-color)"};
    color: ${(props) =>
      props.$primary ? "var(--anti-flash-white)" : "var(--onyx)"};
  }
`;

const Project = () => {
  return (
    <>
      <ProjectSection id="project">
        <h2>Tozo's Creation</h2>
        <ProjectCard>
          <ImageContainer>
            <ImagePlaceholder
              src={placeholder}
              placeholderSrc={placeholder}
              alt="Api Quote Generator"
            />
          </ImageContainer>

          <ProjectInfo>
            <h3>Api Quote Generator</h3>
            <p>
              The Quote API Web App Generator is a powerful tool for generating,
              storing, and managing quotes. It fetches a daily "Quote of the
              Day" from an API and offers features like quote generation,
              storage in a MongoDB database, and easy management. 
            </p>
            <ProjectLinks>
              <StyledLink
                href="https://github.com/shirosensei/Quote-Generator-.git"
                text="Github Repo"
                $primary
              />

              <StyledLink href="https://duckduck.com" text="Live Demo" />
            </ProjectLinks>
          </ProjectInfo>
        </ProjectCard>

        <ProjectCard>
          <ImageContainer>
            <ImagePlaceholder
              src={placeholder}
              placeholderSrc={placeholder}
              alt="CurrencXchange"
            />
          </ImageContainer>

          <ProjectInfo>
            <h3>CurrencyXchange
            </h3>
            <p>
            CurrencyXchange is a web application that allows users to compare real-time exchange rates, manage their currency portfolios, and perform currency conversions.
            </p>
            <ProjectLinks>
              <StyledLink
                href="https://github.com/shirosensei/CurrencyXchange.git"
                text="Github Repo"
                $primary
              />

              <StyledLink href="https://duckduckgo.com" text="Live Demo" />
            </ProjectLinks>
          </ProjectInfo>
        </ProjectCard>

        <ProjectCard>
          <ImageContainer>
            <ImagePlaceholder
              src={placeholder}
              placeholderSrc={placeholder}
              alt="Github Repo"
            />
          </ImageContainer>

          <ProjectInfo>
            <h3>HairHarmony</h3>
            <p>
            This project is a comprehensive hair salon booking website where customers can book sessions for various hair services. 
            </p>
            <ProjectLinks>
              <StyledLink
                href="https://github.com/shirosensei/hairHarmony.git"
                text="Github Repo"
                $primary
              />

              <StyledLink href="https://duckduckgo.com" text="Live Demo" />
            </ProjectLinks>
          </ProjectInfo>
        </ProjectCard>

        <ProjectCard>
          <ImageContainer>
            <ImagePlaceholder
              src={placeholder}
              placeholderSrc={placeholder}
              alt="Exercise Tracker Web App"
            />
          </ImageContainer>

          <ProjectInfo>
            <h3>Exercise Tracker Web App</h3>
            <p>
              {" "}
              Exercise Tracker application built with HTML, CSS, JavaScript, and
              MongoDB.
            </p>
            <ProjectLinks>
              <StyledLink
                href="https://github.com/shirosensei/Timestamp-Microservice.git"
                text="Github Repo"
                $primary
              />

              <StyledLink href="https://duckduck.com" text="Live Demo" />
            </ProjectLinks>
          </ProjectInfo>
        </ProjectCard>
      </ProjectSection>
    </>
  );
};

export default Project;
