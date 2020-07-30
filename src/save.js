
//import { saveAs } from 'file-saver';
import React, { Component } from 'react'
import { saveSvgAsPng } from 'save-svg-as-png';


export default class save extends Component {
    handleClick() {
      
        //var svgData = document.getElementById("svg").innerHTML
       // var blob = new Blob([svgData], {type: "image/svg+xml"});
        //saveAs(blob, "icon");

        saveSvgAsPng(document.getElementById("svg"), "svg.png");     

    }
    render() {
        return <button onClick={() => this.handleClick()}>Download</button>;
    }
}