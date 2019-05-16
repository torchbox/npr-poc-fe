import React from "react";

import { StyledTabLink, StyledTab } from "./styled";

const Tab = ({ label, count, to, ...rest }) => {
  if (to) {
    return (
      <StyledTabLink {...rest}>
        {label}
        {count && <span>({count})</span>}
      </StyledTabLink>
    );
  } else {
    return (
      <StyledTab {...rest}>
        {label}
        {count && <span>({count})</span>}
      </StyledTab>
    );
  }
};

export default Tab;
