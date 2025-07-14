import React from "react";
import ReactDOM from  "react-dom/client";

// const heading =  React.createElement("h1" , {id:"heading"} , "Hello React") // this is a old way to create the react elemnent which is not developer
// freindly and readable 

// ***************** Using jsx *******************
const headingJSX =  <h1>Hello react using JSX</h1>

// const root = ReactDOM.createRoot(document.getElementById("root")) // the root written in getElementById is html element of index.html

// root.render(headingJSX);

// IMP Points
//  1 JSX is not regular js so js engine cannot understand or execute it 
//  2 JSX is HTML or XML like syntax of JS and not a html inside the JS
//  3 to convert JSX into normal JS babel is used 

// <h1>JSX synstax </h1> ==> React.createElement ==> js object ==> html element (when rendered)
// this is how JSX is converted in html element

//  *******************  REACT COMPONENTS *************************

// functional react components (name always start with capital letter(or error is thrown))
//   function that returns react element or JSX code is called as react element

const Component1 = ()=>{
    return(
     <h1>React Componets returns react element...</h1>
)};
const Component2 =()=>{
    return(
    <div>
        <Component1/> 
        <h2> or JSX code "this is 2nd heading"</h2>
    </div>
    
)}
// this is syntax that how can we use another React componenet 


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(Component2()) 


// using javascript inside jsx

const string1="this is string inside the normal js variable"

const ComponentDemo =  ()=>(
    <div>
    <h1> this is heading in jsx</h1>
    <h2> { string1 } </h2>
    </div>
);