import React from "react";

function SavedCard (props){
  return (
    <div className="container">
    <h2>{props.title}</h2>
    <p> {props.author} </p>
    <p> {props.synopsis} </p>
    <img src={props.image} alt="" />
    <a href={props.link} target="_blank" > <button type="button"> view</button> </a>
    {/* pass onlick prop,  that will activate deletebook function */}
    <button type="button" onClick={props.onClick}
    > Delete </button>
  </div>
  )
}
export default SavedCard;