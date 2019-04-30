import React from "react";

import {
  StyledPodcast,
  StyledPodcastHero,
  StyledPodcastHeroIntro,
  StyledPodcastHeroIntroTitle,
  StyledStoryCards,
  StyledStoryCardsInner,
  StyledEpisodeCards,
  StyledEpisodeCardsInner,
  StyledEpisodeCard,
  StyledEpisodeCardGrid
} from "./styled";

import Hero from "../../components/hero";
import PlayCtaButton from "../../components/play-cta-button";
import CardGrid from "../../components/card-grid";
import StoryCard from "../../components/story-card";
import Tabs from "../../components/tabs";
import Tab from "../../components/tab";
import Filter from "../../components/filter";

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
      <Tab label="Episodes" count="32" isActive />
      <Tab label="Tell Us Your Fears" />
      <Tab label="Team" />
    </Tabs>

    <Filter />

    <StyledEpisodeCards>
      <StyledEpisodeCardsInner>
        <StyledEpisodeCardGrid>
          <StyledEpisodeCard
            imageSrc="images/news_layman.png"
            title="Libby Callaway"
            date="Apr 25, 2019"
            excerpt="Months are my mortal enemy."
          >
            <PlayCtaButton
              audioSrc="/audio/track-one.mp3"
              name="Episode 32"
              trackId="track-one"
              type="white"
            />
          </StyledEpisodeCard>
          <StyledEpisodeCard
            imageSrc="images/news_layman.png"
            title="Libby Callaway"
            date="Apr 25, 2019"
            excerpt="Months are my mortal enemy."
          >
            <PlayCtaButton
              audioSrc="/audio/track-one.mp3"
              name="Episode 32"
              trackId="track-one"
              type="white"
            />
          </StyledEpisodeCard>
          <StyledEpisodeCard
            imageSrc="images/news_layman.png"
            title="Libby Callaway"
            date="Apr 25, 2019"
            excerpt="Months are my mortal enemy."
          >
            <PlayCtaButton
              audioSrc="/audio/track-one.mp3"
              name="Episode 32"
              trackId="track-one"
              type="white"
            />
          </StyledEpisodeCard>
          <StyledEpisodeCard
            imageSrc="images/news_layman.png"
            title="Libby Callaway"
            date="Apr 25, 2019"
            excerpt="Months are my mortal enemy."
          >
            <PlayCtaButton
              audioSrc="/audio/track-one.mp3"
              name="Episode 32"
              trackId="track-one"
              type="white"
            />
          </StyledEpisodeCard>
        </StyledEpisodeCardGrid>
      </StyledEpisodeCardsInner>
    </StyledEpisodeCards>

    <StyledStoryCards>
      <StyledStoryCardsInner>
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
      </StyledStoryCardsInner>
    </StyledStoryCards>
  </StyledPodcast>
);

export default Podcast;
