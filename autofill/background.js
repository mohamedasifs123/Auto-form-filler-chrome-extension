chrome.runtime.onInstalled.addListener(async()=>{
  var url = chrome.runtime.getURL('index/index.html');
  var tab = await chrome.tabs.create({url});
  console.log('created tab $(tab.id)');
  

})