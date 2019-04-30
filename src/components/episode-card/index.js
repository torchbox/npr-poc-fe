import React from "react";

import {
  StyledEpisodeCard,
  StyledEpisodeCardImage,
  StyledEpisodeCardText,
  StyledEpisodeCardHeader,
  StyledEpisodeCardInner
} from "./styled";

const EpisodeCard = ({ imageSrc, title, date, excerpt, children, className }) => (
  <StyledEpisodeCard className={className}>
    <StyledEpisodeCardInner>
      <StyledEpisodeCardImage bgImage={imageSrc} />
      <StyledEpisodeCardText>
        {title && <StyledEpisodeCardHeader>{title}</StyledEpisodeCardHeader>}{" "}
        {date && <span>{date}</span>}{" "}
        {excerpt && excerpt.length > 100 ? (
          <p>{excerpt.substring(0, 100)}…</p>
        ) : (
          <p>{excerpt}</p>
        )}
        {children}
      </StyledEpisodeCardText>
    </StyledEpisodeCardInner>
  </StyledEpisodeCard>
);

export default EpisodeCard;
