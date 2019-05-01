import React, { useState, useEffect } from "react";

import { fetchPage, fetchPages } from "../../services";

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

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const { items } = await fetchPages();

      const podcasts = items.filter(item => {
        return item.meta.type === "podcasts.Episode";
      });

      const chips = await Promise.all(
        podcasts.map(child => fetchPage(child.id))
      );

      if (!ignore) setPodcasts(chips);
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [page.id]);

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
              <PlayCtaButton
                audioSrc="/audio/track-one.mp3"
                name="EPISODE 1: Roberto Lange"
                trackId="track-one"
                trackName="Track One"
              />
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
