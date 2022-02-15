import { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { Transition } from ".."

export const CreatePortal = ({ children, isLoaded }: any) => {
  // create the element for the modal state
  const container = useMemo(() => {
    const div = document.createElement("div") as HTMLDivElement
    return div
  }, [])

  // when clean the component
  useEffect(() => {
    const body = document.querySelector("body")
    if (body) body.style.overflow = "hidden"

    return () => {
      container && container.remove()
      if (body) body.style.overflow = ""
    }
  }, [container])

  return createPortal(
    <Transition trigger={isLoaded}>{children}</Transition>,
    document.body.appendChild(container)
  )
}

// Check if the Modal could be open, because require the existing body
export const Modal = (props: any) => {
  const [isLoaded, loaded] = useState(false)

  useEffect(() => {
    loaded(true)

    // remove and unload the component
    return () => {
      loaded(false)
    }
  }, [])

  return isLoaded ? <CreatePortal {...{ ...props, isLoaded }} /> : null
}
