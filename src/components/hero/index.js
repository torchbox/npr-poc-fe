import React from "react";

import { StyledHero, StyledHeroInner } from "./styled";

const Hero = ({ children, type, bgImage, bgColor }) => (
  <StyledHero type={type} bgImage={bgImage} bgColor={bgColor}>
    <StyledHeroInner>{children}</StyledHeroInner>
  </StyledHero>
);

export default Hero;
