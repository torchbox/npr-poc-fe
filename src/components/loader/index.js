import React, { useContext } from "react";

import { LoaderContext } from "../../context/loader";

import IconMusic from "../../svg/icon-music";

import { StyledLoader, StyledLoaderInner } from "./styled";

const Loader = () => {
  const { pageLoading } = useContext(LoaderContext);

  if (pageLoading) {
    return (
      <StyledLoader>
        <StyledLoaderInner>
          <IconMusic />
        </StyledLoaderInner>
      </StyledLoader>
    );
  } else {
    return null;
  }
};

export default Loader;
