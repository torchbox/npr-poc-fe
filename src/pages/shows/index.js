import React, { useEffect, useState, useContext } from "react";

import { LoaderContext } from "../../context/loader";

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
  const { setPageLoading } = useContext(LoaderContext);

  const [shows, setShows] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      if (!ignore) {
        setPageLoading(true);

        const shows = await fetchShows();

        setShows(shows);

        setTimeout(() => {
          setPageLoading(false);
        }, 300);
      }
    }

    if (shows === null) {
      fetchData();
    }

    return () => {
      ignore = true;
    };
  }, [shows, setPageLoading]);

  return (
    <>
      <StyledShows>
        {shows ? (
          <>
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

            <Tabs>
              <Tab
                label="All Shows"
                count={shows.length + 4}
                addBorder={true}
              />
              <Tab label="Latest Shows" count={2} />
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
                      imageSrc={
                        show.images.length
                          ? show.images[0].image_thumbnail.url
                          : null
                      }
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
                    imageSrc="/images/news_trump.jpg"
                    title="Plan Doesn’t Address Undocumented Immigrants"
                    excerpt="President Trump will announce the new immigration proposal on Thursday. It would keep legal immigration levels the same but dramatically change who would be let in."
                    date="May 16, 2019"
                  />
                  <StoryCard
                    imageSrc="/images/news_wildfire.jpg"
                    title="PG&E Transmissions Lines Caused California Wildfire"
                    excerpt="After a very meticulous and thorough investigation, CAL FIRE has determined that the Camp Fire was caused by electrical transmission lines owned and operated by Pacific Gas and Electricity (PG&E)."
                    date="May 15, 2019"
                  />
                  <StoryCard
                    imageSrc="/images/news_measles.jpg"
                    title="What You Should Know About Vaccines For Adults."
                    excerpt="We're used to kids needing lots of shots to ward off lots of illnesses, but what about adults? The CDC recommends that adults get multiple vaccinations for conditions ranging from tetanus to influenza to cervical cancer."
                    date="May 15, 2019"
                  />
                  <StoryCard
                    imageSrc="/images/news_asylum-ny.jpg"
                    title="Why It's Harder to Win Asylum, Even in New York"
                    excerpt="In immigrant-friendly New York, migrants have historically had a much easier time winning asylum than one would have expected"
                    date="May 14, 2019"
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
