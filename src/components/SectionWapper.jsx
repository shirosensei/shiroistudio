import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  }
`;

const Main = styled.main`
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
`;

const Section = styled.section`
/* Fallback styles for older browser */
 padding: 0 1.5rem 0.1rem 1.5rem;
  margin: 0 auto;
  max-width: 110rem;

   @supports (container-type: inline-size) {
  container-type: inline-size;
  padding: 0 max(2rem, 5vw) 0.1rem max(2rem, 5vw);
  margin: 0 auto;
  max-width: 110rem;

  @container (max-width: 1280px) {
    padding: 0 max(1.5rem, 3vw) 0.1rem max(1.5rem, 3vw);
  }
}
`;
const SectionWapper = ({ children }) => {
  return (
    <Wrapper>
      <Main>
        <Section>
            {children}
        </Section>
      </Main>
    </Wrapper>
  );
};

export default SectionWapper;
