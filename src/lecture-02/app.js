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