import React, { useState, useEffect, useContext } from "react";

import { PagesContext } from "../../context/pages";

import { fetchPage } from "../../services";

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
  StyledEpisodeCardGrid,
  StyledLoad,
  StyledLoadInner,
} from "./styled";

import Hero from "../../components/hero";
import PlayCtaButton from "../../components/play-cta-button";
import CardGrid from "../../components/card-grid";
import StoryCard from "../../components/story-card";
import Tabs from "../../components/tabs";
import Tab from "../../components/tab";
import Filter from "../../components/filter";

const Podcast = ({ page }) => {
  const [podcasts, setPodcasts] = useState(null);
  const { pages } = useContext(PagesContext);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const podcasts = pages.filter(page => {
        return page.meta.type === "podcasts.Episode";
      });

      const allPodcastData = await Promise.all(
        podcasts.map(child => fetchPage(child.id))
      );

      if (!ignore) setPodcasts(allPodcastData);
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [pages]);

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
              <p>{page.subtitle}</p>
              {podcasts &&
                <PlayCtaButton
                  audioSrc={podcasts[0].enclosures[0].media.meta.file}
                  name={`EPISODE ${podcasts[0].season_number}: ${podcasts[0].title}`}
                  trackId={podcasts[0].enclosures[0].id}
                  trackName={podcasts[0].enclosures[0].media.title}
                />
              }
            </StyledPodcastHeroIntro>
          </StyledPodcastHero>
        </Hero>

        {podcasts ? (
          <>
            <Tabs>
              <Tab label="Episodes" count="32" isActive />
              <Tab label="Tell Us Your Fears" />
              <Tab label="Team" />
            </Tabs>
            <Filter />
            <StyledEpisodeCards>
              <StyledEpisodeCardsInner>
                <StyledEpisodeCardGrid>
                  {podcasts.map(podcast => (
                    <StyledEpisodeCard
                      key={podcast.id}
                      imageSrc={podcast.images[0].image.meta.download_url}
                      title={podcast.title}
                      date="Apr 25, 2019"
                      excerpt={podcast.subtitle}
                      url={`/episode/${podcast.meta.slug}`}
                    >
                      <PlayCtaButton
                        audioSrc={podcast.enclosures[0].media.meta.file}
                        name={`Episode ${podcast.season_number}`}
                        trackId={podcast.enclosures[0].id}
                        trackName={podcast.enclosures[0].media.title}
                        type="white"
                      />
                    </StyledEpisodeCard>
                  ))}
                </StyledEpisodeCardGrid>
              </StyledEpisodeCardsInner>
            </StyledEpisodeCards>
            <StyledLoad>
              <StyledLoadInner>
                Load more
              </StyledLoadInner>
            </StyledLoad>
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
