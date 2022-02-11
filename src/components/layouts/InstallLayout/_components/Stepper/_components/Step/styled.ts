import styled from "styled-components"

export const Circle = styled.div<{ isReady: boolean; isActualStep: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font: 16px "Lato";
  padding-bottom: 3px;

  background: ${({ isActualStep }) => (isActualStep ? "#163637" : "white")};
  border: 1px solid
    ${({ isActualStep, isReady }) =>
      !isActualStep && isReady ? "#163637" : "transparent"};
  color: ${({ isActualStep }) => (isActualStep ? "white" : "#163637")};

  cursor: default;
`
