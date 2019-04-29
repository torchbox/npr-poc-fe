import styled from "styled-components";

import Stream from '../stream';

const StyledTrending = styled.div`
  padding: 35px;
  width: 480px;
  max-width: 480px;
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.midGrey};

  h2 {
    margin: 0 0 50px 0;
    font-size: 16px;
    line-height: 1;
    text-transform: uppercase;
  }
`;

const StyledTrendingStream = styled(Stream)`
  margin: 0 0 14px 0;
`

export { StyledTrending, StyledTrendingStream };
