//Add page to Wayback machine v 1.0

chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    code: "location.href='http://web.archive.org/save/'+location.href"
  });
});