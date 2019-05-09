import React from "react";

import {
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
} from "./styled";

import Hero from "../../components/hero";
import PlayCtaButton from "../../components/play-cta-button";
import CardGrid from "../../components/card-grid";
import StoryCard from "../../components/story-card";
import Tabs from "../../components/tabs";
import Tab from "../../components/tab";
import Filter from "../../components/filter";
import FilterButton from "../../components/filter-button";

const Shows = ({ page }) => {
  return (
    <>
      <StyledShows>
        <Hero
          type="podcast"
          bgImage="/images/jonathan-velasquez-160775-unsplash.jpg"
          bgColor="#1e2827"
          hasGradient={true}
        >
          <StyledShowsHero>
            <StyledShowsHeroIntro>
              <StyledShowsHeroIntroTitle>
                <h1>Shows</h1>
              </StyledShowsHeroIntroTitle>
              <p>Your destination for all things public radio.</p>
            </StyledShowsHeroIntro>
          </StyledShowsHero>
        </Hero>

        <Tabs>
          <Tab label="All Shows" count="24" isActive />
          <Tab label="New Shows" count="6" />
        </Tabs>
        <Filter>
          <FilterButton isActive label="Newest" />
          <FilterButton label="Most Popular" />
        </Filter>
        <StyledEpisodeCards>
          <StyledEpisodeCardsInner>
            <StyledEpisodeCardGrid>
              <StyledEpisodeCard
                imageSrc="/images/show_10_things.png"
                studio="WNYC STUDIOS"
                title="10 Things That Scare Me"
                excerpt="A tiny podcast about our biggest fears."
                url={`/shows/10-things-scare-me`}
              >
                <PlayCtaButton
                  audioSrc={"/audio/track-one.mp3"}
                  name={"Episode 32"}
                  trackId={"track-one"}
                  trackName={"10 Things That Scare Me - Episode 32"}
                  type="white"
                />
              </StyledEpisodeCard>
              <StyledEpisodeCard
                imageSrc="/images/show_dopequeens.png"
                studio="WNYC STUDIOS"
                title="2 Dope Queens"
                excerpt="Phoebe Robinson and Jessica Williams host a live comedy show in Brooklyn."
                url={`/shows/10-things-scare-me`}
              >
                <PlayCtaButton
                  audioSrc={"/audio/track-two.mp3"}
                  name={"Episode 16"}
                  trackId={"track-two"}
                  trackName={"2 Dope Queens - Episode 16"}
                  type="white"
                />
              </StyledEpisodeCard>
              <StyledEpisodeCard
                imageSrc="/images/show_american-fiasco.png"
                studio="WNYC STUDIOS"
                title="American Fiasco"
                excerpt="The true story of how not to win the World Cup."
                url={`/shows/10-things-scare-me`}
              >
                <PlayCtaButton
                  audioSrc={"/audio/track-one.mp3"}
                  name={"Episode 12"}
                  trackId={"track-three"}
                  trackName={"American Fiasco - Episode 12"}
                  type="white"
                />
              </StyledEpisodeCard>
              <StyledEpisodeCard
                imageSrc="/images/show_dear-hank-john.png"
                title="Dear Hank & John"
                excerpt="Hosts John and Hank Green answer listener questions and offer dubious advice."
                url={`/shows/10-things-scare-me`}
              >
                <PlayCtaButton
                  audioSrc={"/audio/track-two.mp3"}
                  name={"Episode 19"}
                  trackId={"track-four"}
                  trackName={"American Fiasco - Episode 19"}
                  type="white"
                />
              </StyledEpisodeCard>
            </StyledEpisodeCardGrid>
          </StyledEpisodeCardsInner>
        </StyledEpisodeCards>
        <StyledStoryCards>
          <StyledStoryCardsInner>
            <h2>Latest from Torchbox Radio</h2>
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
          </StyledStoryCardsInner>
        </StyledStoryCards>
      </StyledShows>
    </>
  );
};

export default Shows;
