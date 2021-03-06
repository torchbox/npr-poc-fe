import React, { useState, useEffect } from "react";
import moment from "moment";

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

  const [episodes, setEpisodes] = useState(null);

  const [loadMore, setLoadMore] = useState(true);

  const [displayCount, setDisplayCount] = useState(displayLimit);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      if (!ignore) {
        const episodes = await fetchEpisodesByParentId(page.id, true);

        setEpisodes(episodes);
      }
    }

    if (episodes === null) {
      // No cache, and no episodes so make request
      fetchData();
    }

    return () => {
      ignore = true;
    };
  }, [page.id, episodes, setEpisodes]);

  useEffect(() => {
    if (episodes && displayCount >= episodes.length) {
      setLoadMore(false);
    }
  }, [displayCount, episodes]);

  return (
    <>
      <StyledPodcast>
        {episodes ? (
          <>
            <Hero
              type="podcast"
              bgImage={`/images/hero_${page.meta.slug}.png`}
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
                  <PlayCtaButton
                    audioSrc={episodes[0].enclosures[0].media.meta.file}
                    name={`EPISODE ${episodes[0].season_number}: ${
                      episodes[0].title
                    }`}
                    trackId={episodes[0].enclosures[0].id}
                    trackName={episodes[0].enclosures[0].media.title}
                    trackImage={
                      episodes[0].images.length
                        ? episodes[0].images[0].image_thumbnail.url
                        : null
                    }
                  />
                </StyledPodcastHeroIntro>
              </StyledPodcastHero>
            </Hero>
            <Tabs>
              <Tab label="Episodes" count={episodes.length} addBorder={true} />
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
                        imageSrc={
                          episode.images.length
                            ? episode.images[0].image_thumbnail.url
                            : null
                        }
                        title={episode.title}
                        date={moment(episode.date_created).format("LL")}
                        excerpt={episode.subtitle}
                        url={`${page.meta.slug}/${episode.meta.slug}`}
                        hidden={!(index < displayCount)}
                      >
                        {episode.enclosures && episode.enclosures[0] && (
                          <PlayCtaButton
                            audioSrc={episode.enclosures[0].media.meta.file}
                            name={`Episode ${episode.season_number}`}
                            trackId={episode.enclosures[0].id}
                            trackName={episode.enclosures[0].media.title}
                            trackImage={
                              episode.images.length
                                ? episode.images[0].image_thumbnail.url
                                : null
                            }
                            type="white"
                          />
                        )}
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
                imageSrc="/images/similar_field-work.jpg"
                title="Field Work"
                category="MPR News"
                episodes="5"
                excerpt="Hosted by two commercial row-crop farmers, Field Work provides space for frank, realistic discussions about the benefits and challenges of sustainable agriculture."
              />
              <StoryCard
                imageSrc="/images/similar_tell-them.jpg"
                title="Tell Them, I Am"
                category="KPPC"
                episodes="10"
                excerpt="In immigrant-friendly New York, migrants have historically had a much easier time winning asylum than one would have expected"
              />
              <StoryCard
                imageSrc="/images/similar_code-switch.jpg"
                title="Code Switch"
                category="NPR"
                episodes="56"
                excerpt="Ever find yourself in a conversation about race and identity where you just get...stuck?"
              />
              <StoryCard
                imageSrc="/images/similar_story-slam.jpg"
                title="Next To Story Slam"
                category="WGLT"
                episodes="22"
                excerpt="Next to Normal Story Slam is a monthly storytelling event held at the McLean County Arts Center."
              />
            </CardGrid>
          </StyledStoryCardsInner>
        </StyledStoryCards>
      </StyledPodcast>
    </>
  );
};

export default Podcast;
