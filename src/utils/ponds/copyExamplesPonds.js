// translation Function
const getExamples = () => {
  const otherResultsNodeList = document.querySelectorAll(
    ".results-monolingual-examples"
  )
  const otherResults = Array.from(otherResultsNodeList.values())

  let textsExamples = ""

  const forEachExamples = (translationUsedInFor) => {
    // console.log("translationUsedInFor : ", translationUsedInFor)

    // get examples
    const examples = Array.from(
      translationUsedInFor.querySelectorAll(".example").values()
    )

    let examplesTexts = ""

    examples.forEach((elem, index, array) => {
      examplesTexts += `${elem.textContent} \n\n`
    })

    textsExamples = examplesTexts
  }

  otherResults.forEach(forEachExamples)

  return textsExamples
}

function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
    return window.clipboardData.setData("Text", text)
  } else if (
    document.queryCommandSupported &&
    document.queryCommandSupported("copy")
  ) {
    var textarea = document.createElement("textarea")
    textarea.textContent = text
    textarea.style.position = "fixed" // Prevent scrolling to bottom of page in Microsoft Edge.
    document.body.appendChild(textarea)
    textarea.select()
    try {
      return document.execCommand("copy") // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex)
      return prompt("Copy to clipboard: Ctrl+C, Enter", text)
    } finally {
      document.body.removeChild(textarea)
    }
  }
}

const copy = () => {
  const exampleTexts = getExamples()

  copyToClipboard(exampleTexts)

  console.clear()
  console.log(" copied !")
}

copy()
