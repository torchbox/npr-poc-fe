import React from "react";

import {
  StyledStoryCard,
  StyledStoryCardImage,
  StyledStoryCardText,
  StyledStoryCardHeader,
  StyledStoryCardLink
} from "./styled";

const StoryCard = ({ imageSrc, title, category, excerpt }) => (
  <StyledStoryCard>
    <StyledStoryCardLink to="/">
      <StyledStoryCardImage bgImage={imageSrc}>
      </StyledStoryCardImage>
      <StyledStoryCardText>
        {title && < StyledStoryCardHeader>{title}</ StyledStoryCardHeader>} {category && <span>{category}</span>}{" "}
        {excerpt && excerpt.length > 100 ? (
          <p>{excerpt.substring(0, 100)}…</p>
        ) : (
          <p>{excerpt}</p>
        )}
      </StyledStoryCardText>
    </StyledStoryCardLink>
  </StyledStoryCard>
);

export default StoryCard;
