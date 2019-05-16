import React, { useEffect, useState, useContext } from "react";

import { PagesContext } from "../../context/pages";

import { fetchShows } from "../../services";

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
import CardGrid from "../../components/card-grid";
import StoryCard from "../../components/story-card";
import Tabs from "../../components/tabs";
import Tab from "../../components/tab";
import Filter from "../../components/filter";
import FilterButton from "../../components/filter-button";

const Shows = () => {
  const { cache, updateCache } = useContext(PagesContext);

  const showsFromCache = cache["shows"] ? cache["shows"].data : [];

  const [shows, setShows] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      if (!ignore) {
        const shows = await fetchShows();

        setShows(shows);

        updateCache({
          shows: {
            data: shows
          }
        });
      }
    }

    if (showsFromCache.length === 0 && shows === null) {
      fetchData();
    } else if (showsFromCache.length) {
      setShows(showsFromCache);
    }

    return () => {
      ignore = true;
    };
  }, [showsFromCache, shows, updateCache]);

  return (
    <>
      <StyledShows>
        <Hero
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
              <Tab
                label="All Shows"
                count={shows.length}
                addBorder={true}
                to="/shows"
              />
              <Tab
                label="Latest Shows"
                count={6}
                to="/shows"
              />
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
                      imageSrc={show.images[0].image_thumbnail.url}
                      title={show.title}
                      excerpt={show.subtitle}
                      url={`/shows/${show.meta.slug}`}
                    />
                  ))}
                  <StyledEpisodeCard
                    imageSrc="/images/show_dopequeens.png"
                    studio="WNYC STUDIOS"
                    title="2 Dope Queens"
                    excerpt="Phoebe Robinson and Jessica Williams host a live comedy show in Brooklyn."
                    url={``}
                  />
                  <StyledEpisodeCard
                    imageSrc="/images/show_american-fiasco.png"
                    studio="WNYC STUDIOS"
                    title="American Fiasco"
                    excerpt="The true story of how not to win the World Cup."
                    url={``}
                  />
                  <StyledEpisodeCard
                    imageSrc="/images/show_dear-hank-john.png"
                    title="Dear Hank & John"
                    excerpt="Hosts John and Hank Green answer listener questions and offer dubious advice."
                    url={``}
                  />
                  <StyledEpisodeCard
                    imageSrc="/images/show_tangents.png"
                    studio="Complexly and WNYC Studios"
                    title="SciShow Tangents"
                    excerpt="The lightly competitive knowledge showcase from the geniuses behind the YouTube series SciShow."
                    url={``}
                  />
                </StyledEpisodeCardGrid>
              </StyledEpisodeCardsInner>
            </StyledEpisodeCards>
            <StyledStoryCards>
              <StyledStoryCardsInner>
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
