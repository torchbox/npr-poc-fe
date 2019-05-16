import React, { useState, useEffect } from "react";
import moment from "moment";

import { fetchEpisodesByParentId } from "../../services";

import { StyledRelated, StyledRelatedInner } from "./styled";

import CardGrid from "../../components/card-grid";
import EpisodeCard from "../../components/episode-card";
import PlayCtaButton from "../../components/play-cta-button";

export const RelatedEpisdoes = ({ page }) => {

  const episodeId = page.id;

  const parentShowId = page.meta.parent.id;

  const [relatedEpisodes, setRelatedEpisodes] = useState(null);

  // Rudementary shuffle so the same two aren't always shown
  const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      if (!ignore) {
        const episodes = await fetchEpisodesByParentId(parentShowId, true);

        const related = episodes.filter(page => {
          return page.id !== episodeId;
        });

        const shuffledRelated = shuffleArray(related).slice(0, 2);

        setRelatedEpisodes(shuffledRelated);
      }
    }

    fetchData();


    return () => {
      ignore = true;
    };
  }, [parentShowId, episodeId]);

  return (
    <StyledRelated>
      {relatedEpisodes && (
        <StyledRelatedInner>
          <h2>Also in this show</h2>
          <CardGrid>
            {relatedEpisodes.map(podcast => (
              <EpisodeCard
                key={podcast.id}
                imageSrc={podcast.images[0].image_thumbnail.url}
                title={podcast.title}
                date={moment(podcast.date_created).format("LL")}
                excerpt={podcast.subtitle}
                url={`/shows/${page.meta.parent.meta.slug}/${podcast.meta.slug}`}
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
      )}
    </StyledRelated>
  );
};

export default RelatedEpisdoes;
