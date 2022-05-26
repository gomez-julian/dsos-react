import React from "react";
import "../bootstrap.min.css";

function Store(props){
    const {referenceID, monto, card} = props
    return (<div className="card m-3 p-2">
        <h1>{ referenceID }</h1>
        <h2>{ monto }</h2>
        <h3>{ card }</h3>
        </div>)
}

export {Store}