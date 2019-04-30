import styled from "styled-components";

const StyledTabs = styled.div`
  width: 100%;
`;

const StyledTabsInner = styled.div`
  display: flex;
  margin: 0 auto -32px;
  padding: 0 ${props => props.theme.grid.outerGutter};
  max-width: ${props => props.theme.grid.maxWidth};
  transform: translateY(-32px);
`;

export { StyledTabs, StyledTabsInner };
