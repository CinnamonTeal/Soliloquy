// this is where the main logic for our app should go

chrome.extension.sendMessage({action: "prefs"}, function(response) {
  if (response !== undefined && response !== null) {
    prefs = response;
    prefs.colNum = parseInt(prefs.colNum); // not sure what colNum is, might want to send a different message for the setting we want since changing number of columns on a page wont be one of our settings
  }
})