import React from "react";

import {
  StyledHome,
  StyledHomeHero,
  StyledHomeHeroIntro,
  StyledHomeHeroIntroTitle,
  StyledHomeHeroIcon,
  StyledHomeCards,
  StyledHomeCardsInner,
} from "./styled";

import Hero from "../../components/hero";
import PlayCtaButton from "../../components/play-cta-button";
import Trending from "../../components/trending";
import DonationStrip from "../../components/donation-strip";
import CardGrid from "../../components/card-grid";
import StoryCard from "../../components/story-card";

const Home = () => (
  <StyledHome>
    <Hero type="home" bgImage="/images/hero_mixer.jpg" bgColor="#1e2827">
      <StyledHomeHero>
        <StyledHomeHeroIntro>
          <StyledHomeHeroIntroTitle>
            <StyledHomeHeroIcon src="/images/show_new-sounds.jpg" />
            <h1>New Sounds</h1>
          </StyledHomeHeroIntroTitle>
          <p>Hand-picked music, genre free. 24/7 radio from New York City.</p>
          <PlayCtaButton
            audioSrc="/audio/track-one.mp3"
            name="Track One"
            trackId="track-one"
          />
        </StyledHomeHeroIntro>
        <Trending />
      </StyledHomeHero>
    </Hero>
    <DonationStrip />
    <StyledHomeCards>
      <StyledHomeCardsInner>
        <h3>Latest from Torchbox Radio</h3>
        <CardGrid>
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </CardGrid>
      </StyledHomeCardsInner>
    </StyledHomeCards>
  </StyledHome>
);

export default Home;
