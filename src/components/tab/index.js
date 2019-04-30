import React from "react";

import { StyledTab } from "./styled";

const Tab = ({ label, count, ...rest }) => (
  <StyledTab {...rest}>
    {label}
    {count && <span>({count})</span>}
  </StyledTab>
);

export default Tab;
