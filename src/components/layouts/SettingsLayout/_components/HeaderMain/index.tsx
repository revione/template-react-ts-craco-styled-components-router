//components
import { Text } from "@components"
//styles
import { Line } from "@components/common/styled"
import { Container } from "./styled"

interface Props {
  title: string
}

export const HeaderMain = ({ title }: Props) => {
  return (
    <Container>
      <Container
        display="flex"
        justify="space-between"
        align="center"
        padding="20px 39px 20px 32px"
      >
        <Text font="Lato" size={24} weight={700} height={29}>
          {title}
        </Text>
      </Container>
      <Line color="#EDEDED" />
    </Container>
  )
}
