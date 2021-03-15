import React from "react";
import sdata from "./Sdata";
import Card from "./Card";

const Netflix =()=>{
    return(
       <>
        <Card 
        key={sdata[0].id}
        imgsrc={sdata[0].imgsrc} 
        sname={sdata[0].sname} 
        title={sdata[0].title} 
        link={sdata[0].link} 
    />
    <Card 
        key={sdata[1].id}
        imgsrc={sdata[1].imgsrc} 
        sname={sdata[1].sname} 
        title={sdata[1].title} 
        link={sdata[1].link} 
    />
    <Card 
        key={sdata[2].id}
        imgsrc={sdata[2].imgsrc} 
        sname={sdata[2].sname} 
        title={sdata[2].title} 
        link={sdata[2].link} 
    />
    <Card 
        key={sdata[3].id}
        imgsrc={sdata[3].imgsrc} 
        sname={sdata[3].sname} 
        title={sdata[3].title} 
        link={sdata[3].link} 
    />
    </>
    )
    
}

export default Netflix;