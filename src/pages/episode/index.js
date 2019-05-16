import React from "react";

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
  return (
    <StyledEpisode>
      <Hero
        type="episode"
        bgImage={`/images/hero_${page.meta.parent.meta.slug}.png`}
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
              label="All Episodes"
              to={`/shows/${page.meta.parent.meta.slug}`}
            />
            <Tab label="Team" />
          </StyledEpisodeHeroLinks>
        </StyledEpisodeHero>
      </Hero>
      <StyledEpisodeWrapper>
        <StyledEpisodeWrapperInner>
          <StyledEpisodeIntro>
            <StyledEpisodeIntroText>
              <StyledEpisodeIntroTitle>
                {page.season_number} {page.season_number && "."} {page.title}
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
                    trackImage={
                      page.images.length
                        ? page.images[0].image_thumbnail.url
                        : null
                    }
                  />
                )
              )}
          </StyledEpisodeIntro>
          {page.images &&
            page.images.length > 0 &&
            page.images.map(({ id, image_thumbnail: { url: imageUrl } }) => (
              <StyledEpisodeImage key={id} src={imageUrl} />
            ))}

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
                  trackImage={
                    page.images.length
                      ? page.images[0].image_thumbnail.url
                      : null
                  }
                  isEpisode
                />
              )
            )}
        </StyledEpisodeWrapperInner>
      </StyledEpisodeWrapper>
      <RelatedEpisodes page={page} />
    </StyledEpisode>
  );
};

export default Episode;
