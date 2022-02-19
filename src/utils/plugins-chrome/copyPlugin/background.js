/* eslint-disable no-undef */
// let color = "#3aa757"

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color })
//   console.log("Default background color set to %cgreen", `color: ${color}`)
// })

// background.js
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["copy.js"],
  })
})
