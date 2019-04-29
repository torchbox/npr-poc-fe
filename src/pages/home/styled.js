import styled from "styled-components";

const StyledHome = styled.div``;

const StyledHomeHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHomeHeroIntro = styled.div`
  max-width: 460px;
`;

const StyledHomeHeroIntroTitle = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline-block;
  }
`;

const StyledHomeHeroIcon = styled.img`
  width: 75px;
  height: 75px;
  margin: 0 24px 0 0;
`;

export {
  StyledHome,
  StyledHomeHero,
  StyledHomeHeroIntro,
  StyledHomeHeroIntroTitle,
  StyledHomeHeroIcon
};
