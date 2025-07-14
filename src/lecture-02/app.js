import React from "react";
import ReactDOM from  "react-dom/client";

const Parent = React.createElement("div",{id : "parent"},[
                React.createElement("div",{id : "child1" },[
                    React.createElement("h1",{},"I am H1 Tag"),
                    React.createElement("h2",{},"I am H2 Tag")
                ]),
                React.createElement("div",{id :"child2"},[
                    React.createElement("h1",{},"I am H1 Tag"),
                    React.createElement("h2",{},"I am H2 Tag")
                ])
            ])

// console.log(Parent);

const root = ReactDOM.createRoot(document.getElementById("root"));// this element is present in index.html
root.render(Parent)
// here the oringinal element div(of id root) has "Not rendered" text in it but it will be removed form that element 
// as soon as we do render of react element in html element the (original contents of that html element will be removed)
// and then content inside the react element is added into html elements