import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Subtitle from './Subtitle';
import StripedPlanetoid from './StripedPlanetoid';
import Job from './Job';

const Hero = () => {
  return (
    <Wrapper>
      <Title>Javascript Engineer</Title>
      <Subtitle>Building webapps for your delight.</Subtitle>
      <PlanetoidContainer>
        {/* note: let's make it kickable in this container later 🏌️‍♂️ */}
        <StripedPlanetoid />
      </PlanetoidContainer>
      <Job />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 6rem;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlanetoidContainer = styled.div`
  margin-bottom: 6rem;
`;

export default Hero;
