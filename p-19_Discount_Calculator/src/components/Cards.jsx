import React from "react";
import { useState } from "react";

function Cards(props){
    const total=props.price-(props.price*props.discount)/100;

    return(
        <div>
            <h1>Discount Calculator</h1>

            <p>Price: ₹{props.price}</p>
            <p>Discount: {props.discount}%</p>
            <b><p>Final Price: ₹{total}</p></b>
        </div>
    )
}

export default Cards;