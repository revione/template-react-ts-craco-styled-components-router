import styled, { css } from "styled-components"

// const TooltipMargin = 30
const TooltipArrowSize = 6

export const Container = styled.div`
  position: relative;
`

export const BottomRight = css`
  top: calc(100% + 3px);
  left: 100%;
  transform: translateX(-100%) translateY(0);

  &:before {
    bottom: 100%;
    right: 2%;

    border-bottom-color: #e5e5e5;
  }

  &:after {
    right: 0;
    border-width: 6px;
    bottom: 100%;
  }
`

export const TooltipBox = styled.div<{
  animation?: boolean
  top?: boolean
  bottom?: boolean
  left?: boolean
  right?: boolean
}>`
  position: absolute;

  z-index: 100;
  border-radius: 1px;

  padding: 8px;

  color: #121212;

  background: #ffffff;

  font-size: 14px;

  white-space: break-spaces;

  width: 200px;

  box-shadow: 1px 1px 3px #cdcdcd;

  opacity: 0;

  transition: all 0.25s linear;

  ${({ animation }) =>
    animation &&
    `
    opacity: 1;
  `}

  /* CSS border triangles */
  &:before {
    content: " ";
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    border-width: ${TooltipArrowSize}px;
    margin-left: calc(${TooltipArrowSize}px * -1);
  }

  &:after {
    content: " ";
    position: absolute;
    height: calc(${TooltipArrowSize}px * 2);
    width: 100%;
    background: transparent;
  }

  ${({ bottom, right }) => bottom && right && BottomRight}
`
