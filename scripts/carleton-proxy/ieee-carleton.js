// ==UserScript==
// @name        Carleton IEEE Redirect
// @version     0.1
// @description This redirects an IEEE Xplore page to the Carleton Proxy
// @author      William Findlay
// @copyright   2020, William Findlay
// @match       https://ieeexplore.ieee.org/abstract/document/*
// @match       https://ieeexplore.ieee.org/document/*
// @run-at      document-start
// ==/UserScript==

redirect("https://ieeexplore.ieee.org/document/");
redirect("https://ieeexplore.ieee.org/abstract/document/");

function redirect(page){
    if(window.location.href.indexOf(page) != -1){
        window.location.href = window.location.href.replace("https://ieeexplore.ieee.org/", "https://ieeexplore-ieee-org.proxy.library.carleton.ca/");
    }
}
