// WebsiteItem 

var websites = [];
var email = "";
var userID;
var displayName;
var photoURL;
var name;
var websiteItemStore;

WebsiteItem.prototype.getWebsiteFromUrl = (url) => {
  if(url.includes("chrome-extension://") || url.includes("://newtab")) {
    console.log("chrome-extension");
    return "chrome-extension";
  }
  var posStart = url.indexOf("www.");
  var offSetStart = 4;
  if(posStart == -1) {
    posStart = url.indexOf("://");
    offSetStart = 3;
  }
  var posEnd = url.indexOf("/", posStart + offSetStart);
  var website = "";
  if(posStart != -1 && posEnd != -1) {
    website = url.substring(posStart+offSetStart, posEnd);
  } else {
    return url;
  }
  return website;
};

function WebsiteItem(url, tabID, oTime) {
    this.website = this.getWebsiteFromUrl(url);
    this.tabID = tabID;
    this.oTime = oTime;
    this.totalTime = 0;
}

WebsiteItem.prototype.isID = function(tabID) {
  if(this.tabIDs == tabID) {
    return true;
  }
  return false;
};

WebsiteItem.prototype.setID = function(tabID, time) {
  if(!tabID) {
    return;
  } else {
    this.tabID = tabID;
    this.oTime = time;
  }
};

WebsiteItem.prototype.isWebsite = function(url) {
  if(this.website == this.getWebsiteFromUrl(url)) {
    return true;
  } else {
    return false;
  }
};

WebsiteItem.prototype.clearID = function(currTime) {
  if(this.oTime != -1) {
    this.totalTime = Math.round((currTime - this.oTime)/1000.0);
    this.oTime = -1;
    this.tabID = -1;
    if(this.website != "") {
      writeWebsiteData(userID, this.website, this.totalTime);
    }
  }
};

WebsiteItem.prototype.equals = function(websiteItemOther) {
  if (this.website == websiteItemOther.website) {
    return true;
  }
  return false;
};

WebsiteItem.prototype.print = function() {
  console.log(this.website + " ||\t" + this.tabID + " |\t" + this.totalTime);
};

WebsiteItem.prototype.isActive = function() {
  return this.tabID != -1;
};

WebsiteItem.prototype.getID = function() {
  return this.id;
}

function storeWebsiteItem(websiteItem) {
  console.log(websiteItem.website);
  websiteItemStore = new WebsiteItem(websiteItem.website, websiteItem.tabID, -1);
  console.log("Before clearing:");
  websiteItemStore.print();
}

function getStoredWebsiteItem() {
  if(websiteItemStore) {
    temp = websiteItemStore;
    websiteItemStore = null;
    return temp;
  } else {
    console.log("Error Stored Website item not there");
  }
}



// Chrome Event Listeners

// CHECK FOR THIS befre you push!!!
// localStorage.setItem('signedIn', true);

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
});


function printWebsites() {
  console.log("////////////");
  console.log("");
  for(var i = 0; i < websites.length; i++) {
    websites[i].print();
  }
}

function updateWebsiteItem(newTabID) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    var temp = new WebsiteItem(url, newTabID, new Date());
    var alreadyExists = false;
    for(var i = 0; i < websites.length; i++) {
      if(websites[i].isActive()) {
        websites[i].clearID(new Date()); // old tabID = -1, old oTime = -1, old totalTime += time
      }
      if(websites[i].equals(temp)) {
        websites[i].setID(newTabID, new Date()); // oTime = currTime, tabID = currTabID
        alreadyExists = true;
      }
    }
    if(!alreadyExists) {
      websites.push(temp);
    }
    printWebsites();
  });
}


chrome.tabs.onActivated.addListener(function(tabDetails) {
  // tabDetails is an object
  updateWebsiteItem(tabDetails.tabId);
});

chrome.tabs.onRemoved.addListener(function(tabID, removeInfo) {
  for(var i = 0; i < websites.length; i++) {
    if(websites[i].isID(tabID)) {
      websites[i].clearID(new Date()); // old tabID = -1, old oTime = -1, old totalTime += time
    }
  }
  printWebsites();

});

