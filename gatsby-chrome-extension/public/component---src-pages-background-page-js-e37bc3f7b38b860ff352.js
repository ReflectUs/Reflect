(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2du7":function(e,t,n){n("pIFo");var o,a,i,s=[],r="";function c(e,t,n){this.website=this.getWebsiteFromUrl(e),this.tabID=t,this.oTime=n,this.totalTime=0}function u(){console.log("/////////////////////"),console.log(""),console.log("/////////////////////");for(var e=0;e<s.length;e++)s[e].print()}function d(e){chrome.tabs.query({active:!0,lastFocusedWindow:!0},(function(t){for(var n=new c(t[0].url,e,new Date),o=!1,a=0;a<s.length;a++)s[a].isActive()&&s[a].clearID(new Date),s[a].equals(n)&&(s[a].setID(e,new Date),o=!0);o||s.push(n),u()}))}c.prototype.getWebsiteFromUrl=function(e){var t=e.indexOf("www."),n=4;-1==t&&(t=e.indexOf("://"),n=3);var o=e.indexOf(".",t+n),a="";return-1!=t&&-1!=o&&(a=e.substring(t+n,o)),a},c.prototype.isID=function(e){return this.tabIDs==e},c.prototype.setID=function(e,t){e&&(this.tabID=e,this.oTime=t)},c.prototype.isWebsite=function(e){return this.website==this.getWebsiteFromUrl(e)},c.prototype.clearID=function(e){this.totalTime+=Math.round((e-this.oTime)/1e3),this.oTime=-1,this.tabID=-1,""!=this.website&&function(e,t,n){firebase.database().ref("chrome/"+e+"/websiteTime/"+t).set({time:n})}(o,this.website,this.totalTime)},c.prototype.equals=function(e){return this.website==e.website},c.prototype.print=function(){console.log(this.website+" ||\t"+this.tabID+" |\t"+this.totalTime)},c.prototype.isActive=function(){return-1!=this.tabID},chrome.runtime.onInstalled.addListener((function(){chrome.contextMenus.create({id:"sampleContextMenu",title:"Sample Context Menu",contexts:["selection"]})})),chrome.tabs.onActivated.addListener((function(e){d(e.tabId)})),chrome.tabs.onRemoved.addListener((function(e,t){for(var n=0;n<s.length;n++)s[n].isID(e)&&s[n].clearID(new Date);u()})),chrome.tabs.onCreated.addListener((function(e){for(var t=new c(e.url,e.id,new Date),n=!1,o=0;o<s.length;o++)s[o].equals(t)&&(s[o].setID(e.id,new Date),n=!0);n||s.push(t),u()})),chrome.tabs.onUpdated.addListener((function(e,t,n){d(n.id)}));firebase.initializeApp({apiKey:"AIzaSyAXLZRCJb7YTB-l6yqJAGZGOaIn9zSDPJQ",databaseURL:"https://reflect-me-mhacks.firebaseio.com",storageBucket:"reflect-me-mhacks.appspot.com"});firebase.database();function l(){firebase.auth().onAuthStateChanged((function(e){console.log("User state change detected from the Background script of the Chrome Extension:",e),i=e.displayName,r=e.email,a=e.photoURL,o=e.uid,created_at=e.metadata.creationTime,function(e,t,n,o,a){var i=t.replace(/ .*/,"");i=i.toLowerCase()+Math.floor(9e4*Math.random()),firebase.database().ref("users/"+e).once("value",(function(s){null!==s.val()?firebase.database().ref("users/"+e).update({photoURL:o}):firebase.database().ref("users/"+e).set({created_at:a,email_address:n,id:i,username:t,photoURL:o})}))}(o,i,r,a,created_at)}))}window.onload=function(){l()}},k34F:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),i=(n("Wbzz"),n("Bl7J"));n("tBDR"),n("vrFN"),n("2du7");t.default=function(){return a.a.createElement(i.a,null,a.a.createElement("script",{href:"./background4.js"}))}}}]);
//# sourceMappingURL=component---src-pages-background-page-js-e37bc3f7b38b860ff352.js.map