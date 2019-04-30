import styled from "styled-components";

const StyledPodcast = styled.div``;

const StyledPodcastHero = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledPodcastHeroIntro = styled.div`
  max-width: 560px;
`;

const StyledPodcastHeroIntroTitle = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline-block;
    font-size: 70px;
    line-height: 74px;
  }
`;

const StyledPodcastCards = styled.div`
  background: ${props => props.theme.colors.lightGrey};
`
const StyledPodcastCardsInner = styled.div`
  margin: 0 auto;
  padding: 122px ${props => props.theme.grid.outerGutter} 100px;
  max-width: ${props => props.theme.grid.maxWidth};

  h2 {
    font-size: 16px;
    color: ${props => props.theme.colors.blue};
    text-transform: uppercase;
    margin: 0 0 30px 0;
  }
`

export {
  StyledPodcast,
  StyledPodcastHero,
  StyledPodcastHeroIntro,
  StyledPodcastHeroIntroTitle,
  StyledPodcastCards,
  StyledPodcastCardsInner
};
