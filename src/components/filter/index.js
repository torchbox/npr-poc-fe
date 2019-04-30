import React from "react";

import { StyledFilter, StyledFilterInner, StyledFilterButtons, StyledFilterButton, StyledFilterTitle } from "./styled";

const Filter = () => (
  <StyledFilter>
    <StyledFilterInner>
      <StyledFilterButtons>
        <StyledFilterTitle>Order by:</StyledFilterTitle>
        <StyledFilterButton isActive>Most Recent</StyledFilterButton>
        <StyledFilterButton>Date Added</StyledFilterButton>
        <StyledFilterButton>Most Listens</StyledFilterButton>
      </StyledFilterButtons>
    </StyledFilterInner>
  </StyledFilter>
);

export default Filter;
