/** @format */

import { styled } from "styled-components";
import { ReactComponent as CloseIcon } from "../../images/close.svg";

export const StyledModalSection = styled.section`
  position: relative;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  width: 540px;
  min-height: 752px;
  @media screen and (max-width: 560px) {
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 16px;
  top: 16px;
`;
