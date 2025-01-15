import { main } from "framer-motion/client";
import React from "react";
import styled from "styled-components";

// const Wrapper = styled.div`
//   display: flex;
//   min-height: 100vh;
//   overflow: hidden;

//   .main {
//     flex-grow: 1;
//     flex-shrink: 1;
//     width: 100%;

//     .inner {
//       padding: 0 6rem 0.1rem 6rem;
//       margin: 0 auto;
//       max-width: 110rem;

//       @media screen and (max-width: 736px) {
//         padding: 0 2rem 0.1rem 2rem;
//       }

//       @media screen and (max-width: 1680px) {
//         padding: 0 5rem 0.1rem 5rem;
//       }

//       @media screen and (max-width: 1280px) {
//         padding: 0 4rem 0.1rem 4rem;
//       }
//     }
//   }
// `;

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
  container-type: inline-size;
  padding: 0 max(2rem, 5vw) 0.1rem max(2rem, 5vw);
  margin: 0 auto;
  max-width: 110rem;

  @container (max-width: 1280px) {
    padding: 0 max(1.5rem, 3vw) 0.1rem max(1.5rem, 3vw);
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
