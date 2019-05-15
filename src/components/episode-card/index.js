import React from "react";

import {
  StyledEpisodeCard,
  StyledEpisodeCardImage,
  StyledEpisodeCardText,
  StyledEpisodeCardStudio,
  StyledEpisodeCardDate,
  StyledEpisodeCardHeader,
  StyledEpisodeCardInner
} from "./styled";

const EpisodeCard = ({ imageSrc, title, studio, date, excerpt, children, className, url, hidden }) => (
  <StyledEpisodeCard className={className} hidden={hidden}>
    <StyledEpisodeCardInner>
      <StyledEpisodeCardImage to={url} bgImage={imageSrc} />
      <StyledEpisodeCardText>
        {title && <StyledEpisodeCardHeader to={url}>{title}</StyledEpisodeCardHeader>}{" "}
        {studio && <StyledEpisodeCardStudio>{studio}</StyledEpisodeCardStudio>}{" "}
        {date && <StyledEpisodeCardDate>{date}</StyledEpisodeCardDate>}{" "}
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
