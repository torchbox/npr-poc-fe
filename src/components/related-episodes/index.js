import React, { useState, useEffect, useContext } from "react";

import { PagesContext } from "../../context/pages";

import { StyledRelated, StyledRelatedInner } from "./styled";

import CardGrid from "../../components/card-grid";
import EpisodeCard from "../../components/episode-card";
import PlayCtaButton from "../../components/play-cta-button";

export const RelatedEpisdoes = ({ currentId }) => {
  const [relatedEpisodes, setRelatedEpisodes] = useState(null);
  const { episodes } = useContext(PagesContext);

  // Set related episodes
  // When there are episodes to filter
  useEffect(() => {
    if (episodes) {
      const relatedPodcasts = episodes.filter(page => {
        return page.meta.type === "podcasts.Episode" && page.id !== currentId;
      });

      // Rudementary shuffle so the same two aren't always shown
      const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

      setRelatedEpisodes(shuffleArray(relatedPodcasts).slice(0, 2));
    }
  }, [currentId, episodes]);

  return (
    <StyledRelated>
      <StyledRelatedInner>
        <h2>Also in this show</h2>
        <CardGrid>
          {relatedEpisodes &&
            relatedEpisodes.map(podcast => (
              <EpisodeCard
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
              </EpisodeCard>
            ))}
        </CardGrid>
      </StyledRelatedInner>
    </StyledRelated>
  );
};

export default RelatedEpisdoes;
