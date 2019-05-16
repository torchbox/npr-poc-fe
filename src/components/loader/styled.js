import styled, { keyframes } from "styled-components";

const StyledLoader = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 2;
`;

const StyledLoaderInner = styled.div`
  position: absolute;
  top: 50vh;
  left: 50vw;
  width: 80px;
  height: 80px;
  opacity: 0.4;
  transform: translate(-40px, -40px);
  opacity: 1;

  svg {
    width: 80px;
    height: 80px;
  }
`;

export { StyledLoader, StyledLoaderInner };
