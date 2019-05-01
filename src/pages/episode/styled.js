import styled from "styled-components";

const StyledEpisode = styled.div``;

const StyledEpisodeHero = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledEpisodeHeroIntro = styled.div`
  max-width: 560px;
`;

const StyledEpisodeHeroIntroTitle = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline-block;
    font-size: 30px;
  }
`;

const StyledEpisodeHeroLinks = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end > div {
    padding: 0;
    border: 0;

    &:last-child {
      margin: 0;
    }
  }

  // Links
  > div {
    padding: 0;
    border: 0;
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

const StyledEpisodeCardGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    width: 50%;
  }
`;

const StyledEpisodeWrapper = styled.div`
  margin: 0 0 -20px;
  background: ${props => props.theme.colors.lightGrey};
`;

const StyledEpisodeWrapperInner = styled.div`
  margin: 0 auto;
  padding: 80px 0 0 0;
  max-width: 800px;
`;

const StyledEpisodeIntro = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 40px 0;
`;

const StyledEpisodeIntroText = styled.div`
  padding: 0 30px 0 0;
`;

const StyledEpisodeIntroTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: 53px;
  color: ${props => props.theme.colors.blue};
`;

const StyledEpisodeIntroStandfirst = styled.p`
  margin: 0;
  font-size: 26px;
  color: ${props => props.theme.colors.grey};
`;

const StyledEpisodeImage = styled.img`
  width: 100%;
  margin: 0 0 50px 0;
`;

const StyledEpisodeRte = styled.div`
  margin: 0 0 30px 0;
  color: ${props => props.theme.colors.grey};

  p {
    margin: 0;
    font-size: 18px;
    line-height: 32px;
  }

  a {
    color: ${props => props.theme.colors.blue};
    font-weight: ${props => props.theme.fonts.bold};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p + p {
    margin-top: 20px;
  }
`;

export {
  StyledEpisode,
  StyledEpisodeHero,
  StyledEpisodeHeroIntro,
  StyledEpisodeHeroIntroTitle,
  StyledStoryCards,
  StyledStoryCardsInner,
  StyledEpisodeCardGrid,
  StyledEpisodeHeroLinks,
  StyledEpisodeWrapper,
  StyledEpisodeWrapperInner,
  StyledEpisodeIntro,
  StyledEpisodeIntroText,
  StyledEpisodeIntroTitle,
  StyledEpisodeIntroStandfirst,
  StyledEpisodeImage,
  StyledEpisodeRte
};
