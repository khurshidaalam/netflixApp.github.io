import React from "react";
import sdata from "./Sdata";
import Card from "./Card";

const Amazon =()=>{
    return(
        <Card 
        key={sdata[4].id}
        imgsrc={sdata[4].imgsrc} 
        sname={sdata[4].sname} 
        title={sdata[4].title} 
        link={sdata[4].link} 
    />
    )
}

export default Amazon;