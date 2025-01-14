import React from "react";
import styled from "styled-components";
import ImagePlaceholder from "./ImagePlaceholder";
import placeholder from "../assets/placeholder.png";
import hairHamonyImage from "../assets/hairhomny_1.webp";
import quoteImage from "../assets/Animation.jpg";
import salesDashboardImage from "../assets/dashboard.webp";
import currencyImage from "../assets/currency.webp";
const LazyLoadedImage = React.lazy(() => import("./ImagePlaceholder"));

//! transient props anchor link to external site
const Link = ({ className, text, ...props }) => (
  <a {...props} className={className} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

const Title = styled.h2`
  font-size: clamp(1.5rem, 2vw, 2.5rem);
  font-weight: bold;
  text-align: center;
  margin-bottom: clamp(16px, 4vw, 32px);
`;

const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(250px, 30%, 400px), 1fr)
  );
  gap: clamp(16px, 2vw, 32px);
  padding: clamp(16px, 4vw, 48px);
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  padding: clamp(16px, 1vw, 24px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: var(--black);
  height: auto;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: clamp(12px, 1.5vw, 24px);

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const ProjectInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  h3 {
    color: var(--white);
    fontweight: "600";
    width: 100%;
    border-bottom: 2px solid var(--onyx);
    padding: 0 0 clamp(12px, 1.5vw, 24px) 0;
  }

  p {
    font-size: clamp(0.875rem, 1vw, 1rem);
    // color: var(--onyx);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(8px, 1vw, 16px);
  margin-top: auto;
`;

//? Styled transient props anchor tag
const StyledLink = styled(Link)`
  color: ${(props) =>
    props.$primary ? "var(--gunmetal)" : "var(--accent-color)"};
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
      <Title>Tozo's Creation</Title>
      <ProjectsContainer id="project">
        <ProjectCard>
          <ImageContainer>
            <ImagePlaceholder
              src={salesDashboardImage}
              placeholderSrc={placeholder}
              alt="Sales Dashboard"
              width="100"
              height="100"
            />
            <ProjectInfo>
              <h3>Sales Dashboard</h3>
              <p>Sales Dashboard built with React, TailwindCss, Node.js</p>
              <ProjectLinks>
                <StyledLink
                  href="https://github.com/shirosensei/SalesDashboard.git"
                  text="Github Repo"
                  $primary
                />

                <StyledLink
                  href="https://salesoverview-dashboard.netlify.app/"
                  text="Live Demo"
                />
              </ProjectLinks>
            </ProjectInfo>
          </ImageContainer>
        </ProjectCard>

        <ProjectCard>
          <ImageContainer>
            <ImagePlaceholder
              src={currencyImage}
              placeholderSrc={placeholder}
              alt="CurrencXchange"
              width="600"
              height="400"
            />
            <ProjectInfo>
              <h3>CurrencyXchange</h3>
              <p>
                CurrencyXchange is a web application that allows users to
                compare real-time exchange rates, manage their currency
                portfolios, and perform currency conversions.
              </p>
              <ProjectLinks>
                <StyledLink
                  href="https://github.com/shirosensei/CurrencyXchange.git"
                  text="Github Repo"
                  $primary
                />
                <StyledLink href="#/" text="Live Demo" />
              </ProjectLinks>
            </ProjectInfo>
          </ImageContainer>
        </ProjectCard>

        <ProjectCard>
          <ImageContainer>
            <ImagePlaceholder
              src={hairHamonyImage}
              placeholderSrc={placeholder}
              alt="Github Repo"
              width="600"
              height="400"
            />
            <ProjectInfo>
              <h3>HairHarmony</h3>
              <p>
                This project is a comprehensive hair salon booking website where
                customers can book sessions for various hair services.
              </p>
              <ProjectLinks>
                <StyledLink
                  href="https://github.com/shirosensei/hairHarmony.git"
                  text="Github Repo"
                  $primary
                />

                <StyledLink
                  href="https://harmonysaloon.netlify.app"
                  text="Live Demo"
                />
              </ProjectLinks>
            </ProjectInfo>
          </ImageContainer>
        </ProjectCard>

        <ProjectCard>
          <ImageContainer>
            <ImagePlaceholder
              src={quoteImage}
              placeholderSrc={placeholder}
              alt="Api Quote Generator"
              width="600"
              height="400"
            />
            <ProjectInfo>
              <h3>Api Quote Generator</h3>
              <p>
                The Quote API Web App Generator is a powerful tool for
                generating, storing, and managing quotes. It fetches a daily
                "Quote of the Day" from an API and offers features like quote
                generation, storage in a MongoDB database, and easy management.
              </p>
              <ProjectLinks>
                <StyledLink
                  href="https://github.com/shirosensei/Quote-Generator.git"
                  text="Github Repo"
                  $primary
                />

                <StyledLink href="#/" text="Live Demo" />
              </ProjectLinks>
            </ProjectInfo>
          </ImageContainer>
        </ProjectCard>

        <ProjectCard>
          <ImageContainer>
            <ImagePlaceholder
              src={placeholder}
              placeholderSrc={placeholder}
              alt="Exercise Tracker Web App"
              width="600"
              height="400"
            />
            <ProjectInfo>
              <h3>Exercise Tracker Web App</h3>
              <p>
                {" "}
                Exercise Tracker application built with HTML, CSS, JavaScript,
                and MongoDB.
              </p>
              <ProjectLinks>
                <StyledLink
                  href="https://github.com/shirosensei/Exercise-Tracker.git"
                  text="Github Repo"
                  $primary
                />

                <StyledLink href="#/" text="Live Demo" />
              </ProjectLinks>
            </ProjectInfo>
          </ImageContainer>
        </ProjectCard>
      </ProjectsContainer>
    </>
  );
};

export default Project;
