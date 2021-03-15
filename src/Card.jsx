import React from "react";
import "./index.css";

function Card(props){
    return(
    <>
    
        <div className="card">
          <img className="card-img" src={props.imgsrc} alt="Card image cap"  />
          <div className="card-body">
            <p className="card-text">{props.sname} </p>
            <p className="card-text">{props.title} </p>
            <a className="button" href={props.link} target="blank">
            <button>Watch now</button>
            </a>
          </div>
        </div>
    </>
        
    );
}

export default Card;



//calculator part comment out
//<ul>
//            <li>the addition of two number is {add(2,2)} </li>
//            <li>the subtraction of two number is {sub(2,2)} </li>
//            <li>the multiplication of two number is {mult(2,2)} </li>
//            <li>the division of two number is {div(2,2)} </li>
//</ul>