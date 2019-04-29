import styled from "styled-components";

const StyledStream = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    margin: 0 10px 0 0;
  }

  span {
    display: block;
    margin-bottom: 2px;
  }
`;

const StyledStreamText = styled.div`
  display: flex;
  align-items: center;
`;

export { StyledStream, StyledStreamText };
