import styled, { css } from "styled-components";

const StyledPlayer = styled.div`
  position: absolute;
  bottom: 0;
  width: 600px;
  padding: 20px;
  background: #2f138d;
  color: #ffffff;
  opacity: 0;
  transform: translateX(-100%);

  ${props =>
    (props.isPlaying || props.hasTrack) &&
    css`
      opacity: 1;
      transform: translateX(0);
      transition: all 0.5s;
    `}
`;

export default StyledPlayer;