chrome.tabs.onCreated.addListener(function(tab) {
  var temp = new WebsiteItem(tab.url, tab.id, new Date());
  var alreadyExists = false;
  for(var i = 0; i < websites.length; i++) {
    if(websites[i].equals(temp)) {
      websites[i].setID(tab.id, new Date());
      alreadyExists = true;
    }
  }
  if(!alreadyExists) {
    websites.push(temp);
  }
  printWebsites();
});

chrome.tabs.onUpdated.addListener(function(tabID, changeInfo, tab) {
  updateWebsiteItem(tab.id);
});

// chrome.idle.setDetectionInterval(15); // uncomment for testing, 15 is least value


// TODO: Fix stored Website Item
// chrome.idle.onStateChanged.addListener(function(newState) {
//   var idle = false;
//   var active = false;
//   var locked = false;
//   if(newState == "idle") {
//     console.log("idle " + new Date());
//     idle = true;
//   } else if(newState == "active") {
//     console.log("active " + new Date());
//     active = true;
//   } else if(newState == "locked") {
//     console.log("locked " + new Date());
//     locked = true;
//   } 
//   if(locked || idle) {
//     for(var i = 0; i < websites.length; i++) {
//       if(websites[i].isActive()) {
//           storeWebsiteItem(websites[i]);
//           websites[i].clearID(new Date());
//           console.log("After clearing:");
//           websiteItemStore.print();
//           printWebsites();
//       } 
//     }
//   } else if(active) { 
//     tempWebsiteItem = getStoredWebsiteItem();
//     tempWebsiteItem.print();
//     for(var i = 0; i < websites.length; i++) {
//       if(tempWebsiteItem.equals(websites[i])) {
//           websites[i].setID(tempWebsiteItem.getID(), new Date());
//           printWebsites();
//       } 
//     }
//   }
// });


// FirebaseDB Functions

var config = {
  apiKey: 'AIzaSyAXLZRCJb7YTB-l6yqJAGZGOaIn9zSDPJQ',
  databaseURL: 'https://reflect-me-mhacks.firebaseio.com',
  storageBucket: 'reflect-me-mhacks.appspot.com'
};
firebase.initializeApp(config);
var db = firebase.database();

// get first day of the current week!
function getMonday() {
  let d = new Date();
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); 
  d.setDate(diff);
  return new Date(d.setHours(0,0,0));
}


function writeWebsiteData(userID, website, time) {
  let date = getMonday().toLocaleString().split(',')[0].replace(new RegExp('/','gi'), "-");
  let websiteRef = website.replace(new RegExp("[.]","gi"), "-");
  var loggedIn = localStorage.getItem('uid');
  var timeRef = firebase.database().ref('topSites/' + loggedIn + "/" + date + "/" + websiteRef);
  let now = new Date().toLocaleString();
  console.log("Writing website Data");

  timeRef.once("value", function(snapshot) {
      let exists = snapshot.val() != null;
      console.log(exists);
      console.log(loggedIn);
      if(exists && (loggedIn)) { // && userID
        let websiteTime = snapshot.val().time;
        timeRef.set({
          website: website,
          time: websiteTime+time, 
          lastUpdated: now
       });
    } else if(loggedIn) { // && userID
      console.log("We made it");
      timeRef.set({
        website: website,
        time: time, 
        lastUpdated: now
     });
    }
  });
}

function createUser(userID, name, email, photoURL, created_at) {
  let id = name.replace(/ .*/, "");
  id = id.toLowerCase() + Math.floor(Math.random() * 90000);
  firebase.database()
    .ref("users/" + userID)
    .once("value", function(snapshot) {
      var exists = snapshot.val() !== null;
      if(exists) {
        firebase.database().ref('users/' + userID).update({
          photoURL: photoURL
        });
      } else {
        firebase.database().ref('users/' + userID).set({
          created_at: created_at,
          email_address: email,
          id: id,
          username: name,
          photoURL: photoURL
        });
      }
    });
}

function initApp() {
  // Listen for auth state changes.
  firebase.auth().onAuthStateChanged(function(user) {
    console.log('User state change detected from the Background script of the Chrome Extension:', user);
    name = user.displayName;
    email = user.email;
    photoURL = user.photoURL;
    userID = user.uid;
    created_at = user.metadata.creationTime;
    createUser(userID, name, email, photoURL, created_at);
  });
}

window.onload = function() {
  initApp();
};
