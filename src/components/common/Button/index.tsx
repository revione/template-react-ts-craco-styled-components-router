import React from "react"

import { Button as StyleButton } from "./styled"

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button" | "reset"
  text?: boolean
  height?: number
  width?: number
  font?: string
  background?: string
}

export const Button = ({ type = "button", ...rest }: IButton) => (
  <StyleButton type={type} {...rest} />
)

export { StyleButton }
