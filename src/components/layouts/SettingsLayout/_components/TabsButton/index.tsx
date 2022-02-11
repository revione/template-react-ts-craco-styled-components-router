import { useState } from "react"
// components
import { Margin, Text } from "@components"

// styled
import { ColumnDivider, RowDivider } from "@components"
import { TabButton, Hr } from "./styled"

export interface Tabs {
  tabs: Tab[]
  activeTabIndex?: number
}
export interface Tab {
  text: string
  clickEvent: () => void
  desactivated?: boolean
}

export const TabsButton = ({ tabs, activeTabIndex }: Tabs) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex)
  const lauchEvent = (index: number) => {
    setActiveTab(index)
    tabs[index].clickEvent()
  }

  return (
    <Margin top={12}>
      <RowDivider style={{ padding: "0 30px", marginBottom: 12 }}>
        <ColumnDivider>
          {tabs.map((tab, index) => (
            <TabButton
              onClick={() => !tab.desactivated && lauchEvent(index)}
              className={activeTab === index ? "active" : ""}
              key={Math.random().toString(32).slice(2)}
            >
              <Text
                size={16}
                weight={activeTab === index ? 700 : 500}
                align={"center"}
                style={{ width: 111 }}
              >
                {tab.text}
              </Text>
            </TabButton>
          ))}
        </ColumnDivider>
      </RowDivider>
      <Hr />
    </Margin>
  )
}

export default TabsButton
