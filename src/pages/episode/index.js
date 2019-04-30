import React from "react";

import {
  StyledEpisode,
  StyledEpisodeHero,
  StyledEpisodeHeroIntro,
  StyledEpisodeHeroIntroTitle,
  StyledStoryCards,
  StyledStoryCardsInner,
  StyledEpisodeHeroLinks,
  StyledEpisodeWrapper,
  StyledEpisodeWrapperInner,
  StyledEpisodeIntro,
  StyledEpisodeIntroText,
  StyledEpisodeIntroTitle,
  StyledEpisodeIntroStandfirst,
  StyledEpisodeImage,
  StyledEpisodeRte
} from "./styled";

import Hero from "../../components/hero";
import PlayCtaButton from "../../components/play-cta-button";
import CardGrid from "../../components/card-grid";
import EpisodeCard from "../../components/episode-card";
import Tab from "../../components/tab";

const Episode = () => (
  <StyledEpisode>
    <Hero
      type="episode"
      bgImage="/images/hero_sharks.jpg"
      bgColor="#1e2827"
      hasGradient={true}
    >
      <StyledEpisodeHero>
        <StyledEpisodeHeroIntro>
          <StyledEpisodeHeroIntroTitle>
            <h1>10 Things that Scare Me</h1>
          </StyledEpisodeHeroIntroTitle>
        </StyledEpisodeHeroIntro>
        <StyledEpisodeHeroLinks>
          <Tab label="Episodes" count="32" />
          <Tab label="Tell Us Your Fears" />
          <Tab label="Team" />
        </StyledEpisodeHeroLinks>
      </StyledEpisodeHero>
    </Hero>

    <StyledEpisodeWrapper>
      <StyledEpisodeWrapperInner>
        <StyledEpisodeIntro>
          <StyledEpisodeIntroText>
            <StyledEpisodeIntroTitle>
              32. Libby Callaway
            </StyledEpisodeIntroTitle>
            <StyledEpisodeIntroStandfirst>
              Moths are my mortal enemy.
            </StyledEpisodeIntroStandfirst>
          </StyledEpisodeIntroText>
          <PlayCtaButton
            audioSrc="/audio/track-one.mp3"
            name="Listen Now"
            trackId="track-one"
          />
        </StyledEpisodeIntro>
        <StyledEpisodeImage src="images/article-image_elvis.jpg" />
        <StyledEpisodeRte>
          <p>
            Libby Callaway is a former fashion writer and vintage clothing
            collector. She currently runs her own branding company,{" "}
            <a href="/">The Callaway</a>, in Nashville, TN.
          </p>
          <p>
            Join the 10 Things That Scare Me conversation,{" "}
            <a href="/">and tell us your fears</a>.
          </p>
        </StyledEpisodeRte>
        <PlayCtaButton
          audioSrc="/audio/track-one.mp3"
          name="Episode 32"
          trackId="track-one"
          isEpisode
        />
      </StyledEpisodeWrapperInner>
    </StyledEpisodeWrapper>

    <StyledStoryCards>
      <StyledStoryCardsInner>
        <h2>Also in this show</h2>
        <CardGrid>
          <EpisodeCard
            imageSrc="images/news_asylum-ny.jpg"
            title="Rashad Jennings"
            date="27 Apr, 2019"
            excerpt="If they are right, I am wrong"
          >
            <PlayCtaButton
              audioSrc="/audio/track-one.mp3"
              name="Episode 32"
              trackId="track-one"
              type="white"
            />
          </EpisodeCard>
          <EpisodeCard
            imageSrc="images/news_asylum-ny.jpg"
            title="Growing Old"
            date="Apr 18, 2019"
            excerpt="We got death threats for months..."
          >
            <PlayCtaButton
              audioSrc="/audio/track-one.mp3"
              name="Episode 32"
              trackId="track-one"
              type="white"
            />
          </EpisodeCard>
        </CardGrid>
      </StyledStoryCardsInner>
    </StyledStoryCards>
  </StyledEpisode>
);

export default Episode;
