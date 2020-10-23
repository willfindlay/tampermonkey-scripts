// ==UserScript==
// @name        Carleton IEEE Redirect
// @version     0.1
// @description This redirects an IEEE Xplore page to the Carleton Proxy
// @match       https://ieeexplore.ieee.org/abstract/document/*
// @match       https://ieeexplore.ieee.org/document/*
// @copyright   2020, William Findlay
// @run-at      document-start
// ==/UserScript==

reToPage("https://ieeexplore.ieee.org/document/");
reToPage("https://ieeexplore.ieee.org/abstract/document/");

function reToPage(currentpage){
    if(window.location.href.indexOf(currentpage) != -1){
        window.location.href = window.location.href.replace("https://ieeexplore.ieee.org/", "https://ieeexplore-ieee-org.proxy.library.carleton.ca/");
    }
}
