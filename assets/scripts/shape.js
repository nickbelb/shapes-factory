'use strict'

export class Shape{
    _name;
    _colour;
    constructor(name,_colour){
        this._name = name;
        this._colour = _colour;
    }
    getName(){
        return this._name;
    }

    getColour(){
        return this._colour;
    }

    getInfo() {
       return `Shape: ${this.getName()} , Colour:${this.getColour()}`;
    }
}
