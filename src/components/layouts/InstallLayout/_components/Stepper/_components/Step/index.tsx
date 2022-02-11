//libraries
import { useRouter } from "next/router"
// components
import { Margin, Text, Flex } from "@components"
// styles
import { Circle } from "./styled"

interface Props {
  id: string
  text: string
  url: string
  isReady: boolean
  isLastOne: boolean
}

export const Step = ({ id, text, url, isReady, isLastOne = false }: Props) => {
  const router = useRouter()
  const isActualStep = !router.asPath.search(url)

  return (
    <>
      <Flex alignItems="center" cursor="default">
        <Circle {...{ isReady, isActualStep }}>
          {isReady ? <img src="/icons/check.svg" alt="Check" /> : id}
        </Circle>

        <Margin left={10}>
          <Text
            size={16}
            weight={600}
            height={16}
            font="Lato"
            color="#163637"
            cursor="default"
          >
            {text}
          </Text>
        </Margin>
      </Flex>

      {!isLastOne &&
        (!isReady ? (
          <Flex alignItems="center">------</Flex>
        ) : (
          <Flex alignItems="baseline">______</Flex>
        ))}
    </>
  )
}
