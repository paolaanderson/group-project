import React, { Component } from 'react';
//over here import all your components
//use "./ to access them" ---- or it will thinks it's a module

import QuizHeader from "./QuizHeader.js";
import Question from "./Question.js";

export default class Quiz extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            //html goes inside the return


         //render can only return one element, so all content should be wrapped in a parent element. 
         //In this case I did one div to contain all my components.  
            <div> 
                <QuizHeader/>
                <Question/>
                <Question/>
                <Question/>
            </div>
        );

    }
}

