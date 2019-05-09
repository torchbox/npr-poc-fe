import React from "react";

import { StyledFilterButton } from "./styled";

const FilterButton = ({ label, isActive = false }) => (
  <StyledFilterButton isActive={isActive}>{label}</StyledFilterButton>
);

export default FilterButton;
