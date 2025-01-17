import React from "react";
import styled from "styled-components";
import ImagePlaceholder from "./ImagePlaceholder";
import placeholder from "../assets/placeholder.png";
import hairHamonyImage from "../assets/hairhomny_2.webp";
import quoteImage from "../assets/Animation.webp";
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
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(250px, 30%, 400px), 1fr)
  );
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  padding: ${(props) => props.theme.spacing.large};
  box-shadow: 0 4px 6px rgba(18, 37, 37, 0.1);
  border-radius: 8px;
  background: var(--black);
  height: auto;
  transition: transform 0.3s ease-in-out;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  display: block;
  border-radius: 8px;
  margin-bottom: ${(props) => props.theme.spacing.large};
  transition: transform 0.3s ease-in-out;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ProjectInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing.medium};
  position: relative;

  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  &:last-child {
    border-bottom: none; /* Remove the line for the last card */
  }
`;

const Heading = styled.h3`
  color: ${(props) => props.theme.colors.text};
  fontweight: "600";
  width: 100%;
  border-bottom: 2px solid var(--onyx);
  padding: 0 0 ${(props) => props.theme.spacing.small} 0;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.small};
  margin-top: auto;
`;

const linkStyles = (primary) => ({
  color: primary ? "var(--gunmetal)" : "var(--accent-color)",
  backgroundColor: primary ? "var(--accent-color)" : "var(--onyx)",
});

//? Styled transient props anchor tag
const StyledLink = styled(Link)`
  ${({ $primary }) => linkStyles($primary)};
  border: 2px solid
    ${(props) =>
      props.$primary ? "var(--accent-color)" : "var(--anti-flash-white)"};
  margin: ${(props) => props.theme.spacing.small};
  padding:  ${(props) => props.theme.spacing.small};
  font-size: ${(props) => props.theme.fontSizes.small};
  text-decoration: none;

  &:hover {
    background-color: ${(props) =>
      props.$primary ? "var(--gunmetal)" : "var(--accent-color)"};
    color: ${(props) =>
      props.$primary ? "var(--anti-flash-white)" : "var(--onyx)"};
  }

  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 4px;
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
              <Heading>Sales Overview Dashboard</Heading>
              <p>
                The Sales Dashboard is an intuitive web application designed to
                help businesses monitor and optimize their sales performance.{" "}
              </p>
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
              <Heading>CurrencyXchange</Heading>
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
              <Heading>HairHarmony</Heading>
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
              <Heading>Api Quote Generator</Heading>
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
              <Heading>Exercise Tracker Web App</Heading>
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
