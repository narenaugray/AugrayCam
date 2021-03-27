import {loadingWrapper} from './inc/templates.js';

class AugrayCam {
    constructor() {
        this.logText = "Error 1";
    }

    printLogs() {
        console.log(this.logText);
    }

    loadApp() {
        var xrLoader = document.createElement('DIV');
        xrLoader.innerHTML = loadingWrapper;
        document.body.appendChild( xrLoader );
    }

    loadCSS() {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "https://arlive.us/augrayCam/src/js/augrayCam/inc/augrayCam.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    }
}

export {AugrayCam}

