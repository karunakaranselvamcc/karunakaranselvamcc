import styled from "styled-components";

import { color, font, mixin, zIndexValues } from "./Color";

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 30px;
  top: 100px;
`;

export const StyledToast = styled.div`
  position: relative;
  margin-bottom: 5px;
  width: 300px;
  padding: 15px 20px;
  border-radius: 3px;
  color: #fff;
  background: ${(props) => color[props.type]};
  cursor: pointer;
  transition: all 0.15s;
  ${mixin.clearfix}
  ${mixin.hardwareAccelerate}

  &.embassy-toast-enter,
  &.embassy-toast-exit.embassy-toast-exit-active {
    opacity: 0;
    right: -10px;
  }

  &.embassy-toast-exit,
  &.embassy-toast-enter.embassy-toast-enter-active {
    opacity: 1;
    right: 0;
  }
`;

export const Title = styled.div`
  padding-right: 22px;
  ${font.size(15)}
  ${font.medium}
`;

export const Message = styled.div`
  padding: 8px 10px 0 0;
  white-space: pre-wrap;
  ${font.size(18)}
  ${font.medium}
`;
