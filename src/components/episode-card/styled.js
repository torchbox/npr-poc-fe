import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

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

const StyledEpisodeCardImage = styled(NavLink)`
  width: 55%;
  min-height: 220px;

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

const StyledEpisodeCardStudio = styled.span`
  display: block;
  margin: 0 0 15px 0;
  color: ${props => props.theme.colors.grey};
  font-size: 14px;
  font-weight: ${props => props.theme.fonts.light};
`;

const StyledEpisodeCardDate = styled.span`
  display: block;
  margin: 0 0 15px 0;
  color: ${props => props.theme.colors.grey};
  font-size: 16px;
  font-weight: ${props => props.theme.fonts.light};
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
  StyledEpisodeCardStudio,
  StyledEpisodeCardDate,
  StyledEpisodeCardHeader,
  StyledEpisodeCardInner
};
