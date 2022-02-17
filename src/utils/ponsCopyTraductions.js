const translationsNodeList = document.querySelectorAll(".translations")
const translations = Array.from(translationsNodeList.values())
// eslint-disable-next-line no-unused-vars
const translation = translations.slice(0, 1)[0]

let text = ""

// recorrer los a elements

const forEachA = (a, index, array) => {
  // console.log("a : ", a)
  // console.log("index : ", index)
  // console.log("array : ", array)
  // console.log("array.length : ", array.length
  text += ` ${a.text}`
  if (index + 1 === array.length) text += `.\n`
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

  as.forEach(forEachA)

  text += `\n`

  //
}

// translation Function

const translationFunction = (translationUsedInFor) => {
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

translations.forEach(translationFunction)

// translationFunction(translation)

// console.log("translation : ", translation)

// console.log("text : ", text)

// navigator.clipboard.writeText(async () => text)

//

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
  const textInternal = await text
  copyToClipboard(textInternal)

  console.clear()
  console.log(" copied !")
}

copy()
