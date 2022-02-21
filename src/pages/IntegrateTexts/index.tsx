import React from "react"
import { useForm } from "react-hook-form"
import { copy } from "@utils"

const makeArray = (text: string) => {
  return text.replace(/(\r\n|\n|\r)/gm, "").split(/[.?!]+/)
}

const splitNewLine = (text: string) => {
  return text.replace(/(\f)/gm, "").split(/[\r\n]+/)
}

const makeOneText = ([arr1, arr2]: any) => {
  let draft = ""

  for (let i = 0; i < arr1.length - 1; i++) {
    draft += arr1[i] + ".\n" + arr2[i] + ".\n\n"
  }

  return draft
}

const TextArea = React.memo(({ name, register, cols = 50, rows = 10 }: any) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <label
        style={{
          width: "100px",
        }}
        htmlFor={name}
      >
        {name}
      </label>
      <div>
        <textarea
          style={{
            padding: 8,
          }}
          {...{
            ...register(name),
            cols,
            rows,
          }}
        />
      </div>
    </div>
  )
})

export const IntegrateTexts = () => {
  const { register, getValues, setValue } = useForm()

  const copyTextFiltered = () => {
    const { original } = getValues()

    const draft = splitNewLine(original).join("\n\n")

    setValue("text", draft)

    copy(draft)
  }

  const makeText = () => {
    const { original, traduction } = getValues()

    const newValues = {
      original: splitNewLine(original),
      traduction: splitNewLine(traduction),
    }

    const newText = makeOneText(Object.values(newValues))

    copy(newText)

    setValue("text", newText)

    return newText
  }

  return (
    <div>
      <div>Make a text for verbs</div>

      <div
        style={{
          display: "flex",
          gap: 15,
        }}
      >
        <div>
          <TextArea {...{ name: "original", register, rows: 20 }} />
          <TextArea {...{ name: "traduction", register, rows: 20 }} />
        </div>
        <div>
          <TextArea {...{ name: "text", register, rows: 41 }} />
        </div>
      </div>

      <div>
        <button {...{ type: "button", onClick: copyTextFiltered }}>
          Copy text filtered
        </button>
        <button {...{ type: "button", onClick: makeText }}>Make text</button>
      </div>
    </div>
  )
}
