import React from "react";

import TorchboxLogo from "./torchbox-logo";
import WbgoLogo from "./wbgo-logo";

export default () => {
  if (process.env.REACT_APP_SITE_SLUG === 'torchbox-radio') {
    return (<TorchboxLogo />)
  } else {
    return (<WbgoLogo />)
  }
};
