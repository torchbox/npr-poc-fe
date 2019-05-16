import styled, { css } from "styled-components";

const StyledHero = styled.div`
  position: relative;
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

  ${props =>
    props.bgImage &&
    props.hasGradient &&
    css`
      background-size: 100%;
    `}

  ${props =>
    props.hasGradient &&
    css`
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3) 0%,
          rgba(0, 0, 0, 0.6) 100%
        );
        z-index: 0;
        pointer-events: none;
      }
    `}

    ${props =>
      props.type === "episode" &&
      css`
        padding-bottom: 0;
      `
    }

    ${props =>
      props.type === "podcast" &&
      css`
        min-height: 655px;
      `
    }
`;

const StyledHeroInner = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.grid.maxWidth};
  padding: 90px ${props => props.theme.grid.outerGutter};

  ${props =>
    props.type === "episode" &&
    css`
      padding-top: 60px;
      padding-bottom: 0;
    `
  }
`;

export { StyledHero, StyledHeroInner };
