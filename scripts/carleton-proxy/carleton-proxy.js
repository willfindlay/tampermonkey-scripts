// ==UserScript==
// @name        Carleton Proxy Redirect
// @version     0.1
// @description This redirects a Conference/Journal page to the Carleton Proxy
// @author      William Findlay
// @copyright   2020, William Findlay
// @match       https://ieeexplore.ieee.org/abstract/document/*
// @match       https://ieeexplore.ieee.org/document/*
// @match       https://dl.acm.org/doi/*
// @match       https://www.tandfonline.com/*
// @match       https://www.sciencedirect.com/*
// @run-at      document-start
// ==/UserScript==

// Conferences
redirect("https://ieeexplore.ieee.org/", "https://ieeexplore-ieee-org.proxy.library.carleton.ca/")
redirect("https://dl.acm.org/", "https://dl-acm-org.proxy.library.carleton.ca/")

// Journals
redirect("https://www.tandfonline.com/", "https://www-tandfonline-com.proxy.library.carleton.ca/")
redirect("https://www.sciencedirect.com/", "https://www-sciencedirect-com.proxy.library.carleton.ca/")

function redirect(from, to) {
    if(window.location.href.indexOf(from) != -1) {
        window.location.href = window.location.href.replace(from, to);
    }
}
