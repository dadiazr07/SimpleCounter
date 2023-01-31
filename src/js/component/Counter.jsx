import React from "react";


export const Counter = (props) => {
    console.log(props.seconds)
    return (
    
            <div className="counter bg-dark m-1 rounded-5">
                {props.seconds < 10 ? props.seconds : '0'}
            </div>


    )
}