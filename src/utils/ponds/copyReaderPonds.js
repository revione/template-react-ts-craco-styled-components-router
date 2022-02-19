const getReaderTexts = () => {
  const translationsNodeList = document.querySelectorAll(".translations")
  const examplesNodeList = document.querySelectorAll(".results-dict-examples")

  const translations = Array.from(translationsNodeList.values())
  const examples = Array.from(examplesNodeList.values())

  const zusamen = [...translations, ...examples]

  let texts = []

  // recorrer dls
  const forEachDl = (dl) => {
    // console.log("dl : ", dl)

    // get dls
    const as = Array.from(dl.querySelector("dt").querySelectorAll("a").values())

    texts.push(getText(as))

    //
  }

  // navigation Function

  const navigationFunction = (translationUsedInFor) => {
    // console.log("translationUsedInFor : ", translationUsedInFor)

    // get dls
    const dls = Array.from(translationUsedInFor.querySelectorAll("dl").values())

    // recorrer los dls
    dls.forEach(forEachDl)

    //
  }

  zusamen.forEach(navigationFunction)

  // const unique_array = [...new Set(texts)]
  // const textUnique = unique_array.join("\n\n")

  return texts.join("\n\n")
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

const newWord = (word) => {
  let internalWord = word
  if (internalWord === "etw") internalWord = "etwas"
  return internalWord
}

// recorrer los a elements
const getText = (as) => {
  let textDl = ""

  as.forEach((a, index, array) => {
    const word = newWord(a.text)
    if (index === 0 && array.length === 1) textDl += `${capitalize(word)}.`
    else if (index === 0) textDl += `${capitalize(word)} `
    else if (index + 1 === array.length) textDl += `${word}.`
    else textDl += `${word} `
  })

  return textDl
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
  const textsInternal = getReaderTexts()

  copyToClipboard(textsInternal)

  console.clear()
  console.log(" copied !")
}

copy()
