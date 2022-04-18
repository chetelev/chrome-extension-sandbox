chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, currentTabInfo => {
        if (/^https:\/\/www\.google/.test(currentTabInfo.url)) {
            chrome.tabs.insertCSS(null, {file: './main.css'})
            chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log('injected'))
        }
    })
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request)
    console.log(sender)
    console.log(sendResponse)
})