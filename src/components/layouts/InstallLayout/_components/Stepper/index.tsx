// libraries
import { useRouter } from "next/router"
// components
import { Step } from "./_components"
// styles
import { Stepper as StepperStyle } from "./styled"

const steps = [
  {
    id: "1",
    text: "Chose Style",
    url: "/portal/merchant/settings/install/choose",
  },
  {
    id: "2",
    text: "Configure SDK",
    url: "/portal/merchant/settings/install/configure",
  },
  {
    id: "3",
    text: "Download",
    url: "/portal/merchant/settings/install/download",
  },
]

export const Stepper = () => {
  const router = useRouter()

  const coincidence =
    steps.filter((step) => router.asPath.search(step.url) === 0) || steps[0]

  const checkReady = (id: string) => Number(id) < Number(coincidence?.[0]?.id)

  const checkLastOne = (id: string) => Number(id) === steps.length

  return (
    <StepperStyle>
      {steps.map((step) => (
        <Step
          key={step.id}
          {...step}
          isReady={checkReady(step.id)}
          isLastOne={checkLastOne(step.id)}
        />
      ))}
    </StepperStyle>
  )
}
