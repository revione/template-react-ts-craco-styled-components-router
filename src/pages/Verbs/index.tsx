import React from "react"
import { useForm } from "react-hook-form"
import { copy } from "@utils"

const makeArray = (text: string) => {
  return text.replace(/(\r\n|\n|\r)/gm, "").split(".")
}

const TextArea = React.memo(({ name, register }: any) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <label htmlFor={name}>{name}</label>
      <div>
        <textarea
          {...{
            ...register(name),
            cols: 30,
            rows: 10,
          }}
        />
      </div>
    </div>
  )
})

export const Verbs = () => {
  const {
    register,
    getValues,
    // handleSubmit,
    // watch,
    // formState: { errors, isValid },
  } = useForm()

  // const onSubmit = (data: any) => console.log(data)

  //   console.log("example", watch("example")) // watch input value by passing the name of it
  //   console.log("infinitiv", watch("infinitiv")) // watch input value by passing the name of it

  const makeText = () => {
    const { infinitive, perfect, present, preterite } = getValues()

    const newValues = {
      infinitive: makeArray(infinitive),
      present: makeArray(present),
      preterite: makeArray(preterite),
      perfect: makeArray(perfect),
    }

    // console.log("newValues : ", newValues)
    // console.log("newValues : ", Object.values(newValues))

    const makeOneText = ([arr1, arr2, arr3, arr4]: any) => {
      // console.log("data : ", [arr1, arr2, arr3, arr4])

      let draft = ""

      for (let i = 0; i < arr1.length - 1; i++) {
        draft +=
          arr1[i] +
          " • " +
          arr2[i] +
          " • " +
          arr3[i] +
          " • " +
          arr4[i] +
          ".\n\n"
      }

      return draft
    }

    const newText = makeOneText(Object.values(newValues))

    // console.log("newText : ", newText)

    copy(newText)

    return newText

    // isolate every text as required
  }

  //   console.log("errors", errors)
  //   console.log("isValid", isValid)

  const joinTraduction = (lenguage: "English" | "Spanish") => {
    const { [`traduction${lenguage}`]: traduction } = getValues()

    // console.log(`traduction${lenguage}`, traduction)

    if (traduction.length <= 0) return

    const texts = makeArray(makeText())
    const traductions = makeArray(traduction)

    const makeOneText = ([arr1, arr2]: any) => {
      // console.log("data : ", [arr1, arr2])
      let draft = ""

      for (let i = 0; i < arr1.length - 1; i++) {
        draft += arr1[i] + ".\n" + arr2[i] + ".\n\n"
      }

      return draft
    }

    const textTraduction = makeOneText([texts, traductions])

    copy(textTraduction)

    return textTraduction
  }

  const makeAllTheTexts = () => {
    const texts = makeText()
    const { infinitive, perfect, present, preterite } = getValues()
    const englishTraduction = joinTraduction("English")
    const spanishTraduction = joinTraduction("Spanish")

    const draft =
      "Verbs: \n\n" +
      texts +
      "\n\n" +
      "Verbs - isolated: \n\n" +
      infinitive +
      "\n\n" +
      present +
      "\n\n" +
      preterite +
      "\n\n" +
      perfect +
      "\n\n" +
      "English: \n\n" +
      englishTraduction +
      "\n\n" +
      "Spanish: \n\n" +
      spanishTraduction

    copy(draft)

    console.log(draft)
  }

  return (
    <div>
      <div>Make a text for verbs</div>

      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <TextArea {...{ name: "infinitive", register }} />
          <TextArea {...{ name: "present", register }} />
          <TextArea {...{ name: "preterite", register }} />
          <TextArea {...{ name: "perfect", register }} />
        </div>

        <div>
          <TextArea {...{ name: "traductionEnglish", register }} />
          <TextArea {...{ name: "traductionSpanish", register }} />
        </div>

        <div>
          <TextArea {...{ name: "reader", register }} />
        </div>
      </div>

      <div>
        <button {...{ type: "button", onClick: makeText }}>
          Make the text
        </button>

        <button
          {...{
            type: "button",
            onClick: () => {
              joinTraduction("English")
            },
          }}
        >
          Copy traduction Englisch
        </button>

        <button
          {...{
            type: "button",
            onClick: () => {
              joinTraduction("Spanish")
            },
          }}
        >
          Copy traduction Spanich
        </button>

        <button {...{ type: "button", onClick: makeAllTheTexts }}>
          Copy for document
        </button>
      </div>
    </div>
  )
}
