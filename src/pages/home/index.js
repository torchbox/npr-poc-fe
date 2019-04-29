import React from "react";

import {
  StyledHome,
  StyledHomeHero,
  StyledHomeHeroIntro,
  StyledHomeHeroIntroTitle,
  StyledHomeHeroIcon
} from "./styled";

import Hero from "../../components/hero";
import PlayButton from "../../components/play-button";

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
          <PlayButton
            audioSrc="/audio/track-one.mp3"
            label="Track One"
            trackId="track-one"
          />
        </StyledHomeHeroIntro>
      </StyledHomeHero>
    </Hero>
  </StyledHome>
);

export default Home;
