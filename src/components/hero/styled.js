import styled, { css } from "styled-components";

const StyledHero = styled.div`
  width: 100%;
  margin-top: -85px;
  padding: 85px;

  h1 {
    margin: 0;
    font-size: 50px;
    font-weight: ${props => props.theme.fonts.bold};
    line-height: 60px;
    color: ${props => props.theme.colors.white};
  }

  p {
    font-size: 33px;
    line-height: 40px;
    color: ${props => props.theme.colors.white};
    font-weight: ${props => props.theme.fonts.light};
  }

  ${props =>
    props.bgImage &&
    css`
      background: url(${props => props.bgImage}) ${props => props.bgColor};
      background-size: 1440px;
      background-position: center 40%;
      background-repeat: no-repeat;
    `}
`;

const StyledHeroInner = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.grid.maxWidth};
  padding: 90px ${props => props.theme.grid.outerGutter};
`;

export { StyledHero, StyledHeroInner };
