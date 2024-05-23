chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: "http://meet.google.com/new" });
});
