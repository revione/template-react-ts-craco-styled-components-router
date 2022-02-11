import styled, { css } from "styled-components"
import { IButton } from "."

export const Text = css`
  background-color: transparent;
  border: none;
  color: #818181;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  &:hover {
    transform: scale(1.05);

    &:disabled {
      transform: scale(1);
      background-color: transparent;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

export const Normal = css<IButton>`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ background = "#163637" }) => background};
  border-radius: 4px;
  border: none;

  height: ${({ height = 52 }) => `${height}px`};
  width: ${({ width }) => (width ? width + "px" : "100%")};

  font-family: ${({ font }) => (font ? font : "Lato")};
  font-weight: 700;
  font-size: "14px";
  line-height: "22px";

  &:hover {
    background-color: black;

    &:disabled {
      background-color: ${({ background = "#163637" }) => background};
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

export const Button = styled.button<{ text?: boolean }>`
  cursor: pointer;
  transition: all 0.25s linear;

  ${({ text }) => {
    // check wich type of button render
    if (text) return Text
    return Normal
  }}
`
