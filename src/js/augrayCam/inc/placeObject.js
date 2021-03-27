import {AugrayCam} from '../augrayCam.js';

class placeObject extends AugrayCam {
    constructor(obj) {
        super();
        this.objectContent = obj;
    }

    addObject() {
        console.log( this.objectContent );
    }
}

var plObject = new placeObject("Object");
plObject.addObject();
plObject.loadCSS();
plObject.loadApp();
