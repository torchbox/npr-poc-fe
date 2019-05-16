import React, { useContext } from "react";

import { LoaderContext } from "../../context/loader";

import IconLoading from "../../svg/icon-loading";

import { StyledLoader, StyledLoaderInner } from "./styled";

const Loader = () => {
  const { pageLoading } = useContext(LoaderContext);

  if (pageLoading) {
    return (
      <StyledLoader>
        <StyledLoaderInner>
          <IconLoading />
        </StyledLoaderInner>
      </StyledLoader>
    );
  } else {
    return null;
  }
};

export default Loader;
