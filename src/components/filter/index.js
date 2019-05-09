import React from "react";

import {
  StyledFilter,
  StyledFilterInner,
  StyledFilterButtons,
  StyledFilterTitle
} from "./styled";

const Filter = ({ children }) => (
  <StyledFilter>
    <StyledFilterInner>
      <StyledFilterButtons>
        <StyledFilterTitle>Order by:</StyledFilterTitle>
        {children}
      </StyledFilterButtons>
    </StyledFilterInner>
  </StyledFilter>
);

export default Filter;
