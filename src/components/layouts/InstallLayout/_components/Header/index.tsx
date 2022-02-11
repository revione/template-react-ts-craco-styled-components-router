// libraries
import { useRouter } from "next/router"
// components
import { Text, Button } from "@components"
// styles
import { BackContainer, Header as HeaderStyle } from "./styled"

export const Header = () => {
  const router = useRouter()

  return (
    <HeaderStyle>
      <BackContainer>
        <Button text onClick={() => router.back()}>
          <img src="/icons/arrow-left.svg" alt="" />

          <Text size={14} weight={600} color="#163637" cursor="pointer">
            back
          </Text>
        </Button>
      </BackContainer>

      <Text size={16} weight={600} color="#121212">
        Install Tandym on your website
      </Text>
    </HeaderStyle>
  )
}
