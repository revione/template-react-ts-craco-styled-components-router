// libraries
import { ReactNode } from "react"
// components
import { Flex } from "@components"
import { Header, Stepper } from "./_components"
import { ChildrenContent } from "./styled"

interface InstallProps {
  children: ReactNode
}

export const InstallLayout = ({ children }: InstallProps) => {
  return (
    <Flex direction="column">
      {/*  */}
      <Header />

      <Stepper />
      {/*  */}
      <ChildrenContent>
        {/*  */}
        {children}
        {/*  */}
      </ChildrenContent>
      {/*  */}
    </Flex>
  )
}
