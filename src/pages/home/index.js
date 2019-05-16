import React from "react";

import {
  StyledHome,
  StyledHomeHero,
  StyledHomeHeroIntro,
  StyledHomeHeroIntroTitle,
  StyledHomeHeroIcon,
  StyledHomeCards,
  StyledHomeCardsInner
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
            name="New Sounds"
            trackId="track-one"
            trackName="New Sounds"
            isLive
          />
        </StyledHomeHeroIntro>
        <Trending />
      </StyledHomeHero>
    </Hero>
    <DonationStrip />
    <StyledHomeCards>
      <StyledHomeCardsInner>
        <h2>Latest News</h2>
        <CardGrid>
          <StoryCard
            imageSrc="/images/news_layman.png"
            title="Damon Young and Kiese Laymon: The Good Dude Closet"
            category="Death, Sex & Money"
            excerpt="The writers on why the label covers a multitude of sins."
          />
          <StoryCard
            imageSrc="/images/news_asylum-ny.jpg"
            title="Why It's Harder to Win Asylum, Even in New York"
            excerpt="In immigrant-friendly New York, migrants have historically had a much easier time winning asylum than one would have expected"
          />
          <StoryCard
            imageSrc="/images/news_asylum-ny.jpg"
            title="Why It's Harder to Win Asylum, Even in New York"
            excerpt="In immigrant-friendly New York, migrants have historically had a much easier time winning asylum than one would have expected"
          />
          <StoryCard
            imageSrc="/images/news_layman.png"
            title="Damon Young and Kiese Laymon: The Good Dude Closet"
            category="Death, Sex & Money"
            excerpt="The writers on why the label covers a multitude of sins."
          />
        </CardGrid>
      </StyledHomeCardsInner>
    </StyledHomeCards>
  </StyledHome>
);

export default Home;
