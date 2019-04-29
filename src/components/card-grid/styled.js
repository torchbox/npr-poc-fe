import styled from "styled-components";

const StyledCardGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -27px -27px 0 -27px;

  & > div {
    width: calc(50% - 54px);
    margin: 27px;
  }
`

export { StyledCardGrid }
