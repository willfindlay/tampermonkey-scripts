// ==UserScript==
// @name        Carleton ACM Redirect
// @version     0.1
// @description This redirects an ACM DL page to the Carleton Proxy
// @match       https://dl.acm.org/doi/*
// @copyright   2020, William Findlay
// @run-at      document-start
// ==/UserScript==

reToPage("https://dl.acm.org/doi/");

function reToPage(currentpage){
    if(window.location.href.indexOf(currentpage) != -1){
        window.location.href = window.location.href.replace("https://dl.acm.org/", "https://dl-acm-org.proxy.library.carleton.ca/");
    }
}
