import styled from "styled-components";

const StyledPlayButton = styled.button`
  position: relative;
  width: 14px;
  height: 14px;
  border: none;
  border-radius: 5px;
  background: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0px;
    width: 24px;
    height: 24px;
    transform: translate(-50%, -50%);
  }
`;

export { StyledPlayButton };
