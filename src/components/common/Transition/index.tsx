import styled from "styled-components"
import { useState, useEffect } from "react"

const TransitionStyle = styled.div<{ timeout: number }>`
  display: flex;
  opacity: 0;
  z-index: 4;

  &.active {
    opacity: 1;
    transition: all ${({ timeout }) => timeout}ms linear;
  }

  transition: all ${({ timeout }) => timeout}ms;
`

interface ITransition {
  trigger: boolean
  timeout?: number
  children: React.ReactNode
}

export const Transition = ({
  trigger,
  timeout = 300,
  children,
}: ITransition) => {
  const [active, setActive] = useState(false)
  const [init, setInit] = useState(false)

  useEffect(() => {
    let timerIn = 0 as any
    let timerOut = 0 as any
    if (trigger) {
      clearTimeout(timerOut)
      timerOut = 0
      setActive(true)
      timerIn = setTimeout(() => {
        setInit(true)
      }, 1)
    } else {
      clearTimeout(timerIn)
      timerIn = 0
      setInit(false)
      timerOut = setTimeout(() => {
        setActive(false)
      }, timeout)
    }
    return () => {
      clearTimeout(timerIn)
      clearTimeout(timerOut)
      timerIn = 0
      timerOut = 0
    }
  }, [trigger, timeout])

  return active ? (
    <TransitionStyle className={init ? "active" : ""} timeout={timeout}>
      {children}
    </TransitionStyle>
  ) : null
}
