import styled from "styled-components"

export const Flex = styled.div<{
  direction?: "row" | "column" | "row-reverse" | "column-reverse"
  wrap?: "nowrap" | "wrap" | "wrap-reverse"
  align?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline"
  maxWidth?: number
  width?: number
  background?: string
  radius?: number
  gap?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
  cursor?: "pointer" | "default"
}>`
  display: flex;

  padding-top: ${({ top }) => top && `${top}px`};
  padding-right: ${({ right }) => right && `${right}px`};
  padding-bottom: ${({ bottom }) => bottom && `${bottom}px`};
  padding-left: ${({ left }) => left && `${left}px`};

  flex-direction: ${({ direction = "row" }) => direction};

  flex-wrap: ${({ wrap }) => wrap};

  align-content: ${({ align }) => align};

  justify-content: ${({ justify }) => justify};

  align-items: ${({ alignItems }) => alignItems};

  max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};

  width: ${({ width }) => width && `${width}px`};

  background: ${({ background }) => background};

  border-radius: ${({ radius }) => radius && `${radius}px`};

  gap: ${({ gap }) => `${gap}px`};

  cursor: ${({ cursor }) => cursor};
`
