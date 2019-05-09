import React from "react";

import { StyledFilterButton } from "./styled";

const FilterButton = ({ label, isActive }) => (
  <StyledFilterButton isActive>{label}</StyledFilterButton>
);

export default FilterButton;
