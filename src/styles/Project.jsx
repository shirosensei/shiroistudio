import { title } from "framer-motion/client";
import React from "react";
import styled from "styled-components";

const ProjectCard = styled.div``;

const ProjectImage = styled.img``;

const ProjectContent = styled.div``;

export const Project = ({ title, imageUrl, description }) => {
  return (
    <ProjectCard>
      <ProjectImage src={imageUrl} alt={title} />
      <ProjectContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </ProjectContent>
    </ProjectCard>
  );
};
