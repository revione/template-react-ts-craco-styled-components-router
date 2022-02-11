import styled, { css, keyframes } from "styled-components"

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotateX(0deg);
  }

  to {
    transform: rotateX(360deg);
  }
`

export const StatusShow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(0 0 0 / 12%);
  z-index: 1;
  height: 100%;
`

const animationString = css`
  animation: ${rotate} 2s linear infinite;
`

export const ContentStatus = styled.div<{ isLoading: boolean }>`
  height: 50px;
  width: 50px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  ${({ isLoading }) => isLoading && animationString}

  img {
    width: 100%;
    height: 100%;
  }
`
