import React, { Component } from 'react';
//always import react foreach component.

export default class Question extends Component{
    constructor(){
        super();
    }
    render(){
        return (

            //one only one top level element and then add your other html inside.
            //here i used div as my main element, evertyhing will be inside of it.
            // divs by default are invisble and are just used to represent a rectangular area.
            //span is an inline element so the check boxes will be on the same line.
            <div> 
             
                <span> Question text</span>
                <input type="checkbox" name="A"/>
                <input type="checkbox" name="B"/>
                <input type="checkbox" name="C"/>

            </div>
        );

    }
}

