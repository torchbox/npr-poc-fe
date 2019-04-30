import React from "react";

import {
  StyledPodcast,
  StyledPodcastHero,
  StyledPodcastHeroIntro,
  StyledPodcastHeroIntroTitle,
  StyledPodcastCards,
  StyledPodcastCardsInner
} from "./styled";

import Hero from "../../components/hero";
import PlayCtaButton from "../../components/play-cta-button";
import CardGrid from "../../components/card-grid";
import StoryCard from "../../components/story-card";
import Tabs from "../../components/tabs";
import Tab from '../../components/tab';

const Podcast = () => (
  <StyledPodcast>
    <Hero
      type="podcast"
      bgImage="/images/hero_sharks.jpg"
      bgColor="#1e2827"
      hasGradient={true}
    >
      <StyledPodcastHero>
        <StyledPodcastHeroIntro>
          <StyledPodcastHeroIntroTitle>
            <h1>10 Things that Scare Me</h1>
          </StyledPodcastHeroIntroTitle>
          <p>A tiny podcast about our biggest fears.</p>
          <PlayCtaButton
            audioSrc="/audio/track-one.mp3"
            name="EPISODE 1: Roberto Lange"
            trackId="track-one"
          />
        </StyledPodcastHeroIntro>
      </StyledPodcastHero>
    </Hero>

    <Tabs>
      <Tab label="Episodes" count="32" isActive/>
      <Tab label="Tell Us Your Fears" />
      <Tab label="Team" />
    </Tabs>

    <StyledPodcastCards>
      <StyledPodcastCardsInner>
        <h2>Similar Shows</h2>
        <CardGrid>
          <StoryCard
            imageSrc="images/news_layman.png"
            title="Damon Young and Kiese Laymon: The Good Dude Closet"
            category="Death, Sex & Money"
            excerpt="The writers on why the label covers a multitude of sins."
          />
          <StoryCard
            imageSrc="images/news_asylum-ny.jpg"
            title="Why It's Harder to Win Asylum, Even in New York"
            excerpt="In immigrant-friendly New York, migrants have historically had a much easier time winning asylum than one would have expected"
          />
          <StoryCard
            imageSrc="images/news_asylum-ny.jpg"
            title="Why It's Harder to Win Asylum, Even in New York"
            excerpt="In immigrant-friendly New York, migrants have historically had a much easier time winning asylum than one would have expected"
          />
          <StoryCard
            imageSrc="images/news_layman.png"
            title="Damon Young and Kiese Laymon: The Good Dude Closet"
            category="Death, Sex & Money"
            excerpt="The writers on why the label covers a multitude of sins."
          />
        </CardGrid>
      </StyledPodcastCardsInner>
    </StyledPodcastCards>
  </StyledPodcast>
);

export default Podcast;
