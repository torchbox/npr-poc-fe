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

const StyledHomeCards = styled.div`
  background: ${props => props.theme.colors.lightGrey};
`
const StyledHomeCardsInner = styled.div`
  margin: 0 auto;
  padding: 122px ${props => props.theme.grid.outerGutter} 100px;
  max-width: ${props => props.theme.grid.maxWidth};

  h3 {
    font-size: 16px;
    color: ${props => props.theme.colors.blue};
    text-transform: uppercase;
    margin: 0 0 30px 0;
  }
`

export {
  StyledHome,
  StyledHomeHero,
  StyledHomeHeroIntro,
  StyledHomeHeroIntroTitle,
  StyledHomeHeroIcon,
  StyledHomeCards,
  StyledHomeCardsInner
};
