import React from "react";

import {
  StyledEpisode,
  StyledEpisodeHero,
  StyledEpisodeHeroIntro,
  StyledEpisodeHeroIntroTitle,
  StyledStoryCards,
  StyledStoryCardsInner,
  StyledEpisodeHeroLinks,
  StyledEpisodeWrapper,
  StyledEpisodeWrapperInner,
  StyledEpisodeIntro,
  StyledEpisodeIntroText,
  StyledEpisodeIntroTitle,
  StyledEpisodeIntroStandfirst,
  StyledEpisodeImage,
  StyledEpisodeRte
} from "./styled";

import Hero from "../../components/hero";
import PlayCtaButton from "../../components/play-cta-button";
import CardGrid from "../../components/card-grid";
import EpisodeCard from "../../components/episode-card";
import Tab from "../../components/tab";

const Episode = ({ page }) => (
  <StyledEpisode>
    <Hero
      type="episode"
      bgImage="/images/hero_sharks.jpg"
      bgColor="#1e2827"
      hasGradient={true}
    >
      <StyledEpisodeHero>
        <StyledEpisodeHeroIntro>
          <StyledEpisodeHeroIntroTitle>
            <h1>{page.meta.parent.title}</h1>
          </StyledEpisodeHeroIntroTitle>
        </StyledEpisodeHeroIntro>
        <StyledEpisodeHeroLinks>
          <Tab label="Episodes" count="32" />
          <Tab label="Tell Us Your Fears" />
          <Tab label="Team" />
        </StyledEpisodeHeroLinks>
      </StyledEpisodeHero>
    </Hero>

    <StyledEpisodeWrapper>
      <StyledEpisodeWrapperInner>
        <StyledEpisodeIntro>
          <StyledEpisodeIntroText>
            <StyledEpisodeIntroTitle>
              {page.season_number}. {page.title}
            </StyledEpisodeIntroTitle>
            <StyledEpisodeIntroStandfirst>
              {page.subtitle}
            </StyledEpisodeIntroStandfirst>
          </StyledEpisodeIntroText>
          {/* <PlayCtaButton
            audioSrc="/audio/track-one.mp3"
            name="Listen Now"
            trackId="track-one"
            trackName="Track One"
          /> */}
          {page.enclosures && page.enclosures.length > 0 &&
            page.enclosures.map(
              ({
                id,
                meta: { type: mediaType },
                media: {
                  id: mediaId,
                  title: mediaTitle,
                  meta: { file: mediaFile }
                }
              }) => (
                <PlayCtaButton
                  key={mediaId}
                  audioSrc={mediaFile}
                  name="Listen Now"
                  trackId={mediaId}
                  trackName={mediaTitle}
                />
              )
            )}
        </StyledEpisodeIntro>
        {page.images && page.images.length > 0 &&
          page.images.map(
            ({
              id,
              image: {
                meta: { download_url: imageUrl }
              }
            }) => <StyledEpisodeImage key={id} src={imageUrl} />
          )}

        <StyledEpisodeRte
          dangerouslySetInnerHTML={{ __html: page.description }}
        />

        {page.enclosures.length > 0 &&
          page.enclosures.map(
            ({
              meta: { type: mediaType },
              media: {
                id: mediaId,
                title: mediaTitle,
                meta: { file: mediaFile }
              }
            }) => (
              <PlayCtaButton
                key={mediaId}
                audioSrc={mediaFile}
                name={`Episode ${page.season_number}`}
                trackId={mediaId}
                trackName={mediaTitle}
                isEpisode
              />
            )
          )}
        {/* <PlayCtaButton
          audioSrc="/audio/track-one.mp3"
          name="Episode 32"
          trackId="track-one"
          trackName="Track One"
          isEpisode
        /> */}
      </StyledEpisodeWrapperInner>
    </StyledEpisodeWrapper>

    <StyledStoryCards>
      <StyledStoryCardsInner>
        <h2>Also in this show</h2>
        <CardGrid>
          <EpisodeCard
            imageSrc="/images/news_asylum-ny.jpg"
            title="Rashad Jennings"
            date="27 Apr, 2019"
            excerpt="If they are right, I am wrong"
          >
            <PlayCtaButton
              audioSrc="/audio/track-one.mp3"
              name="Episode 32"
              trackId="track-one"
              trackName="Track One"
              type="white"
            />
          </EpisodeCard>
          <EpisodeCard
            imageSrc="/images/news_asylum-ny.jpg"
            title="Growing Old"
            date="Apr 18, 2019"
            excerpt="We got death threats for months..."
          >
            <PlayCtaButton
              audioSrc="/audio/track-one.mp3"
              name="Episode 32"
              trackId="track-one"
              trackName="Track One"
              type="white"
            />
          </EpisodeCard>
        </CardGrid>
      </StyledStoryCardsInner>
    </StyledStoryCards>
  </StyledEpisode>
);

export default Episode;
