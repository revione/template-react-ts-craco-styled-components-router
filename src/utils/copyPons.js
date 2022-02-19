const translationsNodeList = document.querySelectorAll(".translations")
const examplesNodeList = document.querySelectorAll(".results-dict-examples")

const translations = Array.from(translationsNodeList.values())
const examples = Array.from(examplesNodeList.values())
// eslint-disable-next-line no-unused-vars
const translation = translations.slice(0, 1)[0]

const zusamen = [...translations, ...examples]

let texts = []

// recorrer los a elements
const getText = (as) => {
  let textDl = ""

  as.forEach((a, index, array) => {
    if (index === 0 && array.length === 1) textDl += `${a.text}.`
    else if (index === 0) textDl += `${a.text} `
    else if (index + 1 === array.length) textDl += `${a.text}.`
    else textDl += `${a.text} `
  })

  return textDl
}

// recorrer dls
const forEachDl = (dl) => {
  // console.log("dl : ", dl)

  // get dls
  const as = Array.from(dl.querySelector("dt").querySelectorAll("a").values())
  // eslint-disable-next-line no-unused-vars
  const a = dl.querySelector("a")
  // console.log("as : ", as)
  // console.log("a : ", a)

  texts.push(getText(as))

  //
}

// translation Function

const zusamenFunction = (translationUsedInFor) => {
  // console.log("translationUsedInFor : ", translationUsedInFor)

  // get dls
  const dls = Array.from(translationUsedInFor.querySelectorAll("dl").values())
  // eslint-disable-next-line no-unused-vars
  const dlOne = translationUsedInFor.querySelector("dl")

  // console.log("dls : ", dls)
  // console.log("dlOne : ", dlOne)

  // recorrer los dls

  dls.forEach(forEachDl)

  // forEachDl(dlOne)
  //
}

zusamen.forEach(zusamenFunction)

// translationFunction(translation)

// console.log("translation : ", translation)

// console.log("text : ", text)

// navigator.clipboard.writeText(async () => text)

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

const copy = async () => {
  const textsInternal = await texts
  const unique_array = [...new Set(textsInternal)]
  const textUnique = unique_array.join("\n\n")

  // console.log("textsInternal : ", textsInternal)
  // console.log("unique_array : ", unique_array)

  copyToClipboard(textUnique)

  console.clear()
  console.log(" copied !")
}

copy()
