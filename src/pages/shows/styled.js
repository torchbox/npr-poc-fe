import styled from "styled-components";

import EpisodeCard from "../../components/episode-card";

const StyledShows = styled.div``;

const StyledShowsHero = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-bottom: 0;
  }
`;

const StyledShowsHeroIntro = styled.div`
  max-width: 600px;
`;

const StyledShowsHeroIntroTitle = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline-block;
    font-size: 70px;
    line-height: 74px;
  }
`;

const StyledStoryCards = styled.div`
  background: ${props => props.theme.colors.lightGrey};
`;

const StyledStoryCardsInner = styled.div`
  margin: 0 auto;
  padding: 122px ${props => props.theme.grid.outerGutter} 100px;
  max-width: ${props => props.theme.grid.maxWidth};

  h2 {
    font-size: 16px;
    color: ${props => props.theme.colors.blue};
    text-transform: uppercase;
    margin: 0 0 30px 0;
  }
`;

const StyledEpisodeCards = styled.div`
  background: ${props => props.theme.colors.white};
`;

const StyledEpisodeCardsInner = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.grid.outerGutter} 0;
  max-width: ${props => props.theme.grid.maxWidth};

  h2 {
    font-size: 16px;
    color: ${props => props.theme.colors.blue};
    text-transform: uppercase;
    margin: 0 0 30px 0;
  }
`;

const StyledEpisodeCard = styled(EpisodeCard)`
  position: relative;
  margin-bottom: 1px;

  &:nth-child(even) {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
      background: ${props => props.theme.colors.lightGrey};
    }
  }
  &:nth-child(even) {
    &:after {
      content: "";
      position: absolute;
      top: 100%;
      right: 0;
      width: 100vw;
      height: 1px;
      background: ${props => props.theme.colors.lightGrey};
    }
  }
`;

const StyledEpisodeCardGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -38px;
  padding: 38px 0 38px 0;

  & > div {
    width: 50%;
  }
`;

export {
  StyledShows,
  StyledShowsHero,
  StyledShowsHeroIntro,
  StyledShowsHeroIntroTitle,
  StyledStoryCards,
  StyledStoryCardsInner,
  StyledEpisodeCards,
  StyledEpisodeCardsInner,
  StyledEpisodeCard,
  StyledEpisodeCardGrid
};
