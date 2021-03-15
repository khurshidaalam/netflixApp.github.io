import React from "react";
import ReactDOM from "react-dom";
import App from "./App";




ReactDOM.render(<App/>,
    document.getElementById("root")
);


//also can write it like these without curly braces and return
//..................v......v...
//{sdata.map((val,index)=> {
//{sdata.map((val)=>
//      <App 
//    imgsrc={val.imgsrc} 
//    sname={val.sname} 
//    title={val.title} 
//    link={val.link} 
//    />
//)
//}