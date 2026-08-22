import React from "react";

function Cards(props){
    return(
        <div>
            <p>User Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Role: {props.role}</p>
            <br />
        </div>
    )
}

export default Cards;