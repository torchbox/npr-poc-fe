import React, { useContext } from "react";

import { PagesContext } from "../../context/pages";

import {
  StyledEpisode,
  StyledEpisodeHero,
  StyledEpisodeHeroIntro,
  StyledEpisodeHeroIntroTitle,
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
import Tab from "../../components/tab";
import RelatedEpisodes from "../../components/related-episodes";

const Episode = ({ page }) => {
  const { episodes } = useContext(PagesContext);

  return (
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
            <Tab
              label="Episodes"
              count={episodes.length}
              to="/shows/10-things-scare-me"
            />
            <Tab label="Tell Us Your Fears" to="/shows/10-things-scare-me" />
            <Tab label="Team" to="/shows/10-things-scare-me" />
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
            {page.enclosures &&
              page.enclosures.length > 0 &&
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
          {page.images &&
            page.images.length > 0 &&
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

          {page.enclosures &&
            page.enclosures.length > 0 &&
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
        </StyledEpisodeWrapperInner>
      </StyledEpisodeWrapper>
      <RelatedEpisodes currentId={page.id} />
    </StyledEpisode>
  );
};

export default Episode;
