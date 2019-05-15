import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0.2; }
`

const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 2;
  display: flex;
`;

const StyledLoaderInner = styled.div`
  position: absolute;
  top: 50vh;
  left: 50vw;
  width: 80px;
  height: 80px;
  opacity: 0.4;
  transform: translate(-40px, -40px);
  animation: ${fadeIn} 0.7s infinite alternate;
  opacity: 0.7;

  svg {
    width: 80px;
    height: 80px;
  }
`;

export {
  StyledLoader,
  StyledLoaderInner,
}
