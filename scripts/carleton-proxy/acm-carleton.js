// ==UserScript==
// @name        Carleton ACM Redirect
// @version     0.1
// @description This redirects an ACM DL page to the Carleton Proxy
// @author      William Findlay
// @copyright   2020, William Findlay
// @match       https://dl.acm.org/doi/*
// @run-at      document-start
// ==/UserScript==

redirect("https://dl.acm.org/doi/");

function redirect(page){
    if(window.location.href.indexOf(page) != -1){
        window.location.href = window.location.href.replace("https://dl.acm.org/", "https://dl-acm-org.proxy.library.carleton.ca/");
    }
}
