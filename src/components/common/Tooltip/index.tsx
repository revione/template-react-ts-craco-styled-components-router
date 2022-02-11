import { useState } from "react"

import { Text } from "@components"
//styles
import { Container, TooltipBox } from "./styled"

export const Tooltip = ({
  children,
  text,
  delay,
  bottom,
  right,
  left,
  top,
}: any) => {
  let timeout: any
  const [show, setShow] = useState(false)
  const [animation, setAnimation] = useState(false)

  const showTip = () => {
    setShow(true)
    timeout = setTimeout(() => {
      setAnimation(true)
    }, delay || 150)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setAnimation(false)

    timeout = setTimeout(() => {
      setShow(false)
    }, delay || 150)
  }

  return (
    <Container onMouseEnter={showTip} onMouseLeave={hideTip}>
      <div>{children}</div>

      {show && (
        <TooltipBox
          animation={animation}
          bottom={bottom}
          right={right}
          left={left}
          top={top}
        >
          <Text font="Epilogue" size={10} weight={500} height={16}>
            {text}
          </Text>
        </TooltipBox>
      )}
    </Container>
  )
}
