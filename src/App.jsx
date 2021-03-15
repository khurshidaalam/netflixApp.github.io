import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favsrs = "Netflix";

//const Favsires =()=>{
//
//  if(favsrs === "Netflix"){
//    return(<Netflix />)
//  }
//  else{
//    return(<Amazon />)
//  }
//}


const App  =() =>(
    <>
    {/*<Favsires/>*/}
    {(favsrs === "Netflix") ? <Netflix /> : <Amazon />}
</>
)

export default App;




//{sdata.map((val,index)=> {
//  console.log(index);
//return(
//  <Card 
//  key={val.id}
//  imgsrc={val.imgsrc} 
//  sname={val.sname} 
//  title={val.title} 
//  link={val.link} 
// />
//  
//}
//) }