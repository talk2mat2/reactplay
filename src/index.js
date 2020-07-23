import React from "react";
import ReactDom from "react-dom";
import TextApp from './app';
// const time = new Date()

// const element= <h1>the time is {time.toLocaleString()} </h1>
const element= <div>
    <TextApp />
</div>
ReactDom.render(element,document.getElementById('root'))