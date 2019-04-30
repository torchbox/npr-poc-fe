import React from "react";

import { StyledHero, StyledHeroInner } from "./styled";

const Hero = ({ children, type, bgImage, bgColor, hasGradient = false }) => (
  <StyledHero type={type} bgImage={bgImage} bgColor={bgColor} hasGradient={hasGradient}>
    <StyledHeroInner type={type}>{children}</StyledHeroInner>
  </StyledHero>
);

export default Hero;
