// Maaaake paaaages about COVID bee aaabbouutt zombiiiiiiees


// Copyriiiiiiight Raaaaaaeee O'Neeeeeeeeeill Twenteeeee Twenteeeeee

chrome.storage.sync.get('brains19_state', function(data) {
    if (data['brains19_state'] === 'on') {
        chrome.browserAction.setIcon({ path: {"19":'/braaaaaaaaains-19.png',"38":"/braaaaaaaaains-38.png"}});
    }
    else {
        chrome.browserAction.setIcon({ path: {"19":'/noooo_braaaaaaaaains-19.png',"38":"/noooo_braaaaaaaaains-38.png"}});
    }
})

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.storage.sync.get('brains19_state', function(data) {
      if (data['brains19_state'] == 'on') {
        chrome.storage.sync.set({"brains19_state": 'off'});
        chrome.browserAction.setIcon({ path: {"19":'/noooo_braaaaaaaaains-19.png',"38":"/noooo_braaaaaaaaains-38.png"}});
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "BRAAAAAAAAINS"});
          });
      } else {
        chrome.storage.sync.set({"brains19_state": 'on'});
        chrome.browserAction.setIcon({ path: {"19":'/braaaaaaaaains-19.png',"38":"/braaaaaaaaains-38.png"}});
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "BRAAAAAAAAINS"});
          });
      }
    });
  });

