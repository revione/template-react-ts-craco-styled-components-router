import { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
// components
import { StatusShow as StatusShowStyle, ContentStatus } from "./styled"
import { Transition } from "@components"

interface IShowState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}

export const StatusShowRendered = ({
  isLoading,
  isSuccess,
  isError,
}: IShowState) => {
  const [active, setActive] = useState(false)
  // create the element for the modal state
  const container = useMemo(() => {
    const div = document.createElement("div") as HTMLDivElement
    div.setAttribute("id", "StatusShow")
    return div
  }, [])

  // check for loading
  useEffect(() => {
    return () => {
      container && container.remove()
    }
  }, [container])

  // disable body scroll
  useEffect(() => {
    const body = document.querySelector("body")
    if (isLoading) {
      if (body) body.style.overflow = "hidden"
    } else {
      if (body) body.style.overflow = ""
    }
  }, [isLoading])

  useEffect(() => {
    if (isLoading) setActive(true)
  }, [isLoading])

  useEffect(() => {
    if (isSuccess || isError) {
      setTimeout(() => {
        setActive(false)
      }, 3000)
    }
  }, [isSuccess, isError])

  const component = (
    <Transition trigger={active}>
      <StatusShowStyle>
        <ContentStatus {...{ isLoading }}>
          {isSuccess && <img src="/icons/success.svg" alt="success" />}
          {isError && <img src="/icons/error.svg" alt="error" />}
        </ContentStatus>
      </StatusShowStyle>
    </Transition>
  )

  return createPortal(component, document.body.appendChild(container))
}

// just render the componente when document is seted want
export const StatusShow = (props: any) => {
  const [isLoaded, loaded] = useState(false)

  useEffect(() => {
    loaded(true)

    // remove and unload the component
    return () => {
      loaded(false)
    }
  }, [])

  return isLoaded ? <StatusShowRendered {...props} /> : null
}
