import styled from "styled-components"

export const Margin = styled.div<{
  all?: number
  top?: number
  bottom?: number
  left?: number
  right?: number
}>`
  /* margin: ${({ all }) => `${all}px`}; */
  margin: ${({ all, top = 0, right = 0, bottom = 0, left = 0 }) =>
    all ? `${all}px` : `${top}px ${right}px ${bottom}px ${left}px`};
`
