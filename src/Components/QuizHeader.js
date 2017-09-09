import React, { Component } from 'react';
//always import react foreach component.

export default class QuizHeader extends Component{
    constructor(){
        super();
    }
    render(){
        return (

            //this is for the header. it's all the items 
            <div>
                <span> Header text</span>
                <span> A</span>
                <span> B</span>
                <span> C</span>
            </div>
        );

    }
}

