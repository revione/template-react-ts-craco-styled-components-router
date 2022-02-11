// libraries
import { ReactElement, useEffect, useState } from "react"
import { useRouter } from "next/router"
// components
import { Layout } from "@pages/portal/merchant/_components"
import { TabsButton, HeaderMain } from "./_components"

interface SettingsProps {
  index: number
  children: ReactElement
}

export const SettingsLayout = ({ index, children }: SettingsProps) => {
  const router = useRouter()

  const [tabs] = useState([
    {
      text: "General",
      clickEvent: () => router.push("/portal/merchant/settings/general"),
    },
    {
      text: "Install",
      clickEvent: () => router.push("/portal/merchant/settings/install"),
    },
  ])

  useEffect(() => {
    !index && tabs[0].clickEvent()
  }, [index])

  return (
    <Layout>
      <HeaderMain title="Settings" />

      <TabsButton tabs={tabs} activeTabIndex={index} />

      {children}
    </Layout>
  )
}
