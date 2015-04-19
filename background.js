// event listener waits to receive a message from "prefs" action, when user changes settings, to make sure
// the settings are what the user specified as the script.js is loaded and initialized.
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === "prefs") {
      var prefsString = localstorage.prefs; // using localstorage, but may want chrome storage instead
      if (prefsString === undefined) {
        sendResponse(undefined);
      } else {
        sendResponse(JSON.parse(localStorage.prefs));
      }
    }
  });

function click(e) {
  // queries the current tab
  chrome.tabs.query({CurrentWindow:true, active:true}, function(tabs) {
    // debug output
    console.log("background.js : click()");
    var specTab = tabs[0];
    // the three lines below are what we want to manipulate
    chrome.tabs.insertCSS(specTab.id, {file:"styles.css"}); // may not need to inject CSS
    chrome.tabs.executeScript(specTab.id, {file:"spinner.js"}); // spinning graphic during loading
    chrome.tabs.executeScript(specTab.id {file:"script.js"}); // this file does not exist

  });
}

chrome.browserAction.onClicked.addListener(click);