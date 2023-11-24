'use strict'

import { Shape } from "./shape.js";

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function selectObject(selector, parent = document) {
    return parent.querySelector(selector);  
}

const createShapesBtn = selectObject('.create-shape-btn');
const colourBox = selectObject('.colour-box');
const shapesBox = selectObject('.shapes-box');
const shapesSectionBox = selectObject('.shapes-created-box');
const infoMessage = selectObject('.info-message');
let shapesArray = [];
function getShapeInfo(shapeObj) {
    let message = `${shapeObj.getInfo()} , Storage position: ${shapesArray.indexOf(shapeObj)+1}`
    infoMessage.textContent= message; 
}

function createShape(){
    if(colourBox.value != 'not-selected' && shapesBox.value != 'not-seleted'){
        if(shapesArray.length<20){
            const shapeDiv = document.createElement('div');
            shapeDiv.classList.add(colourBox.value);
            shapeDiv.classList.add(shapesBox.value);
            shapesSectionBox.appendChild(shapeDiv);
            let shapeObj = createShapeOBjt(colourBox.value,shapesBox.value);
            shapeDiv.onclick = function(){getShapeInfo(shapeObj)};
            shapesArray.push(shapeObj);
        }else{
            let message = "Message: Storage full"
            console.log(shapesArray);
            infoMessage.textContent = message
        }
    }
}

function createShapeOBjt(colour,name){
    const shapeObj = new Shape(name,colour);
    return shapeObj;
}

onEvent('click',createShapesBtn,createShape);
