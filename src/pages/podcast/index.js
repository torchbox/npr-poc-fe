import React, { useState, useEffect, useContext } from "react";
import moment from "moment";

import { PagesContext } from "../../context/pages";

import { fetchEpisodesByParentId } from "../../services";

import {
  StyledPodcast,
  StyledPodcastHero,
  StyledPodcastHeroIntro,
  StyledPodcastHeroIntroTitle,
  StyledPodcastHeroIntroSubtitle,
  StyledStoryCards,
  StyledStoryCardsInner,
  StyledEpisodeCards,
  StyledEpisodeCardsInner,
  StyledEpisodeCard,
  StyledEpisodeCardGrid,
  StyledLoad,
  StyledLoadInner
} from "./styled";

import Hero from "../../components/hero";
import PlayCtaButton from "../../components/play-cta-button";
import CardGrid from "../../components/card-grid";
import StoryCard from "../../components/story-card";
import Tabs from "../../components/tabs";
import Tab from "../../components/tab";
import Filter from "../../components/filter";
import FilterButton from "../../components/filter-button";

const Podcast = ({ page }) => {
  const displayLimit = 6;

  const { cache, updateCache } = useContext(PagesContext);

  const cacheId = `show_${page.id}`;

  const episodesFromCache = cache[cacheId] ? cache[cacheId].data : [];

  const [episodes, setEpisodes] = useState(null);

  const [loadMore, setLoadMore] = useState(true);

  const [displayCount, setDisplayCount] = useState(displayLimit);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      if (!ignore) {
        const episodes = await fetchEpisodesByParentId(page.id, true);

        setEpisodes(episodes);

        updateCache({
          [cacheId]: {
            data: episodes
          }
        });
      }
    }

    if (episodes === null) {
      // No cache, and no episodes so make request
      fetchData();
    }

    return () => {
      ignore = true;
    };
  }, [cacheId, page.id, episodesFromCache, episodes, setEpisodes, updateCache]);

  useEffect(() => {
    if (episodes && displayCount >= episodes.length) {
      setLoadMore(false);
    }
  }, [displayCount, episodes]);

  return (
    <>
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
                <h1>{page.title}</h1>
              </StyledPodcastHeroIntroTitle>
              <StyledPodcastHeroIntroSubtitle>
                <p>{page.subtitle}</p>
              </StyledPodcastHeroIntroSubtitle>
              {episodes ? (
                <PlayCtaButton
                  audioSrc={episodes[0].enclosures[0].media.meta.file}
                  name={`EPISODE ${episodes[0].season_number}: ${
                    episodes[0].title
                  }`}
                  trackId={episodes[0].enclosures[0].id}
                  trackName={episodes[0].enclosures[0].media.title}
                />
              ) : (
                <PlayCtaButton
                  name={`EPISODE 32: Libby Callaway`}
                />
              )}
            </StyledPodcastHeroIntro>
          </StyledPodcastHero>
        </Hero>

        {episodes ? (
          <>
            <Tabs>
              <Tab
                label="Episodes"
                count={episodes.length}
                addBorder={true}
              />
              <Tab label="Team" />
            </Tabs>
            <Filter>
              <FilterButton isActive label="Most Recent" />
              <FilterButton label="Most Listens" />
            </Filter>
            <StyledEpisodeCards>
              <StyledEpisodeCardsInner>
                <StyledEpisodeCardGrid>
                  {episodes.map((episode, index) => {
                    return (
                      <StyledEpisodeCard
                        key={episode.id}
                        imageSrc={episode.images[0].image_thumbnail.url}
                        title={episode.title}
                        date={moment(episode.date_created).format("LL")}
                        excerpt={episode.subtitle}
                        url={`${page.meta.slug}/${episode.meta.slug}`}
                        hidden={!(index < displayCount)}
                      >
                        <PlayCtaButton
                          audioSrc={episode.enclosures[0].media.meta.file}
                          name={`Episode ${episode.season_number}`}
                          trackId={episode.enclosures[0].id}
                          trackName={episode.enclosures[0].media.title}
                          type="white"
                        />
                      </StyledEpisodeCard>
                    );
                  })}
                </StyledEpisodeCardGrid>
              </StyledEpisodeCardsInner>
            </StyledEpisodeCards>
            {loadMore && (
              <StyledLoad>
                <StyledLoadInner
                  onClick={() => {
                    setDisplayCount(displayCount + displayLimit);
                  }}
                >
                  Load more
                </StyledLoadInner>
              </StyledLoad>
            )}
          </>
        ) : (
          <div
            style={{
              height: "100vh"
            }}
          />
        )}

        <StyledStoryCards>
          <StyledStoryCardsInner>
            <h2>Similar Shows</h2>
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
      </StyledPodcast>
    </>
  );
};

export default Podcast;
