import mount from "@test/mount"
import { Provider } from "@definitions/styled-components"

import { Button } from "./index"

describe("Button component testing with enzyme", () => {
  it("renders without crashing", () => {
    const component = mount(
      <Provider>
        <Button onClick={() => undefined} />
      </Provider>
    )

    expect(component).toBeTruthy()
  })

  it("button is clickable", () => {
    const mockFn = jest.fn()
    const btn = mount(
      <Provider>
        <Button onClick={mockFn} />
      </Provider>
    )

    btn.simulate("click")

    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
