import React, { useContext } from "react";
import moment from "moment";

import { PagesContext } from "../../context/pages";

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
  const { shows } = useContext(PagesContext);

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

        {shows ? (
          <>
            <Tabs>
              <Tab label="All Shows" count="24" addBorder={true} />
              <Tab label="New Shows" count="6" />
            </Tabs>
            <Filter>
              <FilterButton isActive label="Newest" />
              <FilterButton label="Most Popular" />
            </Filter>
            <StyledEpisodeCards>
              <StyledEpisodeCardsInner>
                <StyledEpisodeCardGrid>
                  {shows.map(show => (
                    <StyledEpisodeCard
                      key={show.id}
                      imageSrc={""}
                      title={show.title}
                      date={moment(show.date_created).format("LL")}
                      excerpt={show.subtitle}
                      url={`/shows/${show.meta.slug}`}
                    />
                  ))}
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
          </>
        ) : (
          <div
            style={{
              height: "100vh"
            }}
          />
        )}
      </StyledShows>
    </>
  );
};

export default Shows;
