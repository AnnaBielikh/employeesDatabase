import React from "react";
import PropTypes from "prop-types";

import {
  StyledPopupWrapper,
  StyledPopupTitle,
  StyledPopupBody,
} from "./index.style";

const Popup = (props) => {
  const { title, children } = props;

  return (
    <StyledPopupWrapper>
      <StyledPopupTitle>{title}</StyledPopupTitle>
      <StyledPopupBody>{children}</StyledPopupBody>
    </StyledPopupWrapper>
  );
};

Popup.propTypes = {
  title: PropTypes.string,
};

export { Popup };
