import styled, { css } from "styled-components";

const StyledEpisodeCard = styled.div`
  display: flex;
  background: ${props => props.theme.colors.white};
`;

const StyledEpisodeCardInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 38px;
`;

const StyledEpisodeCardImage = styled.div`
  width: 55%;

  ${props =>
    props.bgImage &&
    css`
      background: url(${props => props.bgImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    `}
`;

const StyledEpisodeCardText = styled.div`
  width: 45%;
  padding: 12px 30px;

  & > span {
    display: block;
    margin: 0 0 15px 0;
    color: ${props => props.theme.colors.grey};
    font-size: 16px;
    font-weight: ${props => props.theme.fonts.light};
  }

  p {
    margin: 0;
    color: ${props => props.theme.colors.grey};
    font-size: 16px;
    line-height: 1.4;
  }

  & > button {
    margin-top: 15px;
  }
`;

const StyledEpisodeCardHeader = styled.h3`
  margin: 0 0 15px 0;
  font-size: 21px;
  line-height: 1.4;
  text-transform: none;
  color: ${props => props.theme.colors.blue};
`;

export {
  StyledEpisodeCard,
  StyledEpisodeCardImage,
  StyledEpisodeCardText,
  StyledEpisodeCardHeader,
  StyledEpisodeCardInner
};
