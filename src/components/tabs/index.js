import React from "react";

import { StyledTabs, StyledTabsInner } from "./styled";

const Tabs = ({ children }) => (
  <StyledTabs>
    <StyledTabsInner>{children}</StyledTabsInner>
  </StyledTabs>
);

export default Tabs;
